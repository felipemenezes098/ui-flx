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
  CommandSeparator,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { CheckIcon, PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'

const skills = [
  { value: 'react', label: 'React', count: 128 },
  { value: 'typescript', label: 'TypeScript', count: 96 },
  { value: 'node', label: 'Node.js', count: 64 },
  { value: 'figma', label: 'Figma', count: 41 },
  { value: 'graphql', label: 'GraphQL', count: 23 },
]

export function Command15() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>(['react', 'typescript'])

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    )

  const selectedSkills = skills.filter((skill) =>
    selected.includes(skill.value),
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className="h-8 min-w-44 border-dashed font-normal"
        >
          <PlusCircleIcon className="size-4" />
          Skills
          {selected.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-1 h-auto!" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selected.length}
              </Badge>
              <div className="hidden gap-1 lg:flex">
                {selected.length > 1 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1.5 font-normal"
                  >
                    {selected.length} selected
                  </Badge>
                ) : (
                  selectedSkills.map((skill) => (
                    <Badge
                      key={skill.value}
                      variant="secondary"
                      className="rounded-sm px-1.5 font-normal"
                    >
                      {skill.label}
                    </Badge>
                  ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0" align="start">
        <Command>
          <CommandInput placeholder="Filter skills..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {skills.map((skill) => {
                const isSelected = selected.includes(skill.value)
                return (
                  <CommandItem
                    key={skill.value}
                    value={skill.label}
                    onSelect={() => toggle(skill.value)}
                    className="[&>svg:last-child]:hidden"
                  >
                    <div
                      aria-hidden
                      className={cn(
                        'flex size-4 shrink-0 items-center justify-center rounded-sm border',
                        isSelected
                          ? 'border-primary bg-primary text-primary-foreground group-data-selected/command-item:[&_svg]:text-primary-foreground!'
                          : 'border-muted-foreground/40',
                      )}
                    >
                      {isSelected && <CheckIcon className="size-3" />}
                    </div>
                    <span className="flex-1">{skill.label}</span>
                    <span className="text-muted-foreground group-data-selected/command-item:text-muted-foreground ml-auto text-xs tabular-nums">
                      {skill.count}
                    </span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selected.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => setSelected([])}
                    className="text-muted-foreground justify-center [&>svg:last-child]:hidden"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
