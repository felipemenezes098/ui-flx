'use client'

import * as React from 'react'

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
import { values as defaults } from '../hero-13-example'

import type { Hero13Props } from '../hero-13'

interface Hero13EditorFieldsProps {
  props?: Hero13Props
  onUpdate?: (props: Hero13Props) => void
}

export function Hero13EditorFields({
  props: externalProps,
  onUpdate,
}: Hero13EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero13Props>(defaults)

  const props = externalProps ?? internalProps

  const updateField = <K extends keyof Hero13Props>(
    field: K,
    value: Hero13Props[K],
  ) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateImage = (
    key: 'primaryImage' | 'secondaryImage',
    field: 'src' | 'alt',
    value: string,
  ) => {
    updateField(key, { ...props[key], [field]: value })
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="hero-13-variant" className="text-sm font-medium">
            Variant
          </Label>
          <Select
            value={props.variant ?? 'standard'}
            onValueChange={(value) =>
              updateField('variant', value as Hero13Props['variant'])
            }
          >
            <SelectTrigger id="hero-13-variant" className="w-full">
              <SelectValue />
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
          <Label htmlFor="hero-13-animation" className="text-sm font-medium">
            Animation
          </Label>
          <Select
            value={props.animation ?? 'none'}
            onValueChange={(value) =>
              updateField('animation', value as Hero13Props['animation'])
            }
          >
            <SelectTrigger id="hero-13-animation" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="subtle">Subtle</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hero-13-title" className="text-sm font-medium">
          Title
        </Label>
        <Input
          id="hero-13-title"
          value={props.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Haven"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hero-13-title-line-2" className="text-sm font-medium">
          Title line 2
        </Label>
        <Input
          id="hero-13-title-line-2"
          value={props.titleLine2 ?? ''}
          onChange={(e) => updateField('titleLine2', e.target.value)}
          placeholder="Studio."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hero-13-meta" className="text-sm font-medium">
          Meta
        </Label>
        <Input
          id="hero-13-meta"
          value={props.meta ?? ''}
          onChange={(e) => updateField('meta', e.target.value)}
          placeholder="Portland — 2019"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hero-13-eyebrow" className="text-sm font-medium">
          Eyebrow
        </Label>
        <Input
          id="hero-13-eyebrow"
          value={props.eyebrow ?? ''}
          onChange={(e) => updateField('eyebrow', e.target.value)}
          placeholder="Craft & quiet"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hero-13-description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="hero-13-description"
          value={props.description ?? ''}
          onChange={(e) => updateField('description', e.target.value)}
          rows={4}
        />
      </div>

      {(
        [
          ['primaryImage', 'Primary image'],
          ['secondaryImage', 'Secondary image'],
        ] as const
      ).map(([key, label]) => (
        <div key={key} className="border-border space-y-4 rounded-lg border p-4">
          <Label className="text-sm font-medium">{label}</Label>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Src</Label>
            <Input
              value={props[key].src}
              onChange={(e) => updateImage(key, 'src', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Alt</Label>
            <Input
              value={props[key].alt}
              onChange={(e) => updateImage(key, 'alt', e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
