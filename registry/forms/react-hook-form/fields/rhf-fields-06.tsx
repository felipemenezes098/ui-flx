'use client'

import { Controller, useForm } from 'react-hook-form'
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
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const formSchema = z.object({
  view: z.string().min(1, 'Select a view.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfFields06() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { view: '' },
  })

  const { errors } = form.formState

  function onSubmit(data: FormValues) {
    toast.success('View updated', { description: data.view })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="view"
          render={({ field }) => (
            <Field data-invalid={!!errors.view}>
              <FieldLabel htmlFor="rhf-fields-06-view">Default view</FieldLabel>
              <ToggleGroup
                id="rhf-fields-06-view"
                type="single"
                variant="outline"
                className="w-full"
                value={field.value}
                onValueChange={(v) => v && field.onChange(v)}
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
              {errors.view && <FieldError errors={[errors.view]} />}
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
