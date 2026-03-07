'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { blockDefaults } from '@/lib/block-defaults'

import type { GridCardsProps } from '../types'

const defaults = blockDefaults['grid-cards'].default

interface GridCardsEditorFieldsProps {
  props?: GridCardsProps
  onUpdate?: (props: GridCardsProps) => void
}

export function GridCardsEditorFields({
  props: externalProps,
  onUpdate,
}: GridCardsEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] = React.useState<GridCardsProps>({
    title: defaults.title,
    items: [...defaults.items],
  })

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: any) => {
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
