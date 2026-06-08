export function SignInConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[150px] rounded-md border p-3 shadow-sm">
        <div className="bg-foreground/25 mb-1 h-1.5 w-2/3 rounded-full" />
        <div className="bg-foreground/10 mb-3 h-1 w-full rounded-full" />
        <div className="flex flex-col gap-1.5">
          <div className="bg-foreground/10 h-3 w-full rounded border" />
          <div className="bg-foreground/10 h-3 w-full rounded border" />
        </div>
        <div className="my-2.5 flex items-center gap-1.5">
          <span className="bg-foreground/10 h-px flex-1" />
          <span className="bg-foreground/20 size-0.5 rounded-full" />
          <span className="bg-foreground/10 h-px flex-1" />
        </div>
        <div className="bg-foreground/10 mb-1.5 h-2 w-full rounded" />
        <div className="bg-primary h-3 w-full rounded" />
      </div>
    </div>
  )
}
