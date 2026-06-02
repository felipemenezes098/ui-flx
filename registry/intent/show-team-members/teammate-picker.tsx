'use client'

import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Separator } from '@/components/ui/separator'

const members = [
  {
    name: 'Sofia Rodrigues',
    initials: 'SR',
    role: 'Design',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Liam Carter',
    initials: 'LC',
    role: 'Engineering',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Ana Moreira',
    initials: 'AM',
    role: 'Product',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
]

export function TeammatePickerDecision() {
  const [selected, setSelected] = useState<string[]>([
    'Sofia Rodrigues',
    'Ana Moreira',
  ])

  function toggle(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    )
  }

  return (
    <div className="bg-card w-full max-w-xs overflow-hidden rounded-xl border shadow-sm">
      <div className="px-3 pt-3">
        <span className="text-sm font-semibold">Add members</span>
      </div>
      <Command>
        <CommandInput placeholder="Search people…" />
        <CommandList className="max-h-56">
          <CommandEmpty>No people found.</CommandEmpty>
          <CommandGroup>
            {members.map((member) => (
              <CommandItem
                key={member.name}
                value={member.name}
                onSelect={() => toggle(member.name)}
                data-checked={selected.includes(member.name) ? 'true' : undefined}
              >
                <Avatar className="size-7">
                  <AvatarImage src={member.src} alt={member.name} />
                  <AvatarFallback className="text-xs">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm">{member.name}</span>
                  <span className="text-muted-foreground text-xs">
                    {member.role}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <Separator />
      <div className="flex items-center justify-end gap-2 p-3">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm" disabled={selected.length === 0}>
          Invite {selected.length}
        </Button>
      </div>
    </div>
  )
}
