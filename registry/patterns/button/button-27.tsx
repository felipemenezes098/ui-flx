import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const swatches = [
  { hex: '#EF4444', className: 'bg-red-500' },
  { hex: '#F97316', className: 'bg-orange-500' },
  { hex: '#F59E0B', className: 'bg-amber-500' },
  { hex: '#10B981', className: 'bg-emerald-500' },
  { hex: '#0EA5E9', className: 'bg-sky-500' },
  { hex: '#3B82F6', className: 'bg-blue-500' },
  { hex: '#8B5CF6', className: 'bg-violet-500' },
  { hex: '#EC4899', className: 'bg-pink-500' },
  { hex: '#F43F5E', className: 'bg-rose-500' },
  { hex: '#78716C', className: 'bg-stone-500' },
  { hex: '#71717A', className: 'bg-zinc-500' },
  { hex: '#404040', className: 'bg-neutral-700' },
]

export function Button27() {
  return (
    <ButtonGroup>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" size="icon" aria-label="Pick color">
              <span className="size-4 rounded-sm bg-blue-500" />
            </Button>
          }
        />
        <PopoverContent align="start" className="w-auto p-2">
          <div className="grid grid-cols-6 gap-1">
            {swatches.map((s) => (
              <button
                key={s.hex}
                type="button"
                aria-label={s.hex}
                className={cn(
                  'size-6 rounded-md',
                  s.className,
                  'hover:ring-ring focus-visible:ring-ring outline-none hover:ring-2 focus-visible:ring-2',
                )}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <ButtonGroupText className="font-mono">#3B82F6</ButtonGroupText>
    </ButtonGroup>
  )
}
