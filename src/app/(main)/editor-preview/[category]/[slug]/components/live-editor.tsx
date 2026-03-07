'use client'

import * as React from 'react'

import type { BlockItem } from '@/lib/block-registry'
import {
  getBlockComponent,
  getBlockDefaultsFromRegistry,
  getBlockEditorFields,
} from '@/lib/block-registry'

import { EditorLayout } from './editor-layout'

interface LiveEditorProps {
  item: BlockItem
}

export function LiveEditor({ item }: LiveEditorProps) {
  const EditorFields = getBlockEditorFields(item.slug)
  const Block = getBlockComponent(item.slug)

  const componentClassName = item.meta?.componentClassName
  const defaults = getBlockDefaultsFromRegistry(item.slug)
  const [props, setProps] = React.useState<Record<string, unknown>>(defaults)

  if (!EditorFields || !Block) {
    return (
      <div className="flex h-full items-center justify-center p-4">
        <p className="text-muted-foreground text-sm">
          Editor not found for: {item.slug}
        </p>
      </div>
    )
  }

  return (
    <EditorLayout>
      <EditorLayout.Editor>
        <EditorFields props={props} onUpdate={setProps} />
      </EditorLayout.Editor>
      <EditorLayout.Preview className={item.meta?.containerClassName}>
        <Block
          {...props}
          className={componentClassName}
          imageProps={{
            unoptimized: true,
          }}
        />
      </EditorLayout.Preview>
    </EditorLayout>
  )
}
