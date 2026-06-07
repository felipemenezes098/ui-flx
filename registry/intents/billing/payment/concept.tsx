export function PaymentConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[160px] rounded-md border p-3 shadow-sm">
        <div className="bg-foreground/20 mb-3 h-1.5 w-1/2 rounded-full" />
        <div className="bg-foreground/10 mb-2 flex h-6 w-full items-center gap-2 rounded border px-2">
          <div className="bg-primary/60 h-3 w-4 rounded-sm" />
          <div className="bg-foreground/15 h-1.5 w-16 rounded-full" />
        </div>
        <div className="mb-3 flex gap-2">
          <div className="bg-foreground/10 h-6 flex-1 rounded border" />
          <div className="bg-foreground/10 h-6 w-10 rounded border" />
        </div>
        <div className="bg-primary/60 h-4 w-full rounded" />
      </div>
    </div>
  )
}
