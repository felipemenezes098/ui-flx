import { Spinner } from '@/components/ui/spinner'

const sizes = [
  { size: 'size-4', label: 'sm' },
  { size: 'size-6', label: 'base' },
  { size: 'size-8', label: 'lg' },
  { size: 'size-12', label: 'xl' },
]

export function Loading02() {
  return (
    <div className="flex w-full flex-wrap items-end justify-center gap-8 py-6">
      {sizes.map(({ size, label }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <Spinner className={`text-muted-foreground ${size}`} />
          <span className="text-muted-foreground font-mono text-xs">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
