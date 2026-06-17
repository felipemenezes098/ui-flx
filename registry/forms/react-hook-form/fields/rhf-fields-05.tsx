'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

type FormValues = z.infer<typeof formSchema>

export function RhfFields05() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { topics: [] },
  })

  function onSubmit(data: FormValues) {
    toast.success('Subscriptions saved', {
      description: data.topics.join(', '),
    })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="topics"
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend>Email subscriptions</FieldLegend>
              <FieldGroup className="gap-2">
                {ITEMS.map((item) => (
                  <Field key={item.id} orientation="horizontal">
                    <Checkbox
                      id={`rhf-fields-05-${item.id}`}
                      checked={field.value.includes(item.id)}
                      onCheckedChange={(checked) =>
                        field.onChange(
                          checked
                            ? [...field.value, item.id]
                            : field.value.filter((v) => v !== item.id),
                        )
                      }
                    />
                    <FieldContent>
                      <FieldLabel htmlFor={`rhf-fields-05-${item.id}`}>
                        {item.label}
                      </FieldLabel>
                    </FieldContent>
                  </Field>
                ))}
              </FieldGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldSet>
          )}
        />
      </FieldGroup>
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  )
}
