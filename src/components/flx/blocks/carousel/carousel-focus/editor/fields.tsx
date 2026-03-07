'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { blockDefaults } from '@/lib/block-defaults'

import type { CarouselFocusAspect, CarouselFocusProps } from '../types'

const defaults = blockDefaults['carousel-focus'].default

interface CarouselFocusEditorFieldsProps {
  props?: CarouselFocusProps
  onUpdate?: (props: CarouselFocusProps) => void
}

export function CarouselFocusEditorFields({
  props: externalProps,
  onUpdate,
}: CarouselFocusEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<CarouselFocusProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: keyof CarouselFocusProps, value: unknown) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    const newProps: CarouselFocusProps = {
      ...props,
      items: [
        ...props.items,
        { title: 'New Item', image: { url: '', aspect: 'landscape' } },
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

  const updateItem = (index: number, field: 'title', value: string) => {
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
    field: 'url' | 'aspect',
    value: string,
  ) => {
    const newItems = [...props.items]
    newItems[index] = {
      ...newItems[index],
      image: {
        ...newItems[index].image,
        [field]: field === 'aspect' ? (value as CarouselFocusAspect) : value,
      },
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
        <Label htmlFor="titlePlacement" className="text-sm font-medium">
          Title position
        </Label>
        <Select
          value={props.titlePlacement}
          onValueChange={(value) =>
            updateField('titlePlacement', value as 'inside' | 'outside')
          }
        >
          <SelectTrigger id="titlePlacement" className="w-full">
            <SelectValue placeholder="Select position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="outside">Above image</SelectItem>
            <SelectItem value="inside">Inside image (bottom)</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-xs">
          Where the title appears on hover/focus
        </p>
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
                value={item.title ?? ''}
                onChange={(e) => updateItem(index, 'title', e.target.value)}
                placeholder="Item title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Image URL</Label>
              <Input
                value={item.image.url ?? ''}
                onChange={(e) => updateItemImage(index, 'url', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Aspect ratio</Label>
              <Select
                value={item.image.aspect}
                onValueChange={(value) =>
                  updateItemImage(index, 'aspect', value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select aspect" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="landscape">Landscape</SelectItem>
                  <SelectItem value="portrait">Portrait</SelectItem>
                  <SelectItem value="wide">Wide</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
