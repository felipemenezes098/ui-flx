export function ShowTeamMembersConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="bg-card dark:bg-muted w-full max-w-[140px] rounded-lg border p-3 shadow-sm">
        <div className="mb-2 flex flex-col gap-1">
          <div className="bg-foreground/20 h-1.5 w-14 rounded-full" />
          <div className="bg-foreground/10 h-1 w-10 rounded-full" />
        </div>
        <div className="flex -space-x-2">
          {['a', 'b', 'c', 'd'].map((id) => (
            <div
              key={id}
              className="bg-foreground/15 ring-card dark:ring-muted size-6 rounded-full ring-2"
            />
          ))}
          <div className="bg-muted ring-card dark:ring-muted flex size-6 items-center justify-center rounded-full ring-2">
            <div className="bg-foreground/20 h-1 w-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
