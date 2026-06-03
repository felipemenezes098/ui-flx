import { Badge } from '@/components/ui/badge'

export function Badge05() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        Success
      </Badge>
      <Badge className="border-transparent bg-amber-500/10 text-amber-600 dark:text-amber-400">
        Warning
      </Badge>
      <Badge className="border-transparent bg-red-500/10 text-red-600 dark:text-red-400">
        Error
      </Badge>
      <Badge className="border-transparent bg-blue-500/10 text-blue-600 dark:text-blue-400">
        Info
      </Badge>
    </div>
  )
}
