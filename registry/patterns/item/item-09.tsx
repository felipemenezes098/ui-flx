import { Badge } from '@/components/ui/badge'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from '@/components/ui/item'

export function Item09() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemHeader>
        <Badge variant="secondary">Draft</Badge>
        <span className="text-muted-foreground text-xs">#PR-482</span>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>Refactor billing module</ItemTitle>
        <ItemDescription>
          Splits subscriptions and one-off charges into separate services.
        </ItemDescription>
      </ItemContent>
      <ItemFooter>
        <span className="text-muted-foreground text-xs">Updated 2h ago</span>
        <span className="text-muted-foreground text-xs">3 reviewers</span>
      </ItemFooter>
    </Item>
  )
}
