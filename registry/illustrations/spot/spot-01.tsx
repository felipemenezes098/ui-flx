import { TrendingUp } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const sizeStyles = {
  default: {
    shell: 'h-40',
    cardWrap: 'w-56',
    backCard:
      'absolute -top-3 -right-3 h-28 w-44 rotate-3 rounded-2xl opacity-60',
    frontCard: 'rounded-2xl p-4',
    label: 'text-xs',
    headerGap: '',
    value: 'mt-2 text-2xl',
    chart: 'mt-3 h-12 gap-1',
  },
  lg: {
    shell: 'h-64 sm:h-72',
    cardWrap: 'w-full max-w-md',
    backCard:
      'absolute -top-5 right-2 h-full w-3/4 rotate-6 rounded-2xl opacity-50 sm:right-0',
    frontCard: 'rounded-2xl p-5',
    label: 'text-sm',
    headerGap: 'gap-3',
    value: 'mt-4 text-3xl',
    chart: 'mt-5 h-20 gap-1.5',
  },
} as const

const sparkBySize = {
  default: [
    'h-3',
    'h-5',
    'h-4',
    'h-6',
    'h-4',
    'h-7',
    'h-5',
    'h-6',
    'h-4',
    'h-7',
    'h-5',
    'h-6',
  ],
  lg: [
    'h-6',
    'h-10',
    'h-8',
    'h-14',
    'h-9',
    'h-16',
    'h-12',
    'h-20',
    'h-10',
    'h-16',
    'h-14',
    'h-20',
  ],
} as const

export function Spot01({
  size = 'default',
  className,
}: Readonly<{
  size?: keyof typeof sizeStyles
  className?: string
}>) {
  const vs = sizeStyles[size]
  const spark = sparkBySize[size]

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center',
        vs.shell,
        className,
      )}
    >
      <div className={cn('relative', vs.cardWrap)}>
        <Card className={cn('gap-0 p-0 shadow-sm', vs.backCard)} />

        <Card className={cn('relative gap-0 shadow-sm', vs.frontCard)}>
          <div
            className={cn('flex items-center justify-between', vs.headerGap)}
          >
            <span
              className={cn('text-muted-foreground font-medium', vs.label)}
            >
              Revenue
            </span>
            <Badge
              variant="secondary"
              className="gap-1 text-emerald-600 dark:text-emerald-400"
            >
              <TrendingUp className="size-3" />
              12%
            </Badge>
          </div>

          <div
            className={cn('font-semibold tracking-tight tabular-nums', vs.value)}
          >
            $48,262
          </div>

          <div className={cn('flex w-full items-end', vs.chart)}>
            {spark.map((height, index) => (
              <div
                key={index}
                className={cn(
                  'bg-primary/60 min-w-0 flex-1 rounded-full',
                  height,
                )}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
