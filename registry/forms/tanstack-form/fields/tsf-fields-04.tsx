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
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Slider } from '@/components/ui/slider'

const formSchema = z.object({
  budget: z
    .number()
    .min(10, 'Budget must be at least $10.')
    .max(100, 'Budget cannot exceed $100.'),
})

export function TsfFields04() {
  const form = useForm({
    defaultValues: { budget: 0 },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Budget set', { description: `$${value.budget} / month` })
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <form.Field name="budget">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldContent>
                  <FieldLabel htmlFor={field.name}>Monthly budget</FieldLabel>
                  <FieldDescription>
                    ${field.state.value} / month
                  </FieldDescription>
                </FieldContent>
                <Slider
                  id={field.name}
                  min={0}
                  max={100}
                  step={5}
                  value={[field.state.value]}
                  onValueChange={(v) => field.handleChange((v as number[])[0])}
                  aria-invalid={isInvalid}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
      </FieldGroup>
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  )
}
