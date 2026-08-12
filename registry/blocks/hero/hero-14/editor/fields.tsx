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
import { values as defaults } from '../hero-14-example'

import type { CtaProps } from '../../../shared/cta'
import type { Hero14Props } from '../hero-14'

interface Hero14EditorFieldsProps {
  props?: Hero14Props
  onUpdate?: (props: Hero14Props) => void
}

export function Hero14EditorFields({
  props: externalProps,
  onUpdate,
}: Hero14EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero14Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero14Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero14Props>(
    field: K,
    value: Hero14Props[K],
  ) => commit({ ...props, [field]: value })

  const updateCta = (
    key: 'primaryCTA' | 'secondaryCTA',
    field: keyof CtaProps,
    value: unknown,
  ) => {
    const current = props[key] ?? { ctaEnabled: true, text: '', link: '' }
    commit({ ...props, [key]: { ...current, [field]: value } })
  }

  const updateLogo = (index: number, value: string) => {
    const next = [...(props.logos ?? [])]
    next[index] = value
    commit({ ...props, logos: next })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Title
        </Label>
        <Textarea
          id="title"
          value={props.title}
          onChange={(e) => updateField('title', e.target.value)}
          rows={2}
          placeholder="Describe the screen. Ship the block."
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
        <Label htmlFor="image" className="text-sm font-medium">
          Image
        </Label>
        <Input
          id="image"
          type="url"
          value={props.image}
          onChange={(e) => updateField('image', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image-alt" className="text-sm font-medium">
          Image alt text
        </Label>
        <Input
          id="image-alt"
          value={props.imageAlt ?? ''}
          onChange={(e) => updateField('imageAlt', e.target.value)}
          placeholder="Describe the image"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Logos</Label>
        <div className="space-y-2">
          {(props.logos ?? []).map((logo, index) => (
            <Input
              key={index}
              value={logo}
              onChange={(e) => updateLogo(index, e.target.value)}
              placeholder="Logo name"
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero14Props['variant'])
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
            updateField('animation', value as Hero14Props['animation'])
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
            onCheckedChange={(checked) =>
              updateCta('primaryCTA', 'ctaEnabled', checked)
            }
          />
        </div>
        {props.primaryCTA?.ctaEnabled && (
          <div className="space-y-2">
            <Input
              value={props.primaryCTA?.text ?? ''}
              onChange={(e) =>
                updateCta('primaryCTA', 'text', e.target.value)
              }
              placeholder="Button text"
            />
            <Input
              type="url"
              value={props.primaryCTA?.link ?? ''}
              onChange={(e) =>
                updateCta('primaryCTA', 'link', e.target.value)
              }
              placeholder="Link URL"
            />
          </div>
        )}
      </div>

      <div className="space-y-3 rounded-md border p-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Secondary CTA</Label>
          <Switch
            checked={props.secondaryCTA?.ctaEnabled ?? false}
            onCheckedChange={(checked) =>
              updateCta('secondaryCTA', 'ctaEnabled', checked)
            }
          />
        </div>
        {props.secondaryCTA?.ctaEnabled && (
          <div className="space-y-2">
            <Input
              value={props.secondaryCTA?.text ?? ''}
              onChange={(e) =>
                updateCta('secondaryCTA', 'text', e.target.value)
              }
              placeholder="Button text"
            />
            <Input
              type="url"
              value={props.secondaryCTA?.link ?? ''}
              onChange={(e) =>
                updateCta('secondaryCTA', 'link', e.target.value)
              }
              placeholder="Link URL"
            />
          </div>
        )}
      </div>
    </div>
  )
}
