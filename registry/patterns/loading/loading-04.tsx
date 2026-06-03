import { Spinner } from '@/components/ui/spinner'

export function Loading04() {
  return (
    <div className="flex w-full flex-col items-center py-6">
      <div className="flex flex-col items-center gap-3">
        <Spinner className="text-primary size-8" />
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-sm font-medium">Preparing your workspace</p>
          <p className="text-muted-foreground text-xs">
            This will only take a moment.
          </p>
        </div>
      </div>
    </div>
  )
}
