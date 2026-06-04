import { MoreHorizontalIcon, PencilIcon, Share2Icon, TrashIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Card04() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Quarterly report</CardTitle>
        <CardDescription>Finance · Q2 2026</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontalIcon />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PencilIcon />
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2Icon />
                  Share
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Revenue grew 18% over the prior quarter, driven by expansion in the
        enterprise segment.
      </CardContent>
    </Card>
  )
}
