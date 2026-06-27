export function HeroConcept() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
      <div className="flex w-full flex-col items-center gap-2">
        <div className="bg-foreground/10 h-1.5 w-24 rounded-full" />
        <div className="bg-foreground/20 h-2.5 w-40 rounded-full" />
        <div className="bg-foreground/10 h-1.5 w-32 rounded-full" />
      </div>
      <div className="mt-1 flex gap-2">
        <div className="bg-primary h-7 w-16 rounded-lg shadow-sm" />
        <div className="h-7 w-16 rounded-lg border shadow-sm" />
      </div>
    </div>
  )
}

export function CtaConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted flex w-full flex-col items-center gap-3 rounded-xl border p-5 shadow-sm">
        <div className="bg-foreground/20 h-2.5 w-36 rounded-full" />
        <div className="flex w-full flex-col items-center gap-1.5">
          <div className="bg-foreground/10 h-1.5 w-44 rounded-full" />
          <div className="bg-foreground/10 h-1.5 w-32 rounded-full" />
        </div>
        <div className="bg-primary mt-1 h-7 w-24 rounded-full shadow-sm" />
      </div>
    </div>
  )
}

export function ContentConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-foreground/15 mb-1 h-2 w-20 rounded-full" />
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'a', w: 32 },
            { id: 'b', w: 28 },
            { id: 'c', w: 36 },
            { id: 'd', w: 28 },
          ].map(({ id, w }) => (
            <div
              key={id}
              className="bg-card dark:bg-muted rounded-md border p-2.5 shadow-sm"
            >
              <div
                className="bg-foreground/15 mb-1.5 h-1.5 rounded-full"
                style={{ width: `${w * 1.5}px` }}
              />
              <div className="bg-foreground/8 h-1 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CarouselConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2.5">
          <div className="bg-card dark:bg-muted border-border w-[63%] shrink-0 rounded-xl border p-3 shadow-sm">
            <div className="bg-foreground/8 mb-2.5 h-16 w-full rounded-lg" />
            <div className="bg-foreground/20 mb-1.5 h-1.5 w-16 rounded-full" />
            <div className="bg-foreground/10 h-1 w-10 rounded-full" />
          </div>
          <div className="bg-card dark:bg-muted border-border w-[63%] shrink-0 rounded-xl border p-3 opacity-40 shadow-sm">
            <div className="bg-foreground/8 mb-2.5 h-16 w-full rounded-lg" />
            <div className="bg-foreground/15 h-1.5 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ShowcaseConcept() {
  return (
    <div className="flex h-full w-full items-end justify-center p-4 pb-5">
      <div className="grid w-full grid-cols-3 gap-2.5">
        {[70, 55, 65].map((h) => (
          <div key={h} className="flex flex-col gap-2">
            <div
              className="bg-card dark:bg-muted border-border w-full rounded-lg border shadow-sm"
              style={{ height: `${h}px` }}
            />
            <div className="bg-foreground/20 h-1.5 w-3/4 rounded-full" />
            <div className="bg-foreground/10 h-1 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function BentoGridConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-5">
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-2">
        <div className="bg-card dark:bg-muted border-border col-span-2 row-span-2 rounded-xl border shadow-sm" />
        <div className="bg-card dark:bg-muted border-border rounded-lg border shadow-sm" />
        <div className="bg-card dark:bg-muted border-border rounded-lg border shadow-sm" />
      </div>
    </div>
  )
}

export function LogosConcept() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-5">
      <div className="bg-foreground/12 h-1.5 w-16 rounded-full" />
      <div className="relative w-full overflow-hidden">
        <div className="from-muted/80 absolute top-0 left-0 z-10 h-full w-6 bg-gradient-to-r to-transparent" />
        <div className="from-muted/80 absolute top-0 right-0 z-10 h-full w-6 bg-gradient-to-l to-transparent" />
        <div className="flex items-center justify-center gap-5">
          {[
            { id: 'a', w: 34 },
            { id: 'b', w: 42 },
            { id: 'c', w: 28 },
            { id: 'd', w: 38 },
            { id: 'e', w: 32 },
          ].map(({ id, w }) => (
            <div
              key={id}
              className="bg-foreground/20 h-3.5 shrink-0 rounded-sm"
              style={{ width: `${w}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TestimonialsConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full rounded-lg border p-4 shadow-sm">
        <div className="mb-3 flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-2.5 w-2.5 rounded-sm bg-amber-400/70" />
          ))}
        </div>
        <div className="mb-3 flex flex-col gap-1.5">
          <div className="bg-foreground/12 h-1.5 w-full rounded-full" />
          <div className="bg-foreground/12 h-1.5 w-4/5 rounded-full" />
          <div className="bg-foreground/12 h-1.5 w-3/5 rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground/15 h-6 w-6 rounded-full" />
          <div className="bg-foreground/15 h-1.5 w-14 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function ScrollConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="flex w-full gap-3">
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`bg-card dark:bg-muted rounded-md border px-2.5 py-2 shadow-sm transition-all ${i === 1 ? 'border-foreground/30' : 'opacity-40'}`}
            >
              <div
                className={`h-1.5 w-14 rounded-full ${i === 1 ? 'bg-foreground/25' : 'bg-foreground/10'}`}
              />
            </div>
          ))}
        </div>
        <div className="bg-card dark:bg-muted flex-1 rounded-lg border shadow-sm" />
      </div>
    </div>
  )
}
