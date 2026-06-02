'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  ClockIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react'

const recent = ['Quarterly roadmap', 'Invoice #1042']
const pages = [
  { icon: LayoutDashboardIcon, label: 'Dashboard' },
  { icon: FileTextIcon, label: 'Documents' },
  { icon: UsersIcon, label: 'Team' },
  { icon: SettingsIcon, label: 'Settings' },
]
const people = [
  { name: 'Olivia Martin' },
  { name: 'Jackson Lee' },
  { name: 'Isabella Nguyen' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function Command03() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-muted-foreground w-72 justify-start font-normal"
        >
          <SearchIcon className="opacity-50" />
          Search everything...
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="gap-0 p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Global search</DialogTitle>
          <DialogDescription>
            Search pages, people, and actions.
          </DialogDescription>
        </DialogHeader>
        <Command className="pb-0">
          <CommandInput placeholder="Search pages, people, and actions..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Recent">
              {recent.map((item) => (
                <CommandItem key={item}>
                  <ClockIcon />
                  <span>{item}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Pages">
              {pages.map((page) => (
                <CommandItem key={page.label}>
                  <page.icon />
                  <span>{page.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="People">
              {people.map((person) => (
                <CommandItem key={person.name} value={person.name}>
                  <Avatar className="size-6">
                    <AvatarFallback className="text-[10px]">
                      {initials(person.name)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{person.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="text-muted-foreground flex items-center justify-between border-t px-3 py-2 text-xs">
          <span className="flex items-center gap-1">
            <kbd className="bg-muted rounded border px-1 font-mono">↵</kbd>
            to select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-muted rounded border px-1 font-mono">esc</kbd>
            to close
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
