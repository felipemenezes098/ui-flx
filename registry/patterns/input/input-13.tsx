'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  displayName: z.string().min(1, 'Enter a display name.'),
})

export function Input13() {
  const form = useForm({
    defaultValues: {
      displayName: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success('Submitted', {
        description: value.displayName,
      })
    },
  })

  return (
    <form
      id="input-tanstack-form"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <form.Field name="displayName">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Display name</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your name"
                  aria-invalid={isInvalid}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
      </FieldGroup>
      <Button type="submit" size="sm">
        Submit
      </Button>
    </form>
  )
}
