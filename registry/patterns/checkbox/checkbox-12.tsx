'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
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

type FormValues = z.infer<typeof formSchema>

export function Checkbox12() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [],
    },
  })

  function onSubmit(data: FormValues) {
    toast.success('Submitted', { description: data.items.join(', ') })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <Controller
        name="items"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldSet data-invalid={fieldState.invalid}>
            <FieldLegend variant="label">Sidebar</FieldLegend>
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <Field key={item.id} orientation="horizontal">
                  <Checkbox
                    id={`checkbox-12-${item.id}`}
                    checked={field.value.includes(item.id)}
                    onCheckedChange={(value) =>
                      field.onChange(
                        value === true
                          ? [...field.value, item.id]
                          : field.value.filter((id) => id !== item.id),
                      )
                    }
                  />
                  <FieldLabel htmlFor={`checkbox-12-${item.id}`}>
                    {item.label}
                  </FieldLabel>
                </Field>
              ))}
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldSet>
        )}
      />
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
    </form>
  )
}
