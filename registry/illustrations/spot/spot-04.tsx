import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function Spot04() {
  return (
    <Card className="w-64 gap-3 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">Visitors</span>
          <span className="text-xl font-semibold tracking-tight tabular-nums">
            18,204
          </span>
        </div>
        <Button variant="outline" size="xs">
          This week
        </Button>
      </div>

      <svg
        viewBox="0 0 240 60"
        className="h-14 w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="spot-04-fill" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              className="text-primary"
              stopColor="currentColor"
              stopOpacity="0.22"
            />
            <stop
              offset="100%"
              className="text-primary"
              stopColor="currentColor"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          d="M0 44 C 30 40, 45 20, 70 24 S 120 12, 150 28 S 205 8, 240 16 L 240 60 L 0 60 Z"
          fill="url(#spot-04-fill)"
        />
        <path
          d="M0 44 C 30 40, 45 20, 70 24 S 120 12, 150 28 S 205 8, 240 16"
          className="text-primary stroke-current"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </Card>
  )
}
