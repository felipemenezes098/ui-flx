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
import { values as defaults } from '../hero-11-example'

import type { Hero11Props } from '../hero-11'

interface Hero11EditorFieldsProps {
  props?: Hero11Props
  onUpdate?: (props: Hero11Props) => void
}

export function Hero11EditorFields({
  props: externalProps,
  onUpdate,
}: Hero11EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero11Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero11Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero11Props>(
    field: K,
    value: Hero11Props[K],
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
          placeholder="The interface system for teams and agents."
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
          placeholder="Purpose-built blocks for planning and shipping product UI."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="feature-text" className="text-sm font-medium">
          Feature text
        </Label>
        <Input
          id="feature-text"
          value={props.featureText ?? ''}
          onChange={(e) => updateField('featureText', e.target.value)}
          placeholder="Compositions"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="feature-href" className="text-sm font-medium">
          Feature link
        </Label>
        <Input
          id="feature-href"
          type="url"
          value={props.featureHref ?? ''}
          onChange={(e) => updateField('featureHref', e.target.value)}
          placeholder="/compositions"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero11Props['variant'])
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
            updateField('animation', value as Hero11Props['animation'])
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
