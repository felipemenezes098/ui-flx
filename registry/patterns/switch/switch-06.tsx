import { MoonIcon, SunIcon } from 'lucide-react'

import { Switch } from '@/components/ui/switch'

export function Switch06() {
  return (
    <div className="flex items-center gap-2.5">
      <SunIcon className="text-muted-foreground size-4" />
      <Switch defaultChecked aria-label="Toggle dark mode" />
      <MoonIcon className="text-muted-foreground size-4" />
    </div>
  )
}
