import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton01() {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  )
}
