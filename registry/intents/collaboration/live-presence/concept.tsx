export function LivePresenceConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full max-w-[150px] rounded-md border p-3 shadow-sm">
        <div className="mb-3 flex justify-end -space-x-1">
          <div className="ring-card dark:ring-muted size-2.5 rounded-full bg-green-500 ring-2" />
          <div className="ring-card dark:ring-muted size-2.5 rounded-full bg-green-500 ring-2" />
          <div className="ring-card dark:ring-muted size-2.5 rounded-full bg-blue-500 ring-2" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="bg-muted dark:bg-foreground/10 h-1 w-full rounded-full" />
          <div className="bg-muted dark:bg-foreground/10 h-1 w-4/5 rounded-full" />
          <div className="bg-muted dark:bg-foreground/10 h-1 w-3/5 rounded-full" />
        </div>
      </div>
    </div>
  )
}
