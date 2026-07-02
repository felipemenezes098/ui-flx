'use client'

import { FullscreenButton } from '@/components/core/preview/preview-actions'
import { PreviewTabs } from '@/components/core/preview/preview-tabs'
import { PromptPanel } from '@/components/core/preview/prompt-panel'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import type { RegistryCodeFile } from '@/lib/registry-source'

interface CompositionViewTabsProps {
  src: string
  registryName: string
  codeFiles: RegistryCodeFile[]
  prompt: string
  iframeHeight?: number
  className?: string
}

/**
 * Composition assembly of the generic PreviewTabs. Same viewer as blocks, minus
 * the Edit action (compositions have no editor). The AI prompt is not surfaced
 * yet — see the compositions-viewer-prompt note for the planned addition.
 */
export function CompositionViewTabs({
  src,
  registryName,
  codeFiles,
  prompt,
  iframeHeight,
  className,
}: Readonly<CompositionViewTabsProps>) {
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
        </PreviewTabs.Actions>
      </PreviewTabs.Bar>
      <PreviewTabs.Preview
        src={src}
        height={iframeHeight}
        title="Composition preview"
      />
      <PreviewTabs.Code files={codeFiles} />
      <PreviewTabs.Panel value="prompt">
        <PromptPanel prompt={prompt} />
      </PreviewTabs.Panel>
    </PreviewTabs>
  )
}
