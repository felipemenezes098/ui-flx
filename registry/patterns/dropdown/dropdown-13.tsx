'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Dropdown13() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-3">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            {open ? 'Menu open' : 'Menu closed'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-44">
          <DropdownMenuLabel>Controlled</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <p className="text-sm text-muted-foreground">
        State: {open ? 'open' : 'closed'}
      </p>
    </div>
  )
}
