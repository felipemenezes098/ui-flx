'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDownIcon } from 'lucide-react'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'

const VISIBILITY = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
  { value: 'internal', label: 'Internal' },
] as const

const formSchema = z.object({
  visibility: z.string().min(1, 'Select a visibility.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfFields09() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { visibility: '' },
  })

  function onSubmit(data: FormValues) {
    toast.success('Visibility updated', { description: data.visibility })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="visibility"
          render={({ field, fieldState }) => {
            const selected = VISIBILITY.find((v) => v.value === field.value)
            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-fields-09-visibility">
                  Visibility
                </FieldLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        id="rhf-fields-09-visibility"
                        type="button"
                        variant="outline"
                        aria-invalid={fieldState.invalid}
                        className="w-full justify-between font-normal"
                      >
                        {selected ? selected.label : 'Select visibility'}
                        <ChevronDownIcon className="text-muted-foreground" />
                      </Button>
                    }
                  />
                  <DropdownMenuContent
                    align="start"
                    className="w-(--anchor-width)"
                  >
                    <DropdownMenuLabel>Repository visibility</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      {VISIBILITY.map((item) => (
                        <DropdownMenuRadioItem
                          key={item.value}
                          value={item.value}
                        >
                          {item.label}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )
          }}
        />
      </FieldGroup>
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  )
}
