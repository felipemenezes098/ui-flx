export function SketchDashboard02() {
  return (
    <div className="bg-card w-full overflow-hidden rounded-xl border shadow-sm">
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <div className="bg-foreground/15 size-6 rounded-md" />
        <div className="bg-foreground/15 h-2 w-20 rounded-full" />
        <div className="bg-foreground/15 ml-auto h-7 w-20 rounded-md" />
        <div className="bg-foreground/15 size-7 rounded-full" />
      </div>

      <div className="flex">
        <aside className="hidden w-48 shrink-0 flex-col gap-2 border-r p-3 md:flex">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-foreground/10 size-4 rounded" />
              <div className="bg-foreground/10 h-2 w-24 rounded-full" />
            </div>
          ))}
        </aside>

        <main className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col gap-2">
              <div className="bg-foreground/15 h-3 w-24 rounded-full" />
              <div className="bg-foreground/10 h-2 w-32 rounded-full" />
            </div>
            <div className="bg-foreground/10 hidden h-7 w-24 rounded-md sm:block" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
                <div className="bg-foreground/10 size-4 rounded" />
                <div className="bg-foreground/20 h-3.5 w-10 rounded-full" />
                <div className="bg-foreground/10 h-2 w-16 rounded-full" />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 rounded-lg border p-3">
            <div className="bg-foreground/15 h-2 w-20 rounded-full" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-foreground/10 size-7 rounded-full" />
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <div className="bg-foreground/15 h-2 w-32 rounded-full" />
                    <div className="bg-foreground/10 h-2 w-16 rounded-full" />
                  </div>
                  <div className="bg-foreground/10 h-5 w-16 rounded-full" />
                </div>
                <div className="bg-muted h-1.5 w-full overflow-hidden rounded-full">
                  <div
                    className="bg-foreground/20 h-full rounded-full"
                    style={{ width: `${[80, 45, 20, 100][i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="hidden w-56 shrink-0 flex-col gap-3 border-l p-4 lg:flex">
          <div className="bg-foreground/15 h-2 w-12 rounded-full" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-foreground/10 size-8 rounded-full" />
              <div className="flex flex-col gap-1.5">
                <div className="bg-foreground/15 h-2 w-24 rounded-full" />
                <div className="bg-foreground/10 h-2 w-14 rounded-full" />
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
