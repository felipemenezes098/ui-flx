'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
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

type FormValues = z.infer<typeof formSchema>

export function Command12() {
  const [open, setOpen] = useState(false)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      framework: '',
    },
  })

  function onSubmit(data: FormValues) {
    toast.success('Submitted', {
      description: frameworks.find((item) => item.value === data.framework)
        ?.label,
    })
  }

  return (
    <form
      id="command-rhf-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <Controller
          name="framework"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="command-rhf-framework">Framework</FieldLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="command-rhf-framework"
                    type="button"
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    aria-invalid={fieldState.invalid}
                    className="w-full justify-between font-normal"
                  >
                    <span className={cn(!field.value && 'text-muted-foreground')}>
                      {field.value
                        ? frameworks.find((item) => item.value === field.value)
                            ?.label
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
                            data-checked={field.value === item.value}
                            onSelect={(current) => {
                              field.onChange(
                                current === field.value ? '' : current,
                              )
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" size="sm">
        Submit
      </Button>
    </form>
  )
}
