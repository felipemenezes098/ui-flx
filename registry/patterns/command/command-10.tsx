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
import { useState } from 'react'

const statuses = [
  { value: 'backlog', label: 'Backlog', color: 'bg-muted-foreground' },
  { value: 'todo', label: 'Todo', color: 'bg-blue-500' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-amber-500' },
  { value: 'done', label: 'Done', color: 'bg-emerald-500' },
  { value: 'canceled', label: 'Canceled', color: 'bg-rose-500' },
]

export function Command10() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('in-progress')
  const selected = statuses.find((status) => status.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="font-normal">
          <span
            className={cn(
              'size-2 rounded-full',
              selected ? selected.color : 'bg-muted-foreground',
            )}
          />
          {selected ? selected.label : 'Set status'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0" align="start">
        <Command>
          <CommandInput placeholder="Set status..." />
          <CommandList>
            <CommandEmpty>No status found.</CommandEmpty>
            <CommandGroup>
              {statuses.map((status) => (
                <CommandItem
                  key={status.value}
                  value={status.value}
                  data-checked={value === status.value}
                  onSelect={(current) => {
                    setValue(current)
                    setOpen(false)
                  }}
                >
                  <span className={cn('size-2 rounded-full', status.color)} />
                  {status.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
