'use client'

import { useState } from 'react'
import { CheckIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const teammates = [
  {
    id: 'sarah',
    name: 'Sarah Chen',
    role: 'Design lead',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    initials: 'SC',
  },
  {
    id: 'marcus',
    name: 'Marcus Lee',
    role: 'Engineering',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    initials: 'ML',
  },
  {
    id: 'priya',
    name: 'Priya Patel',
    role: 'Product',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    initials: 'PP',
  },
  {
    id: 'jordan',
    name: 'Jordan Kim',
    role: 'Marketing',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    initials: 'JK',
  },
  {
    id: 'emma',
    name: 'Emma Wilson',
    role: 'Support',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    initials: 'EW',
  },
]

export function Dialog11() {
  const [selected, setSelected] = useState<string[]>(['sarah', 'marcus'])

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Invite teammates</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 overflow-hidden p-0 sm:max-w-md">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Add to project</DialogTitle>
          <DialogDescription>
            Select teammates to invite. They will receive an email with edit
            access.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[min(50vh,14rem)] overflow-y-auto px-3 pb-2">
          <ul className="flex flex-col gap-1 pt-1">
            {teammates.map((person) => {
              const isSelected = selected.includes(person.id)
              return (
                <li key={person.id}>
                  <button
                    type="button"
                    onClick={() => toggle(person.id)}
                    className={cn(
                      'hover:bg-muted/60 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors',
                      isSelected && 'bg-muted/40',
                    )}
                  >
                    <Avatar>
                      <AvatarImage src={person.avatar} alt="" />
                      <AvatarFallback>{person.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {person.name}
                      </p>
                      <p className="text-muted-foreground truncate text-xs">
                        {person.role}
                      </p>
                    </div>
                    <div
                      className={cn(
                        'flex size-4 shrink-0 items-center justify-center rounded-full border',
                        isSelected &&
                          'bg-primary border-primary text-primary-foreground',
                      )}
                    >
                      {isSelected ? (
                        <CheckIcon className="size-2.5 stroke-[3]" />
                      ) : null}
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <DialogFooter className="border-t px-6 py-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Invite {selected.length}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
