export function VerifyIdentityConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[150px] rounded-md border p-3 shadow-sm">
        <div className="border-primary/30 bg-primary/10 mx-auto mb-2.5 flex size-8 items-center justify-center rounded-full border">
          <div className="bg-primary size-3 rounded-full" />
        </div>
        <div className="bg-foreground/25 mx-auto mb-1 h-1.5 w-3/4 rounded-full" />
        <div className="bg-foreground/10 mx-auto mb-3 h-1 w-full rounded-full" />
        <div className="mb-2.5 flex justify-center gap-1">
          <div className="bg-foreground/10 size-3 rounded border" />
          <div className="bg-foreground/10 size-3 rounded border" />
          <div className="bg-foreground/10 size-3 rounded border" />
          <div className="bg-foreground/10 size-3 rounded border" />
        </div>
        <div className="bg-primary h-3 w-full rounded" />
      </div>
    </div>
  )
}
