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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ChevronsUpDownIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

const languages = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'es', label: 'Spanish' },
]

export function Command06() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('pt')
  const selected = languages.find((language) => language.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-56 justify-between font-normal"
        >
          <span className={cn(!selected && 'text-muted-foreground')}>
            {selected ? selected.label : 'Select language...'}
          </span>
          {value ? (
            <span
              role="button"
              aria-label="Clear selection"
              className="hover:bg-muted -mr-1 grid size-5 place-items-center rounded-sm"
              onPointerDown={(event) => {
                event.stopPropagation()
                event.preventDefault()
                setValue('')
              }}
            >
              <XIcon className="size-4" />
            </span>
          ) : (
            <ChevronsUpDownIcon className="text-muted-foreground" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  data-checked={value === language.value}
                  onSelect={(current) => {
                    setValue(current === value ? '' : current)
                    setOpen(false)
                  }}
                >
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
