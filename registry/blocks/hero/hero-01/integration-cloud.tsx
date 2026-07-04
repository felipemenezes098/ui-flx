const ROWS = [
  ['Notion', 'GitHub', 'Stripe', 'Figma'],
  ['Supabase', 'Resend', 'Raycast'],
] as const

export function IntegrationCloud() {
  return (
    <div
      aria-hidden
      className="flex w-full flex-col items-center gap-3 mask-x-from-90% mask-x-to-100% pt-4 pb-1"
    >
      {ROWS.map((row) => (
        <div
          key={row.join()}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {row.map((name) => (
            <div
              key={name}
              className="border-border/50 bg-card/90 text-foreground/70 shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
