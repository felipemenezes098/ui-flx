'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon, Trash2Icon } from 'lucide-react'
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
  members: z
    .array(
      z.object({
        name: z.string().min(1, 'Name is required.'),
        email: z.email('Enter a valid email.'),
      }),
    )
    .min(1, 'Add at least one member.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfAdvanced01() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { members: [{ name: '', email: '' }] },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'members',
  })

  const { errors } = form.formState

  function onSubmit(data: FormValues) {
    toast.success('Team invited', {
      description: `${data.members.length} member(s)`,
    })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-4"
    >
      <FieldGroup>
        {fields.map((field, index) => {
          const memberErrors = errors.members?.[index]
          return (
            <div key={field.id} className="flex items-end gap-2">
              <Field data-invalid={!!memberErrors?.name}>
                <FieldLabel htmlFor={`rhf-advanced-01-name-${index}`}>
                  Name
                </FieldLabel>
                <Input
                  id={`rhf-advanced-01-name-${index}`}
                  placeholder="Ada Lovelace"
                  aria-invalid={!!memberErrors?.name}
                  {...form.register(`members.${index}.name`)}
                />
                {memberErrors?.name && (
                  <FieldError errors={[memberErrors.name]} />
                )}
              </Field>
              <Field data-invalid={!!memberErrors?.email}>
                <FieldLabel htmlFor={`rhf-advanced-01-email-${index}`}>
                  Email
                </FieldLabel>
                <Input
                  id={`rhf-advanced-01-email-${index}`}
                  type="email"
                  placeholder="ada@example.com"
                  aria-invalid={!!memberErrors?.email}
                  {...form.register(`members.${index}.email`)}
                />
                {memberErrors?.email && (
                  <FieldError errors={[memberErrors.email]} />
                )}
              </Field>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Remove member"
                disabled={fields.length === 1}
                onClick={() => remove(index)}
              >
                <Trash2Icon className="size-4" />
              </Button>
            </div>
          )
        })}
      </FieldGroup>
      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ name: '', email: '' })}
        >
          <PlusIcon className="size-4" />
          Add member
        </Button>
        <Button type="submit" size="sm">
          Send invites
        </Button>
      </div>
    </form>
  )
}
