import {
  Asterisk,
  Globe,
  Hexagon,
  Infinity as InfinityIcon,
} from 'lucide-react'

const clients = [
  { name: 'Northwind', icon: Asterisk },
  { name: 'Loop & Co', icon: InfinityIcon },
  { name: 'Hexa Labs', icon: Hexagon },
  { name: 'Meridian', icon: Globe },
]

export function Content14() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 sm:gap-16 sm:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start md:gap-16">
          <div className="flex flex-col">
            <h2 className="text-foreground text-5xl leading-[1.05] font-light tracking-tight sm:text-6xl">
              The
              <br />
              <span className="font-bold">Fieldwork</span> Studio
            </h2>
            <span aria-hidden className="bg-foreground mt-6 block h-0.5 w-10" />

            <div className="mt-12 flex flex-col items-start gap-3 md:mt-16">
              <h3 className="text-foreground text-xl font-semibold tracking-tight">
                Brand identity
              </h3>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed sm:text-base">
                We design marks and systems for small teams with big plans, from
                the first sketch to launch day.
              </p>
              <a
                href="#"
                className="text-foreground border-foreground hover:border-foreground/50 mt-4 flex h-10 items-end border-b-2 pb-1.5 text-sm font-semibold transition-colors"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="bg-muted relative aspect-square w-full overflow-hidden outline outline-black/10 md:ml-auto md:max-w-md dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop"
              alt="Alt"
              decoding="async"
              className="size-full object-cover grayscale"
            />
          </div>
        </div>

        <ul className="border-border grid grid-cols-2 border-t border-l md:grid-cols-4">
          {clients.map((client) => (
            <li
              key={client.name}
              className="border-border flex h-28 items-center justify-center border-r border-b sm:h-36"
            >
              <client.icon
                aria-hidden
                className="text-foreground size-8"
                strokeWidth={2.5}
              />
              <span className="sr-only">{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
