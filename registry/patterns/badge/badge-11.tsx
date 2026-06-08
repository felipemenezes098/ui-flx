import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export function Badge11() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        <ArrowUpIcon data-icon="inline-start" />
        12.5%
      </Badge>
      <Badge className="border-transparent bg-red-500/10 text-red-600 dark:text-red-400">
        <ArrowDownIcon data-icon="inline-start" />
        3.2%
      </Badge>
    </div>
  )
}
