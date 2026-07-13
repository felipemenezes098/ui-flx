'use client'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

const regions = [
  {
    label: 'Americas',
    zones: [
      { value: 'pst', label: 'Pacific (PST)' },
      { value: 'est', label: 'Eastern (EST)' },
      { value: 'brt', label: 'Brasília (BRT)' },
    ],
  },
  {
    label: 'Europe',
    zones: [
      { value: 'gmt', label: 'London (GMT)' },
      { value: 'cet', label: 'Berlin (CET)' },
    ],
  },
  {
    label: 'Asia',
    zones: [
      { value: 'ist', label: 'Mumbai (IST)' },
      { value: 'jst', label: 'Tokyo (JST)' },
    ],
  },
]

const allZones = regions.flatMap((region) => region.zones)

export function Command08() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-60 justify-between font-normal"
          >
            {value
              ? allZones.find((zone) => zone.value === value)?.label
              : 'Select timezone...'}
            <ChevronsUpDownIcon className="text-muted-foreground" />
          </Button>
        }
      />
      <PopoverContent className="w-60 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search timezone..." />
          <CommandList>
            <CommandEmpty>No timezone found.</CommandEmpty>
            {regions.map((region, index) => (
              <div key={region.label}>
                {index > 0 && <CommandSeparator />}
                <CommandGroup heading={region.label}>
                  {region.zones.map((zone) => (
                    <CommandItem
                      key={zone.value}
                      value={zone.value}
                      data-checked={value === zone.value}
                      onSelect={(current) => {
                        setValue(current === value ? '' : current)
                        setOpen(false)
                      }}
                    >
                      {zone.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
