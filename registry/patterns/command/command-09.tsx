'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
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
import { ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

const members = [
  { value: 'olivia', name: 'Olivia Martin', email: 'olivia@acme.com' },
  { value: 'jackson', name: 'Jackson Lee', email: 'jackson@acme.com' },
  { value: 'isabella', name: 'Isabella Nguyen', email: 'isabella@acme.com' },
  { value: 'william', name: 'William Kim', email: 'will@acme.com' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function Command09() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('olivia')
  const selected = members.find((member) => member.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-64 justify-between font-normal"
          >
            {selected ? (
              <span className="flex items-center gap-2">
                <Avatar className="size-5">
                  <AvatarFallback className="text-[10px]">
                    {initials(selected.name)}
                  </AvatarFallback>
                </Avatar>
                {selected.name}
              </span>
            ) : (
              <span className="text-muted-foreground">Assign member...</span>
            )}
            <ChevronsUpDownIcon className="text-muted-foreground" />
          </Button>
        }
      />
      <PopoverContent className="w-64 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search member..." />
          <CommandList>
            <CommandEmpty>No member found.</CommandEmpty>
            <CommandGroup>
              {members.map((member) => (
                <CommandItem
                  key={member.value}
                  value={member.name}
                  data-checked={value === member.value}
                  onSelect={() => {
                    setValue(member.value === value ? '' : member.value)
                    setOpen(false)
                  }}
                >
                  <Avatar className="size-7">
                    <AvatarFallback className="text-xs">
                      {initials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm">{member.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {member.email}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
