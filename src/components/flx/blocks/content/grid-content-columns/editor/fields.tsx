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

import type { GridContentColumnsProps } from '../types'

const defaults = blockDefaults['grid-content-columns'].default

interface GridContentColumnsEditorFieldsProps {
  props?: GridContentColumnsProps
  onUpdate?: (props: GridContentColumnsProps) => void
}

export function GridContentColumnsEditorFields({
  props: externalProps,
  onUpdate,
}: GridContentColumnsEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<GridContentColumnsProps>(defaults)

  const props = externalProps ?? internalProps

  const addItem = () => {
    const newProps = {
      ...props,
      items: [
        ...props.items,
        {
          title: 'New Column',
          content: 'Column content',
          media: {
            src: 'https://images.unsplash.com/photo-1545584483-c26adab78e78?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Column image',
          },
          cta: {
            ctaEnabled: true,
            text: 'Learn More',
            link: '/',
            variant: 'default' as const,
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

  const updateItemCta = (index: number, field: string, value: any) => {
    const newItems = [...props.items]
    const currentCta = newItems[index].cta ?? {
      ctaEnabled: true,
      text: 'Learn More',
      link: '/',
      variant: 'default' as const,
    }
    newItems[index] = {
      ...newItems[index],
      cta: { ...currentCta, [field]: value },
    }
    const newProps = { ...props, items: newItems }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const setItemCtaEnabled = (index: number, checked: boolean) => {
    const newItems = [...props.items]
    const currentCta = newItems[index].cta ?? {
      ctaEnabled: true,
      text: 'Learn More',
      link: '/',
      variant: 'default' as const,
    }
    newItems[index] = {
      ...newItems[index],
      cta: { ...currentCta, ctaEnabled: checked },
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
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Column Items</Label>
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
                placeholder="Column title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Content</Label>
              <Textarea
                value={item.content || ''}
                onChange={(e) => updateItem(index, 'content', e.target.value)}
                placeholder="Column content"
                rows={3}
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

            <div className="flex items-center justify-between rounded-md border p-3">
              <Label className="text-sm font-medium">Enable CTA</Label>
              <Switch
                checked={item.cta?.ctaEnabled ?? false}
                onCheckedChange={(checked) => setItemCtaEnabled(index, checked)}
              />
            </div>

            {(item.cta?.ctaEnabled ?? false) && (
              <>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">CTA Text</Label>
                  <Input
                    value={item.cta?.text ?? ''}
                    onChange={(e) =>
                      updateItemCta(index, 'text', e.target.value)
                    }
                    placeholder="Button text"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">CTA Link</Label>
                  <Input
                    value={item.cta?.link ?? ''}
                    onChange={(e) =>
                      updateItemCta(index, 'link', e.target.value)
                    }
                    placeholder="/"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">CTA Variant</Label>
                  <Select
                    value={item.cta?.variant ?? 'default'}
                    onValueChange={(value) =>
                      updateItemCta(index, 'variant', value)
                    }
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
          </div>
        ))}
      </div>
    </div>
  )
}
