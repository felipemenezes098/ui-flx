export function OnboardingFlowConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card flex w-full max-w-[160px] flex-col gap-3 rounded-md border p-4">
        <div className="flex items-center justify-between">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-1 items-center last:flex-none">
              <div
                className={
                  i === 0
                    ? 'bg-primary size-4 rounded-full'
                    : 'bg-foreground/15 size-4 rounded-full'
                }
              />
              {i < 2 && <div className="bg-foreground/10 mx-1 h-px flex-1" />}
            </div>
          ))}
        </div>
        <div className="bg-foreground/25 h-1.5 w-2/3 rounded-full" />
        <div className="bg-foreground/10 h-1 w-full rounded-full" />
        <div className="bg-foreground/10 h-1 w-4/5 rounded-full" />
        <div className="bg-primary mt-1 h-3 w-1/2 self-end rounded" />
      </div>
    </div>
  )
}
