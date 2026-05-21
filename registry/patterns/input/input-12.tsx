'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
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

type FormValues = z.infer<typeof formSchema>

export function Input12() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: '',
    },
  })

  function onSubmit(data: FormValues) {
    toast.success('Submitted', {
      description: data.displayName,
    })
  }

  return (
    <form
      id="input-rhf-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <Controller
          name="displayName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="input-rhf-display-name">
                Display name
              </FieldLabel>
              <Input
                {...field}
                id="input-rhf-display-name"
                placeholder="Enter your name"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" size="sm">
        Submit
      </Button>
    </form>
  )
}
