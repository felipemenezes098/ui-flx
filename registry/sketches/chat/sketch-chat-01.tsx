const thread = [
  { from: 'them', w: '70%' },
  { from: 'me', w: '55%' },
  { from: 'them', w: '60%' },
  { from: 'me', w: '40%' },
]

export function SketchChat01() {
  return (
    <div className="bg-card flex h-[28rem] w-full overflow-hidden rounded-xl border shadow-sm">
      <aside className="hidden w-64 shrink-0 flex-col border-r sm:flex">
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
          <div className="bg-foreground/15 h-2 w-20 rounded-full" />
          <div className="bg-foreground/10 size-5 rounded-md" />
        </div>
        <div className="px-3 py-2">
          <div className="bg-muted h-8 w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-1 px-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-md px-2 py-2.5">
              <div className="bg-foreground/10 size-9 shrink-0 rounded-full" />
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="bg-foreground/15 h-2 w-20 rounded-full" />
                <div className="bg-foreground/10 h-2 w-28 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b px-4 py-3">
          <div className="bg-foreground/10 size-8 shrink-0 rounded-full" />
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <div className="bg-foreground/15 h-2 w-24 rounded-full" />
            <div className="bg-foreground/10 h-2 w-14 rounded-full" />
          </div>
          <div className="bg-foreground/10 size-5 rounded-md" />
          <div className="bg-foreground/10 size-5 rounded-md" />
        </header>

        <div className="flex flex-1 flex-col justify-end gap-2.5 p-4">
          {thread.map((m, i) => (
            <div
              key={i}
              className={m.from === 'me' ? 'flex justify-end' : 'flex justify-start'}
            >
              <div
                className={
                  m.from === 'me'
                    ? 'bg-foreground/15 h-10 rounded-2xl rounded-br-sm'
                    : 'bg-muted h-10 rounded-2xl rounded-bl-sm'
                }
                style={{ width: m.w }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t p-3">
          <div className="bg-muted h-9 flex-1 rounded-full" />
          <div className="bg-foreground/15 size-9 shrink-0 rounded-full" />
        </div>
      </section>
    </div>
  )
}
