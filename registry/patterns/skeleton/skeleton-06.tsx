import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton06() {
  return (
    <div className="w-full overflow-hidden rounded-md border">
      <div className="bg-muted/50 flex items-center gap-4 border-b px-4 py-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="ml-auto h-3 w-20" />
        <Skeleton className="h-3 w-16" />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 border-b px-4 py-3.5 last:border-b-0"
        >
          <Skeleton className="h-3.5 w-28" />
          <Skeleton className="ml-auto h-3.5 w-20" />
          <Skeleton className="h-3.5 w-16" />
        </div>
      ))}
    </div>
  )
}
