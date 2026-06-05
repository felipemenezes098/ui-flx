export function CardConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="bg-card dark:bg-muted w-full overflow-hidden rounded-lg border shadow-sm">
        <div className="bg-foreground/10 h-16 w-full" />
        <div className="flex flex-col gap-3 p-4">
          <div className="flex flex-col gap-1.5">
            <div className="bg-foreground/25 h-2 w-24 rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-32 rounded-full" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="bg-foreground/10 h-1.5 w-full rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-4/5 rounded-full" />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <div className="h-6 w-12 rounded-md border" />
            <div className="bg-primary h-6 w-14 rounded-md shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}

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

export function DropdownConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col items-center gap-2">
        <div className="bg-card dark:bg-muted flex h-8 items-center gap-2 rounded-md border px-3 shadow-sm">
          <div className="bg-foreground/15 h-1.5 w-12 rounded-full" />
          <div className="border-t-foreground/30 h-0 w-0 border-x-[3px] border-t-4 border-x-transparent" />
        </div>
        <div className="bg-card dark:bg-muted w-full rounded-md border p-1 shadow-md">
          <div className="px-2 py-1">
            <div className="bg-foreground/20 h-1.5 w-10 rounded-full" />
          </div>
          <div className="bg-foreground/5 flex h-6 items-center gap-2 rounded px-2">
            <div className="bg-foreground/20 size-2.5 rounded-sm" />
            <div className="bg-foreground/20 h-1.5 w-16 rounded-full" />
            <div className="bg-foreground/10 ml-auto h-1.5 w-5 rounded-full" />
          </div>
          <div className="flex h-6 items-center gap-2 px-2">
            <div className="bg-foreground/15 size-2.5 rounded-sm" />
            <div className="bg-foreground/12 h-1.5 w-12 rounded-full" />
          </div>
          <div className="flex h-6 items-center gap-2 px-2">
            <div className="bg-foreground/15 size-2.5 rounded-sm" />
            <div className="bg-foreground/12 h-1.5 w-14 rounded-full" />
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

export function ItemConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-card dark:bg-muted flex items-center gap-2.5 rounded-md border px-3 py-2.5 shadow-sm">
          <div className="bg-foreground/15 size-7 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="bg-foreground/20 h-1.5 w-20 rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-28 rounded-full" />
          </div>
          <div className="bg-foreground/10 h-5 w-10 rounded" />
        </div>
        <div className="bg-card dark:bg-muted flex items-center gap-2.5 rounded-md border px-3 py-2.5 shadow-sm">
          <div className="bg-foreground/15 size-7 shrink-0 rounded-sm" />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="bg-foreground/20 h-1.5 w-16 rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-24 rounded-full" />
          </div>
          <div className="bg-primary/70 size-5 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function TooltipConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-foreground flex items-center rounded-md px-3 py-1.5 shadow-md">
          <div className="bg-background/70 h-1.5 w-16 rounded-full" />
        </div>
        <div className="bg-foreground size-2 -translate-y-3 rotate-45 rounded-[2px]" />
        <div className="bg-card dark:bg-muted flex h-8 items-center justify-center rounded-md border px-5 shadow-sm">
          <div className="bg-foreground/20 h-1.5 w-10 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function BreadcrumbConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex items-center gap-2">
        <div className="bg-foreground/12 h-1.5 w-10 rounded-full" />
        <div className="border-t-foreground/20 border-r-foreground/20 size-1.5 -rotate-45 border-t border-r" />
        <div className="bg-foreground/12 h-1.5 w-12 rounded-full" />
        <div className="border-t-foreground/20 border-r-foreground/20 size-1.5 -rotate-45 border-t border-r" />
        <div className="bg-foreground/30 h-1.5 w-14 rounded-full" />
      </div>
    </div>
  )
}

export function PaginationConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex items-center gap-1.5">
        <div className="border-foreground/20 flex h-7 items-center gap-1 rounded-md border px-2">
          <div className="border-b-foreground/40 border-l-foreground/40 size-1.5 rotate-45 border-b border-l" />
          <div className="bg-foreground/20 h-1.5 w-6 rounded-full" />
        </div>
        <div className="border-foreground/15 flex size-7 items-center justify-center rounded-md border">
          <div className="bg-foreground/25 h-1.5 w-1.5 rounded-full" />
        </div>
        <div className="bg-foreground flex size-7 items-center justify-center rounded-md">
          <div className="bg-background h-1.5 w-1.5 rounded-full" />
        </div>
        <div className="border-foreground/15 flex size-7 items-center justify-center rounded-md border">
          <div className="bg-foreground/25 h-1.5 w-1.5 rounded-full" />
        </div>
        <div className="text-foreground/30 flex size-7 items-end justify-center pb-1.5 text-xs leading-none">
          ⋯
        </div>
        <div className="border-foreground/20 flex h-7 items-center gap-1 rounded-md border px-2">
          <div className="bg-foreground/20 h-1.5 w-6 rounded-full" />
          <div className="border-t-foreground/40 border-r-foreground/40 size-1.5 -rotate-45 border-t border-r" />
        </div>
      </div>
    </div>
  )
}

