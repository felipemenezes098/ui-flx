'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { blockDefaults } from '@/lib/block-defaults'

import type { GridWithMediaTopProps } from '../types'

const defaults = blockDefaults['grid-with-media-top'].default

interface GridWithMediaTopEditorFieldsProps {
  props?: GridWithMediaTopProps
  onUpdate?: (props: GridWithMediaTopProps) => void
}

export function GridWithMediaTopEditorFields({
  props: externalProps,
  onUpdate,
}: GridWithMediaTopEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<GridWithMediaTopProps>(defaults)

  const props = externalProps ?? internalProps

  const updateMedia = (field: 'url' | 'alt', value: string) => {
    const newProps: GridWithMediaTopProps = {
      ...props,
      media: { ...props.media, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    const newProps: GridWithMediaTopProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New Item',
          description: 'Item description',
        },
      ],
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const removeItem = (index: number) => {
    const newProps: GridWithMediaTopProps = {
      ...props,
      items: props.items.filter((_, i) => i !== index),
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItem = (index: number, field: string, value: string) => {
    const newItems = [...props.items]
    newItems[index] = { ...newItems[index], [field]: value }
    const newProps: GridWithMediaTopProps = { ...props, items: newItems }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3 rounded-md border p-3">
        <Label className="text-sm font-medium">Media</Label>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label
              htmlFor="media-url"
              className="text-muted-foreground text-xs"
            >
              Media URL
            </Label>
            <Input
              id="media-url"
              type="url"
              value={props.media.url}
              onChange={(e) => updateMedia('url', e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="media-alt"
              className="text-muted-foreground text-xs"
            >
              Alt Text
            </Label>
            <Input
              id="media-alt"
              type="text"
              value={props.media.alt}
              onChange={(e) => updateMedia('alt', e.target.value)}
              placeholder="Image description"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Items</Label>
          <Button onClick={addItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Item
          </Button>
        </div>

        {props.items.map((item, index) => (
          <div
            key={index}
            className="border-border space-y-4 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Item {index + 1}</Label>
              <Button
                onClick={() => removeItem(index)}
                size="sm"
                variant="ghost"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Title</Label>
              <Input
                value={item.title}
                onChange={(e) => updateItem(index, 'title', e.target.value)}
                placeholder="Item title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Description</Label>
              <Textarea
                value={item.description}
                onChange={(e) =>
                  updateItem(index, 'description', e.target.value)
                }
                placeholder="Item description"
                rows={3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
