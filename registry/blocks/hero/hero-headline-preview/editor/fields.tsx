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
import { values as defaults } from '../hero-headline-preview-example'

import type { HeroHeadlinePreviewProps } from '../hero-headline-preview'

interface HeroHeadlinePreviewEditorFieldsProps {
  props?: HeroHeadlinePreviewProps
  onUpdate?: (props: HeroHeadlinePreviewProps) => void
}

export function HeroHeadlinePreviewEditorFields({
  props: externalProps,
  onUpdate,
}: HeroHeadlinePreviewEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<HeroHeadlinePreviewProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: unknown) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateMedia = (field: 'src' | 'alt', value: string) => {
    const newProps = {
      ...props,
      media: { ...props.media, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateCta = (field: string, value: unknown) => {
    const currentCta = props.cta ?? defaults.cta
    const newProps: HeroHeadlinePreviewProps = {
      ...props,
      cta: { ...currentCta, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const setCtaEnabled = (checked: boolean) => {
    const currentCta = props.cta ?? defaults.cta
    updateField('cta', { ...currentCta, ctaEnabled: checked })
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
        <Label htmlFor="hero-headline-title" className="text-sm font-medium">
          Title
        </Label>
        <Input
          id="hero-headline-title"
          type="text"
          value={props.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter title"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="hero-headline-description"
          className="text-sm font-medium"
        >
          Description
        </Label>
        <Textarea
          id="hero-headline-description"
          value={props.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Enter description"
          rows={3}
        />
      </div>

      <div className="space-y-3 rounded-md border p-3">
        <Label className="text-sm font-medium">Media</Label>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label
              htmlFor="hero-headline-media-src"
              className="text-muted-foreground text-xs"
            >
              Media URL
            </Label>
            <Input
              id="hero-headline-media-src"
              type="url"
              value={props.media.src}
              onChange={(e) => updateMedia('src', e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="hero-headline-media-alt"
              className="text-muted-foreground text-xs"
            >
              Alt Text
            </Label>
            <Input
              id="hero-headline-media-alt"
              type="text"
              value={props.media.alt}
              onChange={(e) => updateMedia('alt', e.target.value)}
              placeholder="Describe the media"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md border p-3">
        <div className="space-y-0.5">
          <Label
            htmlFor="hero-headline-show-cta"
            className="text-sm font-medium"
          >
            Show CTA Button
          </Label>
          <p className="text-muted-foreground text-xs">
            Toggle to show or hide the call-to-action button
          </p>
        </div>
        <Switch
          id="hero-headline-show-cta"
          checked={props.cta?.ctaEnabled ?? false}
          onCheckedChange={setCtaEnabled}
        />
      </div>

      {(props.cta?.ctaEnabled ?? false) && props.cta && (
        <div className="space-y-3 rounded-md border p-3">
          <Label className="text-sm font-medium">Call to Action</Label>
          <div className="space-y-2">
            <div className="space-y-2">
              <Label
                htmlFor="hero-headline-cta-text"
                className="text-muted-foreground text-xs"
              >
                Button Text
              </Label>
              <Input
                id="hero-headline-cta-text"
                type="text"
                value={props.cta?.text ?? ''}
                onChange={(e) => updateCta('text', e.target.value)}
                placeholder="Get started"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="hero-headline-cta-link"
                className="text-muted-foreground text-xs"
              >
                Link URL
              </Label>
              <Input
                id="hero-headline-cta-link"
                type="url"
                value={props.cta?.link ?? ''}
                onChange={(e) => updateCta('link', e.target.value)}
                placeholder="/blocks"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="hero-headline-cta-variant"
                className="text-muted-foreground text-xs"
              >
                Variant
              </Label>
              <Select
                value={props.cta?.variant ?? 'default'}
                onValueChange={(value) =>
                  updateCta(
                    'variant',
                    value as (typeof ctaVariantOptions)[number],
                  )
                }
              >
                <SelectTrigger
                  id="hero-headline-cta-variant"
                  className="w-full"
                >
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
