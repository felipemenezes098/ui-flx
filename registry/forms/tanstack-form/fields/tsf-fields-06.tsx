'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const formSchema = z.object({
  view: z.string().min(1, 'Select a view.'),
})

export function TsfFields06() {
  const form = useForm({
    defaultValues: { view: '' },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('View updated', { description: value.view })
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
        <form.Field name="view">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Default view</FieldLabel>
                <ToggleGroup
                  id={field.name}
                  type="single"
                  variant="outline"
                  className="w-full"
                  value={field.state.value}
                  onValueChange={(v) => v && field.handleChange(v)}
                >
                  <ToggleGroupItem value="list" className="flex-1">
                    List
                  </ToggleGroupItem>
                  <ToggleGroupItem value="grid" className="flex-1">
                    Grid
                  </ToggleGroupItem>
                  <ToggleGroupItem value="board" className="flex-1">
                    Board
                  </ToggleGroupItem>
                </ToggleGroup>
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
