'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { ChevronDownIcon } from 'lucide-react'

const visibilities = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
  { value: 'team', label: 'Team only' },
] as const

const formSchema = z.object({
  visibility: z.string().min(1, 'Choose a visibility.'),
})

type FormValues = z.infer<typeof formSchema>

export function Dropdown18() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      visibility: '',
    },
  })

  function onSubmit(data: FormValues) {
    const label = visibilities.find(
      (item) => item.value === data.visibility,
    )?.label
    toast.success('Submitted', {
      description: label ?? data.visibility,
    })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <Controller
          name="visibility"
          control={form.control}
          render={({ field, fieldState }) => {
            const selected = visibilities.find(
              (item) => item.value === field.value,
            )

            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="dropdown-rhf-visibility">
                  Visibility
                </FieldLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        id="dropdown-rhf-visibility"
                        type="button"
                        variant="outline"
                        className="w-full justify-between font-normal"
                        aria-invalid={fieldState.invalid}
                      >
                        <span
                          className={selected ? '' : 'text-muted-foreground'}
                        >
                          {selected?.label ?? 'Select visibility'}
                        </span>
                        <ChevronDownIcon className="text-muted-foreground" />
                      </Button>
                    }
                  />
                  <DropdownMenuContent
                    align="start"
                    className="w-(--anchor-width)"
                  >
                    <DropdownMenuRadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      {visibilities.map((item) => (
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
        Submit
      </Button>
    </form>
  )
}