export function BadgeConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="bg-primary flex h-5 items-center rounded-full px-2.5 shadow-sm">
          <div className="bg-primary-foreground/40 h-1.5 w-8 rounded-full" />
        </div>
        <div className="bg-foreground/10 flex h-5 items-center gap-1 rounded-full px-2.5">
          <div className="size-1.5 rounded-full bg-emerald-500" />
          <div className="bg-foreground/30 h-1.5 w-6 rounded-full" />
        </div>
        <div className="border-foreground/20 flex h-5 items-center rounded-full border px-2.5">
          <div className="bg-foreground/25 h-1.5 w-7 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function BannerConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-primary flex items-center justify-center gap-2 rounded-md px-3 py-2 shadow-sm">
          <div className="bg-primary-foreground/40 h-1.5 w-32 rounded-full" />
        </div>
        <div className="bg-card dark:bg-muted relative flex items-center gap-2.5 rounded-md border px-3 py-2.5 shadow-sm">
          <div className="bg-primary/15 size-6 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="bg-foreground/20 h-1.5 w-20 rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-28 rounded-full" />
          </div>
          <div className="bg-foreground/10 size-3 shrink-0 rounded" />
        </div>
      </div>
    </div>
  )
}

export function AccordionConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="bg-card dark:bg-muted w-full divide-y rounded-md border shadow-sm">
        <div className="flex flex-col gap-2 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="bg-foreground/25 h-1.5 w-24 rounded-full" />
            <div className="border-b-foreground/40 border-l-foreground/40 size-1.5 -translate-y-0.5 -rotate-45 border-b border-l" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="bg-foreground/10 h-1.5 w-full rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-2/3 rounded-full" />
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="bg-foreground/15 h-1.5 w-20 rounded-full" />
          <div className="border-t-foreground/30 border-r-foreground/30 size-1.5 translate-y-0.5 -rotate-45 border-t border-r" />
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="bg-foreground/15 h-1.5 w-16 rounded-full" />
          <div className="border-t-foreground/30 border-r-foreground/30 size-1.5 translate-y-0.5 -rotate-45 border-t border-r" />
        </div>
      </div>
    </div>
  )
}

export function AvatarConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="relative">
        <div className="bg-card dark:bg-muted relative flex size-20 items-end justify-center overflow-hidden rounded-full border shadow-sm">
          <div className="bg-foreground/20 absolute top-4 size-7 rounded-full" />
          <div className="bg-foreground/20 h-8 w-12 rounded-t-full" />
        </div>
        <div className="bg-primary ring-card dark:ring-muted absolute right-1 bottom-1 size-4 rounded-full ring-4" />
      </div>
    </div>
  )
}

