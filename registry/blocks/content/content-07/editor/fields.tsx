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
import { values as defaults } from '../content-07-example'

import type { Content07Props } from '../content-07'

interface Content07EditorFieldsProps {
  props?: Content07Props
  onUpdate?: (props: Content07Props) => void
}

export function Content07EditorFields({
  props: externalProps,
  onUpdate,
}: Content07EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Content07Props>(defaults)

  const props = externalProps ?? internalProps

  const updateField = <K extends keyof Content07Props>(
    field: K,
    value: Content07Props[K],
  ) => {
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
          title: 'New Column',
          content: 'Column content',
          media: {
            src: 'https://images.unsplash.com/photo-1683143726118-9abaed4e10f9?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="content-07-variant" className="text-sm font-medium">
            Variant
          </Label>
          <Select
            value={props.variant ?? 'standard'}
            onValueChange={(value) =>
              updateField('variant', value as Content07Props['variant'])
            }
          >
            <SelectTrigger id="content-07-variant" className="w-full">
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
            htmlFor="content-07-animation"
            className="text-sm font-medium"
          >
            Animation
          </Label>
          <Select
            value={props.animation ?? 'none'}
            onValueChange={(value) =>
              updateField('animation', value as Content07Props['animation'])
            }
          >
            <SelectTrigger id="content-07-animation" className="w-full">
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
