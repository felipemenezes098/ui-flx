'use client'

import * as React from 'react'

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
import { values as defaults } from '../hero-04-example'

import type { ButtonVariant, CtaProps } from '../../../shared/cta'
import type { Hero04Props } from '../hero-04'

interface Hero04EditorFieldsProps {
  props?: Hero04Props
  onUpdate?: (props: Hero04Props) => void
}

const VARIANTS: ButtonVariant[] = [
  'default',
  'secondary',
  'outline',
  'ghost',
  'link',
  'destructive',
]

export function Hero04EditorFields({
  props: externalProps,
  onUpdate,
}: Hero04EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero04Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero04Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero04Props>(
    field: K,
    value: Hero04Props[K],
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
                {VARIANTS.map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
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
          placeholder="A gallery for the work"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title-line-2" className="text-sm font-medium">
          Title line 2
        </Label>
        <Input
          id="title-line-2"
          value={props.titleLine2 ?? ''}
          onChange={(e) => updateField('titleLine2', e.target.value)}
          placeholder="you are proud of."
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
        <Label htmlFor="wash-image" className="text-sm font-medium">
          Background wash image
        </Label>
        <Input
          id="wash-image"
          type="url"
          value={props.washImage ?? ''}
          onChange={(e) => updateField('washImage', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="primary-image" className="text-sm font-medium">
          Primary image
        </Label>
        <Input
          id="primary-image"
          type="url"
          value={props.primaryImage}
          onChange={(e) => updateField('primaryImage', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="secondary-image" className="text-sm font-medium">
          Secondary image
        </Label>
        <Input
          id="secondary-image"
          type="url"
          value={props.secondaryImage}
          onChange={(e) => updateField('secondaryImage', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero04Props['variant'])
          }
        >
          <SelectTrigger id="variant" className="w-full">
            <SelectValue placeholder="Variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="compact">Compact</SelectItem>
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
            updateField('animation', value as Hero04Props['animation'])
          }
        >
          <SelectTrigger id="animation" className="w-full">
            <SelectValue placeholder="Animation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="subtle">Subtle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {renderCtaFields('primaryCTA', 'Primary CTA')}
      {renderCtaFields('secondaryCTA', 'Secondary CTA')}
    </div>
  )
}
