'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { blockDefaults } from '@/lib/block-defaults'

import type { GridMediaCardsProps } from '../grid-media-cards'

const defaults = blockDefaults['grid-media-cards'].default

interface GridMediaCardsEditorFieldsProps {
  props?: GridMediaCardsProps
  onUpdate?: (props: GridMediaCardsProps) => void
}

export function GridMediaCardsEditorFields({
  props: externalProps,
  onUpdate,
}: GridMediaCardsEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<GridMediaCardsProps>(defaults)

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

  const updateItemImage = (
    index: number,
    field: 'url' | 'alt' | 'overlay' | 'whiteTexts',
    value: any,
  ) => {
    const newItems = [...props.items]
    newItems[index] = {
      ...newItems[index],
      image: { ...newItems[index].image, [field]: value },
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
          image: {
            url: 'https://images.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'New item image',
            overlay: true,
            whiteTexts: false,
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
              <div className="space-y-3 rounded-md border p-2">
                <Label className="text-muted-foreground text-xs">Image</Label>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor={`item-${index}-image-url`}
                      className="text-muted-foreground text-xs"
                    >
                      Image URL
                    </Label>
                    <Input
                      id={`item-${index}-image-url`}
                      type="url"
                      value={item.image.url}
                      onChange={(e) =>
                        updateItemImage(index, 'url', e.target.value)
                      }
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor={`item-${index}-image-alt`}
                      className="text-muted-foreground text-xs"
                    >
                      Alt Text
                    </Label>
                    <Input
                      id={`item-${index}-image-alt`}
                      type="text"
                      value={item.image.alt}
                      onChange={(e) =>
                        updateItemImage(index, 'alt', e.target.value)
                      }
                      placeholder="Image description"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor={`item-${index}-overlay`}
                      className="text-muted-foreground text-xs"
                    >
                      Overlay
                    </Label>
                    <Switch
                      id={`item-${index}-overlay`}
                      checked={item.image.overlay || false}
                      onCheckedChange={(checked) =>
                        updateItemImage(index, 'overlay', checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor={`item-${index}-white-texts`}
                      className="text-muted-foreground text-xs"
                    >
                      White Texts
                    </Label>
                    <Switch
                      id={`item-${index}-white-texts`}
                      checked={item.image.whiteTexts || false}
                      onCheckedChange={(checked) =>
                        updateItemImage(index, 'whiteTexts', checked)
                      }
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
