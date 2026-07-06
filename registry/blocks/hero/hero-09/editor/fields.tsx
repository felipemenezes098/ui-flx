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
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../hero-09-example'

import type { Hero09Props } from '../hero-09'

interface Hero09EditorFieldsProps {
  props?: Hero09Props
  onUpdate?: (props: Hero09Props) => void
}

export function Hero09EditorFields({
  props: externalProps,
  onUpdate,
}: Hero09EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero09Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero09Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero09Props>(
    field: K,
    value: Hero09Props[K],
  ) => commit({ ...props, [field]: value })

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
          placeholder="Find your perfect"
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
          placeholder="place to live."
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
        <Label htmlFor="search-placeholder" className="text-sm font-medium">
          Search placeholder
        </Label>
        <Input
          id="search-placeholder"
          value={props.searchPlaceholder ?? ''}
          onChange={(e) => updateField('searchPlaceholder', e.target.value)}
          placeholder="Search your property you want"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="search-button" className="text-sm font-medium">
          Search button text
        </Label>
        <Input
          id="search-button"
          value={props.searchButtonText ?? ''}
          onChange={(e) => updateField('searchButtonText', e.target.value)}
          placeholder="Search"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hero-image" className="text-sm font-medium">
          Hero image
        </Label>
        <Input
          id="hero-image"
          type="url"
          value={props.heroImage}
          onChange={(e) => updateField('heroImage', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bottom-title" className="text-sm font-medium">
          Bottom title
        </Label>
        <Input
          id="bottom-title"
          value={props.bottomTitle}
          onChange={(e) => updateField('bottomTitle', e.target.value)}
          placeholder="Explore spaces"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bottom-title-line-2" className="text-sm font-medium">
          Bottom title line 2
        </Label>
        <Input
          id="bottom-title-line-2"
          value={props.bottomTitleLine2 ?? ''}
          onChange={(e) => updateField('bottomTitleLine2', e.target.value)}
          placeholder="crafted with purpose."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bottom-text" className="text-sm font-medium">
          Bottom text
        </Label>
        <Textarea
          id="bottom-text"
          value={props.bottomText ?? ''}
          onChange={(e) => updateField('bottomText', e.target.value)}
          rows={2}
          placeholder="Enter bottom text"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero09Props['variant'])
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
            updateField('animation', value as Hero09Props['animation'])
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
    </div>
  )
}
