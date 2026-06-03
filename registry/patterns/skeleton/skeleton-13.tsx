import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton13() {
  return (
    <div className="grid w-full grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <Skeleton key={i} className="aspect-square w-full rounded-md" />
      ))}
    </div>
  )
}
