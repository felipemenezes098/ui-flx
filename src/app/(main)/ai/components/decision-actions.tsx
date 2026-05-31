'use client'

import { Check, CodeIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'

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
import type { IntentCodeFile } from '@/lib/intent-exports'
import { cn } from '@/lib/utils'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

export function DecisionActions({
  name,
  prompt,
  registryName,
  codeFiles = [],
}: Readonly<{
  name: string
  prompt: string
  registryName: string
  codeFiles?: IntentCodeFile[]
}>) {
  const [copied, setCopied] = useState(false)
  const [openCode, setOpenCode] = useState(false)
  const [activeName, setActiveName] = useState(codeFiles[0]?.name ?? null)

  const activeFile =
    codeFiles.find((file) => file.name === activeName) ?? codeFiles[0] ?? null

  async function handleCopyPrompt() {
    await copyToClipboard(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid w-full grid-cols-2 gap-2">
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={handleCopyPrompt}
        className="w-full"
      >
        {copied ? (
          <Check className="size-3.5 text-emerald-500" aria-hidden />
        ) : (
          <CopyIcon className="size-3.5" aria-hidden />
        )}
        {copied ? 'Copied' : 'Copy prompt'}
      </Button>
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
