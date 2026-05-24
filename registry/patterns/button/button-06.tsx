import { SettingsIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button06() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="icon-xs" variant="outline" aria-label="Settings">
        <SettingsIcon />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="Settings">
        <SettingsIcon />
      </Button>
      <Button size="icon" variant="outline" aria-label="Settings">
        <SettingsIcon />
      </Button>
      <Button size="icon-lg" variant="outline" aria-label="Settings">
        <SettingsIcon />
      </Button>
    </div>
  )
}
