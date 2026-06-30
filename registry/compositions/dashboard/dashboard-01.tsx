'use client'

import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Home,
  LayoutGrid,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import { Bar, BarChart, XAxis } from 'recharts'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Input } from '@/components/ui/input'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { cn } from '@/lib/utils'

const nav = [
  { icon: Home, label: 'Overview', active: true },
  { icon: LayoutGrid, label: 'Projects', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

const stats = [
  { label: 'Revenue', value: '$48.2k', delta: '+12.5%', up: true },
  { label: 'Active users', value: '2,318', delta: '+8.1%', up: true },
  { label: 'Conversion', value: '3.6%', delta: '-0.4%', up: false },
  { label: 'Avg. session', value: '4m 12s', delta: '+2.3%', up: true },
]

const chartData = [
  { month: 'Jan', revenue: 42 },
  { month: 'Feb', revenue: 64 },
  { month: 'Mar', revenue: 48 },
  { month: 'Apr', revenue: 78 },
  { month: 'May', revenue: 56 },
  { month: 'Jun', revenue: 88 },
  { month: 'Jul', revenue: 67 },
  { month: 'Aug', revenue: 95 },
  { month: 'Sep', revenue: 72 },
  { month: 'Oct', revenue: 60 },
  { month: 'Nov', revenue: 84 },
  { month: 'Dec', revenue: 70 },
]

const chartConfig = {
  revenue: { label: 'Revenue', color: 'var(--color-primary)' },
} satisfies ChartConfig

const rows = [
  {
    name: 'Olivia Martin',
    email: 'olivia@email.com',
    amount: '+$1,999',
    initials: 'OM',
  },
  {
    name: 'Jackson Lee',
    email: 'jackson@email.com',
    amount: '+$39',
    initials: 'JL',
  },
  {
    name: 'Isabella Nguyen',
    email: 'bella@email.com',
    amount: '+$299',
    initials: 'IN',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99',
    initials: 'WK',
  },
]

export function Dashboard01() {
  return (
    <Card className="dark:bg-muted/20 w-full gap-0 py-0">
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="bg-primary size-6 rounded-md" />
          <span className="text-sm font-semibold tracking-tight">Acme Inc</span>
        </div>
        <div className="relative ml-auto hidden max-w-xs flex-1 sm:block">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-3.5 -translate-y-1/2" />
          <Input placeholder="Search…" className="h-8 pl-8 text-xs" />
        </div>
        <Button variant="ghost" size="icon-sm" className="ml-auto sm:ml-0">
          <Bell />
        </Button>
        <Avatar className="size-7">
          <AvatarFallback className="text-xs">AC</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex">
        <aside className="hidden w-48 shrink-0 flex-col gap-1 border-r p-3 md:flex">
          {nav.map(({ icon: Icon, label, active }) => (
            <Button
              key={label}
              variant={active ? 'secondary' : 'ghost'}
              size="sm"
              className="w-full justify-start"
            >
              <Icon />
              {label}
            </Button>
          ))}
        </aside>

        <main className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                Overview
              </h2>
              <p className="text-muted-foreground text-xs">
                Last 30 days performance
              </p>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Jan 1 – Jan 30
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <Card key={s.label} size="sm" className="gap-1 py-3">
                <CardContent>
                  <div className="text-muted-foreground text-xs">{s.label}</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">
                    {s.value}
                  </div>
                  <Badge
                    variant="secondary"
                    className={cn(
                      'mt-1.5 gap-0.5',
                      s.up
                        ? 'text-emerald-600 dark:text-emerald-500'
                        : 'text-muted-foreground',
                    )}
                  >
                    {s.up ? <ArrowUpRight /> : <ArrowDownRight />}
                    {s.delta}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card size="sm" className="gap-4">
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium">Revenue</span>
                <span className="text-muted-foreground text-xs">Monthly</span>
              </div>
              <ChartContainer
                config={chartConfig}
                className="h-28 w-full sm:h-36"
              >
                <BarChart data={chartData} barCategoryGap="20%">
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={6}
                    tick={{ fontSize: 10 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Bar
                    dataKey="revenue"
                    fill="var(--color-revenue)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card size="sm" className="gap-3">
            <CardContent>
              <div className="mb-1 text-sm font-medium">Recent sales</div>
              <ItemGroup>
                {rows.map((r) => (
                  <Item key={r.email} size="sm" className="px-0">
                    <ItemMedia>
                      <Avatar className="size-8">
                        <AvatarFallback className="text-xs">
                          {r.initials}
                        </AvatarFallback>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{r.name}</ItemTitle>
                      <ItemDescription>{r.email}</ItemDescription>
                    </ItemContent>
                    <ItemActions className="text-sm font-medium tabular-nums">
                      {r.amount}
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            </CardContent>
          </Card>
        </main>
      </div>
    </Card>
  )
}
