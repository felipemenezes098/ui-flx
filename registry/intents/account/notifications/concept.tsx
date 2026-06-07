export function NotificationsConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[180px] rounded-md border p-3 shadow-sm">
        <div className="bg-foreground/20 mb-3 h-1.5 w-1/2 rounded-full" />
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="mb-2 flex items-center justify-between gap-2"
          >
            <div className="bg-foreground/15 h-1.5 w-16 rounded-full" />
            <div className="flex gap-1.5">
              <div className="bg-primary/60 h-3 w-6 rounded-full" />
              <div className="bg-foreground/15 h-3 w-6 rounded-full" />
              <div
                className={`h-3 w-6 rounded-full ${
                  row === 0 ? 'bg-primary/60' : 'bg-foreground/15'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
