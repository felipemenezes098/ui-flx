import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'

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

export function Avatar10() {
  return (
    <AvatarGroup>
      {members.map((member) => (
        <Avatar key={member.name}>
          <AvatarImage src={member.src} alt={member.name} />
          <AvatarFallback>{member.initials}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  )
}
