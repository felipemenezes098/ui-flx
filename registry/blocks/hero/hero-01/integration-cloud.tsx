export interface IntegrationCloudProps {
  rows: readonly (readonly string[])[]
}

export function IntegrationCloud({ rows }: Readonly<IntegrationCloudProps>) {
  if (rows.length === 0) return null

  return (
    <div
      aria-hidden
      className="flex w-full flex-col items-center gap-3 mask-x-from-90% mask-x-to-100% pt-4 pb-1"
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {row.map((name, nameIndex) => (
            <div
              key={nameIndex}
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
