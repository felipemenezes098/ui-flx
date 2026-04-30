'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { blockDefaults } from '@/lib/block-defaults'

import type { MediaGridInteractiveProps } from '../media-grid-interactive'

const defaults = blockDefaults['media-grid-interactive']
  .default as MediaGridInteractiveProps

interface MediaGridInteractiveEditorFieldsProps {
  props?: MediaGridInteractiveProps
  onUpdate?: (props: MediaGridInteractiveProps) => void
}

export function MediaGridInteractiveEditorFields({
  props: externalProps,
  onUpdate,
}: MediaGridInteractiveEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<MediaGridInteractiveProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (
    field: keyof MediaGridInteractiveProps,
    value: unknown,
  ) => {
    const newProps = { ...props, [field]: value }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  const updateItem = (index: number, field: string, value: unknown) => {
    const newItems = [...props.items]
    newItems[index] = { ...newItems[index], [field]: value }
    if (onUpdate) onUpdate({ ...props, items: newItems })
    else setInternalProps({ ...props, items: newItems })
  }

  const updateItemImage = (
    index: number,
    field: 'src' | 'alt',
    value: string,
  ) => {
    const newItems = [...props.items]
    newItems[index] = {
      ...newItems[index],
      media: { ...newItems[index].media, [field]: value },
    }
    if (onUpdate) onUpdate({ ...props, items: newItems })
    else setInternalProps({ ...props, items: newItems })
  }

  const addItem = () => {
    const newProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New Item',
          description: '',
          media: {
            src: 'https://medias.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop',
            alt: 'New item media',
          },
        },
      ],
    }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  const removeItem = (index: number) => {
    const newProps = {
      ...props,
      items: props.items.filter((_, i) => i !== index),
    }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Title
        </Label>
        <Input
          id="title"
          type="text"
          value={props.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter title"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          value={props.description ?? ''}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Block description"
          rows={2}
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Items</Label>
          <button
            type="button"
            onClick={addItem}
            className="text-primary hover:text-primary/80 text-xs font-medium"
          >
            + Add Item
          </button>
        </div>
        {props.items.map((item, index) => (
          <div
            key={`${item.title}-${item.media.src}-${index}`}
            className="space-y-3 rounded-md border p-3"
          >
            <div className="flex items-center justify-between">
              <Label className="text-xs font-medium">Item {index + 1}</Label>
              {props.items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-destructive hover:text-destructive/80 text-xs"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="space-y-2">
              <div className="space-y-2">
                <Label
                  htmlFor={`item-${index}-title`}
                  className="text-muted-foreground text-xs"
                >
                  Title
                </Label>
                <Input
                  id={`item-${index}-title`}
                  type="text"
                  value={item.title}
                  onChange={(e) => updateItem(index, 'title', e.target.value)}
                  placeholder="Item title"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor={`item-${index}-description`}
                  className="text-muted-foreground text-xs"
                >
                  Description
                </Label>
                <Textarea
                  id={`item-${index}-description`}
                  value={item.description ?? ''}
                  onChange={(e) =>
                    updateItem(index, 'description', e.target.value)
                  }
                  placeholder="Shown in dialog. Use line breaks in text for paragraphs."
                  rows={4}
                />
              </div>
              <div className="space-y-2 rounded-md border p-2">
                <Label className="text-muted-foreground text-xs">Image</Label>
                <div className="space-y-2">
                  <Input
                    id={`item-${index}-media-src`}
                    type="url"
                    value={item.media.src}
                    onChange={(e) =>
                      updateItemImage(index, 'src', e.target.value)
                    }
                    placeholder="Image URL"
                  />
                  <Input
                    id={`item-${index}-media-alt`}
                    type="text"
                    value={item.media.alt}
                    onChange={(e) =>
                      updateItemImage(index, 'alt', e.target.value)
                    }
                    placeholder="Alt text"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
