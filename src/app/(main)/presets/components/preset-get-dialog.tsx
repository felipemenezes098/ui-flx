'use client'

import { CodeBlockCode } from '@/components/core/code/code-block-code'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import type { PresetConfig } from '@/lib/presets-config'
import { CodeBlock } from '@/components/core/code/code-block'

export function PresetGetDialog({
  preset,
  css,
  trigger,
}: Readonly<{
  preset: PresetConfig
  css: string
  trigger: React.ReactNode
}>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-base font-medium tracking-tight">
            {preset.name}
          </DialogTitle>
          <DialogDescription className="text-xs">
            {preset.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="flex max-w-full min-w-0 flex-col gap-2">
          <CodeBlock>
            <CodeBlockCode code={css} language="css" withCopy showLineNumbers />
          </CodeBlock>
        </div>
      </DialogContent>
    </Dialog>
  )
}
