'use client'

import { FullscreenButton } from '@/components/core/preview/preview-actions'
import { PresetPanel } from '@/components/core/preview/preset-panel'
import { PreviewTabs } from '@/components/core/preview/preview-tabs'
import { PromptPanel } from '@/components/core/preview/prompt-panel'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import type { PresetConfig } from '@/lib/presets/presets-config'
import type { RegistryCodeFile } from '@/lib/registry-source'

interface BlockViewTabsProps {
  src: string
  registryName: string
  codeFiles: RegistryCodeFile[]
  prompt: string
  preset: PresetConfig
  presetCss: string
  iframeHeight?: number
  className?: string
}

/**
 * Block-domain assembly of the generic PreviewTabs: CLI install + refresh +
 * fullscreen. Lives client-side so the compound (PreviewTabs.*) resolves
 * within the client boundary; BlockView (RSC) feeds it resolved data.
 */
export function BlockViewTabs({
  src,
  registryName,
  codeFiles,
  prompt,
  preset,
  presetCss,
  iframeHeight,
  className,
}: Readonly<BlockViewTabsProps>) {
  return (
    <PreviewTabs className={className}>
      <PreviewTabs.Bar>
        <PreviewTabs.TabsList>
          <PreviewTabs.Trigger value="preview">Preview</PreviewTabs.Trigger>
          <PreviewTabs.Trigger value="code" disabled={!codeFiles.length}>
            Code
          </PreviewTabs.Trigger>
          <PreviewTabs.Trigger value="preset">Preset</PreviewTabs.Trigger>
          <PreviewTabs.Trigger value="prompt" disabled={!prompt}>
            Prompt
          </PreviewTabs.Trigger>
        </PreviewTabs.TabsList>
        <PreviewTabs.Actions>
          <RegistryCli
            registryName={registryName}
            className="w-fit max-w-none"
            labelClassName="hidden"
          />
          <PreviewTabs.RefreshButton />
          <FullscreenButton href={src} />
        </PreviewTabs.Actions>
      </PreviewTabs.Bar>
      <PreviewTabs.Preview
        src={src}
        height={iframeHeight}
        title="Block preview"
      />
      <PreviewTabs.Code files={codeFiles} />
      <PreviewTabs.Panel value="preset">
        <PresetPanel preset={preset} css={presetCss} />
      </PreviewTabs.Panel>
      <PreviewTabs.Panel value="prompt">
        <PromptPanel prompt={prompt} />
      </PreviewTabs.Panel>
    </PreviewTabs>
  )
}
