'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { blockDefaults } from '@/lib/block-defaults'

import type { TabsMediaItem, TabsMediaProps } from '../tabs-media'

const defaults = blockDefaults['tabs-media'].default as TabsMediaProps

interface TabsMediaEditorFieldsProps {
  props?: TabsMediaProps
  onUpdate?: (props: TabsMediaProps) => void
}

function createEmptyItem(index: number): TabsMediaItem {
  return {
    label: `Tab ${index + 1}`,
    src: 'https://images.unsplash.com/photo-1549308050-395642b27438?q=80&w=1074&auto=format&fit=crop',
  }
}

export function TabsMediaEditorFields({
  props: externalProps,
  onUpdate,
}: TabsMediaEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<TabsMediaProps>(defaults)

  const props = externalProps ?? internalProps
  const items = props.items ?? []

  const update = (newProps: TabsMediaProps) => {
    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateField = (field: 'title' | 'description', value: string) => {
    update({ ...props, [field]: value })
  }

  const updateItem = (
    index: number,
    field: keyof TabsMediaItem,
    value: string,
  ) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    update({ ...props, items: newItems })
  }

  const addItem = () => {
    update({ ...props, items: [...items, createEmptyItem(items.length)] })
  }

  const removeItem = (index: number) => {
    update({ ...props, items: items.filter((_, i) => i !== index) })
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
          value={props.title ?? ''}
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
          placeholder="Enter description"
          rows={3}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Tabs</Label>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          Add tab
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.label + index}
            className="space-y-3 rounded-md border p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-xs font-medium">
                Tab {index + 1}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => removeItem(index)}
              >
                Remove
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`tab-${index}-label`} className="text-xs">
                Label
              </Label>
              <Input
                id={`tab-${index}-label`}
                type="text"
                value={item.label}
                onChange={(e) => updateItem(index, 'label', e.target.value)}
                placeholder="Tab label"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`tab-${index}-src`} className="text-xs">
                Image URL
              </Label>
              <Input
                id={`tab-${index}-src`}
                type="src"
                value={item.src}
                onChange={(e) => updateItem(index, 'src', e.target.value)}
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
