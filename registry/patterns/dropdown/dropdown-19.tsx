'use client'

import { useForm } from '@tanstack/react-form'
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

export function Dropdown19() {
  const form = useForm({
    defaultValues: {
      visibility: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const label = visibilities.find(
        (item) => item.value === value.visibility,
      )?.label
      toast.success('Submitted', {
        description: label ?? value.visibility,
      })
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <form.Field name="visibility">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            const selected = visibilities.find(
              (item) => item.value === field.state.value,
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
                        className="w-full justify-between font-normal"
                        aria-invalid={isInvalid}
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
                      value={field.state.value}
                      onValueChange={(value) => {
                        field.handleChange(value)
                        field.handleBlur()
                      }}
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
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
      </FieldGroup>
      <Button type="submit" size="sm">
        Submit
      </Button>
    </form>
  )
}
