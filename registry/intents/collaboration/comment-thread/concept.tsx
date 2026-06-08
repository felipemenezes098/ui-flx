export function CommentThreadConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="flex w-full max-w-[180px] flex-col gap-2.5">
        <div className="flex gap-2">
          <div className="bg-foreground/25 size-6 shrink-0 rounded-full" />
          <div className="bg-card dark:bg-muted flex flex-1 flex-col gap-1 rounded-lg rounded-tl-none border p-2">
            <div className="bg-foreground/20 h-1.5 w-10 rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-full rounded-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse gap-2">
          <div className="bg-primary/40 size-6 shrink-0 rounded-full" />
          <div className="bg-primary/10 flex flex-1 flex-col gap-1 rounded-lg rounded-tr-none border p-2">
            <div className="bg-foreground/10 h-1.5 w-3/4 rounded-full" />
          </div>
        </div>

        <div className="bg-card dark:bg-muted mt-0.5 flex items-center gap-1.5 rounded-full border px-2 py-1">
          <div className="bg-foreground/10 h-1.5 flex-1 rounded-full" />
          <div className="bg-primary/60 size-3 rounded-full" />
        </div>
      </div>
    </div>
  )
}
