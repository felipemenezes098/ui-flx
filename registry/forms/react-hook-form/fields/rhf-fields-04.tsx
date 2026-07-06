'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

type FormValues = z.infer<typeof formSchema>

export function RhfFields04() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { budget: 0 },
  })

  function onSubmit(data: FormValues) {
    toast.success('Budget set', { description: `$${data.budget} / month` })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="budget"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent>
                <FieldLabel htmlFor="rhf-fields-04-budget">
                  Monthly budget
                </FieldLabel>
                <FieldDescription>${field.value} / month</FieldDescription>
              </FieldContent>
              <Slider
                id="rhf-fields-04-budget"
                min={0}
                max={100}
                step={5}
                value={[field.value]}
                onValueChange={(v) => field.onChange((v as number[])[0])}
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  )
}
