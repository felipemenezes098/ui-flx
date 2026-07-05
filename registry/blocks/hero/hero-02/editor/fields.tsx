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
import { values as defaults } from '../hero-02-example'

import type { ButtonVariant, CtaProps } from '../../../shared/cta'
import type { Hero02Props } from '../hero-02'

interface Hero02EditorFieldsProps {
  props?: Hero02Props
  onUpdate?: (props: Hero02Props) => void
}

const VARIANTS: ButtonVariant[] = [
  'default',
  'secondary',
  'outline',
  'ghost',
  'link',
  'destructive',
]

export function Hero02EditorFields({
  props: externalProps,
  onUpdate,
}: Hero02EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero02Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero02Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero02Props>(
    field: K,
    value: Hero02Props[K],
  ) => commit({ ...props, [field]: value })

  const updateCta = (field: keyof CtaProps, value: unknown) => {
    const current = props.primaryCTA ?? { ctaEnabled: true, text: '', link: '' }
    commit({ ...props, primaryCTA: { ...current, [field]: value } })
  }

  const cta = props.primaryCTA

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
          placeholder="Every metric that matters,"
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
          placeholder="in one clear view."
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
          Background image
        </Label>
        <Input
          id="wash-image"
          type="url"
          value={props.washImage}
          onChange={(e) => updateField('washImage', e.target.value)}
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
            updateField('variant', value as Hero02Props['variant'])
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
            updateField('animation', value as Hero02Props['animation'])
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
            checked={cta?.ctaEnabled ?? false}
            onCheckedChange={(checked) => updateCta('ctaEnabled', checked)}
          />
        </div>
        {cta?.ctaEnabled && (
          <div className="space-y-2">
            <Input
              value={cta?.text ?? ''}
              onChange={(e) => updateCta('text', e.target.value)}
              placeholder="Button text"
            />
            <Input
              type="url"
              value={cta?.link ?? ''}
              onChange={(e) => updateCta('link', e.target.value)}
              placeholder="Link URL"
            />
            <Select
              value={cta?.variant ?? 'default'}
              onValueChange={(value) =>
                updateCta('variant', value as ButtonVariant)
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
    </div>
  )
}
