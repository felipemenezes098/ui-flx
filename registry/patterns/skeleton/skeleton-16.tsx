import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton16() {
  return (
    <div className="flex w-full max-w-[15rem] flex-col gap-5 rounded-lg border p-4">
      <div className="flex items-center gap-2.5">
        <Skeleton className="size-8 shrink-0 rounded-md" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="flex flex-col gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2.5 px-1 py-1.5">
            <Skeleton className="size-4 shrink-0 rounded-sm" />
            <Skeleton
              className="h-3 w-full"
              style={{ maxWidth: `${70 + ((i * 7) % 30)}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2.5 border-t pt-4">
        <Skeleton className="size-7 shrink-0 rounded-full" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  )
}
