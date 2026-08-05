import { ArrowDownRight, ArrowUpRight, Mail, MessageSquare, Phone } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Outstanding balance', value: '$1,842,900', delta: '-4.2%', trend: 'down' as const },
  { label: 'Active accounts', value: '312', delta: '+12', trend: 'up' as const },
  { label: 'Recovery rate', value: '74%', delta: '+3.1%', trend: 'up' as const },
  { label: 'Avg. resolution', value: '9.6 days', delta: '-1.8d', trend: 'down' as const },
]

const channels = [
  { icon: Mail, label: 'Email', sent: '1,240 sent', rate: '21.3%' },
  { icon: MessageSquare, label: 'SMS', sent: '860 sent', rate: '26.5%' },
  { icon: Phone, label: 'Phone', sent: '410 sent', rate: '31.2%' },
]

const timeline = [
  { title: 'Payment posted', meta: 'Meridian Co · $12,400' },
  { title: 'Reminder sequence completed', meta: 'Harlow Group' },
  { title: 'New accounts imported', meta: '380 records' },
  { title: 'Collection plan started', meta: 'Ridgeline LLC' },
]

export function DashboardDemo() {
  return (
    <Card className="border-border/40 w-full gap-0 overflow-hidden rounded-none p-0 shadow-sm">
      <div className="border-border/40 flex items-center justify-between gap-3 border-b px-5 py-4 sm:px-6">
        <div>
          <h3 className="text-foreground text-sm font-semibold tracking-tight">
            Collections
          </h3>
          <p className="text-muted-foreground mt-0.5 text-xs">
            How every account is trending this month
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-5 py-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="border-border/40 min-w-0 rounded-lg border p-3">
            <p className="text-muted-foreground truncate text-[11px]">
              {stat.label}
            </p>
            <p className="text-foreground mt-1 text-base font-semibold tabular-nums">
              {stat.value}
            </p>
            <p
              className={cn(
                'mt-1 flex items-center gap-0.5 text-[11px] tabular-nums',
                stat.trend === 'up'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-muted-foreground',
              )}
            >
              {stat.trend === 'up' ? (
                <ArrowUpRight className="size-3" />
              ) : (
                <ArrowDownRight className="size-3" />
              )}
              {stat.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="border-border/40 grid grid-cols-1 gap-6 border-t px-5 py-5 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-border/40 sm:px-6">
        <div className="sm:pr-6">
          <h4 className="text-foreground text-xs font-medium">
            Channel mix
          </h4>
          <div className="divide-border/40 mt-3 flex flex-col divide-y">
            {channels.map(({ icon: ChannelIcon, label, sent, rate }) => (
              <div
                key={label}
                className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
              >
                <ChannelIcon className="text-foreground/60 size-4 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-foreground text-xs font-medium">
                    {label}
                  </p>
                  <p className="text-muted-foreground text-[11px]">{sent}</p>
                </div>
                <span className="text-foreground text-xs font-medium tabular-nums">
                  {rate}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:pl-6">
          <h4 className="text-foreground text-xs font-medium">Timeline</h4>
          <div className="relative mt-3 flex flex-col gap-3.5 pl-4">
            <div className="bg-border/50 absolute top-1 bottom-1 left-[3px] w-px" />
            {timeline.map((entry) => (
              <div key={entry.title} className="relative">
                <span className="bg-foreground/40 absolute top-1 -left-4 size-1.5 rounded-full" />
                <p className="text-foreground text-xs font-medium">
                  {entry.title}
                </p>
                <p className="text-muted-foreground text-[11px]">
                  {entry.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
