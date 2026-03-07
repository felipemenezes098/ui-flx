'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { blockDefaults } from '@/lib/block-defaults'

import type { IconListProps } from '../types'

const defaults = blockDefaults['icon-list'].default

interface IconListEditorFieldsProps {
  props?: IconListProps
  onUpdate?: (props: IconListProps) => void
}

export function IconListEditorFields({
  props: externalProps,
  onUpdate,
}: IconListEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<IconListProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: string) => {
    const newProps: IconListProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    const newProps: IconListProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New Item',
          icon: 'Check',
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
    const newProps: IconListProps = {
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
    const newProps: IconListProps = { ...props, items: newItems }

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
          type="text"
          value={props.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter title"
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
              <Label className="text-sm font-medium">Icon Name</Label>
              <Input
                value={item.icon}
                onChange={(e) => updateItem(index, 'icon', e.target.value)}
                placeholder="Zap, Shield, Code..."
              />
              <p className="text-muted-foreground text-xs">
                Nome do ícone (ex: Zap, Shield, Code, Users)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
