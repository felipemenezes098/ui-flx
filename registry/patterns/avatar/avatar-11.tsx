import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from '@/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const members = [
  {
    name: 'Sofia Rodrigues',
    initials: 'SR',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Liam Carter',
    initials: 'LC',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Ana Moreira',
    initials: 'AM',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
]

export function Avatar11() {
  return (
    <AvatarGroup>
      {members.map((member) => (
        <Tooltip key={member.name}>
          <TooltipTrigger
            render={
              <Avatar>
                <AvatarImage src={member.src} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            }
          />
          <TooltipContent>{member.name}</TooltipContent>
        </Tooltip>
      ))}
    </AvatarGroup>
  )
}
