'use client'

import { CodeIcon } from 'lucide-react'
import { useState } from 'react'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CodeBlockCommand } from '@/components/core/code/code-block-command'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { siteConfig } from '@/config/site'
import { useActiveFile } from '@/app/(main)/ai/hooks/use-active-file'
import type { DecisionView } from '@/lib/intents/intent-manifest-types'
import { cn } from '@/lib/utils'

export function DecisionCodeDialog({
  view,
  className,
}: Readonly<{ view: DecisionView; className?: string }>) {
  const { name, registryName, codeFiles } = view
  const [open, setOpen] = useState(false)
  const { activeFile, setActiveName } = useActiveFile(codeFiles)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="sm"
          variant="outline"
          aria-label="View code"
          className={cn('text-xs', className)}
        >
          <CodeIcon className="size-3.5" aria-hidden />
          Code
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[95vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        <div className="flex max-w-full min-w-0 flex-col gap-2">
          <CodeBlockCommand
            command={`shadcn@latest add @${siteConfig.codeName}/${registryName}`}
            className="dark:bg-background/40"
          />

          {activeFile ? (
            <CodeBlock className="dark:bg-background/40">
              {codeFiles.length > 0 && (
                <div className="mb-1 flex flex-wrap gap-1.5 border-b px-4 py-2.5">
                  {codeFiles.map((file) => (
                    <Badge
                      key={file.name}
                      variant="outline"
                      asChild
                      className={cn(
                        'cursor-pointer font-mono text-[11px] font-normal transition-colors',
                        activeFile?.name === file.name &&
                          'border-foreground/20 bg-muted/30 text-foreground',
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveName(file.name)}
                      >
                        {file.name}
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
              <CodeBlockCode
                code={activeFile.content}
                language="tsx"
                withCopy
                className="lg:max-h-80"
              />
            </CodeBlock>
          ) : (
            <p className="text-muted-foreground text-sm">
              No code in registry for this decision.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
