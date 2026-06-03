'use client'

import { useEffect, useState } from 'react'
import { FileIcon, HashIcon, UserIcon } from 'lucide-react'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Spinner } from '@/components/ui/spinner'

const results = [
  { icon: FileIcon, label: 'Quarterly report.pdf' },
  { icon: UserIcon, label: 'Jordan Rivera' },
  { icon: HashIcon, label: '#product-launch' },
]

export function Loading05() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) return setLoading(false)
    setLoading(true)
    const id = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(id)
  }, [query])

  return (
    <Command
      shouldFilter={false}
      className="h-auto w-full max-w-md rounded-lg border shadow-sm"
    >
      <CommandInput
        placeholder="Search everything…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {!query.trim() && !loading && (
          <div className="text-muted-foreground flex items-center justify-center gap-2 py-6 text-sm">
            Type to search...
          </div>
        )}
        {loading && (
          <div className="text-muted-foreground flex items-center justify-center gap-2 py-6 text-sm">
            <Spinner className="size-4" />
            Searching…
          </div>
        )}
        {!loading && query.trim() && (
          <CommandGroup heading="Results">
            {results.map(({ icon: Icon, label }) => (
              <CommandItem key={label} value={label}>
                <Icon />
                <span>{label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  )
}
