import { DollarSignIcon, TrendingUpIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Card05() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Total revenue</CardDescription>
        <CardTitle className="text-2xl tabular-nums">$48,231.89</CardTitle>
        <CardAction>
          <div className="bg-muted flex size-9 items-center justify-center rounded-lg">
            <DollarSignIcon className="text-muted-foreground size-4" />
          </div>
        </CardAction>
      </CardHeader>
      <CardDescription className="flex items-center gap-2 px-6">
        <Badge variant="secondary" className="text-emerald-600 dark:text-emerald-400">
          <TrendingUpIcon className="size-3" />
          +20.1%
        </Badge>
        vs. last month
      </CardDescription>
    </Card>
  )
}
