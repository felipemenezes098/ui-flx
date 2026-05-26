'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import {
  FileSpreadsheetIcon,
  FileTextIcon,
  ImageIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

const files = [
  {
    icon: FileTextIcon,
    name: 'Q4-strategy.md',
    meta: 'Markdown · 14 KB',
  },
  {
    icon: FileSpreadsheetIcon,
    name: 'pricing.csv',
    meta: 'Spreadsheet · 3.2 KB',
  },
  {
    icon: ImageIcon,
    name: 'hero-cover.png',
    meta: 'Image · 1.4 MB',
  },
]

export function Item14() {
  return (
    <ItemGroup className="w-full max-w-md">
      {files.map((file) => (
        <Item key={file.name} variant="outline">
          <ItemMedia variant="icon">
            <file.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{file.name}</ItemTitle>
            <ItemDescription>{file.meta}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="More">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Open</DropdownMenuItem>
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
