import { FileTextIcon, LayersIcon, TerminalIcon } from 'lucide-react'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

const results = [
  { icon: FileTextIcon, title: 'Installation', path: 'Getting started › Setup' },
  { icon: LayersIcon, title: 'Components', path: 'Guides › Building blocks' },
  { icon: TerminalIcon, title: 'CLI reference', path: 'Reference › Commands' },
]

export function InlineInstantDecision() {
  return (
    <div className="w-full max-w-sm">
      <Command className="bg-card rounded-xl border shadow-sm">
        <CommandInput placeholder="Search docs…" />
        <CommandList className="max-h-none">
          <CommandGroup heading="Results">
            {results.map((r) => (
              <CommandItem key={r.title}>
                <r.icon />
                <div className="flex flex-1 flex-col">
                  <span className="text-sm">{r.title}</span>
                  <span className="text-muted-foreground text-xs">{r.path}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
