import { Info } from 'lucide-react'

export function Banner01() {
  return (
    <div className="flex w-full items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm shadow-sm">
      <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full">
        <Info className="size-4" />
      </span>
      <p className="text-muted-foreground">
        <span className="text-foreground font-medium">Heads up.</span> A new
        version of the dashboard is now available.
      </p>
    </div>
  )
}
