'use client'

import { useForm } from '@tanstack/react-form'
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

export function TsfAdvanced01() {
  const form = useForm({
    defaultValues: { members: [{ name: '', email: '' }] },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Team invited', {
        description: `${value.members.length} member(s)`,
      })
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-md flex-col gap-4"
    >
      <form.Field name="members" mode="array">
        {(membersField) => (
          <>
            <FieldGroup>
              {membersField.state.value.map((_, index) => (
                <div key={index} className="flex items-end gap-2">
                  <form.Field name={`members[${index}].name`}>
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            placeholder="Ada Lovelace"
                            aria-invalid={isInvalid}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  </form.Field>
                  <form.Field name={`members[${index}].email`}>
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            type="email"
                            placeholder="ada@example.com"
                            aria-invalid={isInvalid}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  </form.Field>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Remove member"
                    disabled={membersField.state.value.length === 1}
                    onClick={() => membersField.removeValue(index)}
                  >
                    <Trash2Icon className="size-4" />
                  </Button>
                </div>
              ))}
            </FieldGroup>
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => membersField.pushValue({ name: '', email: '' })}
              >
                <PlusIcon className="size-4" />
                Add member
              </Button>
              <Button type="submit" size="sm">
                Send invites
              </Button>
            </div>
          </>
        )}
      </form.Field>
    </form>
  )
}
