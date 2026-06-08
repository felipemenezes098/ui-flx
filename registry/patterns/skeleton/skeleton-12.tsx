import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton12() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-start gap-2.5">
        <Skeleton className="size-8 shrink-0 rounded-full" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-9 w-40 rounded-2xl rounded-tl-sm" />
          <Skeleton className="h-9 w-28 rounded-2xl rounded-tl-sm" />
        </div>
      </div>
      <div className="flex items-start justify-end gap-2.5">
        <div className="flex flex-col items-end gap-1.5">
          <Skeleton className="bg-primary/15 h-9 w-48 rounded-2xl rounded-tr-sm" />
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <Skeleton className="size-8 shrink-0 rounded-full" />
        <Skeleton className="h-9 w-36 rounded-2xl rounded-tl-sm" />
      </div>
    </div>
  )
}
