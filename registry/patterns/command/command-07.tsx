'use client'

import { Badge } from '@/components/ui/badge'
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

export function Command07() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>(['react', 'typescript'])

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="hover:bg-background hover:text-foreground h-auto min-h-9 w-72 justify-between py-1 font-normal"
        >
          <span className="flex flex-1 flex-wrap gap-1">
            {selected.length === 0 ? (
              <span className="text-muted-foreground">Select skills...</span>
            ) : (
              skills
                .filter((skill) => selected.includes(skill.value))
                .map((skill) => (
                  <Badge
                    key={skill.value}
                    variant="secondary"
                    className="gap-1"
                  >
                    {skill.label}
                    <span
                      role="button"
                      aria-label={`Remove ${skill.label}`}
                      className="hover:text-foreground"
                      onPointerDown={(event) => {
                        event.stopPropagation()
                        event.preventDefault()
                        toggle(skill.value)
                      }}
                    >
                      <XIcon className="size-3" />
                    </span>
                  </Badge>
                ))
            )}
          </span>
          <ChevronsUpDownIcon className="text-muted-foreground shrink-0 self-center" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start">
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
  )
}