export function PopoverConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col items-center gap-2">
        <div className="bg-card dark:bg-muted flex h-8 items-center rounded-md border px-4 shadow-sm">
          <div className="bg-foreground/20 h-1.5 w-12 rounded-full" />
        </div>
        <div className="bg-card dark:bg-muted relative w-full rounded-lg border p-3 shadow-md">
          <div className="bg-card dark:bg-muted absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-t border-l" />
          <div className="mb-2 flex flex-col gap-1.5">
            <div className="bg-foreground/25 h-1.5 w-20 rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-full rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-3/4 rounded-full" />
          </div>
          <div className="flex justify-end gap-1.5">
            <div className="bg-foreground/10 h-5 w-10 rounded" />
            <div className="bg-primary h-5 w-10 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function CollapsibleConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-card dark:bg-muted flex h-8 items-center justify-between rounded-md border px-3 shadow-sm">
          <div className="bg-foreground/20 h-1.5 w-16 rounded-full" />
          <div className="border-b-foreground/30 border-r-foreground/30 size-1.5 -translate-y-0.5 rotate-45 border-r border-b" />
        </div>
        <div className="bg-card dark:bg-muted flex flex-col gap-1.5 rounded-md border p-3 shadow-sm">
          <div className="bg-foreground/10 h-1.5 w-full rounded-full" />
          <div className="bg-foreground/10 h-1.5 w-4/5 rounded-full" />
          <div className="bg-foreground/10 h-1.5 w-2/3 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function CommandConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-card dark:bg-muted flex h-9 items-center justify-between rounded-md border px-3 shadow-sm">
          <div className="bg-foreground/15 h-1.5 w-20 rounded-full" />
          <div className="text-foreground/30 flex flex-col gap-0.5">
            <div className="border-b-foreground/30 border-r-foreground/30 size-1 -rotate-[135deg] border-r border-b" />
            <div className="border-b-foreground/30 border-r-foreground/30 size-1 rotate-45 border-r border-b" />
          </div>
        </div>
        <div className="bg-card dark:bg-muted rounded-md border p-1 shadow-md">
          <div className="bg-foreground/5 mb-1 flex h-6 items-center rounded px-2">
            <div className="bg-foreground/15 h-1.5 w-14 rounded-full" />
          </div>
          <div className="bg-foreground/5 flex h-6 items-center justify-between rounded px-2">
            <div className="bg-foreground/20 h-1.5 w-16 rounded-full" />
            <div className="border-b-primary border-l-primary size-1.5 -rotate-45 border-b border-l" />
          </div>
          <div className="flex h-6 items-center px-2">
            <div className="bg-foreground/10 h-1.5 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function EmptyConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="border-foreground/15 flex w-full flex-col items-center gap-2.5 rounded-lg border border-dashed p-6">
        <div className="bg-muted flex size-9 items-center justify-center rounded-lg">
          <div className="border-foreground/25 size-3.5 rounded border" />
        </div>
        <div className="bg-foreground/20 h-1.5 w-20 rounded-full" />
        <div className="flex w-full flex-col items-center gap-1">
          <div className="bg-foreground/10 h-1.5 w-32 rounded-full" />
          <div className="bg-foreground/10 h-1.5 w-24 rounded-full" />
        </div>
        <div className="bg-primary mt-1 h-6 w-20 rounded-md shadow-sm" />
      </div>
    </div>
  )
}

export function CheckboxConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="bg-primary flex size-4 shrink-0 items-center justify-center rounded-[4px] shadow-sm">
            <div className="border-b-primary-foreground border-l-primary-foreground size-1.5 -translate-y-px rotate-[-45deg] border-b-2 border-l-2" />
          </div>
          <div className="bg-foreground/20 h-1.5 w-24 rounded-full" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="border-foreground/25 size-4 shrink-0 rounded-[4px] border shadow-sm" />
          <div className="bg-foreground/12 h-1.5 w-20 rounded-full" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="bg-primary flex size-4 shrink-0 items-center justify-center rounded-[4px] shadow-sm">
            <div className="border-b-primary-foreground border-l-primary-foreground size-1.5 -translate-y-px rotate-[-45deg] border-b-2 border-l-2" />
          </div>
          <div className="bg-foreground/12 h-1.5 w-28 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function TableConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="bg-card dark:bg-muted w-full overflow-hidden rounded-md border shadow-sm">
        <div className="bg-foreground/5 flex h-7 items-center gap-3 border-b px-3">
          <div className="bg-foreground/20 h-1.5 w-12 rounded-full" />
          <div className="bg-foreground/20 ml-auto h-1.5 w-10 rounded-full" />
          <div className="bg-foreground/20 h-1.5 w-8 rounded-full" />
        </div>
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="flex h-7 items-center gap-3 border-b px-3 last:border-b-0"
          >
            <div className="bg-foreground/15 h-1.5 w-14 rounded-full" />
            <div className="bg-foreground/10 ml-auto h-1.5 w-10 rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SwitchConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="bg-foreground/20 h-1.5 w-20 rounded-full" />
          <div className="bg-primary flex h-4 w-7 items-center rounded-full px-0.5 shadow-sm">
            <div className="bg-background ml-auto size-3 rounded-full" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-foreground/12 h-1.5 w-16 rounded-full" />
          <div className="bg-input flex h-4 w-7 items-center rounded-full px-0.5 shadow-sm">
            <div className="bg-background size-3 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="bg-card dark:bg-muted w-full rounded-lg border p-4 shadow-sm">
        <div className="bg-foreground/10 mb-3 h-16 w-full animate-pulse rounded-md" />
        <div className="flex items-center gap-2.5">
          <div className="bg-foreground/15 size-8 shrink-0 animate-pulse rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="bg-foreground/15 h-1.5 w-20 animate-pulse rounded-full" />
            <div className="bg-foreground/10 h-1.5 w-28 animate-pulse rounded-full" />
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-1.5">
          <div className="bg-foreground/10 h-1.5 w-full animate-pulse rounded-full" />
          <div className="bg-foreground/10 h-1.5 w-4/5 animate-pulse rounded-full" />
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
