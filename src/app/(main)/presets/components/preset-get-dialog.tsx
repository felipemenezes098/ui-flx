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

import type { PresetConfig } from '@/lib/presets/presets-config'
import { CodeBlock } from '@/components/core/code/code-block'
import { RegistryCli } from '@/components/core/registry/registry-cli'

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
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-base font-medium tracking-tight">
            {preset.name}
          </DialogTitle>
          <DialogDescription className="text-xs">
            {preset.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="flex max-w-full min-w-0 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">
              Install with the CLI — appends the scoped tokens to your CSS and
              leaves your own <code>:root</code> untouched.
            </p>
            <RegistryCli registryName={`preset-${preset.id}`} />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">
              Or copy the stylesheet and paste it wherever you like.
            </p>
            <CodeBlock>
              <CodeBlockCode
                code={css}
                language="css"
                withCopy
                showLineNumbers
              />
            </CodeBlock>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
