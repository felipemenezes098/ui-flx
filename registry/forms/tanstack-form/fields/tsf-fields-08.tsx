'use client'

import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { toast } from 'sonner'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const LANGUAGES = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'python', label: 'Python' },
  { value: 'elixir', label: 'Elixir' },
] as const

const formSchema = z.object({
  language: z.string().min(1, 'Select a language.'),
})

export function TsfFields08() {
  const [open, setOpen] = useState(false)
  const form = useForm({
    defaultValues: { language: '' },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Language selected', { description: value.language })
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
        <form.Field name="language">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            const selected = LANGUAGES.find(
              (l) => l.value === field.state.value,
            )
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Language</FieldLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger
                    render={
                      <Button
                        id={field.name}
                        type="button"
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        aria-invalid={isInvalid}
                        className="w-full justify-between font-normal"
                      >
                        {selected ? selected.label : 'Select a language'}
                        <ChevronsUpDownIcon className="text-muted-foreground" />
                      </Button>
                    }
                  />
                  <PopoverContent className="w-(--anchor-width) p-0">
                    <Command>
                      <CommandInput placeholder="Search language..." />
                      <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {LANGUAGES.map((language) => (
                            <CommandItem
                              key={language.value}
                              value={language.value}
                              onSelect={(value) => {
                                field.handleChange(value)
                                setOpen(false)
                              }}
                            >
                              {language.label}
                              <CheckIcon
                                className={cn(
                                  'ml-auto',
                                  field.state.value === language.value
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
