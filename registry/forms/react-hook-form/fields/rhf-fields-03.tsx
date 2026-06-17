'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  bio: z
    .string()
    .min(10, 'Tell us at least 10 characters.')
    .max(160, 'Keep it under 160 characters.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfFields03() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { bio: '' },
  })

  function onSubmit(data: FormValues) {
    toast.success('Bio updated', { description: data.bio })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="bio"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="rhf-fields-03-bio">Bio</FieldLabel>
              <Textarea
                {...field}
                id="rhf-fields-03-bio"
                rows={4}
                placeholder="A short description about yourself."
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>
                Shown on your public profile. Max 160 characters.
              </FieldDescription>
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
