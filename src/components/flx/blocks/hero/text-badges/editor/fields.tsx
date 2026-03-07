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
import { blockDefaults } from '@/lib/block-defaults'

import type { TextBadgesProps } from '../types'

const defaults = blockDefaults['text-badges'].default

interface TextBadgesEditorFieldsProps {
  props?: TextBadgesProps
  onUpdate?: (props: TextBadgesProps) => void
}

export function TextBadgesEditorFields({
  props: externalProps,
  onUpdate,
}: TextBadgesEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<TextBadgesProps>(defaults)

  const props = externalProps ?? internalProps

  const updateField = (field: string, value: any) => {
    const newProps = { ...props, [field]: value }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updatePrimaryCta = (field: string, value: any) => {
    const newProps = {
      ...props,
      primaryCTA: { ...props.primaryCTA, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateSecondaryCta = (field: string, value: any) => {
    const currentSecondary = props.secondaryCTA ?? defaults.secondaryCTA
    const newProps = {
      ...props,
      secondaryCTA: { ...currentSecondary, [field]: value },
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const setSecondaryCtaEnabled = (checked: boolean) => {
    const currentSecondary = props.secondaryCTA ?? defaults.secondaryCTA
    const newProps = {
      ...props,
      secondaryCTA: { ...currentSecondary, ctaEnabled: checked },
    }
    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addFeature = () => {
    const newProps = {
      ...props,
      features: [
        ...props.features,
        {
          icon: 'Check',
          title: 'New Feature',
        },
      ],
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const removeFeature = (index: number) => {
    const newProps = {
      ...props,
      features: props.features.filter((_, i) => i !== index),
    }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateFeature = (index: number, field: string, value: any) => {
    const newFeatures = [...props.features]
    newFeatures[index] = { ...newFeatures[index], [field]: value }
    const newProps = { ...props, features: newFeatures }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  return (
    <div className="space-y-6">
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

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-md border p-3">
          <Label className="text-sm font-medium">Enable Primary CTA</Label>
          <Switch
            checked={props.primaryCTA?.ctaEnabled ?? true}
            onCheckedChange={(checked) =>
              updatePrimaryCta('ctaEnabled', checked)
            }
          />
        </div>
        {(props.primaryCTA?.ctaEnabled ?? true) && (
          <>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Primary CTA</Label>
              <Input
                value={props.primaryCTA?.text ?? ''}
                onChange={(e) => updatePrimaryCta('text', e.target.value)}
                placeholder="Button text"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Primary CTA Link</Label>
              <Input
                value={props.primaryCTA?.link ?? ''}
                onChange={(e) => updatePrimaryCta('link', e.target.value)}
                placeholder="/"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Primary CTA Variant</Label>
              <Select
                value={props.primaryCTA?.variant || 'default'}
                onValueChange={(value) => updatePrimaryCta('variant', value)}
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

      <div className="flex items-center justify-between rounded-md border p-3">
        <Label className="text-sm font-medium">Enable Secondary CTA</Label>
        <Switch
          checked={props.secondaryCTA?.ctaEnabled ?? false}
          onCheckedChange={setSecondaryCtaEnabled}
        />
      </div>
      {(props.secondaryCTA?.ctaEnabled ?? false) && props.secondaryCTA && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Secondary CTA</Label>
            <Input
              value={props.secondaryCTA?.text ?? ''}
              onChange={(e) => updateSecondaryCta('text', e.target.value)}
              placeholder="Button text"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Secondary CTA Link</Label>
            <Input
              value={props.secondaryCTA?.link ?? ''}
              onChange={(e) => updateSecondaryCta('link', e.target.value)}
              placeholder="/"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Secondary CTA Variant</Label>
            <Select
              value={props.secondaryCTA?.variant || 'secondary'}
              onValueChange={(value) => updateSecondaryCta('variant', value)}
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
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Features</Label>
          <Button onClick={addFeature} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Feature
          </Button>
        </div>

        {props.features.map((feature, index) => (
          <div
            key={index}
            className="border-border space-y-4 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Feature {index + 1}</Label>
              <Button
                onClick={() => removeFeature(index)}
                size="sm"
                variant="ghost"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Icon Name</Label>
              <Input
                value={feature.icon}
                onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                placeholder="Check"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Title</Label>
              <Input
                value={feature.title}
                onChange={(e) => updateFeature(index, 'title', e.target.value)}
                placeholder="Feature title"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
