'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { values as defaults } from '../content-14-example'

import type { Content14Props } from '../content-14'

interface Content14EditorFieldsProps {
  props?: Content14Props
  onUpdate?: (props: Content14Props) => void
}

export function Content14EditorFields({
  props: externalProps,
  onUpdate,
}: Content14EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Content14Props>(defaults)

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
