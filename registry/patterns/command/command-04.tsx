'use client'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { PackageIcon, SearchXIcon, TrendingUpIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const registry = [
  'react',
  'react-dom',
  'radix-ui',
  'tailwindcss',
  'typescript',
  'next',
  'zod',
]

const popular = ['react', 'next', 'tailwindcss']
const skeletonWidths = ['58%', '44%', '66%']

export function Command04() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<string[]>([])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    const id = setTimeout(() => {
      setResults(
        registry.filter((item) => item.includes(query.toLowerCase().trim())),
      )
      setLoading(false)
    }, 600)
    return () => clearTimeout(id)
  }, [query])

  return (
    <Command
      shouldFilter={false}
      className="size-auto w-full max-w-md rounded-lg border shadow-sm"
    >
      <CommandInput
        placeholder="Search npm packages..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="min-h-32">
        {loading &&
          skeletonWidths.map((width, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2"
              aria-hidden
            >
              <div className="bg-muted size-4 shrink-0 animate-pulse rounded" />
              <div
                className="bg-muted h-3 animate-pulse rounded"
                style={{ width }}
              />
            </div>
          ))}

        {!loading && !query.trim() && (
          <CommandGroup heading="Popular">
            {popular.map((item) => (
              <CommandItem key={item} value={item}>
                <TrendingUpIcon />
                <span>{item}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {!loading && query.trim() && results.length === 0 && (
          <div className="text-muted-foreground flex flex-col items-center gap-1.5 py-8 text-sm">
            <SearchXIcon className="size-5 opacity-50" />
            No packages match “{query.trim()}”.
          </div>
        )}

        {!loading && results.length > 0 && (
          <CommandGroup heading="Results">
            {results.map((item) => (
              <CommandItem key={item} value={item}>
                <PackageIcon />
                <span>{item}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  )
}
