'use client'

import { Plus, X } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { values as defaults } from '../logo-marquee-example'

import type { LogoMarqueeProps } from '../logo-marquee'

interface LogoMarqueeEditorFieldsProps {
  props?: LogoMarqueeProps
  onUpdate?: (props: LogoMarqueeProps) => void
}

export function LogoMarqueeEditorFields({
  props: externalProps,
  onUpdate,
}: LogoMarqueeEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<LogoMarqueeProps>(defaults)

  const props = externalProps ?? internalProps

  const updateItems = (items: LogoMarqueeProps['items']) => {
    const newProps = { ...props, items }

    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const addItem = () => {
    updateItems([
      ...props.items,
      {
        title: 'Google',
        url: 'https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
      },
    ])
  }

  const removeItem = (index: number) => {
    updateItems(props.items.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, field: 'title' | 'url', value: string) => {
    const newItems = [...props.items]
    newItems[index] = { ...newItems[index], [field]: value }
    updateItems(newItems)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Logos</Label>
          <Button onClick={addItem} size="sm" variant="outline">
            <Plus className="mr-2 size-4" />
            Add Logo
          </Button>
        </div>

        {props.items.map((item, index) => (
          <div
            key={`${item.title}-${item.url}-${index}`}
            className="border-border space-y-4 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Logo {index + 1}</Label>
              <Button
                onClick={() => removeItem(index)}
                size="sm"
                variant="ghost"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Title</Label>
              <Input
                value={item.title}
                onChange={(e) => updateItem(index, 'title', e.target.value)}
                placeholder="Company name"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">URL</Label>
              <Input
                value={item.url}
                onChange={(e) => updateItem(index, 'url', e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
