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

export function FeatureConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="flex w-full flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="bg-card dark:bg-muted border-border size-7 shrink-0 rounded-md border shadow-sm" />
            <div className="flex flex-1 flex-col gap-1.5">
              <div
                className="bg-foreground/20 h-1.5 rounded-full"
                style={{ width: `${60 - i * 8}%` }}
              />
              <div className="bg-foreground/8 h-1 w-4/5 rounded-full" />
            </div>
          </div>
        ))}
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

export function ListsConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="flex w-full flex-col">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border-border flex items-center gap-3 border-b py-2.5 first:border-t"
          >
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="bg-foreground/20 h-1.5 w-2/5 rounded-full" />
              <div className="bg-foreground/8 h-1 w-3/4 rounded-full" />
            </div>
            <div className="bg-card dark:bg-muted border-border h-8 w-12 shrink-0 rounded-sm border shadow-sm" />
          </div>
        ))}
      </div>
    </div>
  )
}
