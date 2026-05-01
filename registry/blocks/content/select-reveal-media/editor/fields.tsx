'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../select-reveal-media-example'

import type {
  SelectRevealMediaItem,
  SelectRevealMediaProps,
} from '../select-reveal-media'

interface SelectRevealMediaEditorFieldsProps {
  props?: SelectRevealMediaProps
  onUpdate?: (props: SelectRevealMediaProps) => void
}

function createEmptyItem(index: number): SelectRevealMediaItem {
  return {
    id: `item-${Date.now()}-${index}`,
    title: 'New Item',
    description: 'Item description.',
    media: {
      src: 'https://images.unsplash.com/photo-1549308050-395642b27438?q=80&w=1074&auto=format&fit=crop',
      alt: 'New item media',
    },
  }
}

export function SelectRevealMediaEditorFields({
  props: externalProps,
  onUpdate,
}: SelectRevealMediaEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<SelectRevealMediaProps>(defaults)

  const props = externalProps ?? internalProps
  const items = props.items ?? []

  const updateItems = (newItems: SelectRevealMediaItem[]) => {
    const newProps = { ...props, items: newItems }
    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItem = (
    index: number,
    field: 'id' | 'title' | 'description',
    value: string,
  ) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    updateItems(newItems)
  }

  const updateItemImage = (
    index: number,
    field: 'src' | 'alt',
    value: string,
  ) => {
    const newItems = [...items]
    newItems[index] = {
      ...newItems[index],
      media: { ...newItems[index].media, [field]: value },
    }
    updateItems(newItems)
  }

  const addItem = () => {
    updateItems([...items, createEmptyItem(items.length)])
  }

  const removeItem = (index: number) => {
    updateItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Items</Label>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          Add item
        </Button>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={item.id} className="space-y-3 rounded-md border p-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-xs font-medium">
                Item {index + 1}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => removeItem(index)}
              >
                Remove
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`item-${index}-title`} className="text-xs">
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
              <Label htmlFor={`item-${index}-description`} className="text-xs">
                Description
              </Label>
              <Textarea
                id={`item-${index}-description`}
                value={item.description}
                onChange={(e) =>
                  updateItem(index, 'description', e.target.value)
                }
                placeholder="Item description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Image</Label>
              <div className="space-y-2">
                <Input
                  type="url"
                  value={item.media.src}
                  onChange={(e) =>
                    updateItemImage(index, 'src', e.target.value)
                  }
                  placeholder="Image URL"
                />
                <Input
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
        ))}
      </div>
    </div>
  )
}
