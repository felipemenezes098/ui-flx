export function SelectAPlanConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="grid w-full max-w-[160px] grid-cols-3 gap-1.5">
        {[
          { id: 'starter', featured: false },
          { id: 'pro', featured: true },
          { id: 'team', featured: false },
        ].map(({ id, featured }) => (
          <div
            key={id}
            className={
              featured
                ? 'bg-card dark:bg-muted rounded-md border border-primary/40 p-1.5 shadow-sm ring-1 ring-primary/20'
                : 'bg-card dark:bg-muted rounded-md border p-1.5 shadow-sm'
            }
          >
            <div className="bg-foreground/20 mb-1.5 h-1 w-full rounded-full" />
            <div className="bg-foreground/25 mb-2 h-2 w-2/3 rounded-full" />
            <div
              className={
                featured
                  ? 'bg-primary mb-1.5 h-3 w-full rounded'
                  : 'bg-foreground/10 mb-1.5 h-3 w-full rounded'
              }
            />
            <div className="flex flex-col gap-0.5">
              <div className="bg-foreground/10 h-0.5 w-full rounded-full" />
              <div className="bg-foreground/8 h-0.5 w-4/5 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
