import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { ArrowUpRightIcon, BookOpenIcon } from 'lucide-react'

export function Item10() {
  return (
    <Item variant="outline" className="w-full max-w-md" render={<a href="#" />}>
      <ItemMedia variant="icon">
        <BookOpenIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Read the documentation</ItemTitle>
        <ItemDescription>
          Learn how to compose blocks with patterns.
        </ItemDescription>
      </ItemContent>
      <ArrowUpRightIcon className="text-muted-foreground size-4" />
    </Item>
  )
}
