'use client'

import {
  EditButton,
  FullscreenButton,
  RefreshButton,
} from '@/components/core/preview/preview-actions'
import { PreviewFrame, usePreviewReload } from '@/components/core/preview/preview-frame'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import { cn } from '@/lib/utils'

interface BlockPreviewFrameProps {
  category: string
  slug: string
  variation?: string
  iframeHeight?: number
  className?: string
}

/**
 * Preview-only block surface (no code tabs) for MDX. Owns its own reload state
 * and composes the generic PreviewFrame + toolbar actions.
 */
export function BlockPreviewFrame({
  category,
  slug,
  variation,
  iframeHeight,
  className,
}: Readonly<BlockPreviewFrameProps>) {
  const { reloadKey, loading, refresh, handleLoad } = usePreviewReload()

  const src = variation
    ? `/preview/blocks/${category}/${slug}/${variation}`
    : `/preview/blocks/${category}/${slug}`
  const editSrc = variation
    ? `/block-editor/${category}/${slug}/${variation}`
    : `/block-editor/${category}/${slug}`

  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      <div className="flex items-center justify-end gap-0.5">
        <RegistryCli
          registryName={slug}
          className="w-fit max-w-none"
          labelClassName="hidden"
        />
        <RefreshButton onClick={refresh} className="rounded-lg" />
        <FullscreenButton href={src} className="rounded-lg" />
        <EditButton href={editSrc} className="rounded-lg" />
      </div>

      <PreviewFrame
        src={src}
        title="Block preview"
        height={iframeHeight}
        reloadKey={reloadKey}
        loading={loading}
        onLoad={handleLoad}
      />
    </div>
  )
}
