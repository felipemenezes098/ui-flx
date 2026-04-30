'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { blockDefaults } from '@/lib/block-defaults'

import type { CarouselCardItem, CarouselCardsProps } from '../carousel-cards'

const defaults = blockDefaults['carousel-cards'].default

interface CarouselCardsEditorFieldsProps {
  props?: CarouselCardsProps
  onUpdate?: (props: CarouselCardsProps) => void
}

export function CarouselCardsEditorFields({
  props: externalProps,
  onUpdate,
}: CarouselCardsEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] = React.useState<CarouselCardsProps>(
    defaults as CarouselCardsProps,
  )

  const props = externalProps ?? internalProps

  const updateField = (
    field: keyof CarouselCardsProps,
    value: string | CarouselCardItem[],
  ) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    const newProps: CarouselCardsProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New item',
          description: 'Item description',
          media: {
            src: 'https://images.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'New item image',
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
    field: keyof CarouselCardItem,
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

  const updateItemMedia = (
    index: number,
    field: 'src' | 'alt',
    value: string,
  ) => {
    const newItems = [...props.items]
    newItems[index] = {
      ...newItems[index],
      media: { ...newItems[index].media, [field]: value },
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
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Title
        </Label>
        <Input
          id="title"
          value={props.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter carousel title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          value={props.description || ''}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Enter carousel description"
          rows={3}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Carousel items</Label>
          <Button onClick={addItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add item
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
                value={item.title || ''}
                onChange={(e) => updateItem(index, 'title', e.target.value)}
                placeholder="Item title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Description</Label>
              <Textarea
                value={item.description || ''}
                onChange={(e) =>
                  updateItem(index, 'description', e.target.value)
                }
                placeholder="Item description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Image URL</Label>
              <Input
                value={item.media.src}
                onChange={(e) => updateItemMedia(index, 'src', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Image Alt Text</Label>
              <Input
                value={item.media.alt ?? ''}
                onChange={(e) => updateItemMedia(index, 'alt', e.target.value)}
                placeholder="Image description"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
