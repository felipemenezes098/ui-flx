import Balancer from 'react-wrap-balancer'

import { Badge } from '@/components/ui/badge'

const deliverables = [
  'Interior design',
  'Furniture',
  'Lighting',
  'Styling',
  'Art direction',
]

const details = [
  { label: 'Sector', value: 'Hospitality' },
  { label: 'Duration', value: '8 months' },
  { label: 'Location', value: 'Lisbon, Portugal' },
]

export function Lists02() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:gap-16 sm:py-28">
        <div className="relative flex flex-col items-center gap-6 sm:block">
          <p className="text-muted-foreground font-mono text-xs tabular-nums sm:absolute sm:top-2 sm:left-0">
            2024
          </p>
          <h2 className="text-foreground text-center text-5xl font-normal tracking-tight sm:text-6xl">
            Maison Lune
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-10">
          <div className="flex flex-col gap-4 md:col-span-4">
            <p className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
              Deliverables
            </p>
            <ul className="flex flex-wrap gap-2">
              {deliverables.map((item) => (
                <li key={item}>
                  <Badge
                    variant="outline"
                    className="h-7 rounded-none px-2.5 font-mono text-xs tracking-wider uppercase"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-12 md:col-span-8">
            <p className="text-foreground text-xl leading-snug font-normal sm:text-2xl">
              <Balancer>
                A boutique hotel group asked us to turn a former textile
                warehouse into twelve calm rooms and a shared lounge. The brief
                covered the layout, custom furniture, lighting and styling, with
                one rule throughout: keep the building&apos;s raw walls and let
                warm, simple objects do the rest.
              </Balancer>
            </p>

            <dl className="border-border flex flex-col border-t">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="border-border flex items-center justify-between gap-6 border-b py-4"
                >
                  <dt className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-foreground text-sm">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
