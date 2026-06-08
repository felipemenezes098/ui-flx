import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  CopyIcon,
  GitBranchIcon,
  PlusIcon,
  ScissorsIcon,
  Share2Icon,
  TrashIcon,
} from 'lucide-react'

export function Dropdown03() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Edit</DropdownMenuLabel>
          <DropdownMenuItem>
            <CopyIcon />
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ScissorsIcon />
            Cut
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Source</DropdownMenuLabel>
          <DropdownMenuItem>
            <GitBranchIcon />
            New branch
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PlusIcon />
            New file
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Share</DropdownMenuLabel>
          <DropdownMenuItem>
            <Share2Icon />
            Share link
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
