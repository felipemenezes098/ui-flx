'use client'

import { useState } from 'react'
import { CalendarClock, RotateCcw } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function DeleteAccount3() {
  const [scheduled, setScheduled] = useState(false)

  if (scheduled) {
    return (
      <Card className="w-full max-w-md min-w-sm">
        <CardHeader>
          <div className="bg-muted text-muted-foreground mb-2 flex size-10 items-center justify-center rounded-full">
            <CalendarClock className="size-5" />
          </div>
          <CardTitle>Deletion scheduled</CardTitle>
          <CardDescription>
            Your account closes on July 6, 2026. Sign in any time before then to
            cancel and keep everything.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setScheduled(false)}
          >
            <RotateCcw className="size-4" />
            Cancel deletion
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Close your account</CardTitle>
        <CardDescription>
          We hold your data for 30 days before deleting it for good. Change your
          mind in that window and a single sign-in restores your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/50 flex items-center gap-3 rounded-lg border p-3 text-sm">
          <CalendarClock className="text-muted-foreground size-5 shrink-0" />
          <span>
            Scheduled deletion:{' '}
            <span className="font-medium">July 6, 2026</span>
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => setScheduled(true)}
        >
          Schedule deletion
        </Button>
      </CardFooter>
    </Card>
  )
}
