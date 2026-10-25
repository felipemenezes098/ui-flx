import Balancer from 'react-wrap-balancer'

const features = [
  {
    title: 'Honest Materials',
    description: 'Solid oak, wool and linen, chosen for how they age.',
  },
  {
    title: 'Careful Joinery',
    description: 'Cut and fitted by hand so nothing needs a visible screw.',
  },
  {
    title: 'Small Batches',
    description: 'Made in short runs to keep quality high and waste low.',
  },
  {
    title: 'Made to Repair',
    description: 'Every part can be replaced, refinished or reupholstered.',
  },
]

export function Feature06() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 sm:py-28 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10">
        <div className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9 lg:row-start-1">
          <h2 className="text-foreground max-w-sm text-2xl font-normal tracking-tight sm:text-3xl">
            <Balancer>Furniture built to stay in the family</Balancer>
          </h2>

          <ol className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-2"
              >
                <span className="text-muted-foreground text-sm tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-foreground text-sm font-medium sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground max-w-xs text-sm leading-relaxed sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative lg:col-span-8 lg:row-start-1">
          <div className="bg-muted relative aspect-[4/5] w-[72%] overflow-hidden outline outline-black/10 dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1565551827702-00f627902be3?q=80&w=1400&auto=format&fit=crop"
              alt="Alt 1"
              decoding="async"
              className="size-full object-cover grayscale"
            />
          </div>
          <div className="bg-muted absolute top-[22%] right-0 aspect-[4/5] w-[42%] overflow-hidden outline outline-black/10 dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1557930137-1e47d53212ad?q=80&w=1000&auto=format&fit=crop"
              alt="Alt 2"
              loading="lazy"
              decoding="async"
              className="size-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
