'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { blockDefaults } from '@/lib/block-defaults'

import type { TitleWithMediaProps } from '../title-with-media'

const defaults = blockDefaults['title-with-media'].default

interface TitleWithMediaEditorFieldsProps {
  props?: TitleWithMediaProps
  onUpdate?: (props: TitleWithMediaProps) => void
}

export function TitleWithMediaEditorFields({
  props: externalProps,
  onUpdate,
}: TitleWithMediaEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<TitleWithMediaProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: any) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateMedia = (field: 'src' | 'alt', value: string) => {
    const newProps = {
      ...props,
      media: { ...props.media, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Title
        </Label>
        <Input
          id="title"
          value={props.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mediaSrc" className="text-sm font-medium">
          Image URL
        </Label>
        <Input
          id="mediaSrc"
          value={props.media.src}
          onChange={(e) => updateMedia('src', e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mediaAlt" className="text-sm font-medium">
          Image Alt Text
        </Label>
        <Input
          id="mediaAlt"
          value={props.media.alt}
          onChange={(e) => updateMedia('alt', e.target.value)}
          placeholder="Image description"
        />
      </div>
    </div>
  )
}
