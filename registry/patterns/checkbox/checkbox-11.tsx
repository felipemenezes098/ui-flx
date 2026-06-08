'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { toast } from 'sonner'
import { useState } from 'react'

export function Checkbox11() {
  const [accepted, setAccepted] = useState(false)
  const [invalid, setInvalid] = useState(false)

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!accepted) {
      setInvalid(true)
      return
    }
    setInvalid(false)
    toast.success('Terms accepted')
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-4">
      <Field orientation="horizontal" data-invalid={invalid}>
        <Checkbox
          id="checkbox-11-terms"
          aria-invalid={invalid}
          checked={accepted}
          onCheckedChange={(value) => {
            const next = value === true
            setAccepted(next)
            if (next) setInvalid(false)
          }}
        />
        <FieldContent>
          <FieldLabel htmlFor="checkbox-11-terms">
            I agree to the terms and conditions
          </FieldLabel>
          {invalid && (
            <FieldError>You must accept the terms to continue.</FieldError>
          )}
        </FieldContent>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Continue
      </Button>
    </form>
  )
}
