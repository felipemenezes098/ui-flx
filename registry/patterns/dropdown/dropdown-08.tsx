import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  MailIcon,
  MessageSquareIcon,
  PlusIcon,
  UserPlusIcon,
} from 'lucide-react'

export function Dropdown08() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Team
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem>
          <PlusIcon />
          New team
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlusIcon />
            Invite member
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-44">
            <DropdownMenuItem>
              <MailIcon />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquareIcon />
              Message
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusIcon />
              More options…
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
