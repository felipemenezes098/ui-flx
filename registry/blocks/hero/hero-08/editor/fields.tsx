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
import { values as defaults } from '../hero-08-example'

import type { Hero08Card, Hero08Props } from '../hero-08'

interface Hero08EditorFieldsProps {
  props?: Hero08Props
  onUpdate?: (props: Hero08Props) => void
}

export function Hero08EditorFields({
  props: externalProps,
  onUpdate,
}: Hero08EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero08Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero08Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero08Props>(
    field: K,
    value: Hero08Props[K],
  ) => commit({ ...props, [field]: value })

  const updateCard = (index: number, patch: Partial<Hero08Card>) => {
    const cards = props.cards.map((card, i) =>
      i === index ? { ...card, ...patch } : card,
    )
    commit({ ...props, cards })
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
          placeholder="Learn the craft behind every great design"
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
          rows={2}
          placeholder="Enter description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="social-proof" className="text-sm font-medium">
          Social proof
        </Label>
        <Input
          id="social-proof"
          value={props.socialProof ?? ''}
          onChange={(e) => updateField('socialProof', e.target.value)}
          placeholder="Join 40,000+ Makers Learning With Us"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero08Props['variant'])
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
            updateField('animation', value as Hero08Props['animation'])
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

      {props.cards.map((card, i) => (
        <div key={i} className="space-y-3 rounded-md border p-3">
          <Label className="text-sm font-medium">Card {i + 1}</Label>
          <Input
            value={card.title}
            onChange={(e) => updateCard(i, { title: e.target.value })}
            placeholder="Card title"
          />
          <Input
            value={card.subtitle}
            onChange={(e) => updateCard(i, { subtitle: e.target.value })}
            placeholder="Card subtitle"
          />
          <Input
            type="url"
            value={card.image}
            onChange={(e) => updateCard(i, { image: e.target.value })}
            placeholder="https://images.unsplash.com/..."
          />
          <Input
            value={card.cta?.text ?? ''}
            onChange={(e) =>
              updateCard(i, {
                cta: {
                  ...(card.cta ?? { ctaEnabled: true, text: '', link: '' }),
                  ctaEnabled: true,
                  text: e.target.value,
                },
              })
            }
            placeholder="Button text"
          />
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Invert (white text)</Label>
            <Switch
              checked={card.invert ?? false}
              onCheckedChange={(checked) => updateCard(i, { invert: checked })}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
