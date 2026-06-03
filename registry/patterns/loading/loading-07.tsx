'use client'

import { useEffect, useState } from 'react'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
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

export function Loading07() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!open) return
    setLoading(true)
    const id = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(id)
  }, [open])

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
        {loading && (
          <div className="text-muted-foreground flex items-center justify-center gap-2 py-5 text-sm">
            <Spinner className="size-4" />
            Loading members…
          </div>
        )}
        {!loading && (
          <Command>
            <CommandList>
              <CommandGroup>
                {members.map((member) => (
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
            </CommandList>
          </Command>
        )}
      </PopoverContent>
    </Popover>
  )
}
