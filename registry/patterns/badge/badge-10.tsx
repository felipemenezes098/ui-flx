import { Badge } from '@/components/ui/badge'

export function Badge10() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="h-4 px-1.5 text-[10px]">Small</Badge>
      <Badge>Default</Badge>
      <Badge className="h-6 px-2.5 text-sm">Large</Badge>
    </div>
  )
}
