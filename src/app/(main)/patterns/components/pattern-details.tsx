'use client'

import { useState } from 'react'
import { CodeIcon } from 'lucide-react'
import type { RegistryItem } from 'shadcn/schema'

import { useQuery } from '@tanstack/react-query'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CodeBlockCommand } from '@/components/core/code/code-block-command'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { siteConfig } from '@/config/site'

interface PatternDetailsProps {
  item: RegistryItem
}

export function PatternDetails({ item }: PatternDetailsProps) {
  const [openCode, setOpenCode] = useState(false)

  const { data: code, isLoading } = useQuery({
    queryKey: ['pattern-code', item.name],
    queryFn: async () => {
      const res = await fetch(`/r/${item.name}.json`)
      if (!res.ok) return ''
      const data = await res.json()
      return (data.files?.[0]?.content ?? '') as string
    },
    staleTime: Infinity,
    enabled: openCode,
  })

  return (
    <div className="flex items-center gap-0.5">
      <Dialog open={openCode} onOpenChange={setOpenCode}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            aria-label="View code"
            className="bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-none"
          >
            <CodeIcon className="size-3" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[95vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{item.title}</DialogTitle>
          </DialogHeader>
          <div className="flex max-w-full min-w-0 flex-col gap-2">
            <CodeBlockCommand
              command={`shadcn@latest add @${siteConfig.codeName}/${item.name}`}
              className="dark:bg-background/40"
            />
            {isLoading && (
              <div className="bg-muted h-48 animate-pulse rounded-xl" />
            )}
            {!isLoading && code && (
              <CodeBlock className="dark:bg-background/40">
                <CodeBlockCode code={code} language="tsx" withCopy />
              </CodeBlock>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
