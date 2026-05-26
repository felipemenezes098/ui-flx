import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'
import {
  CheckCircle2Icon,
  GitCommitIcon,
  RocketIcon,
  UserPlusIcon,
} from 'lucide-react'

const events = [
  {
    icon: GitCommitIcon,
    title: 'Marcus pushed 3 commits',
    description: 'main · feat: split billing service',
    time: '2m ago',
  },
  {
    icon: UserPlusIcon,
    title: 'Priya joined the workspace',
    description: 'Invited by Sarah Chen',
    time: '1h ago',
  },
  {
    icon: CheckCircle2Icon,
    title: 'Release v2.4.0 marked stable',
    description: 'All canary metrics green for 24h',
    time: '4h ago',
  },
  {
    icon: RocketIcon,
    title: 'Deploy succeeded',
    description: 'production · 1m 42s',
    time: 'Yesterday',
  },
]

export function Item19() {
  return (
    <ItemGroup className="w-full max-w-md">
      {events.map((e, index) => (
        <div key={e.title}>
          <Item>
            <ItemMedia variant="icon">
              <e.icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{e.title}</ItemTitle>
              <ItemDescription>{e.description}</ItemDescription>
            </ItemContent>
            <ItemFooter className="basis-auto">
              <span className="text-muted-foreground text-xs">{e.time}</span>
            </ItemFooter>
          </Item>
          {index < events.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </ItemGroup>
  )
}
