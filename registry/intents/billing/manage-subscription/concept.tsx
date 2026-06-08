export function ManageSubscriptionConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[160px] rounded-md border p-3 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="bg-foreground/20 h-1.5 w-12 rounded-full" />
          <div className="bg-primary/50 h-3 w-8 rounded-full" />
        </div>
        <div className="bg-foreground/25 mb-2 h-3 w-16 rounded" />
        <div className="bg-foreground/10 mb-3 h-1.5 w-full rounded-full" />
        <div className="flex gap-2">
          <div className="bg-primary/60 h-4 flex-1 rounded" />
          <div className="bg-foreground/10 h-4 flex-1 rounded border" />
        </div>
      </div>
    </div>
  )
}
