'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
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

type FormValues = z.infer<typeof formSchema>

export function Switch12() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketing: false,
    },
  })

  function onSubmit(data: FormValues) {
    toast.success('Submitted', { description: `marketing: ${data.marketing}` })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <Controller
        name="marketing"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field orientation="horizontal" data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel htmlFor="switch-12">Marketing emails</FieldLabel>
              <FieldDescription>
                Receive product news and offers.
              </FieldDescription>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </FieldContent>
            <Switch
              id="switch-12"
              aria-invalid={fieldState.invalid}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </Field>
        )}
      />
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
    </form>
  )
}
