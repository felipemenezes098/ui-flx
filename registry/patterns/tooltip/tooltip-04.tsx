import { BellIcon, SearchIcon, SettingsIcon, TrashIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const actions = [
  { icon: SearchIcon, label: 'Search' },
  { icon: BellIcon, label: 'Notifications' },
  { icon: SettingsIcon, label: 'Settings' },
  { icon: TrashIcon, label: 'Delete' },
]

export function Tooltip04() {
  return (
    <div className="flex items-center gap-2">
      {actions.map(({ icon: Icon, label }) => (
        <Tooltip key={label}>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" aria-label={label}>
                <Icon />
              </Button>
            }
          />
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
