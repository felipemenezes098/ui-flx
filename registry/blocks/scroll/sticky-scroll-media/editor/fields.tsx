'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

import { values as defaults } from '../sticky-scroll-media-example'

import type { StickyScrollMediaProps } from '../sticky-scroll-media'

interface StickyScrollMediaEditorFieldsProps {
  props?: StickyScrollMediaProps
  onUpdate?: (props: StickyScrollMediaProps) => void
}

export function StickyScrollMediaEditorFields({
  props: externalProps,
  onUpdate,
}: StickyScrollMediaEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<StickyScrollMediaProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (index: number, field: string, value: any) => {
    const newItems = [...props.items]
    newItems[index] = { ...newItems[index], [field]: value }

    const newProps: StickyScrollMediaProps = {
      ...props,
      items: newItems,
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    const newItem = {
      title: 'New Item',
      description: 'Item description',
      media:
        'https://images.unsplash.com/photo-1486092642310-0c4e84309adb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }

    const newProps: StickyScrollMediaProps = {
      ...props,
      items: [...props.items, newItem],
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const removeItem = (index: number) => {
    const newItems = props.items.filter((_, i) => i !== index)

    const newProps: StickyScrollMediaProps = {
      ...props,
      items: newItems,
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Items</Label>
        <Button onClick={addItem} variant="outline" size="sm" className="h-8">
          Add Item
        </Button>
      </div>

      <div className="space-y-6">
        {props.items.map((item, index) => (
          <div key={index} className="space-y-3 rounded-md border p-4">
            <div className="flex items-center justify-between">
              <Label className="text-muted-foreground text-xs font-medium">
                Item {index + 1}
              </Label>
              {props.items.length > 1 && (
                <Button
                  onClick={() => removeItem(index)}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`title-${index}`} className="text-xs">
                Title
              </Label>
              <Input
                id={`title-${index}`}
                type="text"
                value={item.title}
                onChange={(e) => updateField(index, 'title', e.target.value)}
                placeholder="Item title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`description-${index}`} className="text-xs">
                Description
              </Label>
              <Textarea
                id={`description-${index}`}
                value={item.description}
                onChange={(e) =>
                  updateField(index, 'description', e.target.value)
                }
                placeholder="Item description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`media-${index}`} className="text-xs">
                Media URL
              </Label>
              <Input
                id={`media-${index}`}
                type="url"
                value={item.media}
                onChange={(e) => updateField(index, 'media', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
