export function InviteTeammatesConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="bg-card dark:bg-muted w-full max-w-[150px] rounded-lg border p-3 shadow-sm">
        <div className="mb-2.5 flex items-center gap-1.5">
          <div className="bg-foreground/10 h-5 flex-1 rounded-md border" />
          <div className="bg-foreground/20 size-5 rounded-md" />
        </div>
        <div className="flex flex-col gap-1.5">
          {['a', 'b', 'c'].map((id) => (
            <div key={id} className="flex items-center gap-1.5">
              <div className="bg-foreground/15 size-4 rounded-full" />
              <div className="bg-foreground/10 h-1.5 flex-1 rounded-full" />
              <div className="bg-foreground/15 h-2 w-5 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
