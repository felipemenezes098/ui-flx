import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton14() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Skeleton className="aspect-[2/1] w-full rounded-lg" />
      <Skeleton className="h-7 w-4/5" />
      <div className="flex items-center gap-2.5">
        <Skeleton className="size-7 shrink-0 rounded-full" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="flex flex-col gap-2.5">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-2/3" />
      </div>
    </div>
  )
}
