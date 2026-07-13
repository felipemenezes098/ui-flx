'use client'

import { Button } from '@/components/ui/button'
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DownloadIcon, FilesIcon } from 'lucide-react'

const files = [
  {
    name: 'hero-cover.png',
    meta: 'Image · 1.4 MB',
    thumb:
      'https://images.unsplash.com/photo-1589705436822-720a68b246fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'brand-kit.zip',
    meta: 'Archive · 8.2 MB',
    thumb:
      'https://images.unsplash.com/photo-1602174286405-c0b06500baac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'prototype-v3.fig',
    meta: 'Figma · 24 MB',
    thumb:
      'https://images.unsplash.com/photo-1651843609159-cd272ccaea43?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export function Item21() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline">
            <FilesIcon data-icon="inline-start" />
            Files
          </Button>
        }
      />
      <PopoverContent className="w-72 p-2">
        <ItemGroup>
          {files.map((file) => (
            <Item key={file.name} size="xs">
              <ItemMedia variant="image">
                <img src={file.thumb} alt="" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{file.name}</ItemTitle>
                <ItemDescription>{file.meta}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon-sm" aria-label="Download">
                  <DownloadIcon />
                </Button>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </PopoverContent>
    </Popover>
  )
}
