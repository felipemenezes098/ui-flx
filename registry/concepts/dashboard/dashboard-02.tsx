import {
  CalendarDays,
  CheckCircle2,
  CircleDot,
  FolderKanban,
  Inbox,
  LayoutDashboard,
  Plus,
  Timer,
  Users,
} from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { cn } from '@/lib/utils'

const nav = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FolderKanban, label: 'Projects', active: false },
  { icon: Inbox, label: 'Inbox', active: false },
  { icon: Users, label: 'Team', active: false },
]

const stats = [
  { icon: CircleDot, label: 'In progress', value: '12' },
  { icon: Timer, label: 'Due this week', value: '5' },
  { icon: CheckCircle2, label: 'Completed', value: '48' },
]

const tasks = [
  {
    title: 'Redesign onboarding flow',
    project: 'Mobile App',
    progress: 80,
    status: 'In review',
    initials: 'EM',
  },
  {
    title: 'Migrate billing to Stripe',
    project: 'Platform',
    progress: 45,
    status: 'In progress',
    initials: 'RK',
  },
  {
    title: 'Q3 marketing site',
    project: 'Website',
    progress: 20,
    status: 'In progress',
    initials: 'TS',
  },
  {
    title: 'API rate limiting',
    project: 'Backend',
    progress: 100,
    status: 'Done',
    initials: 'JD',
  },
]

const team = [
  { name: 'Emma Müller', role: 'Designer', initials: 'EM', online: true },
  { name: 'Ravi Kapoor', role: 'Engineer', initials: 'RK', online: true },
  { name: 'Tara Singh', role: 'Marketing', initials: 'TS', online: false },
  { name: 'James Doyle', role: 'Engineer', initials: 'JD', online: false },
]

export function Dashboard02() {
  return (
    <Card className="w-full gap-0 py-0">
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="bg-primary size-6 rounded-md" />
          <span className="text-sm font-semibold tracking-tight">Northwind</span>
        </div>
        <Button size="sm" className="ml-auto">
          <Plus />
          New task
        </Button>
        <Avatar className="size-7">
          <AvatarFallback className="text-xs">NW</AvatarFallback>
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
                My work
              </h2>
              <p className="text-muted-foreground text-xs">
                Tasks assigned to you
              </p>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <CalendarDays />
              This week
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <Card key={label} size="sm" className="gap-1 py-3">
                <CardContent>
                  <Icon className="text-muted-foreground size-4" />
                  <div className="mt-2 text-lg font-semibold tracking-tight">
                    {value}
                  </div>
                  <div className="text-muted-foreground text-xs">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card size="sm" className="gap-3">
            <CardContent>
              <div className="mb-1 text-sm font-medium">Active tasks</div>
              <div className="flex flex-col gap-3">
                {tasks.map((t) => (
                  <div key={t.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-7">
                        <AvatarFallback className="text-xs">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium">
                          {t.title}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {t.project}
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className={cn(
                          t.status === 'Done' &&
                            'text-emerald-600 dark:text-emerald-500',
                        )}
                      >
                        {t.status}
                      </Badge>
                    </div>
                    <Progress value={t.progress} className="h-1.5" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>

        <aside className="hidden w-56 shrink-0 flex-col gap-3 border-l p-4 lg:flex">
          <div className="text-sm font-medium">Team</div>
          {team.map((m) => (
            <Item key={m.name} size="sm" className="px-0">
              <ItemMedia>
                <div className="relative">
                  <Avatar className="size-8">
                    <AvatarFallback className="text-xs">
                      {m.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className={cn(
                      'border-card absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2',
                      m.online ? 'bg-emerald-500' : 'bg-muted-foreground/40',
                    )}
                  />
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{m.name}</ItemTitle>
                <ItemDescription>{m.role}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </aside>
      </div>
    </Card>
  )
}
