import {
  Activity,
  BarChart3,
  Bell,
  LayoutGrid,
  Search,
  Settings,
  Users,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const nav = [
  { icon: LayoutGrid, label: 'Overview', active: true },
  { icon: BarChart3, label: 'Reports', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: Activity, label: 'Activity', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

const stats = [
  { label: 'Revenue', value: '$48.2k', trend: '+12.4%', up: true },
  { label: 'Active users', value: '2,318', trend: '+4.1%', up: true },
  { label: 'Conversion', value: '3.6%', trend: '+0.8%', up: true },
  { label: 'Churn', value: '1.4%', trend: '-2.0%', up: false },
]

const bars = [42, 58, 36, 64, 48, 72, 55, 80, 61, 88, 70, 94]

const activity = [
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&q=80',
    name: 'James Doe',
    action: 'upgraded to Pro',
    time: '2m',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80',
    name: 'Sara Lin',
    action: 'invited 3 members',
    time: '18m',
  },
  {
    src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&q=80',
    name: 'Marcus Vale',
    action: 'connected Stripe',
    time: '1h',
  },
]

export function DashboardDemo() {
  return (
    <div className="relative w-full max-w-4xl">
      <Card className="bg-card w-full gap-0 overflow-hidden p-0 shadow-2xl outline outline-black/10 dark:outline-white/10">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <div className="flex shrink-0 gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="text-muted-foreground bg-muted mx-auto flex h-6 w-full max-w-56 min-w-0 items-center gap-1.5 rounded-md px-2 text-[10px]">
            <Search className="size-3 shrink-0" />
            <span className="truncate">app.acme.com/overview</span>
          </div>
          <Avatar className="size-6 shrink-0">
            <AvatarImage
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&q=80"
              alt=""
            />
            <AvatarFallback className="text-[9px]">JD</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-44 shrink-0 flex-col gap-1 border-r p-3 sm:flex">
            <div className="mb-2 flex items-center gap-2 px-1">
              <div className="bg-primary/85 size-6 rounded-lg" />
              <span className="text-sm font-semibold tracking-tight">Acme</span>
            </div>
            {nav.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${
                  active
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                <Icon className="size-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col gap-3 p-3 sm:p-4">
            {/* Header */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-sm font-semibold tracking-tight">
                  Overview
                </span>
                <span className="text-muted-foreground truncate text-[10px]">
                  Last 30 days · updated 2m ago
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <Button size="xs" variant="outline">
                  Export
                </Button>
                <Button size="xs">New report</Button>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="min-w-0 rounded-lg border p-2.5">
                  <span className="text-muted-foreground block truncate text-[9px]">
                    {s.label}
                  </span>
                  <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-1">
                    <span className="text-sm font-semibold tabular-nums">
                      {s.value}
                    </span>
                    <span
                      className={`text-[9px] font-medium tabular-nums ${
                        s.up
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-red-500 dark:text-red-400'
                      }`}
                    >
                      {s.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-lg border p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate text-xs font-medium">
                    Monthly revenue
                  </span>
                  <span className="text-muted-foreground truncate text-[9px]">
                    $48,240 total
                  </span>
                </div>
                <span className="text-muted-foreground flex shrink-0 items-center gap-1 text-[9px]">
                  <span className="bg-primary/80 size-1.5 rounded-full" />
                  This year
                </span>
              </div>

              <div className="mt-3 flex h-20 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="bg-primary/70 min-h-0.5 flex-1 rounded-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Recent activity</span>
                <Badge variant="secondary" className="text-[9px]">
                  Live
                </Badge>
              </div>
              <div className="mt-2 flex flex-col">
                {activity.map((a, i) => (
                  <div key={a.name}>
                    {i > 0 && <Separator className="my-2" />}
                    <div className="flex items-center gap-2">
                      <Avatar className="size-6 shrink-0">
                        <AvatarImage src={a.src} alt="" />
                        <AvatarFallback className="text-[9px]">
                          {a.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="min-w-0 flex-1 truncate text-[11px]">
                        <span className="font-medium">{a.name}</span>
                        <span className="text-muted-foreground">
                          {' '}
                          {a.action}
                        </span>
                      </span>
                      <span className="text-muted-foreground shrink-0 text-[9px] tabular-nums">
                        {a.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Floating notification */}
      <div className="absolute right-1 bottom-1 max-w-[calc(100%-0.5rem)] sm:-right-4 sm:-bottom-4">
        <Card className="flex-row items-center gap-2.5 p-2.5 shadow-lg">
          <div className="bg-primary/15 text-primary relative flex size-8 shrink-0 items-center justify-center rounded-lg">
            <Bell className="size-4" />
            <span className="border-card absolute -top-0.5 -right-0.5 size-2 rounded-full border-2 bg-emerald-500" />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-xs leading-tight font-medium">
              Payment received
            </span>
            <span className="text-muted-foreground truncate text-[10px] leading-tight">
              $1,290 from Acme Inc.
            </span>
          </div>
          <Badge variant="secondary" className="ml-1 shrink-0 text-[10px]">
            +$1.2k
          </Badge>
        </Card>
      </div>
    </div>
  )
}
