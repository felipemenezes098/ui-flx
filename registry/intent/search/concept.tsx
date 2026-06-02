export function SearchConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="bg-card dark:bg-muted w-full max-w-[150px] rounded-lg border p-3 shadow-sm">
        <div className="bg-foreground/10 mb-2.5 flex h-5 items-center gap-1.5 rounded-md border px-2">
          <div className="bg-foreground/30 size-2 rounded-full" />
          <div className="bg-foreground/15 h-1.5 w-12 rounded-full" />
        </div>
        <div className="flex flex-col gap-1.5">
          {['a', 'b', 'c'].map((id) => (
            <div key={id} className="flex items-center gap-1.5">
              <div className="bg-foreground/15 size-3 rounded" />
              <div className="bg-foreground/10 h-1.5 flex-1 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
