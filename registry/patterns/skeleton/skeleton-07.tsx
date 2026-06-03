import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton07() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-20 w-full rounded-md" />
      </div>
      <Skeleton className="h-9 w-28 rounded-md" />
    </div>
  )
}
