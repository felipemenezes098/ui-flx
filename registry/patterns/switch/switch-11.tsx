'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

export function Switch11() {
  const [enabled, setEnabled] = useState(false)
  const [invalid, setInvalid] = useState(false)

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!enabled) {
      setInvalid(true)
      return
    }
    setInvalid(false)
    toast.success('Two-factor authentication enabled')
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-4">
      <Field orientation="horizontal" data-invalid={invalid}>
        <FieldContent>
          <FieldLabel htmlFor="switch-11">
            Enable two-factor authentication
          </FieldLabel>
          {invalid && (
            <FieldError>You must enable 2FA before continuing.</FieldError>
          )}
        </FieldContent>
        <Switch
          id="switch-11"
          aria-invalid={invalid}
          checked={enabled}
          onCheckedChange={(value) => {
            setEnabled(value)
            if (value) setInvalid(false)
          }}
        />
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Continue
      </Button>
    </form>
  )
}
