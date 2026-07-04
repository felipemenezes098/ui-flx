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
import { values as defaults } from '../hero-01-example'

import type { ButtonVariant, CtaProps } from '../../../shared/cta'
import type { Hero01Props } from '../hero-01'

interface Hero01EditorFieldsProps {
  props?: Hero01Props
  onUpdate?: (props: Hero01Props) => void
}

const VARIANTS: ButtonVariant[] = [
  'default',
  'secondary',
  'outline',
  'ghost',
  'link',
  'destructive',
]

export function Hero01EditorFields({
  props: externalProps,
  onUpdate,
}: Hero01EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Hero01Props>(defaults)

  const props = externalProps ?? internalProps

  const commit = (next: Hero01Props) => {
    if (onUpdate) onUpdate(next)
    else setInternalProps(next)
  }

  const updateField = <K extends keyof Hero01Props>(
    field: K,
    value: Hero01Props[K],
  ) => commit({ ...props, [field]: value })

  const updateCta = (field: keyof CtaProps, value: unknown) => {
    const current = props.primaryCTA ?? { ctaEnabled: true, text: '', link: '' }
    commit({ ...props, primaryCTA: { ...current, [field]: value } })
  }

  const updateIntegrationRows = (rows: string[][]) => {
    updateField('integrationRows', rows)
  }

  const addRow = () => {
    updateIntegrationRows([
      ...props.integrationRows,
      [`Integration ${props.integrationRows.length + 1}`],
    ])
  }

  const removeRow = (rowIndex: number) => {
    updateIntegrationRows(props.integrationRows.filter((_, i) => i !== rowIndex))
  }

  const addIntegration = (rowIndex: number) => {
    const row = props.integrationRows[rowIndex] ?? []
    updateIntegrationRows(
      props.integrationRows.map((current, i) =>
        i === rowIndex
          ? [...current, `Integration ${row.length + 1}`]
          : current,
      ),
    )
  }

  const removeIntegration = (rowIndex: number, nameIndex: number) => {
    updateIntegrationRows(
      props.integrationRows.map((row, i) =>
        i === rowIndex ? row.filter((_, j) => j !== nameIndex) : row,
      ),
    )
  }

  const updateIntegration = (
    rowIndex: number,
    nameIndex: number,
    value: string,
  ) => {
    updateIntegrationRows(
      props.integrationRows.map((row, i) => {
        if (i !== rowIndex) return row
        const next = [...row]
        next[nameIndex] = value
        return next
      }),
    )
  }

  const cta = props.primaryCTA

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
          placeholder="Build what matters."
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
          placeholder="Connect what works."
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
        <Label htmlFor="wash-image" className="text-sm font-medium">
          Background image
        </Label>
        <Input
          id="wash-image"
          type="url"
          value={props.washImage}
          onChange={(e) => updateField('washImage', e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            updateField('variant', value as Hero01Props['variant'])
          }
        >
          <SelectTrigger id="variant" className="w-full">
            <SelectValue placeholder="Variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="compact">Compact</SelectItem>
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
            updateField('animation', value as Hero01Props['animation'])
          }
        >
          <SelectTrigger id="animation" className="w-full">
            <SelectValue placeholder="Animation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="subtle">Subtle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Integration cloud</Label>
          <Button onClick={addRow} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add row
          </Button>
        </div>

        {props.integrationRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="border-border space-y-3 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Row {rowIndex + 1}</Label>
              <Button
                onClick={() => removeRow(rowIndex)}
                size="sm"
                variant="ghost"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              {row.map((name, nameIndex) => (
                <div key={nameIndex} className="flex items-center gap-2">
                  <Input
                    value={name}
                    onChange={(e) =>
                      updateIntegration(rowIndex, nameIndex, e.target.value)
                    }
                    placeholder="Integration name"
                  />
                  <Button
                    onClick={() => removeIntegration(rowIndex, nameIndex)}
                    size="sm"
                    variant="ghost"
                    aria-label={`Remove ${name}`}
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button
              onClick={() => addIntegration(rowIndex)}
              size="sm"
              variant="outline"
              className="w-full"
            >
              <Plus className="mr-2 size-4" />
              Add integration
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-3 rounded-md border p-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Primary CTA</Label>
          <Switch
            checked={cta?.ctaEnabled ?? false}
            onCheckedChange={(checked) => updateCta('ctaEnabled', checked)}
          />
        </div>
        {cta?.ctaEnabled && (
          <div className="space-y-2">
            <Input
              value={cta?.text ?? ''}
              onChange={(e) => updateCta('text', e.target.value)}
              placeholder="Button text"
            />
            <Input
              type="url"
              value={cta?.link ?? ''}
              onChange={(e) => updateCta('link', e.target.value)}
              placeholder="Link URL"
            />
            <Select
              value={cta?.variant ?? 'default'}
              onValueChange={(value) =>
                updateCta('variant', value as ButtonVariant)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Variant" />
              </SelectTrigger>
              <SelectContent>
                {VARIANTS.map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  )
}
