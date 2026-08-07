'use client'

import * as React from 'react'
import { Plus, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../feature-03-example'

import type { Feature03Item, Feature03Props } from '../feature-03'

export function Feature03EditorFields({
  props: externalProps,
  onUpdate,
}: {
  props?: Feature03Props
  onUpdate?: (props: Feature03Props) => void
} = {}) {
  const [internal, setInternal] = React.useState<Feature03Props>(defaults)
  const props = externalProps ?? internal

  const update = (partial: Partial<Feature03Props>) => {
    const next = { ...props, ...partial }
    onUpdate ? onUpdate(next) : setInternal(next)
  }

  const updateItem = (index: number, partial: Partial<Feature03Item>) => {
    update({
      items: props.items.map((item, i) =>
        i === index ? { ...item, ...partial } : item,
      ),
    })
  }

  const addItem = () => {
    update({
      items: [
        ...props.items,
        {
          id: String(Date.now()),
          title: 'New Feature',
          description: '',
          media: {
            src: 'https://images.unsplash.com/photo-1635746065098-a0ae3eadfa6f?q=80&w=1600&auto=format&fit=crop',
            alt: 'Soft gradient abstract in warm tones',
          },
        },
      ],
    })
  }

  const removeItem = (index: number) => {
    update({ items: props.items.filter((_, i) => i !== index) })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Title</Label>
        <Input
          value={props.title}
          onChange={(e) => update({ title: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          value={props.description ?? ''}
          onChange={(e) => update({ description: e.target.value })}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            update({ variant: value as Feature03Props['variant'] })
          }
        >
          <SelectTrigger id="variant" className="w-full">
            <SelectValue placeholder="Variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="animation" className="text-sm font-medium">
          Animation
        </Label>
        <Select
          value={props.animation ?? 'none'}
          onValueChange={(value) =>
            update({ animation: value as Feature03Props['animation'] })
          }
        >
          <SelectTrigger id="animation" className="w-full">
            <SelectValue placeholder="Animation" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="subtle">Subtle</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Features</Label>
          <Button onClick={addItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Feature
          </Button>
        </div>

        {props.items.map((item, index) => (
          <div
            key={item.id}
            className="border-border space-y-3 rounded-lg border p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-xs font-medium">
                Feature {index + 1}
              </span>
              <Button
                onClick={() => removeItem(index)}
                size="sm"
                variant="ghost"
                aria-label="Remove feature"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Title</Label>
              <Input
                value={item.title}
                onChange={(e) => updateItem(index, { title: e.target.value })}
                placeholder="Feature title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Description</Label>
              <Textarea
                value={item.description}
                onChange={(e) =>
                  updateItem(index, { description: e.target.value })
                }
                rows={2}
                placeholder="Feature description"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Media URL</Label>
              <Input
                value={item.media.src}
                onChange={(e) =>
                  updateItem(index, {
                    media: { ...item.media, src: e.target.value },
                  })
                }
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Media Alt Text</Label>
              <Input
                value={item.media.alt}
                onChange={(e) =>
                  updateItem(index, {
                    media: { ...item.media, alt: e.target.value },
                  })
                }
                placeholder="Describe the image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
