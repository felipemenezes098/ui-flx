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

import type { PrimaryItemGridProps } from '../primary-item-grid'

const defaults = blockDefaults['primary-item-grid'].default

interface PrimaryItemGridEditorFieldsProps {
  props?: PrimaryItemGridProps
  onUpdate?: (props: PrimaryItemGridProps) => void
}

export function PrimaryItemGridEditorFields({
  props: externalProps,
  onUpdate,
}: PrimaryItemGridEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<PrimaryItemGridProps>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: PrimaryItemGridProps) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updatePrimary = (patch: Partial<PrimaryItemGridProps['primary']>) => {
    commit({
      ...props,
      primary: { ...props.primary, ...patch },
    })
  }

  const updatePrimaryCta = (field: string, value: unknown) => {
    const cta = { ...props.primary.cta, [field]: value }
    updatePrimary({ cta })
  }

  const updatePrimaryMedia = (field: 'url' | 'title', value: string) => {
    updatePrimary({
      media: { ...props.primary.media, [field]: value },
    })
  }

  const updateItems = (items: PrimaryItemGridProps['items']) => {
    commit({ ...props, items })
  }

  const addItem = () => {
    updateItems([
      ...props.items,
      {
        title: 'New card',
        description: 'Description for this card.',
        media: {
          title: 'Card image',
          url: 'https://images.unsplash.com/photo-1611310424006-42cf1e064288?q=80&w=687&auto=format&fit=crop',
        },
      },
    ])
  }

  const removeItem = (index: number) => {
    updateItems(props.items.filter((_, i) => i !== index))
  }

  const updateItem = (
    index: number,
    patch: Partial<PrimaryItemGridProps['items'][number]>,
  ) => {
    const next = [...props.items]
    const prev = props.items[index]
    next[index] = {
      ...prev,
      ...patch,
      media: patch.media ? { ...prev.media, ...patch.media } : prev.media,
    }
    updateItems(next)
  }

  const ctaVariants = [
    'default',
    'destructive',
    'outline',
    'secondary',
    'ghost',
    'link',
  ] as const

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-sm font-medium">Primary</Label>

        <div className="space-y-2">
          <Label htmlFor="primary-title" className="text-xs">
            Title
          </Label>
          <Input
            id="primary-title"
            value={props.primary.title}
            onChange={(e) => updatePrimary({ title: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primary-description" className="text-xs">
            Description
          </Label>
          <Textarea
            id="primary-description"
            value={props.primary.description}
            onChange={(e) => updatePrimary({ description: e.target.value })}
            rows={3}
          />
        </div>

        <div className="space-y-3 rounded-md border p-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Primary CTA</Label>
            <Switch
              checked={props.primary.cta.ctaEnabled ?? true}
              onCheckedChange={(v) => updatePrimaryCta('ctaEnabled', v)}
            />
          </div>
          {(props.primary.cta.ctaEnabled ?? true) && (
            <div className="space-y-2">
              <Input
                value={props.primary.cta.text}
                onChange={(e) => updatePrimaryCta('text', e.target.value)}
                placeholder="Button text"
              />
              <Input
                value={props.primary.cta.link}
                onChange={(e) => updatePrimaryCta('link', e.target.value)}
                placeholder="Link"
              />
              <Select
                value={props.primary.cta.variant ?? 'default'}
                onValueChange={(v) =>
                  updatePrimaryCta('variant', v as (typeof ctaVariants)[number])
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Variant" />
                </SelectTrigger>
                <SelectContent>
                  {ctaVariants.map((v) => (
                    <SelectItem key={v} value={v}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="space-y-3 rounded-md border p-3">
          <Label className="text-sm font-medium">Primary media</Label>
          <Input
            value={props.primary.media.url}
            onChange={(e) => updatePrimaryMedia('url', e.target.value)}
            placeholder="Image URL"
          />
          <Input
            value={props.primary.media.title}
            onChange={(e) => updatePrimaryMedia('title', e.target.value)}
            placeholder="Alt / title"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Cards</Label>
          <Button type="button" size="sm" variant="outline" onClick={addItem}>
            <Plus className="mr-2 size-4" />
            Add card
          </Button>
        </div>

        {props.items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="border-border space-y-3 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Card {index + 1}</Label>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => removeItem(index)}
              >
                <X className="size-4" />
              </Button>
            </div>
            <Input
              value={item.title}
              onChange={(e) => updateItem(index, { title: e.target.value })}
              placeholder="Title"
            />
            <Textarea
              value={item.description}
              onChange={(e) =>
                updateItem(index, { description: e.target.value })
              }
              placeholder="Description"
              rows={2}
            />
            <Input
              value={item.media.url}
              onChange={(e) =>
                updateItem(index, {
                  media: { ...item.media, url: e.target.value },
                })
              }
              placeholder="Image URL"
            />
            <Input
              value={item.media.title}
              onChange={(e) =>
                updateItem(index, {
                  media: { ...item.media, title: e.target.value },
                })
              }
              placeholder="Alt / title"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
