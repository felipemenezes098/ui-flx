import type { BlockImage } from '@/lib/blocks/block-manifest-types'

import imageVersions from './image-versions.json'

const versions: Record<string, string> = imageVersions

function versionedUrl(url: string) {
  const version = versions[url]
  if (!version) return url
  return `${url}?v=${version}`
}

export function versionedBlockImage(image: BlockImage): BlockImage {
  return {
    light: versionedUrl(image.light),
    dark: versionedUrl(image.dark),
  }
}
