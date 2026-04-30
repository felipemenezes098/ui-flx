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
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { blockDefaults } from '@/lib/block-defaults'

import type { ShowcaseGridMediaCardsProps } from '../grid-media-cards'

const defaults = blockDefaults['showcase-grid-media-cards'].default

interface ShowcaseGridMediaCardsEditorFieldsProps {
  props?: ShowcaseGridMediaCardsProps
  onUpdate?: (props: ShowcaseGridMediaCardsProps) => void
}

export function ShowcaseGridMediaCardsEditorFields({
  props: externalProps,
  onUpdate,
}: ShowcaseGridMediaCardsEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<ShowcaseGridMediaCardsProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: any) => {
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
          title: 'New Item',
          description: 'Item description',
          media: {
            src: 'https://images.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'New item image',
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
    const currentMedia = newItems[index].media || { src: '', alt: '' }
    newItems[index] = {
      ...newItems[index],
      media: { ...currentMedia, [field]: value },
    }
    const newProps = { ...props, items: newItems }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateCta = (field: string, value: any) => {
    const baseCta = defaults.cta!
    const currentCta = props.cta ?? baseCta
    const newProps: ShowcaseGridMediaCardsProps = {
      ...props,
      cta: { ...baseCta, ...currentCta, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const setCtaEnabled = (checked: boolean) => {
    const baseCta = defaults.cta!
    const currentCta = props.cta ?? baseCta
    const newProps: ShowcaseGridMediaCardsProps = {
      ...props,
      cta: { ...baseCta, ...currentCta, ctaEnabled: checked },
    }
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
          value={props.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter title"
        />
      </div>

      <div className="flex items-center justify-between rounded-md border p-3">
        <Label className="text-sm font-medium">Show CTA</Label>
        <Switch
          checked={props.cta?.ctaEnabled ?? false}
          onCheckedChange={setCtaEnabled}
        />
      </div>

      {(props.cta?.ctaEnabled ?? false) && props.cta && (
        <>
          <div className="space-y-2">
            <Label className="text-sm font-medium">CTA Text</Label>
            <Input
              value={props.cta?.text ?? ''}
              onChange={(e) => updateCta('text', e.target.value)}
              placeholder="Button text"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">CTA Link</Label>
            <Input
              value={props.cta?.link ?? ''}
              onChange={(e) => updateCta('link', e.target.value)}
              placeholder="/"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">CTA Variant</Label>
            <Select
              value={props.cta?.variant ?? 'default'}
              onValueChange={(value) => updateCta('variant', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="destructive">Destructive</SelectItem>
                <SelectItem value="outline">Outline</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="ghost">Ghost</SelectItem>
                <SelectItem value="link">Link</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}

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
                value={item.title || ''}
                onChange={(e) => updateItem(index, 'title', e.target.value)}
                placeholder="Item title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Description</Label>
              <Textarea
                value={item.description || ''}
                onChange={(e) =>
                  updateItem(index, 'description', e.target.value)
                }
                placeholder="Item description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Image URL</Label>
              <Input
                value={item.media?.src || ''}
                onChange={(e) => updateItemMedia(index, 'src', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Image Alt Text</Label>
              <Input
                value={item.media?.alt || ''}
                onChange={(e) => updateItemMedia(index, 'alt', e.target.value)}
                placeholder="Image description"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
