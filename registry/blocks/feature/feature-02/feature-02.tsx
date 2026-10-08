import Balancer from 'react-wrap-balancer'

const columns = [
  [
    {
      number: '01',
      title: 'Explore the Library',
      description:
        'Browse hundreds of production-ready blocks across every section type.',
    },
    {
      number: '02',
      title: 'Customize & Theme',
      description:
        'Swap presets, tokens, and copy to match your brand in minutes.',
    },
  ],
  [
    {
      number: '03',
      title: 'Compose Your Pages',
      description:
        'Stack blocks into full layouts that fit your product and flow.',
    },
    {
      number: '04',
      title: 'Ship to Production',
      description: 'Copy the code or install via CLI, ready to deploy today.',
    },
  ],
]

function StepColumn({ steps }: Readonly<{ steps: (typeof columns)[number] }>) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {steps.map((step) => (
        <div
          key={step.number}
          className="border-border/80 bg-card rounded-2xl border p-5 sm:p-6"
        >
          <span className="text-muted-foreground font-serif text-lg italic">
            {step.number}
          </span>
          <h3 className="text-foreground mt-3 text-base font-semibold">
            {step.title}
          </h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            <Balancer>{step.description}</Balancer>
          </p>
        </div>
      ))}
    </div>
  )
}

export function Feature02() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:gap-16 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end sm:gap-16">
          <h2 className="text-foreground max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>
              Turning Your Product Vision into Interface, Simply.
            </Balancer>
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed sm:text-base">
            <Balancer>
              Building with Flexnative is a seamless, guided experience designed
              to make shipping polished UI effortless and fast.
            </Balancer>
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 min-[860px]:grid-cols-[1fr_auto_1fr] min-[860px]:gap-6">
          <StepColumn steps={columns[0]} />
          <div className="relative order-first mx-auto w-full max-w-sm overflow-hidden rounded-3xl shadow-sm outline outline-black/10 min-[860px]:order-0 dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1690848095491-942c798366b8?q=80&w=987&auto=format&fit=crop"
              alt="Alt"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <StepColumn steps={columns[1]} />
        </div>
      </div>
    </section>
  )
}
