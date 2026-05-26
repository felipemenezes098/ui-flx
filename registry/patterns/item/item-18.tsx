import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from '@/components/ui/item'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For tinkering and side projects.',
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$24/mo',
    description: 'For solo founders and small teams.',
    cta: 'Upgrade',
    popular: true,
  },
  {
    name: 'Team',
    price: '$96/mo',
    description: 'Shared workspaces and SSO.',
    cta: 'Contact sales',
    popular: false,
  },
]

export function Item18() {
  return (
    <ItemGroup className="w-full max-w-md">
      {tiers.map((t) => (
        <Item key={t.name} variant="outline">
          <ItemContent>
            <ItemTitle>
              {t.name}
              {t.popular && <Badge>Popular</Badge>}
              <span className="text-muted-foreground text-xs font-normal">
                {t.price}
              </span>
            </ItemTitle>
            <ItemDescription>{t.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant={t.popular ? 'default' : 'outline'} size="sm">
              {t.cta}
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
