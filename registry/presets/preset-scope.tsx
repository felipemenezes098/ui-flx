import { cn } from '@/lib/utils'

export type PresetScopeProps = Readonly<{
  preset: string
  appearance?: 'inherit' | 'dark'
  className?: string
  children: React.ReactNode
}>

export function PresetScope({
  preset,
  appearance = 'inherit',
  className,
  children,
}: PresetScopeProps) {
  return (
    <div
      data-preset={preset}
      className={cn(appearance === 'dark' && 'dark', className)}
    >
      {children}
    </div>
  )
}
