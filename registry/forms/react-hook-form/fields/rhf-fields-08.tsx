'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

type FormValues = z.infer<typeof formSchema>

export function RhfFields08() {
  const [open, setOpen] = useState(false)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { language: '' },
  })

  function onSubmit(data: FormValues) {
    toast.success('Language selected', { description: data.language })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="language"
          render={({ field, fieldState }) => {
            const selected = LANGUAGES.find((l) => l.value === field.value)
            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-fields-08-language">
                  Language
                </FieldLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      id="rhf-fields-08-language"
                      type="button"
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      aria-invalid={fieldState.invalid}
                      className="w-full justify-between font-normal"
                    >
                      {selected ? selected.label : 'Select a language'}
                      <ChevronsUpDownIcon className="text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
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
                                field.onChange(value)
                                setOpen(false)
                              }}
                            >
                              {language.label}
                              <CheckIcon
                                className={cn(
                                  'ml-auto',
                                  field.value === language.value
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
