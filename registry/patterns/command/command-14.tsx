'use client'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ChevronsUpDownIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

const skills = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'node', label: 'Node.js' },
  { value: 'figma', label: 'Figma' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'rust', label: 'Rust' },
]

export function Command14() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([
    'react',
    'typescript',
    'node',
  ])

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    )

  const labels = skills
    .filter((skill) => selected.includes(skill.value))
    .map((skill) => skill.label)

  const summary =
    labels.length === 0
      ? 'Select skills...'
      : labels.length === 1
        ? labels[0]
        : `${labels[0]}, +${labels.length - 1}`

  return (
    <div className="flex w-72 items-center gap-1">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="flex-1 justify-between font-normal"
            >
              <span
                className={cn(selected.length === 0 && 'text-muted-foreground')}
              >
                {summary}
              </span>
              <ChevronsUpDownIcon className="text-muted-foreground" />
            </Button>
          }
        />
        <PopoverContent className="w-(--anchor-width) p-0" align="start">
          <Command>
            <CommandInput placeholder="Search skills..." />
            <CommandList>
              <CommandEmpty>No skill found.</CommandEmpty>
              <CommandGroup>
                {skills.map((skill) => (
                  <CommandItem
                    key={skill.value}
                    value={skill.value}
                    data-checked={selected.includes(skill.value)}
                    onSelect={() => toggle(skill.value)}
                  >
                    {skill.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selected.length > 0 && (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Clear all"
          onClick={() => setSelected([])}
        >
          <XIcon />
        </Button>
      )}
    </div>
  )
}
