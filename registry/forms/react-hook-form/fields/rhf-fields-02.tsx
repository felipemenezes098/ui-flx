'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Enter a valid email address.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfFields02() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '' },
  })

  const { errors } = form.formState

  function onSubmit(data: FormValues) {
    toast.success('Profile saved', { description: data.email })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Field data-invalid={!!errors.name}>
          <FieldLabel htmlFor="rhf-fields-02-name">Name</FieldLabel>
          <Input
            id="rhf-fields-02-name"
            placeholder="Ada Lovelace"
            aria-invalid={!!errors.name}
            {...form.register('name')}
          />
          {errors.name && <FieldError errors={[errors.name]} />}
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="rhf-fields-02-email">Email</FieldLabel>
          <Input
            id="rhf-fields-02-email"
            type="email"
            placeholder="ada@example.com"
            aria-invalid={!!errors.email}
            {...form.register('email')}
          />
          {errors.email && <FieldError errors={[errors.email]} />}
        </Field>
      </FieldGroup>
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  )
}
