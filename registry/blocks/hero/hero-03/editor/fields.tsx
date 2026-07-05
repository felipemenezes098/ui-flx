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
import { values as defaults } from '../hero-03-example'

import type { ButtonVariant, CtaProps } from '../../../shared/cta'
import type { Hero03Props } from '../hero-03'

interface Hero03EditorFieldsProps {
  props?: Hero03Props
  onUpdate?: (props: Hero03Props) => void
}

const VARIANTS: ButtonVariant[] = [
  'default',
  'secondary',
  'outline',
  'ghost',
  'link',
  'destructive',
]

export function Hero03EditorFields({
  props: externalProps,
  onUpdate,
}: Hero03EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero03Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero03Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero03Props>(
    field: K,
    value: Hero03Props[K],
  ) => commit({ ...props, [field]: value })

  const updateCta = (
    key: 'primaryCTA' | 'secondaryCTA',
    field: keyof CtaProps,
    value: unknown,
  ) => {
    const current = props[key] ?? { ctaEnabled: true, text: '', link: '' }
    commit({ ...props, [key]: { ...current, [field]: value } })
  }

  const renderCtaFields = (
    key: 'primaryCTA' | 'secondaryCTA',
    title: string,
  ) => {
    const cta = props[key]
    return (
      <div className="space-y-3 rounded-md border p-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">{title}</Label>
          <Switch
            checked={cta?.ctaEnabled ?? false}
            onCheckedChange={(checked) => updateCta(key, 'ctaEnabled', checked)}
          />
        </div>
        {cta?.ctaEnabled && (
          <div className="space-y-2">
            <Input
              value={cta?.text ?? ''}
              onChange={(e) => updateCta(key, 'text', e.target.value)}
              placeholder="Button text"
            />
            <Input
              type="url"
              value={cta?.link ?? ''}
              onChange={(e) => updateCta(key, 'link', e.target.value)}
              placeholder="Link URL"
            />
            <Select
              value={cta?.variant ?? 'default'}
              onValueChange={(value) =>
                updateCta(key, 'variant', value as ButtonVariant)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Variant" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {VARIANTS.map((v) => (
                    <SelectItem key={v} value={v}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    )
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
          placeholder="Space to feel heard again."
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
        <Label htmlFor="portrait-image" className="text-sm font-medium">
          Portrait image
        </Label>
        <Input
          id="portrait-image"
          type="url"
          value={props.portraitImage}
          onChange={(e) => updateField('portraitImage', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="portrait-alt" className="text-sm font-medium">
          Portrait alt text
        </Label>
        <Input
          id="portrait-alt"
          value={props.portraitAlt ?? ''}
          onChange={(e) => updateField('portraitAlt', e.target.value)}
          placeholder="Describe the portrait"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero03Props['variant'])
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
            updateField('animation', value as Hero03Props['animation'])
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

      {renderCtaFields('primaryCTA', 'Primary CTA')}
      {renderCtaFields('secondaryCTA', 'Secondary CTA')}
    </div>
  )
}
