'use client'

import { CalendarClock, Settings2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

export function ManageSubscription1() {
  const used = 7400
  const limit = 10000
  const pct = Math.round((used / limit) * 100)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Pro plan</CardTitle>
          <Badge variant="secondary">Active</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold">$29</span>
          <span className="text-muted-foreground text-sm">/ month</span>
        </div>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <CalendarClock className="size-4" />
          Renews on July 1, 2026
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">API requests</span>
            <span className="font-medium">
              {used.toLocaleString()} / {limit.toLocaleString()}
            </span>
          </div>
          <Progress value={pct} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button className="min-w-32 flex-1">
          <Settings2 className="size-4" />
          Change plan
        </Button>
        <Button variant="outline" className="min-w-32 flex-1">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
