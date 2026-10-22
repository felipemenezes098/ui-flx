const wordClassName =
  'text-foreground text-[clamp(3.5rem,19cqw,8rem)] leading-[0.8] font-black tracking-[-0.06em] uppercase lg:text-[clamp(3.5rem,6cqw,8rem)]'

export function Cta02() {
  return (
    <section className="bg-background w-full overflow-hidden">
      <div className="@container mx-auto max-w-[1600px] px-6 py-20 sm:py-28">
        <h2 className="sr-only">Early risers</h2>

        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8">
          <span
            aria-hidden
            className={`${wordClassName} self-start lg:self-auto`}
          >
            Early
          </span>

          <div className="relative isolate aspect-[4/5] w-full overflow-hidden outline outline-black/10 sm:aspect-[3/2] dark:outline-white/10">
            <img
              src="https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=1600&auto=format&fit=crop"
              alt="Alt"
              decoding="async"
              className="absolute inset-0 -z-10 size-full object-cover grayscale"
            />
            <div className="absolute inset-0 -z-10 bg-black/25" />

            <div className="flex size-full items-center justify-center p-6">
              <a
                href="#"
                className="group relative flex h-20 w-full max-w-64 items-center justify-center text-sm font-semibold tracking-wide text-white uppercase outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.96] sm:h-28 sm:max-w-80"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-3 border-y-[3px] border-l-[3px] border-white transition-transform duration-300 ease-out group-hover:-translate-x-1.5 sm:w-4"
                />
                <span
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-3 border-y-[3px] border-r-[3px] border-white transition-transform duration-300 ease-out group-hover:translate-x-1.5 sm:w-4"
                />
                Join the club
              </a>
            </div>
          </div>

          <span
            aria-hidden
            className={`${wordClassName} self-end lg:self-auto`}
          >
            Risers
          </span>
        </div>
      </div>
    </section>
  )
}
