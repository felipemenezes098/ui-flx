// Usually used for examples. It's not used in the editor as usual.

'use client'

import * as React from 'react'

import { BlockEditor } from './block-editor'
import { BlockEditorDisplayContentMobile } from './block-editor-display'
import { BlockEditorPreview } from './block-editor-preview'
import { BlockEditorTools } from './block-editor-toolbar'

interface BlockPreviewProps {
  category: string
  slug: string
  variation?: string
  iframeHeight?: number
}

export function BlockPreview({
  category,
  slug,
  variation,
  iframeHeight,
}: Readonly<BlockPreviewProps>) {
  return (
    <BlockEditor
      category={category}
      slug={slug}
      variation={variation}
      iframeHeight={iframeHeight}
    >
      <div className="hidden flex-col gap-4 md:flex">
        <div className="flex w-full flex-wrap justify-between gap-4 pr-4 pl-1 xl:flex-row xl:items-center">
          <BlockEditorTools />
        </div>
        <BlockEditorPreview />
      </div>
      <BlockEditorDisplayContentMobile />
    </BlockEditor>
  )
}
