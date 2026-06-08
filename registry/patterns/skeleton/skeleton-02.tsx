import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton02() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3.5 w-32" />
        <Skeleton className="h-3 w-44" />
      </div>
    </div>
  )
}
