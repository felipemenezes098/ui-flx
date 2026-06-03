import { Spinner } from '@/components/ui/spinner'

export function Loading01() {
  return (
    <div className="flex w-full items-center justify-center py-6">
      <Spinner className="text-muted-foreground size-6" />
    </div>
  )
}
