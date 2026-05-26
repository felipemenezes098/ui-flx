import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from '@/components/ui/item'
import { Switch } from '@/components/ui/switch'

const settings = [
  {
    title: 'Marketing emails',
    description: 'Product updates, tips, and announcements.',
    defaultChecked: true,
  },
  {
    title: 'Security alerts',
    description: 'Sign-in notifications and password changes.',
    defaultChecked: true,
  },
  {
    title: 'Weekly digest',
    description: 'A summary of your team activity every Monday.',
    defaultChecked: false,
  },
]

export function Item15() {
  return (
    <ItemGroup className="w-full max-w-md">
      {settings.map((s) => (
        <Item key={s.title} variant="outline">
          <ItemContent>
            <ItemTitle>{s.title}</ItemTitle>
            <ItemDescription>{s.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Switch defaultChecked={s.defaultChecked} />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
