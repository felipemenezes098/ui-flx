'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ListFilterIcon } from 'lucide-react'

const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled']

export function Dropdown15() {
  const [selected, setSelected] = useState<string[]>(['Todo', 'In progress'])

  function toggle(status: string, checked: boolean) {
    setSelected((prev) =>
      checked ? [...prev, status] : prev.filter((item) => item !== status),
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <ListFilterIcon data-icon="inline-start" />
          Status
          {selected.length > 0 && (
            <Badge variant="secondary" className="ml-1 rounded-sm px-1">
              {selected.length}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {statuses.map((status) => (
          <DropdownMenuCheckboxItem
            key={status}
            checked={selected.includes(status)}
            onCheckedChange={(checked) => toggle(status, checked === true)}
            onSelect={(event) => event.preventDefault()}
          >
            {status}
          </DropdownMenuCheckboxItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={selected.length === 0}
          onSelect={() => setSelected([])}
        >
          Clear filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
