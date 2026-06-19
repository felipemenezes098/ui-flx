'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { values as defaults } from '../testimonials-01-example'

import type { Testimonials01Props } from '../testimonials-01'

interface Testimonials01EditorFieldsProps {
  props?: Testimonials01Props
  onUpdate?: (props: Testimonials01Props) => void
}

export function Testimonials01EditorFields({
  props: externalProps,
  onUpdate,
}: Testimonials01EditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<Testimonials01Props>(defaults)

  const props = externalProps ?? internalProps

  const updateProps = (newProps: Testimonials01Props) => {
    if (onUpdate) {
      onUpdate(newProps)
    } else {
      setInternalProps(newProps)
    }
  }

  const updateField = (field: keyof Testimonials01Props, value: string) => {
    updateProps({ ...props, [field]: value })
  }

  const updateAuthorField = (
    field: keyof Testimonials01Props['author'],
    value: string,
  ) => {
    updateProps({
      ...props,
      author: { ...props.author, [field]: value },
    })
  }

  const updateAvatarField = (
    field: keyof Testimonials01Props['author']['avatar'],
    value: string,
  ) => {
    updateProps({
      ...props,
      author: {
        ...props.author,
        avatar: { ...props.author.avatar, [field]: value },
      },
    })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="quote" className="text-sm font-medium">
          Quote
        </Label>
        <Textarea
          id="quote"
          value={props.quote}
          onChange={(e) => updateField('quote', e.target.value)}
          placeholder="Enter testimonial quote"
          rows={4}
        />
      </div>

      <div className="space-y-3 rounded-md border p-3">
        <Label className="text-sm font-medium">Author</Label>

        <div className="space-y-2">
          <Label htmlFor="author-name" className="text-muted-foreground text-xs">
            Name
          </Label>
          <Input
            id="author-name"
            type="text"
            value={props.author.name}
            onChange={(e) => updateAuthorField('name', e.target.value)}
            placeholder="Sophie Carter"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author-role" className="text-muted-foreground text-xs">
            Role
          </Label>
          <Input
            id="author-role"
            type="text"
            value={props.author.role}
            onChange={(e) => updateAuthorField('role', e.target.value)}
            placeholder="Product Design Lead at Northstar"
          />
        </div>
      </div>

      <div className="space-y-3 rounded-md border p-3">
        <Label className="text-sm font-medium">Avatar</Label>

        <div className="space-y-2">
          <Label
            htmlFor="avatar-src"
            className="text-muted-foreground text-xs"
          >
            Image URL
          </Label>
          <Input
            id="avatar-src"
            type="url"
            value={props.author.avatar.src ?? ''}
            onChange={(e) => updateAvatarField('src', e.target.value)}
            placeholder="https://example.com/avatar.jpg"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="avatar-alt"
            className="text-muted-foreground text-xs"
          >
            Alt Text
          </Label>
          <Input
            id="avatar-alt"
            type="text"
            value={props.author.avatar.alt ?? ''}
            onChange={(e) => updateAvatarField('alt', e.target.value)}
            placeholder="Sophie Carter"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="avatar-fallback"
            className="text-muted-foreground text-xs"
          >
            Fallback
          </Label>
          <Input
            id="avatar-fallback"
            type="text"
            value={props.author.avatar.fallback}
            onChange={(e) => updateAvatarField('fallback', e.target.value)}
            placeholder="SC"
          />
        </div>
      </div>
    </div>
  )
}
