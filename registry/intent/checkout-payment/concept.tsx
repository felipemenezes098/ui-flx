export function CheckoutPaymentConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted flex w-full max-w-[150px] gap-2 rounded-md border p-3 shadow-sm">
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="bg-foreground/25 h-1.5 w-2/3 rounded-full" />
          <div className="bg-foreground/10 h-3 w-full rounded border" />
          <div className="flex gap-1">
            <div className="bg-foreground/10 h-3 flex-1 rounded border" />
            <div className="bg-foreground/10 h-3 flex-1 rounded border" />
          </div>
          <div className="bg-primary mt-1 h-3 w-full rounded" />
        </div>
        <div className="bg-foreground/5 flex w-1/3 flex-col gap-1 rounded p-1.5">
          <div className="bg-foreground/15 h-1 w-full rounded-full" />
          <div className="bg-foreground/15 h-1 w-full rounded-full" />
          <div className="bg-foreground/30 mt-auto h-1.5 w-2/3 rounded-full" />
        </div>
      </div>
    </div>
  )
}
