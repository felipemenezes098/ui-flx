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
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../content-09-example'

import type { Content09Props } from '../content-09'

interface Content09EditorFieldsProps {
  props?: Content09Props
  onUpdate?: (props: Content09Props) => void
}

export function Content09EditorFields({
  props: externalProps,
  onUpdate,
}: Content09EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Content09Props>(defaults)

  const props = externalProps ?? internalProps

  const updateField = <K extends keyof Content09Props>(
    field: K,
    value: Content09Props[K],
  ) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItem = (index: number, field: string, value: string) => {
    const newItems = [...props.items]
    newItems[index] = { ...newItems[index], [field]: value }
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
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="content-09-variant" className="text-sm font-medium">
            Variant
          </Label>
          <Select
            value={props.variant ?? 'standard'}
            onValueChange={(value) =>
              updateField('variant', value as Content09Props['variant'])
            }
          >
            <SelectTrigger id="content-09-variant" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="content-09-animation"
            className="text-sm font-medium"
          >
            Animation
          </Label>
          <Select
            value={props.animation ?? 'none'}
            onValueChange={(value) =>
              updateField('animation', value as Content09Props['animation'])
            }
          >
            <SelectTrigger id="content-09-animation" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="subtle">Subtle</SelectItem>
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
          <Label className="text-sm font-medium">Items</Label>
          <Button onClick={addItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Item
          </Button>
        </div>

        {props.items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
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
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Icon Name</Label>
              <Input
                value={item.icon}
                onChange={(e) => updateItem(index, 'icon', e.target.value)}
                placeholder="Palette, Code, Users, etc."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
