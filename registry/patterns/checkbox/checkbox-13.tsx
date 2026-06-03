'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'

const items = [
  { id: 'recents', label: 'Recents' },
  { id: 'home', label: 'Home' },
  { id: 'apps', label: 'Applications' },
  { id: 'desktop', label: 'Desktop' },
] as const

const formSchema = z.object({
  items: z.array(z.string()).min(1, 'Select at least one item.'),
})

export function Checkbox13() {
  const form = useForm({
    defaultValues: {
      items: [] as string[],
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success('Submitted', { description: value.items.join(', ') })
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
      <form.Field name="items">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid

          return (
            <FieldSet data-invalid={isInvalid}>
              <FieldLegend variant="label">Sidebar</FieldLegend>
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <Field key={item.id} orientation="horizontal">
                    <Checkbox
                      id={`checkbox-13-${item.id}`}
                      checked={field.state.value.includes(item.id)}
                      onCheckedChange={(value) => {
                        field.handleChange(
                          value === true
                            ? [...field.state.value, item.id]
                            : field.state.value.filter((id) => id !== item.id),
                        )
                        field.handleBlur()
                      }}
                    />
                    <FieldLabel htmlFor={`checkbox-13-${item.id}`}>
                      {item.label}
                    </FieldLabel>
                  </Field>
                ))}
              </div>
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </FieldSet>
          )
        }}
      </form.Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
    </form>
  )
}
