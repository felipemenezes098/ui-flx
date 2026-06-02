export function TwoFactorSetupConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[150px] rounded-md border p-3 shadow-sm">
        <div className="bg-foreground/10 mx-auto mb-2 size-6 rounded-full" />
        <div className="bg-foreground/25 mx-auto mb-2 h-1.5 w-2/3 rounded-full" />
        <div className="border-foreground/15 mx-auto mb-2 grid size-10 grid-cols-3 grid-rows-3 gap-px rounded border p-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={i % 2 === 0 ? 'bg-foreground/40' : 'bg-transparent'}
            />
          ))}
        </div>
        <div className="mb-2 flex justify-center gap-1">
          <div className="bg-foreground/10 size-3 rounded border" />
          <div className="bg-foreground/10 size-3 rounded border" />
          <div className="bg-foreground/10 size-3 rounded border" />
        </div>
        <div className="bg-primary h-3 w-full rounded" />
      </div>
    </div>
  )
}
