import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ArchiveIcon, DownloadIcon, PencilIcon, SendIcon } from 'lucide-react'

export function Dropdown05() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="sm">
            Invoice
          </Button>
        }
      />
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>Draft #1042</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PencilIcon />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DownloadIcon />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <SendIcon />
          Send (no recipient)
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <ArchiveIcon />
          Archive (still a draft)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
