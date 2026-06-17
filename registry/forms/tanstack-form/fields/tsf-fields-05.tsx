'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'

const ITEMS = [
  { id: 'product', label: 'Product updates' },
  { id: 'security', label: 'Security alerts' },
  { id: 'marketing', label: 'Marketing emails' },
] as const

const formSchema = z.object({
  topics: z.array(z.string()).min(1, 'Select at least one topic.'),
})

export function TsfFields05() {
  const form = useForm({
    defaultValues: { topics: [] as string[] },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Subscriptions saved', {
        description: value.topics.join(', '),
      })
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
        <form.Field name="topics">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <FieldSet data-invalid={isInvalid}>
                <FieldLegend>Email subscriptions</FieldLegend>
                <FieldGroup className="gap-2">
                  {ITEMS.map((item) => (
                    <Field key={item.id} orientation="horizontal">
                      <Checkbox
                        id={`${field.name}-${item.id}`}
                        checked={field.state.value.includes(item.id)}
                        onCheckedChange={(checked) =>
                          field.handleChange(
                            checked === true
                              ? [...field.state.value, item.id]
                              : field.state.value.filter((v) => v !== item.id),
                          )
                        }
                      />
                      <FieldContent>
                        <FieldLabel htmlFor={`${field.name}-${item.id}`}>
                          {item.label}
                        </FieldLabel>
                      </FieldContent>
                    </Field>
                  ))}
                </FieldGroup>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </FieldSet>
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
