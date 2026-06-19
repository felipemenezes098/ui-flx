'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../content-13-example'

import type { Content13Props } from '../content-13'

interface Content13EditorFieldsProps {
  props?: Content13Props
  onUpdate?: (props: Content13Props) => void
}

export function Content13EditorFields({
  props: externalProps,
  onUpdate,
}: Content13EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Content13Props>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: string) => {
    const newProps: Content13Props = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    const newProps: Content13Props = {
      ...props,
      items: [...props.items, 'New Badge'],
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const removeItem = (index: number) => {
    const newProps: Content13Props = {
      ...props,
      items: props.items.filter((_, i) => i !== index),
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateItem = (index: number, value: string) => {
    const newItems = [...props.items]
    newItems[index] = value
    const newProps: Content13Props = { ...props, items: newItems }

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

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          value={props.description ?? ''}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Enter description"
          rows={2}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Badges</Label>
          <Button onClick={addItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Badge
          </Button>
        </div>

        {props.items.map((item, index) => (
          <div
            key={index}
            className="border-border flex items-center gap-2 rounded-lg border p-3"
          >
            <Input
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              placeholder="Badge text"
              className="flex-1"
            />
            <Button
              onClick={() => removeItem(index)}
              size="sm"
              variant="ghost"
              aria-label="Remove badge"
            >
              <X className="size-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
