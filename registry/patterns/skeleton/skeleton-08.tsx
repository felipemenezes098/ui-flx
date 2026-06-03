import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton08() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Skeleton className="h-3 w-20" />
      <div className="flex h-9 items-center justify-between rounded-md border px-3">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="size-4 rounded-sm" />
      </div>
    </div>
  )
}
