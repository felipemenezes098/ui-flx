export function ShareAccessConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[170px] rounded-md border p-3 shadow-sm">
        <div className="bg-foreground/20 mb-3 h-1.5 w-1/2 rounded-full" />
        <div className="bg-foreground/10 mb-3 flex h-6 w-full items-center gap-2 rounded border px-2">
          <div className="bg-primary/50 size-2 rounded-full" />
          <div className="bg-foreground/15 h-1.5 w-20 rounded-full" />
        </div>
        {[0, 1].map((row) => (
          <div key={row} className="mb-2 flex items-center gap-2">
            <div className="bg-foreground/20 size-5 rounded-full" />
            <div className="bg-foreground/15 h-1.5 flex-1 rounded-full" />
            <div className="bg-foreground/10 h-3 w-8 rounded border" />
          </div>
        ))}
      </div>
    </div>
  )
}
