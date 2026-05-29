import { Skeleton } from '@/components/ui/skeleton'

export function Avatar12() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-8 rounded-full" />
      <div className="flex flex-col gap-1.5">
        <Skeleton className="h-3.5 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  )
}
