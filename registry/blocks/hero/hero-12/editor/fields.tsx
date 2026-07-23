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
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../hero-12-example'

import type { CtaProps } from '../../../shared/cta'
import type { Hero12Props } from '../hero-12'

interface Hero12EditorFieldsProps {
  props?: Hero12Props
  onUpdate?: (props: Hero12Props) => void
}

export function Hero12EditorFields({
  props: externalProps,
  onUpdate,
}: Hero12EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero12Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero12Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero12Props>(
    field: K,
    value: Hero12Props[K],
  ) => commit({ ...props, [field]: value })

  const updateCta = (field: keyof CtaProps, value: unknown) => {
    const current = props.primaryCTA ?? { ctaEnabled: true, text: '', link: '' }
    commit({ ...props, primaryCTA: { ...current, [field]: value } })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Title
        </Label>
        <Input
          id="title"
          value={props.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Anton E."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="established" className="text-sm font-medium">
          Established
        </Label>
        <Input
          id="established"
          value={props.established ?? ''}
          onChange={(e) => updateField('established', e.target.value)}
          placeholder="Est. 2021"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          value={props.description}
          onChange={(e) => updateField('description', e.target.value)}
          rows={3}
          placeholder="Enter description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="background-image" className="text-sm font-medium">
          Background image
        </Label>
        <Input
          id="background-image"
          type="url"
          value={props.backgroundImage}
          onChange={(e) => updateField('backgroundImage', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="background-alt" className="text-sm font-medium">
          Background alt text
        </Label>
        <Input
          id="background-alt"
          value={props.backgroundAlt ?? ''}
          onChange={(e) => updateField('backgroundAlt', e.target.value)}
          placeholder="Describe the background image"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero12Props['variant'])
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
            updateField('animation', value as Hero12Props['animation'])
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

      <div className="space-y-3 rounded-md border p-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Primary CTA</Label>
          <Switch
            checked={props.primaryCTA?.ctaEnabled ?? false}
            onCheckedChange={(checked) => updateCta('ctaEnabled', checked)}
          />
        </div>
        {props.primaryCTA?.ctaEnabled && (
          <div className="space-y-2">
            <Input
              value={props.primaryCTA?.text ?? ''}
              onChange={(e) => updateCta('text', e.target.value)}
              placeholder="Button text"
            />
            <Input
              type="url"
              value={props.primaryCTA?.link ?? ''}
              onChange={(e) => updateCta('link', e.target.value)}
              placeholder="Link URL"
            />
          </div>
        )}
      </div>
    </div>
  )
}
