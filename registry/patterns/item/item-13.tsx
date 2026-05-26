import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { AtSignIcon, GitPullRequestIcon, MessageSquareIcon } from 'lucide-react'

const notifications = [
  {
    icon: GitPullRequestIcon,
    title: 'Marcus requested review',
    description: 'PR #482 · Refactor billing module',
    time: '2m ago',
    unread: true,
  },
  {
    icon: AtSignIcon,
    title: 'Sarah mentioned you',
    description: '"Can you take a look at the spec?"',
    time: '1h ago',
    unread: true,
  },
  {
    icon: MessageSquareIcon,
    title: 'New comment on RFC-12',
    description: 'Priya: "+1 on the staged rollout plan."',
    time: 'Yesterday',
    unread: false,
  },
]

export function Item13() {
  return (
    <ItemGroup className="w-full max-w-md">
      {notifications.map((n) => (
        <Item key={n.title} variant="outline">
          <ItemMedia variant="icon">
            <n.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              {n.title}
              {n.unread && (
                <span
                  aria-label="Unread"
                  className="bg-primary inline-block size-1.5 rounded-full"
                />
              )}
            </ItemTitle>
            <ItemDescription>{n.description}</ItemDescription>
          </ItemContent>
          <ItemFooter className="basis-auto">
            <span className="text-muted-foreground text-xs">{n.time}</span>
          </ItemFooter>
        </Item>
      ))}
    </ItemGroup>
  )
}
