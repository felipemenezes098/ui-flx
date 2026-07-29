'use client'

import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CopyButton } from '@/components/core/copy-button'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import type { PresetConfig } from '@/lib/presets/presets-config'
import { cn } from '@/lib/utils'

import { previewFallbackHeightClass, previewPanelClass } from './preview-frame'

interface PresetPanelProps {
  preset: PresetConfig
  css: string
  className?: string
}

/**
 * Shows which preset a block ships with and how to install it. Condensed
 * compared to the presets gallery dialog — just enough to identify the
 * preset and grab it. Mirrors CodePanel's chrome for the stylesheet.
 */
export function PresetPanel({
  preset,
  css,
  className,
}: Readonly<PresetPanelProps>) {
  return (
    <div
      className={cn(
        previewPanelClass,
        previewFallbackHeightClass,
        'bg-card flex flex-col',
        className,
      )}
    >
      <div className="no-scrollbar flex min-h-0 flex-1 flex-col overflow-auto">
        <div className="flex flex-col gap-3 border-b px-4 py-4">
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-sm font-medium tracking-tight">
              {preset.name}
            </p>
            <p className="text-muted-foreground text-xs">
              {preset.description}
            </p>
          </div>
          <RegistryCli registryName={`preset-${preset.id}`} className="w-fit" />
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="no-scrollbar min-h-0 flex-1 overflow-auto">
            <CodeBlockCode
              code={css}
              language="css"
              showLineNumbers
              collapsible
              className="max-h-none pr-4 pl-1.5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
