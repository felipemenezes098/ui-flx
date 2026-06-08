'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

const formSchema = z.object({
  marketing: z.boolean().refine((value) => value === true, {
    message: 'You must opt in to receive updates.',
  }),
})

export function Switch13() {
  const form = useForm({
    defaultValues: {
      marketing: false,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success('Submitted', {
        description: `marketing: ${value.marketing}`,
      })
    },
  })

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <form.Field name="marketing">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid

          return (
            <Field orientation="horizontal" data-invalid={isInvalid}>
              <FieldContent>
                <FieldLabel htmlFor="switch-13">Marketing emails</FieldLabel>
                <FieldDescription>
                  Receive product news and offers.
                </FieldDescription>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </FieldContent>
              <Switch
                id="switch-13"
                aria-invalid={isInvalid}
                checked={field.state.value}
                onCheckedChange={(value) => {
                  field.handleChange(value)
                  field.handleBlur()
                }}
              />
            </Field>
          )
        }}
      </form.Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
    </form>
  )
}
