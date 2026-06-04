import { ShoppingCartIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'

export function Card10() {
  return (
    <Card className="w-full max-w-xs gap-0 pt-0">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=480&q=80"
          alt="Red running sneaker"
          className="aspect-square object-cover"
        />
        <Badge variant="destructive" className="absolute top-3 left-3">
          -20%
        </Badge>
      </div>
      <CardContent className="flex flex-col gap-1 pt-4">
        <CardTitle>Aero Runner</CardTitle>
        <p className="text-muted-foreground text-sm">Lightweight road shoe</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-semibold tabular-nums">$96</span>
          <span className="text-muted-foreground text-sm line-through tabular-nums">
            $120
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full">
          <ShoppingCartIcon data-icon="inline-start" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
