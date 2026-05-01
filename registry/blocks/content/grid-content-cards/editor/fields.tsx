'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../grid-content-cards-example'

import type { GridContentCardsProps } from '../grid-content-cards'

interface GridContentCardsEditorFieldsProps {
  props?: GridContentCardsProps
  onUpdate?: (props: GridContentCardsProps) => void
}

export function GridContentCardsEditorFields({
  props: externalProps,
  onUpdate,
}: GridContentCardsEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<GridContentCardsProps>(defaults)

  const props = externalProps ?? internalProps

  const addItem = () => {
    const newProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New card',
          description: 'Short description for this card.',
          media: {
            src: 'https://images.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Card image',
          },
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
    const newProps = {
      ...props,
      items: props.items.filter((_, i) => i !== index),
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItem = (
    index: number,
    field: 'title' | 'description',
    value: string,
  ) => {
    const newItems = [...props.items]
    newItems[index] = { ...newItems[index], [field]: value }
    const newProps = { ...props, items: newItems }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItemImage = (
    index: number,
    field: 'src' | 'alt',
    value: string,
  ) => {
    const newItems = [...props.items]
    const current = newItems[index].media ?? { src: '', alt: '' }
    newItems[index] = {
      ...newItems[index],
      media: { ...current, [field]: value },
    }
    const newProps = { ...props, items: newItems }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Cards</Label>
          <Button onClick={addItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add card
          </Button>
        </div>

        {props.items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="border-border space-y-4 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Card {index + 1}</Label>
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
                placeholder="Card title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Description</Label>
              <Textarea
                value={item.description}
                onChange={(e) =>
                  updateItem(index, 'description', e.target.value)
                }
                placeholder="Card description"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Image URL</Label>
              <Input
                value={item.media.src}
                onChange={(e) => updateItemImage(index, 'src', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Image alt text</Label>
              <Input
                value={item.media.alt}
                onChange={(e) => updateItemImage(index, 'alt', e.target.value)}
                placeholder="Image description"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
