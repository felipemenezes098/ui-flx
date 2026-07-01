import { toRegistryCodeFiles } from '@/lib/registry-source'
import { getRegistryItem } from '@/lib/registry-utils.server'

import { BlockViewTabs } from './block-view-tabs'

interface BlockViewProps {
  category: string
  slug: string
  variation?: string
  className?: string
}

export function BlockView({
  category,
  slug,
  variation,
  className,
}: Readonly<BlockViewProps>) {
  const item = getRegistryItem(slug)
  const codeFiles = toRegistryCodeFiles(item)
  const meta = item?.meta as { iframeHeight?: number } | undefined
  const iframeHeight =
    typeof meta?.iframeHeight === 'number' ? meta.iframeHeight : undefined

  return (
    <BlockViewTabs
      category={category}
      slug={slug}
      variation={variation}
      codeFiles={codeFiles}
      registryName={slug}
      iframeHeight={iframeHeight}
      className={className}
    />
  )
}
