'use client'

import { MousePointer2 } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Cursor = {
  id: string
  name: string
  color: string
  top: string
  left: string
}

const CURSORS: Cursor[] = [
  { id: 'ada', name: 'Ada', color: '#ec4899', top: '22%', left: '18%' },
  { id: 'grace', name: 'Grace', color: '#3b82f6', top: '54%', left: '60%' },
  { id: 'alan', name: 'Alan', color: '#22c55e', top: '70%', left: '30%' },
]

export function LivePresence2() {
  return (
    <Card className="w-full max-w-md min-w-sm">
      <CardHeader>
        <CardTitle>Live canvas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/30 relative h-56 w-full overflow-hidden rounded-lg border [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]">
          {CURSORS.map((cursor) => (
            <div
              key={cursor.id}
              className="absolute flex items-start gap-1"
              style={{ top: cursor.top, left: cursor.left }}
            >
              <MousePointer2
                className="size-5 -rotate-90"
                style={{ color: cursor.color, fill: cursor.color }}
              />
              <span
                className="rounded px-1.5 py-0.5 text-xs font-medium text-white"
                style={{ backgroundColor: cursor.color }}
              >
                {cursor.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
