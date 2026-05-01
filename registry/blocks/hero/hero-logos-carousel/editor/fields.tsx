'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
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
import { values as defaults } from '../hero-logos-carousel-example'

import type { HeroLogosCarouselProps } from '../hero-logos-carousel'

interface HeroLogosCarouselEditorFieldsProps {
  props?: HeroLogosCarouselProps
  onUpdate?: (props: HeroLogosCarouselProps) => void
}

export function HeroLogosCarouselEditorFields({
  props: externalProps,
  onUpdate,
}: HeroLogosCarouselEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<HeroLogosCarouselProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: string) => {
    const newProps = { ...props, [field]: value }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  const updatePrimaryCta = (field: string, value: unknown) => {
    const current = props.primaryCTA ?? defaults.primaryCTA
    const newProps = {
      ...props,
      primaryCTA: { ...current, [field]: value },
    }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  const updateSecondaryCta = (field: string, value: unknown) => {
    const current = props.secondaryCTA ?? defaults.secondaryCTA
    const newProps = {
      ...props,
      secondaryCTA: { ...current, [field]: value },
    }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  const updateLogos = (logos: HeroLogosCarouselProps['logos']) => {
    const newProps = { ...props, logos }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  const addLogo = () => {
    updateLogos([
      ...props.logos,
      {
        title: 'New Logo',
        url: 'https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg',
      },
    ])
  }

  const removeLogo = (index: number) => {
    updateLogos(props.logos.filter((_, i) => i !== index))
  }

  const updateLogo = (index: number, field: 'title' | 'url', value: string) => {
    const newLogos = [...props.logos]
    newLogos[index] = { ...newLogos[index], [field]: value }
    updateLogos(newLogos)
  }

  const updateCarouselItems = (
    carouselItems: HeroLogosCarouselProps['carouselItems'],
  ) => {
    const newProps = { ...props, carouselItems }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  const addCarouselItem = () => {
    updateCarouselItems([
      ...props.carouselItems,
      {
        title: 'New Image',
        image:
          'https://images.unsplash.com/photo-1729575846511-f499d2e17d79?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ])
  }

  const removeCarouselItem = (index: number) => {
    updateCarouselItems(props.carouselItems.filter((_, i) => i !== index))
  }

  const updateCarouselItem = (
    index: number,
    field: 'title' | 'image',
    value: string,
  ) => {
    const newItems = [...props.carouselItems]
    newItems[index] = { ...newItems[index], [field]: value }
    updateCarouselItems(newItems)
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
    <div className="space-y-6">
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

      <div className="space-y-2">
        <Label htmlFor="logosInfo" className="text-sm font-medium">
          Logos info
        </Label>
        <Input
          id="logosInfo"
          type="text"
          value={props.logosInfo ?? ''}
          onChange={(e) => updateField('logosInfo', e.target.value)}
          placeholder="Our design crew worked with industry leaders"
        />
      </div>

      <div className="flex items-center justify-between rounded-md border p-3">
        <Label className="text-sm font-medium">Primary CTA</Label>
        <Switch
          checked={props.primaryCTA?.ctaEnabled ?? true}
          onCheckedChange={(checked) => updatePrimaryCta('ctaEnabled', checked)}
        />
      </div>
      {(props.primaryCTA?.ctaEnabled ?? true) && props.primaryCTA && (
        <div className="space-y-3 rounded-md border p-3">
          <Label className="text-sm font-medium">Primary CTA</Label>
          <div className="space-y-2">
            <Input
              value={props.primaryCTA.text}
              onChange={(e) => updatePrimaryCta('text', e.target.value)}
              placeholder="Button text"
            />
            <Input
              type="url"
              value={props.primaryCTA.link}
              onChange={(e) => updatePrimaryCta('link', e.target.value)}
              placeholder="Link URL"
            />
            <Select
              value={props.primaryCTA.variant ?? 'default'}
              onValueChange={(value) =>
                updatePrimaryCta(
                  'variant',
                  value as (typeof ctaVariantOptions)[number],
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Variant" />
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
      )}

      <div className="flex items-center justify-between rounded-md border p-3">
        <Label className="text-sm font-medium">Secondary CTA</Label>
        <Switch
          checked={props.secondaryCTA?.ctaEnabled ?? false}
          onCheckedChange={(checked) =>
            updateSecondaryCta('ctaEnabled', checked)
          }
        />
      </div>
      {(props.secondaryCTA?.ctaEnabled ?? false) && props.secondaryCTA && (
        <div className="space-y-3 rounded-md border p-3">
          <Label className="text-sm font-medium">Secondary CTA</Label>
          <div className="space-y-2">
            <Input
              value={props.secondaryCTA.text}
              onChange={(e) => updateSecondaryCta('text', e.target.value)}
              placeholder="Button text"
            />
            <Input
              type="url"
              value={props.secondaryCTA.link}
              onChange={(e) => updateSecondaryCta('link', e.target.value)}
              placeholder="Link URL"
            />
            <Select
              value={props.secondaryCTA.variant ?? 'secondary'}
              onValueChange={(value) =>
                updateSecondaryCta(
                  'variant',
                  value as (typeof ctaVariantOptions)[number],
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Variant" />
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
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Logos</Label>
          <Button onClick={addLogo} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Logo
          </Button>
        </div>
        {props.logos.map((item, index) => (
          <div
            key={`${item.title}-${item.url}-${index}`}
            className="border-border space-y-4 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Logo {index + 1}</Label>
              <Button
                onClick={() => removeLogo(index)}
                size="sm"
                variant="ghost"
              >
                <X className="size-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-medium">Title</Label>
              <Input
                value={item.title}
                onChange={(e) => updateLogo(index, 'title', e.target.value)}
                placeholder="Company name"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-medium">URL</Label>
              <Input
                value={item.url}
                onChange={(e) => updateLogo(index, 'url', e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Carousel items</Label>
          <Button onClick={addCarouselItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Item
          </Button>
        </div>
        {props.carouselItems.map((item, index) => (
          <div
            key={`${item.title}-${item.image}-${index}`}
            className="border-border space-y-4 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Item {index + 1}</Label>
              <Button
                onClick={() => removeCarouselItem(index)}
                size="sm"
                variant="ghost"
              >
                <X className="size-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-medium">Title</Label>
              <Input
                value={item.title}
                onChange={(e) =>
                  updateCarouselItem(index, 'title', e.target.value)
                }
                placeholder="Image title"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-medium">Image URL</Label>
              <Input
                type="url"
                value={item.image}
                onChange={(e) =>
                  updateCarouselItem(index, 'image', e.target.value)
                }
                placeholder="https://..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
