'use client'

import { CodeIcon } from 'lucide-react'
import { useState } from 'react'

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
import { siteConfig } from '@/config/site'
import { useActiveFile } from '@/hooks/use-active-file'
import type { DecisionView } from '@/lib/intent-manifest-types'
import { cn } from '@/lib/utils'

export function DecisionActions({ view }: Readonly<{ view: DecisionView }>) {
  const { name, prompt, registryName, codeFiles } = view
  const [openCode, setOpenCode] = useState(false)
  const { activeFile, setActiveName } = useActiveFile(codeFiles)

  return (
    <div className="grid w-full grid-cols-2 gap-2">
      <CopyButton
        text={prompt}
        label="Copy prompt"
        copiedLabel="Copied"
        size="sm"
        className="w-full"
      />
      <Dialog open={openCode} onOpenChange={setOpenCode}>
        <DialogTrigger asChild>
          <Button
            type="button"
            size="sm"
            variant="outline"
            aria-label="View code"
            className="w-full"
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
            {codeFiles.length > 1 ? (
              <div className="flex flex-wrap gap-1.5">
                {codeFiles.map((file) => (
                  <button
                    key={file.name}
                    type="button"
                    onClick={() => setActiveName(file.name)}
                    className={cn(
                      'border-border hover:bg-muted rounded-full border px-2.5 py-0.5 font-mono text-[11px] transition-colors',
                      activeFile?.name === file.name &&
                        'border-foreground/20 bg-muted text-foreground',
                    )}
                  >
                    {file.name}
                  </button>
                ))}
              </div>
            ) : null}
            {activeFile ? (
              <CodeBlock className="dark:bg-background/40">
                <CodeBlockCode
                  code={activeFile.content}
                  language="tsx"
                  withCopy
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
    </div>
  )
}
