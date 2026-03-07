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

import type { GridTwoColumnsProps } from '../types'

const defaults = blockDefaults['grid-two-columns'].default

interface GridTwoColumnsEditorFieldsProps {
  props?: GridTwoColumnsProps
  onUpdate?: (props: GridTwoColumnsProps) => void
}

export function GridTwoColumnsEditorFields({
  props: externalProps,
  onUpdate,
}: GridTwoColumnsEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<GridTwoColumnsProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: any) => {
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

  const updateCta = (field: string, value: any) => {
    const currentCta = props.cta ?? defaults.cta
    const newProps: GridTwoColumnsProps = {
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
          <Label htmlFor="show-cta" className="text-sm font-medium">
            Show CTA Button
          </Label>
          <p className="text-muted-foreground text-xs">
            Toggle to show or hide the call-to-action button
          </p>
        </div>
        <Switch
          id="show-cta"
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
                htmlFor="cta-text"
                className="text-muted-foreground text-xs"
              >
                Button Text
              </Label>
              <Input
                id="cta-text"
                type="text"
                value={props.cta?.text ?? ''}
                onChange={(e) => updateCta('text', e.target.value)}
                placeholder="Get started"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="cta-link"
                className="text-muted-foreground text-xs"
              >
                Link URL
              </Label>
              <Input
                id="cta-link"
                type="url"
                value={props.cta?.link ?? ''}
                onChange={(e) => updateCta('link', e.target.value)}
                placeholder="/"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="cta-variant"
                className="text-muted-foreground text-xs"
              >
                Variant
              </Label>
              <Select
                value={props.cta?.variant ?? 'default'}
                onValueChange={(value) =>
                  updateCta(
                    'variant',
                    value as
                      | 'default'
                      | 'destructive'
                      | 'outline'
                      | 'secondary'
                      | 'ghost'
                      | 'link',
                  )
                }
              >
                <SelectTrigger id="cta-variant" className="w-full">
                  <SelectValue placeholder="Select variant" />
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
          </div>
        </div>
      )}
    </div>
  )
}
