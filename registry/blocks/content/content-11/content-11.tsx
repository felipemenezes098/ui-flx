import { LayoutDashboard, Sparkles } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Content11Dashboard } from './content-11-dashboard'

const features = [
  {
    icon: LayoutDashboard,
    title: 'One view for every account',
    description:
      'Balances, payments, and campaign activity live in a single dashboard instead of scattered spreadsheets.',
  },
  {
    icon: Sparkles,
    title: 'Insights that update themselves',
    description:
      'Every record is grouped by status, channel, and performance automatically, so trends surface before you go looking for them.',
  },
]

export function Content11() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-24 lg:gap-14">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            <Balancer>Every account, one place to watch it move</Balancer>
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
            <Balancer>
              Balances, campaigns, and payments stay in sync automatically, so
              your team spends less time reconciling and more time collecting.
            </Balancer>
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
          <div className="bg-secondary/70 dark:bg-secondary/30 relative h-72 w-full overflow-hidden rounded-3xl sm:h-80 lg:h-[22rem]">
            <div className="absolute top-6 left-6 w-[125%] max-w-none overflow-hidden rounded-2xl *:w-full">
              <Content11Dashboard />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-secondary/70 dark:bg-secondary/30 flex h-full flex-col gap-2 rounded-3xl p-6"
              >
                <feature.icon className="text-foreground size-5" />
                <h3 className="text-foreground text-sm font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <Balancer>{feature.description}</Balancer>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
