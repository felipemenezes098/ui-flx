'use client'

import { useEffect, useState } from 'react'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
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
import { Spinner } from '@/components/ui/spinner'

const members = [
  { value: 'jordan', label: 'Jordan Rivera' },
  { value: 'amara', label: 'Amara Okafor' },
  { value: 'liang', label: 'Liang Wei' },
  { value: 'noah', label: 'Noah Bennett' },
]

export function Loading08() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!query.trim()) return setLoading(false)
    // debounce: wait for typing to settle before firing the request
    const debounce = setTimeout(() => setLoading(true), 350)
    const settle = setTimeout(() => setLoading(false), 1100)
    return () => {
      clearTimeout(debounce)
      clearTimeout(settle)
    }
  }, [query])

  const filtered = members.filter((m) =>
    m.label.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-56 justify-between font-normal"
        >
          {members.find((m) => m.value === value)?.label ?? 'Assign member…'}
          <ChevronsUpDownIcon className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search members…"
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            {loading && (
              <div className="text-muted-foreground flex items-center justify-center gap-2 py-5 text-sm">
                <Spinner className="size-4" />
                Searching…
              </div>
            )}
            {!loading && (
              <CommandGroup>
                {filtered.map((member) => (
                  <CommandItem
                    key={member.value}
                    value={member.value}
                    onSelect={(current) => {
                      setValue(current === value ? '' : current)
                      setOpen(false)
                    }}
                  >
                    {member.label}
                    <CheckIcon
                      className={cn(
                        'ml-auto',
                        value === member.value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
