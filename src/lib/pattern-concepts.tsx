export function SelectConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-1.5">
        <div className="bg-card dark:bg-muted flex h-9 items-center justify-between rounded-md border px-3 shadow-sm">
          <div className="bg-foreground/15 h-1.5 w-16 rounded-full" />
          <div className="border-t-foreground/20 h-0 w-0 border-x-4 border-t-[5px] border-x-transparent" />
        </div>
        <div className="bg-card dark:bg-muted rounded-md border p-1 shadow-sm">
          <div className="bg-foreground/5 flex h-7 items-center rounded px-2.5">
            <div className="bg-foreground/20 h-1.5 w-16 rounded-full" />
          </div>
          <div className="flex h-7 items-center px-2.5">
            <div className="bg-foreground/10 h-1.5 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function DialogConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="bg-card dark:bg-muted w-full rounded-lg border p-4 shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <div className="bg-foreground/20 h-2 w-20 rounded-full" />
          <div className="bg-foreground/10 h-3.5 w-3.5 rounded" />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <div className="bg-foreground/10 h-1.5 w-full rounded-full" />
          <div className="bg-foreground/10 h-1.5 w-3/4 rounded-full" />
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-7 w-14 rounded-md border shadow-sm" />
          <div className="bg-primary h-7 w-14 rounded-md shadow-sm" />
        </div>
      </div>
    </div>
  )
}

export function InputConcept() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
      <div className="bg-card dark:bg-muted flex h-9 w-full items-center rounded-md border px-3 shadow-sm">
        <div className="bg-foreground/15 h-1.5 w-20 rounded-full" />
      </div>
      <div className="bg-card dark:bg-muted flex h-9 w-full items-center overflow-hidden rounded-md border shadow-sm">
        <div className="bg-foreground/5 flex h-full items-center border-r px-3">
          <div className="bg-foreground/15 h-1.5 w-7 rounded-full" />
        </div>
        <div className="flex-1 px-3">
          <div className="bg-foreground/10 h-1.5 w-14 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function ButtonConcept() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
      <div className="bg-primary flex h-9 items-center justify-center rounded-md px-8 shadow-sm">
        <div className="bg-primary-foreground/40 h-1.5 w-14 rounded-full" />
      </div>
      <div className="bg-card dark:bg-muted flex overflow-hidden rounded-md border shadow-sm">
        <div className="flex h-8 items-center border-r px-4">
          <div className="bg-foreground/12 h-1.5 w-7 rounded-full" />
        </div>
        <div className="bg-foreground/5 flex h-8 items-center border-r px-4">
          <div className="bg-foreground/20 h-1.5 w-7 rounded-full" />
        </div>
        <div className="flex h-8 items-center px-4">
          <div className="bg-foreground/12 h-1.5 w-7 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function TabsConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-muted flex rounded-md p-1">
          <div className="bg-card dark:bg-foreground/10 flex h-7 flex-1 items-center justify-center rounded shadow-sm">
            <div className="bg-foreground/25 h-1.5 w-8 rounded-full" />
          </div>
          <div className="flex h-7 flex-1 items-center justify-center">
            <div className="bg-foreground/12 h-1.5 w-8 rounded-full" />
          </div>
          <div className="flex h-7 flex-1 items-center justify-center">
            <div className="bg-foreground/12 h-1.5 w-8 rounded-full" />
          </div>
        </div>
        <div className="bg-card dark:bg-muted rounded-md border p-3 shadow-sm">
          <div className="bg-foreground/15 mb-2 h-1.5 w-16 rounded-full" />
          <div className="flex flex-col gap-1.5">
            <div className="bg-foreground/10 h-1.5 w-full rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-3/4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
