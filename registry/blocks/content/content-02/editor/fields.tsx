'use client'

import * as React from 'react'

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
import { values as defaults } from '../content-02-example'

import type { Content02Props } from '../content-02'

interface Content02EditorFieldsProps {
  props?: Content02Props
  onUpdate?: (props: Content02Props) => void
}

export function Content02EditorFields({
  props: externalProps,
  onUpdate,
}: Content02EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Content02Props>(defaults)

  const props = externalProps ?? internalProps

  const updateField = <K extends keyof Content02Props>(
    field: K,
    value: Content02Props[K],
  ) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItem = (index: number, field: string, value: any) => {
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

  const addItem = () => {
    const newProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New Item',
          description: 'Item description',
          icon: 'Circle',
          media: {
            src: 'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="content-02-variant" className="text-sm font-medium">
            Variant
          </Label>
          <Select
            value={props.variant ?? 'standard'}
            onValueChange={(value) =>
              updateField('variant', value as Content02Props['variant'])
            }
          >
            <SelectTrigger id="content-02-variant" className="w-full">
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
            htmlFor="content-02-animation"
            className="text-sm font-medium"
          >
            Animation
          </Label>
          <Select
            value={props.animation ?? 'none'}
            onValueChange={(value) =>
              updateField('animation', value as Content02Props['animation'])
            }
          >
            <SelectTrigger id="content-02-animation" className="w-full">
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
          <div key={index} className="space-y-3 rounded-md border p-3">
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
                  value={item.description}
                  onChange={(e) =>
                    updateItem(index, 'description', e.target.value)
                  }
                  placeholder="Item description"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor={`item-${index}-icon`}
                  className="text-muted-foreground text-xs"
                >
                  Icon Name
                </Label>
                <Input
                  id={`item-${index}-icon`}
                  type="text"
                  value={item.icon}
                  onChange={(e) => updateItem(index, 'icon', e.target.value)}
                  placeholder="Palette, Code, Users, etc."
                />
              </div>
              <div className="space-y-3 rounded-md border p-2">
                <Label className="text-muted-foreground text-xs">Media</Label>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor={`item-${index}-media-src`}
                      className="text-muted-foreground text-xs"
                    >
                      Image URL
                    </Label>
                    <Input
                      id={`item-${index}-media-src`}
                      type="url"
                      value={item.media.src}
                      onChange={(e) =>
                        updateItemMedia(index, 'src', e.target.value)
                      }
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor={`item-${index}-media-alt`}
                      className="text-muted-foreground text-xs"
                    >
                      Alt Text
                    </Label>
                    <Input
                      id={`item-${index}-media-alt`}
                      type="text"
                      value={item.media.alt}
                      onChange={(e) =>
                        updateItemMedia(index, 'alt', e.target.value)
                      }
                      placeholder="Image description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
