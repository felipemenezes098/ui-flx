'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

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
import { cn } from '@/lib/utils'
import { ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
] as const

const formSchema = z.object({
  framework: z.string().min(1, 'Select a framework.'),
})

export function Command13() {
  const [open, setOpen] = useState(false)
  const form = useForm({
    defaultValues: {
      framework: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success('Submitted', {
        description: frameworks.find((item) => item.value === value.framework)
          ?.label,
      })
    },
  })

  return (
    <form
      id="command-tanstack-form"
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <form.Field name="framework">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Framework</FieldLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      id={field.name}
                      type="button"
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      aria-invalid={isInvalid}
                      className="w-full justify-between font-normal"
                    >
                      <span
                        className={cn(
                          !field.state.value && 'text-muted-foreground',
                        )}
                      >
                        {field.state.value
                          ? frameworks.find(
                              (item) => item.value === field.state.value,
                            )?.label
                          : 'Select framework'}
                      </span>
                      <ChevronsUpDownIcon className="text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-(--radix-popover-trigger-width) p-0"
                    align="start"
                  >
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((item) => (
                            <CommandItem
                              key={item.value}
                              value={item.value}
                              data-checked={field.state.value === item.value}
                              onSelect={(current) => {
                                field.handleChange(
                                  current === field.state.value ? '' : current,
                                )
                                field.handleBlur()
                                setOpen(false)
                              }}
                            >
                              {item.label}
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
        Submit
      </Button>
    </form>
  )
}
