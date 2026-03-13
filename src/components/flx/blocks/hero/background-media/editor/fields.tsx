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

import type { BackgroundMediaProps } from '../background-media'

const defaults = blockDefaults['background-media'].default

interface BackgroundMediaEditorFieldsProps {
  props?: BackgroundMediaProps
  onUpdate?: (props: BackgroundMediaProps) => void
}

export function BackgroundMediaEditorFields({
  props: externalProps,
  onUpdate,
}: BackgroundMediaEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<BackgroundMediaProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: any) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateImage = (field: 'url' | 'alt' | 'overlay', value: any) => {
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

  const updateCta = (field: string, value: any) => {
    const currentCta = props.cta ?? defaults.cta
    const newProps: BackgroundMediaProps = {
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
    const newProps: BackgroundMediaProps = {
      ...props,
      cta: { ...currentCta, ctaEnabled: checked },
    }
    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
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

      <div className="space-y-2">
        <Label htmlFor="imageUrl" className="text-sm font-medium">
          Image URL
        </Label>
        <Input
          id="imageUrl"
          value={props.image.url}
          onChange={(e) => updateImage('url', e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageAlt" className="text-sm font-medium">
          Image Alt Text
        </Label>
        <Input
          id="imageAlt"
          value={props.image.alt}
          onChange={(e) => updateImage('alt', e.target.value)}
          placeholder="Image description"
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="overlay" className="text-sm font-medium">
          Image Overlay
        </Label>
        <Switch
          id="overlay"
          checked={props.image.overlay ?? false}
          onCheckedChange={(checked) => updateImage('overlay', checked)}
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="whiteTexts" className="text-sm font-medium">
          White Texts
        </Label>
        <Switch
          id="whiteTexts"
          checked={props.whiteTexts}
          onCheckedChange={(checked) => updateField('whiteTexts', checked)}
        />
      </div>

      <div className="flex items-center justify-between rounded-md border p-3">
        <Label htmlFor="showCta" className="text-sm font-medium">
          Show CTA
        </Label>
        <Switch
          id="showCta"
          checked={props.cta?.ctaEnabled ?? false}
          onCheckedChange={setCtaEnabled}
        />
      </div>

      {(props.cta?.ctaEnabled ?? false) && props.cta && (
        <>
          <div className="space-y-2">
            <Label htmlFor="ctaText" className="text-sm font-medium">
              CTA Text
            </Label>
            <Input
              id="ctaText"
              value={props.cta?.text ?? ''}
              onChange={(e) => updateCta('text', e.target.value)}
              placeholder="Button text"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ctaLink" className="text-sm font-medium">
              CTA Link
            </Label>
            <Input
              id="ctaLink"
              value={props.cta?.link ?? ''}
              onChange={(e) => updateCta('link', e.target.value)}
              placeholder="/"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ctaVariant" className="text-sm font-medium">
              CTA Variant
            </Label>
            <Select
              value={props.cta?.variant ?? 'default'}
              onValueChange={(value) => updateCta('variant', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="destructive">Destructive</SelectItem>
                <SelectItem value="outline">Outline</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="ghost">Ghost</SelectItem>
                <SelectItem value="link">Link</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}
    </div>
  )
}
