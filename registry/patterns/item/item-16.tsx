import { Badge } from '@/components/ui/badge'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { Switch } from '@/components/ui/switch'
import { GithubIcon, SlackIcon, ZapIcon } from 'lucide-react'

const integrations = [
  {
    icon: GithubIcon,
    name: 'GitHub',
    description: 'Sync issues and pull requests.',
    connected: true,
  },
  {
    icon: SlackIcon,
    name: 'Slack',
    description: 'Post updates to channels.',
    connected: true,
  },
  {
    icon: ZapIcon,
    name: 'Zapier',
    description: 'Trigger workflows from events.',
    connected: false,
  },
]

export function Item16() {
  return (
    <ItemGroup className="w-full max-w-md">
      {integrations.map((i) => (
        <Item key={i.name} variant="outline">
          <ItemMedia variant="icon">
            <i.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              {i.name}
              <Badge variant={i.connected ? 'secondary' : 'outline'}>
                {i.connected ? 'Connected' : 'Off'}
              </Badge>
            </ItemTitle>
            <ItemDescription>{i.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Switch defaultChecked={i.connected} />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
