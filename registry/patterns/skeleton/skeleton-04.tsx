import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton04() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Skeleton className="h-6 w-1/2" />
      <div className="flex flex-col gap-2.5">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-5/6" />
        <Skeleton className="h-3.5 w-2/3" />
      </div>
    </div>
  )
}
