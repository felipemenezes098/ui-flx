import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton15() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-5 rounded-xl border p-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3.5 w-20" />
        <div className="flex items-end gap-1.5">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="mb-1 h-3 w-12" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Skeleton className="size-4 shrink-0 rounded-full" />
            <Skeleton className="h-3 w-full" />
          </div>
        ))}
      </div>
      <Skeleton className="h-9 w-full rounded-md" />
    </div>
  )
}
