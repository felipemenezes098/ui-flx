'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { blockDefaults } from '@/lib/block-defaults'

import type { FocusGridItem, FocusGridProps } from '../focus-grid'

const defaults = blockDefaults['focus-grid'].default

interface FocusGridEditorFieldsProps {
  props?: FocusGridProps
  onUpdate?: (props: FocusGridProps) => void
}

export function FocusGridEditorFields({
  props: externalProps,
  onUpdate,
}: FocusGridEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<FocusGridProps>(defaults)

  const props = externalProps ?? internalProps

  const update = (partial: Partial<FocusGridProps>) => {
    const newProps: FocusGridProps = { ...props, ...partial }
    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItem = (index: number, partial: Partial<FocusGridItem>) => {
    const newItems = props.items.map((item, i) =>
      i === index ? { ...item, ...partial } : item,
    )
    update({ items: newItems })
  }

  const addItem = () => {
    update({
      items: [
        ...props.items,
        { image: '', title: 'New Item', description: '' },
      ],
    })
  }

  const removeItem = (index: number) => {
    update({ items: props.items.filter((_, i) => i !== index) })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="dim-unfocused" className="text-sm font-medium">
            Dim unfocused
          </Label>
          <p className="text-muted-foreground text-xs">
            Fade out items that are not focused
          </p>
        </div>
        <Switch
          id="dim-unfocused"
          checked={props.dimUnfocused ?? false}
          onCheckedChange={(checked) => update({ dimUnfocused: checked })}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="description-on-focus" className="text-sm font-medium">
            Description on focus
          </Label>
          <p className="text-muted-foreground text-xs">
            Only show description for the focused item
          </p>
        </div>
        <Switch
          id="description-on-focus"
          checked={props.descriptionOnFocus ?? false}
          onCheckedChange={(checked) => update({ descriptionOnFocus: checked })}
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
            className="border-border space-y-3 rounded-lg border p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-xs font-medium">
                Item {index + 1}
              </span>
              <Button
                onClick={() => removeItem(index)}
                size="sm"
                variant="ghost"
                aria-label="Remove item"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Title</Label>
              <Input
                value={item.title}
                onChange={(e) => updateItem(index, { title: e.target.value })}
                placeholder="Item title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Description</Label>
              <Input
                value={item.description}
                onChange={(e) =>
                  updateItem(index, { description: e.target.value })
                }
                placeholder="Item description"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Image URL</Label>
              <Input
                value={item.image}
                onChange={(e) => updateItem(index, { image: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="flex items-center gap-2">
              <Switch
                id={`default-focus-${index}`}
                checked={item.defaultFocus ?? false}
                onCheckedChange={(checked) =>
                  updateItem(index, { defaultFocus: checked })
                }
              />
              <Label htmlFor={`default-focus-${index}`} className="text-xs">
                Default focus
              </Label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
