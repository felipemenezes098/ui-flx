import { cn } from '@/lib/utils'
import { PresetId } from '@/lib/presets-config'

export type PresetScopeProps = Readonly<{
  preset: PresetId
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
