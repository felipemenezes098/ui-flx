'use client'

import { useMemo, useState } from 'react'
import { CodeIcon } from 'lucide-react'
import type { RegistryItem } from 'shadcn/schema'

import { useQuery } from '@tanstack/react-query'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CodeBlockCommand } from '@/components/core/code/code-block-command'
import { CopyButton } from '@/components/core/code/copy-button'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { registryInstallTarget } from '@/lib/registry-command'
import { buildPatternPrompt } from '@/lib/patterns-utils'
import { fetchRegistryCodeFiles } from '@/lib/registry-source'

interface PatternActionsProps {
  item: RegistryItem
  categorySlug: string
}

export function PatternActions({
  item,
  categorySlug,
}: Readonly<PatternActionsProps>) {
  const [openCode, setOpenCode] = useState(false)

  const { data: codeFiles = [], isLoading } = useQuery({
    queryKey: ['registry-code-files', item.name],
    queryFn: () => fetchRegistryCodeFiles(item.name),
    staleTime: Infinity,
  })

  const prompt = useMemo(
    () => buildPatternPrompt(item, categorySlug, codeFiles),
    [item, categorySlug, codeFiles],
  )

  const primaryCode = codeFiles[0]?.content ?? ''

  return (
    <div className="flex items-center gap-2">
      <CopyButton
        text={prompt}
        label="Prompt"
        size="sm"
        disabled={isLoading}
        className="text-muted-foreground hover:text-foreground h-7.5 rounded-full text-xs transition-none"
      />
      <Dialog open={openCode} onOpenChange={setOpenCode}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            aria-label="View code"
            className="text-muted-foreground hover:text-foreground h-7.5 rounded-full text-xs transition-none"
          >
            <CodeIcon className="size-3" />
            Code
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[95vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{item.title}</DialogTitle>
          </DialogHeader>
          <div className="flex max-w-full min-w-0 flex-col gap-2">
            <CodeBlockCommand
              command={registryInstallTarget(item.name)}
              className="dark:bg-background/40"
            />
            {isLoading && (
              <div className="bg-muted h-48 animate-pulse rounded-xl" />
            )}
            {!isLoading && primaryCode && (
              <CodeBlock className="dark:bg-background/40">
                <CodeBlockCode code={primaryCode} language="tsx" withCopy />
              </CodeBlock>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
