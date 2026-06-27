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
import { values as defaults } from '../hero-06-example'

import type { ButtonVariant, CtaProps } from '../../../shared/cta'
import type { Hero06Props } from '../hero-06'

interface Hero06EditorFieldsProps {
  props?: Hero06Props
  onUpdate?: (props: Hero06Props) => void
}

const VARIANTS: ButtonVariant[] = [
  'default',
  'secondary',
  'outline',
  'ghost',
  'link',
  'destructive',
]

export function Hero06EditorFields({
  props: externalProps,
  onUpdate,
}: Hero06EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero06Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero06Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero06Props>(
    field: K,
    value: Hero06Props[K],
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
          placeholder="Enter title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="highlight" className="text-sm font-medium">
          Highlighted phrase
        </Label>
        <Input
          id="highlight"
          value={props.highlight ?? ''}
          onChange={(e) => updateField('highlight', e.target.value)}
          placeholder="Emphasized continuation of the title"
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

      {renderCtaFields('primaryCTA', 'Primary CTA')}
      {renderCtaFields('secondaryCTA', 'Secondary CTA')}

      <div className="space-y-2">
        <Label htmlFor="preview-src" className="text-sm font-medium">
          Preview image URL
        </Label>
        <Input
          id="preview-src"
          type="url"
          value={props.preview?.src ?? ''}
          onChange={(e) =>
            updateField('preview', {
              src: e.target.value,
              alt: props.preview?.alt ?? '',
            })
          }
          placeholder="https://images.unsplash.com/..."
        />
        <Input
          value={props.preview?.alt ?? ''}
          onChange={(e) =>
            updateField('preview', {
              src: props.preview?.src ?? '',
              alt: e.target.value,
            })
          }
          placeholder="Image alt text"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="logos-label" className="text-sm font-medium">
          Logos label
        </Label>
        <Input
          id="logos-label"
          value={props.logosLabel ?? ''}
          onChange={(e) => updateField('logosLabel', e.target.value)}
          placeholder="Trusted by teams building the future"
        />
      </div>
    </div>
  )
}
