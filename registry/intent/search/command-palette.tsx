import {
  FileTextIcon,
  LayoutDashboardIcon,
  PlusIcon,
  SettingsIcon,
  UserPlusIcon,
} from 'lucide-react'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export function CommandPaletteDecision() {
  return (
    <div className="bg-muted/40 flex w-full max-w-sm items-start justify-center rounded-xl border p-4">
      <Command className="bg-popover w-full rounded-xl border shadow-lg">
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandGroup heading="Navigation">
            <CommandItem>
              <LayoutDashboardIcon />
              <span>Go to Dashboard</span>
            </CommandItem>
            <CommandItem>
              <FileTextIcon />
              <span>Open Documents</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem>
              <PlusIcon />
              <span>New project</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <UserPlusIcon />
              <span>Invite member</span>
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <SettingsIcon />
              <span>Open settings</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
