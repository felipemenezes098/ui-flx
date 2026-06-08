import { Wrench } from 'lucide-react'

export function Banner09() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3.5 sm:flex-row sm:items-center">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
        <Wrench className="size-5" />
      </span>
      <div className="flex flex-1 flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-amber-500" />
          </span>
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
            Scheduled maintenance
          </p>
        </div>
        <p className="text-sm text-amber-700/80 dark:text-amber-300/80">
          Some services may be unavailable on Sunday, 02:00–04:00 UTC.
        </p>
      </div>
      <a
        href="#"
        className="text-sm font-medium text-amber-700 underline-offset-4 hover:underline dark:text-amber-300"
      >
        Status page
      </a>
    </div>
  )
}
