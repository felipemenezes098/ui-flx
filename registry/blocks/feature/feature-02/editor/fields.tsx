'use client'

import * as React from 'react'
import { Plus, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
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
import { values as defaults } from '../feature-02-example'

import type { Feature02Props, Feature02Step } from '../feature-02'

export function Feature02EditorFields({
  props: externalProps,
  onUpdate,
}: {
  props?: Feature02Props
  onUpdate?: (props: Feature02Props) => void
} = {}) {
  const [internal, setInternal] = React.useState<Feature02Props>(defaults)
  const props = externalProps ?? internal

  const update = (partial: Partial<Feature02Props>) => {
    const next = { ...props, ...partial }
    onUpdate ? onUpdate(next) : setInternal(next)
  }

  const updateStep = (index: number, partial: Partial<Feature02Step>) => {
    update({
      steps: props.steps.map((step, i) =>
        i === index ? { ...step, ...partial } : step,
      ),
    })
  }

  const addStep = () => {
    const nextNumber = String(props.steps.length + 1).padStart(2, '0')
    update({
      steps: [
        ...props.steps,
        { number: nextNumber, title: 'New Step', description: '' },
      ],
    })
  }

  const removeStep = (index: number) => {
    update({ steps: props.steps.filter((_, i) => i !== index) })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Title</Label>
        <Input
          value={props.title}
          onChange={(e) => update({ title: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          value={props.description}
          onChange={(e) => update({ description: e.target.value })}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label>Image URL</Label>
        <Input
          value={props.image}
          onChange={(e) => update({ image: e.target.value })}
          placeholder="https://..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            update({ variant: value as Feature02Props['variant'] })
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
            update({ animation: value as Feature02Props['animation'] })
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

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Steps</Label>
          <Button onClick={addStep} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Step
          </Button>
        </div>

        {props.steps.map((step, index) => (
          <div
            key={index}
            className="border-border space-y-3 rounded-lg border p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-xs font-medium">
                Step {index + 1}
              </span>
              <Button
                onClick={() => removeStep(index)}
                size="sm"
                variant="ghost"
                aria-label="Remove step"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Number</Label>
              <Input
                value={step.number}
                onChange={(e) =>
                  updateStep(index, { number: e.target.value })
                }
                placeholder="01"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Title</Label>
              <Input
                value={step.title}
                onChange={(e) => updateStep(index, { title: e.target.value })}
                placeholder="Step title"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Description</Label>
              <Textarea
                value={step.description}
                onChange={(e) =>
                  updateStep(index, { description: e.target.value })
                }
                rows={2}
                placeholder="Step description"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
