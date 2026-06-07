export function SettingsConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[160px] rounded-md border p-3 shadow-sm">
        <div className="mb-3 flex gap-1">
          <div className="bg-primary/70 h-1.5 w-10 rounded-full" />
          <div className="bg-foreground/15 h-1.5 w-8 rounded-full" />
          <div className="bg-foreground/15 h-1.5 w-9 rounded-full" />
        </div>
        <div className="bg-foreground/20 mb-1 h-1.5 w-1/2 rounded-full" />
        <div className="bg-foreground/10 mb-1 h-4 w-full rounded border" />
        <div className="bg-foreground/10 mb-3 h-4 w-full rounded border" />
        <div className="flex items-center justify-between">
          <div className="bg-foreground/15 h-1.5 w-12 rounded-full" />
          <div className="bg-primary/60 h-3 w-6 rounded-full" />
        </div>
      </div>
    </div>
  )
}
