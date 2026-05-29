import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const people = [
  { initials: 'SR', className: 'bg-primary text-primary-foreground' },
  { initials: 'LC', className: 'bg-secondary text-secondary-foreground' },
  { initials: 'AM', className: 'bg-accent text-accent-foreground' },
  { initials: 'JD', className: 'bg-muted text-foreground' },
]

export function Avatar05() {
  return (
    <div className="flex items-center gap-3">
      {people.map(({ initials, className }) => (
        <Avatar key={initials}>
          <AvatarFallback className={className}>{initials}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
