import { CheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const features = [
  'Unlimited projects',
  'Advanced analytics',
  'Priority support',
  '50 GB storage',
]

export function Card09() {
  return (
    <Card className="ring-primary w-full max-w-xs ring-2">
      <CardHeader>
        <CardTitle>Pro</CardTitle>
        <CardDescription>For growing teams that ship fast.</CardDescription>
        <CardAction>
          <Badge>Popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold tabular-nums">$29</span>
          <span className="text-muted-foreground text-sm">/ month</span>
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckIcon className="text-primary size-4 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get started</Button>
      </CardFooter>
    </Card>
  )
}
