'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Dropdown06() {
  const [panels, setPanels] = useState({
    statusBar: true,
    activityBar: false,
    panel: false,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={panels.statusBar}
          onCheckedChange={(checked) =>
            setPanels((prev) => ({ ...prev, statusBar: checked === true }))
          }
        >
          Status bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={panels.activityBar}
          onCheckedChange={(checked) =>
            setPanels((prev) => ({ ...prev, activityBar: checked === true }))
          }
        >
          Activity bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={panels.panel}
          onCheckedChange={(checked) =>
            setPanels((prev) => ({ ...prev, panel: checked === true }))
          }
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
