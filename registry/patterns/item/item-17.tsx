import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from '@/components/ui/item'
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'

const stats = [
  {
    label: 'Revenue',
    value: '$48,210',
    delta: '+12.4% vs last month',
    trending: 'up' as const,
  },
  {
    label: 'New customers',
    value: '1,284',
    delta: '+4.1% vs last month',
    trending: 'up' as const,
  },
  {
    label: 'Churn',
    value: '2.1%',
    delta: '-0.3% vs last month',
    trending: 'down' as const,
  },
]

export function Item17() {
  return (
    <ItemGroup className="w-full max-w-md">
      {stats.map((s) => {
        const Trend = s.trending === 'up' ? TrendingUpIcon : TrendingDownIcon
        return (
          <Item key={s.label} variant="outline">
            <ItemContent>
              <ItemDescription>{s.label}</ItemDescription>
              <ItemTitle className="text-lg">{s.value}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
                <Trend className="size-3.5" />
                {s.delta}
              </span>
            </ItemActions>
          </Item>
        )
      })}
    </ItemGroup>
  )
}
