export function SketchDashboard01() {
  return (
    <div className="bg-card w-full overflow-hidden rounded-xl border shadow-sm">
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <div className="bg-foreground/15 size-6 rounded-md" />
        <div className="bg-foreground/15 h-2 w-20 rounded-full" />
        <div className="bg-muted ml-auto hidden h-8 w-40 rounded-md sm:block" />
        <div className="bg-foreground/10 size-7 shrink-0 rounded-full" />
      </div>

      <div className="flex">
        <aside className="hidden w-48 shrink-0 flex-col gap-2 border-r p-3 md:flex">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2.5 px-1 py-1.5">
              <div className="bg-foreground/15 size-4 rounded" />
              <div
                className="bg-foreground/10 h-2 rounded-full"
                style={{ width: `${80 - i * 12}px` }}
              />
            </div>
          ))}
        </aside>

        <main className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col gap-1.5">
              <div className="bg-foreground/15 h-2.5 w-24 rounded-full" />
              <div className="bg-foreground/10 h-2 w-32 rounded-full" />
            </div>
            <div className="bg-muted hidden h-8 w-28 rounded-md sm:block" />
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
                <div className="bg-foreground/10 h-2 w-12 rounded-full" />
                <div className="bg-foreground/20 h-3.5 w-16 rounded-full" />
                <div className="bg-foreground/10 h-2 w-10 rounded-full" />
              </div>
            ))}
          </div>

          <div className="rounded-lg border p-4">
            <div className="bg-foreground/10 mb-4 h-2 w-20 rounded-full" />
            <div className="flex h-28 items-end gap-1.5 sm:h-36 sm:gap-2">
              {[42, 64, 48, 78, 56, 88, 67, 95, 72, 60, 84, 70].map((h, i) => (
                <div
                  key={i}
                  className="bg-muted flex-1 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-lg border">
            <div className="border-b px-4 py-3">
              <div className="bg-foreground/10 h-2 w-20 rounded-full" />
            </div>
            <div className="divide-y">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3">
                  <div className="bg-foreground/10 size-8 shrink-0 rounded-full" />
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <div className="bg-foreground/15 h-2 w-24 rounded-full" />
                    <div className="bg-foreground/10 h-2 w-32 rounded-full" />
                  </div>
                  <div className="bg-foreground/15 h-2 w-12 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
