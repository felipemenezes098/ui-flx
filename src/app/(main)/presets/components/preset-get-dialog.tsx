'use client'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import type { PresetConfig } from '@/lib/presets/presets-config'

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
      <DialogTrigger render={trigger as React.ReactElement} />
      <DialogContent className="gap-4 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-base font-medium tracking-tight">
            {preset.name}
          </DialogTitle>
          <DialogDescription className="text-xs">
            {preset.tagline}
          </DialogDescription>
        </DialogHeader>

        <RegistryCli registryName={`preset-${preset.id}`} />

        <CodeBlock>
          <CodeBlockCode code={css} language="css" withCopy showLineNumbers />
        </CodeBlock>
      </DialogContent>
    </Dialog>
  )
}
