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
import { blockDefaults } from '@/lib/block-defaults'

import type { HeroContentMediaProps } from '../hero-content-media'

const defaults = blockDefaults['hero-content-media'].default

interface HeroContentMediaEditorFieldsProps {
  props?: HeroContentMediaProps
  onUpdate?: (props: HeroContentMediaProps) => void
}

export function HeroContentMediaEditorFields({
  props: externalProps,
  onUpdate,
}: HeroContentMediaEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<HeroContentMediaProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: string) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateImage = (field: 'src' | 'alt', value: string) => {
    const newProps = {
      ...props,
      image: { ...props.image, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updatePrimaryCta = (field: string, value: unknown) => {
    const current = props.primaryCTA ?? defaults.primaryCTA
    const newProps: HeroContentMediaProps = {
      ...props,
      primaryCTA: { ...current, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const setPrimaryCtaEnabled = (checked: boolean) => {
    updatePrimaryCta('ctaEnabled', checked)
  }

  const updateSecondaryCta = (field: string, value: unknown) => {
    const current = props.secondaryCTA ?? defaults.secondaryCTA
    const newProps: HeroContentMediaProps = {
      ...props,
      secondaryCTA: { ...current, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const setSecondaryCtaEnabled = (checked: boolean) => {
    updateSecondaryCta('ctaEnabled', checked)
  }

  const ctaVariantOptions = [
    'default',
    'destructive',
    'outline',
    'secondary',
    'ghost',
    'link',
  ] as const

  return (
    <div className="space-y-4">
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
          value={props.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Enter description"
          rows={3}
        />
      </div>

      <div className="space-y-3 rounded-md border p-3">
        <Label className="text-sm font-medium">Image</Label>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label
              htmlFor="image-src"
              className="text-muted-foreground text-xs"
            >
              Image URL
            </Label>
            <Input
              id="image-src"
              type="url"
              value={props.image.src}
              onChange={(e) => updateImage('src', e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="image-alt"
              className="text-muted-foreground text-xs"
            >
              Alt Text
            </Label>
            <Input
              id="image-alt"
              type="text"
              value={props.image.alt}
              onChange={(e) => updateImage('alt', e.target.value)}
              placeholder="Image description"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md border p-3">
        <div className="space-y-0.5">
          <Label htmlFor="show-primary-cta" className="text-sm font-medium">
            Primary CTA
          </Label>
          <p className="text-muted-foreground text-xs">
            Toggle to show or hide the primary button
          </p>
        </div>
        <Switch
          id="show-primary-cta"
          checked={props.primaryCTA?.ctaEnabled ?? false}
          onCheckedChange={setPrimaryCtaEnabled}
        />
      </div>

      {(props.primaryCTA?.ctaEnabled ?? false) && props.primaryCTA && (
        <div className="space-y-3 rounded-md border p-3">
          <Label className="text-sm font-medium">Primary CTA</Label>
          <div className="space-y-2">
            <div className="space-y-2">
              <Label
                htmlFor="primary-cta-text"
                className="text-muted-foreground text-xs"
              >
                Button Text
              </Label>
              <Input
                id="primary-cta-text"
                type="text"
                value={props.primaryCTA?.text ?? ''}
                onChange={(e) => updatePrimaryCta('text', e.target.value)}
                placeholder="Get started"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="primary-cta-link"
                className="text-muted-foreground text-xs"
              >
                Link URL
              </Label>
              <Input
                id="primary-cta-link"
                type="url"
                value={props.primaryCTA?.link ?? ''}
                onChange={(e) => updatePrimaryCta('link', e.target.value)}
                placeholder="/"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="primary-cta-variant"
                className="text-muted-foreground text-xs"
              >
                Variant
              </Label>
              <Select
                value={props.primaryCTA?.variant ?? 'default'}
                onValueChange={(value) =>
                  updatePrimaryCta(
                    'variant',
                    value as (typeof ctaVariantOptions)[number],
                  )
                }
              >
                <SelectTrigger id="primary-cta-variant" className="w-full">
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
                <SelectContent>
                  {ctaVariantOptions.map((v) => (
                    <SelectItem key={v} value={v}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between rounded-md border p-3">
        <div className="space-y-0.5">
          <Label htmlFor="show-secondary-cta" className="text-sm font-medium">
            Secondary CTA
          </Label>
          <p className="text-muted-foreground text-xs">
            Toggle to show or hide the secondary button
          </p>
        </div>
        <Switch
          id="show-secondary-cta"
          checked={props.secondaryCTA?.ctaEnabled ?? false}
          onCheckedChange={setSecondaryCtaEnabled}
        />
      </div>

      {(props.secondaryCTA?.ctaEnabled ?? false) && props.secondaryCTA && (
        <div className="space-y-3 rounded-md border p-3">
          <Label className="text-sm font-medium">Secondary CTA</Label>
          <div className="space-y-2">
            <div className="space-y-2">
              <Label
                htmlFor="secondary-cta-text"
                className="text-muted-foreground text-xs"
              >
                Button Text
              </Label>
              <Input
                id="secondary-cta-text"
                type="text"
                value={props.secondaryCTA?.text ?? ''}
                onChange={(e) => updateSecondaryCta('text', e.target.value)}
                placeholder="Learn more"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="secondary-cta-link"
                className="text-muted-foreground text-xs"
              >
                Link URL
              </Label>
              <Input
                id="secondary-cta-link"
                type="url"
                value={props.secondaryCTA?.link ?? ''}
                onChange={(e) => updateSecondaryCta('link', e.target.value)}
                placeholder="/docs"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="secondary-cta-variant"
                className="text-muted-foreground text-xs"
              >
                Variant
              </Label>
              <Select
                value={props.secondaryCTA?.variant ?? 'outline'}
                onValueChange={(value) =>
                  updateSecondaryCta(
                    'variant',
                    value as (typeof ctaVariantOptions)[number],
                  )
                }
              >
                <SelectTrigger id="secondary-cta-variant" className="w-full">
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
                <SelectContent>
                  {ctaVariantOptions.map((v) => (
                    <SelectItem key={v} value={v}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
