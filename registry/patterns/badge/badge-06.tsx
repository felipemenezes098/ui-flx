import { Badge } from '@/components/ui/badge'

export function Badge06() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="min-w-5 justify-center rounded-full px-1 tabular-nums">
        3
      </Badge>
      <Badge
        variant="secondary"
        className="min-w-5 justify-center rounded-full px-1 tabular-nums"
      >
        24
      </Badge>
      <Badge
        variant="destructive"
        className="min-w-5 justify-center rounded-full px-1 tabular-nums"
      >
        99+
      </Badge>
    </div>
  )
}
