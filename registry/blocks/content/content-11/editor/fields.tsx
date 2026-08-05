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
import { values as defaults } from '../content-11-example'

import type { Content11Feature, Content11Props } from '../content-11'

export function Content11EditorFields({
  props: externalProps,
  onUpdate,
}: {
  props?: Content11Props
  onUpdate?: (props: Content11Props) => void
} = {}) {
  const [internal, setInternal] = React.useState<Content11Props>(defaults)
  const props = externalProps ?? internal

  const update = (partial: Partial<Content11Props>) => {
    const next = { ...props, ...partial }
    onUpdate ? onUpdate(next) : setInternal(next)
  }

  const updateFeature1 = (partial: Partial<Content11Feature>) => {
    update({ feature1: { ...props.feature1, ...partial } })
  }

  const updateFeature2 = (partial: Partial<Content11Feature>) => {
    update({ feature2: { ...props.feature2, ...partial } })
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
          value={props.description ?? ''}
          onChange={(e) => update({ description: e.target.value })}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content-11-variant" className="text-sm font-medium">
          Variant
        </Label>
        <Select
          value={props.variant ?? 'standard'}
          onValueChange={(value) =>
            update({ variant: value as Content11Props['variant'] })
          }
        >
          <SelectTrigger id="content-11-variant" className="w-full">
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
        <Label htmlFor="content-11-animation" className="text-sm font-medium">
          Animation
        </Label>
        <Select
          value={props.animation ?? 'none'}
          onValueChange={(value) =>
            update({ animation: value as Content11Props['animation'] })
          }
        >
          <SelectTrigger id="content-11-animation" className="w-full">
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

      <div className="space-y-3 rounded-lg border p-3">
        <Label className="text-sm font-medium">Feature 1</Label>

        <div className="space-y-2">
          <Label className="text-xs">Icon name</Label>
          <Input
            value={props.feature1.icon}
            onChange={(e) => updateFeature1({ icon: e.target.value })}
            placeholder="LayoutDashboard, Sparkles, etc."
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs">Title</Label>
          <Input
            value={props.feature1.title}
            onChange={(e) => updateFeature1({ title: e.target.value })}
            placeholder="Feature title"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs">Description</Label>
          <Textarea
            value={props.feature1.description}
            onChange={(e) =>
              updateFeature1({ description: e.target.value })
            }
            rows={2}
            placeholder="Feature description"
          />
        </div>
      </div>

      <div className="space-y-3 rounded-lg border p-3">
        <Label className="text-sm font-medium">Feature 2</Label>

        <div className="space-y-2">
          <Label className="text-xs">Icon name</Label>
          <Input
            value={props.feature2.icon}
            onChange={(e) => updateFeature2({ icon: e.target.value })}
            placeholder="LayoutDashboard, Sparkles, etc."
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs">Title</Label>
          <Input
            value={props.feature2.title}
            onChange={(e) => updateFeature2({ title: e.target.value })}
            placeholder="Feature title"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs">Description</Label>
          <Textarea
            value={props.feature2.description}
            onChange={(e) =>
              updateFeature2({ description: e.target.value })
            }
            rows={2}
            placeholder="Feature description"
          />
        </div>
      </div>
    </div>
  )
}
