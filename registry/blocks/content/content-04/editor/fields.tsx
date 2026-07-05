'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../content-04-example'

import type { Content04Props } from '../content-04'

interface Content04EditorFieldsProps {
  props?: Content04Props
  onUpdate?: (props: Content04Props) => void
}

export function Content04EditorFields({
  props: externalProps,
  onUpdate,
}: Content04EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Content04Props>(defaults)

  const props = externalProps ?? internalProps

  const updateField = <K extends keyof Content04Props>(
    field: K,
    value: Content04Props[K],
  ) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    const newProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New card',
          description: 'Short description for this card.',
          media: {
            src: 'https://images.unsplash.com/photo-1683143726118-9abaed4e10f9?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'alt image',
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
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="content-04-variant" className="text-sm font-medium">
            Variant
          </Label>
          <Select
            value={props.variant ?? 'standard'}
            onValueChange={(value) =>
              updateField('variant', value as Content04Props['variant'])
            }
          >
            <SelectTrigger id="content-04-variant" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="compact">Compact</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="content-04-animation"
            className="text-sm font-medium"
          >
            Animation
          </Label>
          <Select
            value={props.animation ?? 'none'}
            onValueChange={(value) =>
              updateField('animation', value as Content04Props['animation'])
            }
          >
            <SelectTrigger id="content-04-animation" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="subtle">Subtle</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

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
          placeholder="Enter section description"
          rows={3}
        />
      </div>

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
