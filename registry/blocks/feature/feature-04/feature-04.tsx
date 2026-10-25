import Balancer from 'react-wrap-balancer'

const milestones = [
  {
    title: "Master's in Architecture",
    description: 'Grounded in structure, daylight and the history of form.',
  },
  {
    title: 'Apprenticeship in joinery',
    description: 'Three years learning restraint from master woodworkers.',
  },
  {
    title: 'Independent practice since 2012',
    description: 'Over sixty homes and studios delivered in four countries.',
  },
  {
    title: 'Member of the design review panel',
    description: 'Advising on public spaces that shape everyday city life.',
  },
]

export function Feature04() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 sm:gap-12 sm:py-28 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-16">
        <h2 className="text-foreground max-w-xl text-3xl font-normal tracking-tight sm:text-4xl lg:col-span-7 lg:text-5xl">
          <Balancer>A practice built on years of careful work</Balancer>
        </h2>

        <div className="relative aspect-[4/3] w-full overflow-hidden outline outline-black/10 sm:aspect-[3/2] lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:aspect-[4/5] dark:outline-white/10">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
            alt="Alt"
            decoding="async"
            className="size-full object-cover object-[40%_center]"
          />
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-7 lg:row-start-2 lg:self-end">
          {milestones.map((milestone) => (
            <li
              key={milestone.title}
              className="border-border flex flex-col gap-3 border-b pb-8"
            >
              <h3 className="text-foreground text-lg font-medium">
                {milestone.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {milestone.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
