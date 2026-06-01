export function ConfirmDestructiveActionConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[140px] rounded-lg border p-3 shadow-md">
        <div className="bg-destructive/15 mx-auto mb-2 flex size-6 items-center justify-center rounded-full">
          <div className="bg-destructive/60 size-2.5 rounded-full" />
        </div>
        <div className="mb-3 flex flex-col items-center gap-1.5">
          <div className="bg-foreground/20 h-1.5 w-16 rounded-full" />
          <div className="bg-foreground/10 h-1 w-full rounded-full" />
          <div className="bg-foreground/10 h-1 w-3/4 rounded-full" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-5 flex-1 rounded border shadow-sm" />
          <div className="bg-destructive h-5 flex-1 rounded shadow-sm" />
        </div>
      </div>
    </div>
  )
}
