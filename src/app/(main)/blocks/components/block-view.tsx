import { buildBlockPrompt } from '@/lib/blocks/blocks-utils'
import { toRegistryCodeFiles } from '@/lib/registry-source'
import { getRegistryItem } from '@/lib/registry-utils.server'

import { BlockViewTabs } from './block-view-tabs'

interface BlockViewProps {
  category: string
  slug: string
  variation?: string
  className?: string
}

/**
 * Final block viewer used in docs/MDX. Server component: resolves the registry
 * item (with its dependency code merged), builds the preview/edit URLs, then
 * hands everything to the client BlockViewTabs.
 */
export function BlockView({
  category,
  slug,
  variation,
  className,
}: Readonly<BlockViewProps>) {
  const item = getRegistryItem(slug)
  const codeFiles = toRegistryCodeFiles(item)
  const prompt = item ? buildBlockPrompt(item, category, codeFiles) : ''
  const meta = item?.meta as { iframeHeight?: number } | undefined
  const iframeHeight =
    typeof meta?.iframeHeight === 'number' ? meta.iframeHeight : undefined

  const src = variation
    ? `/preview/blocks/${category}/${slug}/${variation}`
    : `/preview/blocks/${category}/${slug}`
  const editSrc = variation
    ? `/block-editor/${category}/${slug}/${variation}`
    : `/block-editor/${category}/${slug}`

  return (
    <BlockViewTabs
      src={src}
      editSrc={editSrc}
      registryName={slug}
      codeFiles={codeFiles}
      prompt={prompt}
      iframeHeight={iframeHeight}
      className={className}
    />
  )
}
