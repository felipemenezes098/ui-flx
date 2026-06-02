export function EmptyStateConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="border-foreground/15 flex w-full max-w-[150px] flex-col items-center gap-2 rounded-md border border-dashed p-5 text-center">
        <div className="bg-foreground/10 size-7 rounded-lg" />
        <div className="bg-foreground/25 h-1.5 w-2/3 rounded-full" />
        <div className="bg-foreground/10 h-1 w-full rounded-full" />
        <div className="bg-foreground/10 h-1 w-4/5 rounded-full" />
        <div className="bg-primary mt-1 h-3 w-1/2 rounded" />
      </div>
    </div>
  )
}
