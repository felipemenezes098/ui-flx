'use client'

import { useForm } from '@tanstack/react-form'
import { ChevronDownIcon } from 'lucide-react'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
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

export function TsfFields09() {
  const form = useForm({
    defaultValues: { visibility: '' },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Visibility updated', { description: value.visibility })
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
        <form.Field name="visibility">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            const selected = VISIBILITY.find(
              (v) => v.value === field.state.value,
            )
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Visibility</FieldLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        id={field.name}
                        type="button"
                        variant="outline"
                        aria-invalid={isInvalid}
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
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>
                        Repository visibility
                      </DropdownMenuLabel>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={field.state.value}
                      onValueChange={field.handleChange}
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
