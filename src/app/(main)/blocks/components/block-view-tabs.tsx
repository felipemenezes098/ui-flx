'use client'

import {
  EditButton,
  FullscreenButton,
} from '@/components/core/preview/preview-actions'
import { PreviewTabs } from '@/components/core/preview/preview-tabs'
import { PromptPanel } from '@/components/core/preview/prompt-panel'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import type { RegistryCodeFile } from '@/lib/registry-source'

interface BlockViewTabsProps {
  src: string
  editSrc: string
  registryName: string
  codeFiles: RegistryCodeFile[]
  prompt: string
  iframeHeight?: number
  className?: string
}

/**
 * Block-domain assembly of the generic PreviewTabs: CLI install + refresh +
 * fullscreen + edit. Lives client-side so the compound (PreviewTabs.*) resolves
 * within the client boundary; BlockView (RSC) feeds it resolved data.
 */
export function BlockViewTabs({
  src,
  editSrc,
  registryName,
  codeFiles,
  prompt,
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
          <EditButton href={editSrc} />
        </PreviewTabs.Actions>
      </PreviewTabs.Bar>
      <PreviewTabs.Preview src={src} height={iframeHeight} title="Block preview" />
      <PreviewTabs.Code files={codeFiles} />
      <PreviewTabs.Panel value="prompt">
        <PromptPanel prompt={prompt} />
      </PreviewTabs.Panel>
    </PreviewTabs>
  )
}
