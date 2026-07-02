'use client'

import {
  EditButton,
  FullscreenButton,
} from '@/components/core/preview/preview-actions'
import { PreviewTabs } from '@/components/core/preview/preview-tabs'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import type { RegistryCodeFile } from '@/lib/registry-source'

interface BlockViewTabsProps {
  src: string
  editSrc: string
  registryName: string
  codeFiles: RegistryCodeFile[]
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
  iframeHeight,
  className,
}: Readonly<BlockViewTabsProps>) {
  return (
    <PreviewTabs className={className}>
      <PreviewTabs.Bar>
        <PreviewTabs.Triggers codeDisabled={!codeFiles.length} />
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
    </PreviewTabs>
  )
}
