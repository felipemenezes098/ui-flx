import { CheckIcon, SearchIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const members = [
  {
    name: 'Sofia Rodrigues',
    initials: 'SR',
    selected: true,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Liam Carter',
    initials: 'LC',
    selected: false,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Ana Moreira',
    initials: 'AM',
    selected: true,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
]

export function TeammatePickerDecision() {
  return (
    <div className="bg-card w-full max-w-xs overflow-hidden rounded-xl border shadow-sm">
      <div className="flex flex-col gap-3 p-4">
        <span className="text-sm font-semibold">Add members</span>
        <div className="bg-muted/50 flex h-8 items-center gap-2 rounded-md border px-2.5">
          <SearchIcon className="text-muted-foreground size-3.5" />
          <span className="text-muted-foreground text-xs">Search people…</span>
        </div>
      </div>
      <div className="flex flex-col">
        {members.map((member) => (
          <div
            key={member.name}
            className={cn(
              'flex items-center gap-2.5 px-4 py-2',
              member.selected && 'bg-primary/5',
            )}
          >
            <Avatar className="size-7">
              <AvatarImage src={member.src} alt={member.name} />
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <span className="flex-1 text-sm">{member.name}</span>
            <span
              className={cn(
                'flex size-4 items-center justify-center rounded-full border',
                member.selected
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'border-muted-foreground/30',
              )}
            >
              {member.selected && <CheckIcon className="size-2.5" />}
            </span>
          </div>
        ))}
      </div>
      <Separator />
      <div className="flex items-center justify-end gap-2 p-3">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Invite 2</Button>
      </div>
    </div>
  )
}
