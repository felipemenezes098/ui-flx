'use client'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
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
]

export function Command11() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className="flex w-56 flex-col gap-2">
      <Label htmlFor="framework-combobox">Framework</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              id="framework-combobox"
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between font-normal"
            >
              <span className={cn(!value && 'text-muted-foreground')}>
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : 'Select framework'}
              </span>
              <ChevronsUpDownIcon className="text-muted-foreground" />
            </Button>
          }
        />
        <PopoverContent className="w-56 p-0" align="start">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    data-checked={value === framework.value}
                    onSelect={(current) => {
                      setValue(current === value ? '' : current)
                      setOpen(false)
                    }}
                  >
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
