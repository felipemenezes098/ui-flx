import { ChevronDownIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'

export function Input10() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton variant="ghost" className="text-xs">
              Search in
              <ChevronDownIcon className="size-3" />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Blog posts</DropdownMenuItem>
              <DropdownMenuItem>Changelog</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
  )
}
