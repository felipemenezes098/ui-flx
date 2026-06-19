'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowDown,
  ArrowUp,
  Blocks,
  CornerDownLeft,
  LayoutGrid,
  Search,
  Sparkles,
} from 'lucide-react'
import { useCallback, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Kbd } from '@/components/ui/kbd'
import { cn } from '@/lib/utils'
import { blockCategories } from '@/lib/blocks/block-catalog'
import { intentDomains } from '@/lib/intents/intent-catalog'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

import { reactHookFormLibrary } from 'registry/forms/react-hook-form/catalog'

const reactHookFormCount = reactHookFormLibrary.categories.reduce(
  (total, category) => total + category.items.length,
  0,
)

const patterns = [
  ...patternCategories.map((category) => ({
    key: `pattern-${category.slug}`,
    name: category.name,
    href: `/patterns/${category.slug}`,
    count: category.items.length,
  })),
  {
    key: 'pattern-forms',
    name: 'Forms',
    href: '/forms/react-hook-form',
    count: reactHookFormCount,
  },
].toSorted((a, b) => a.name.localeCompare(b.name))
const domains = intentDomains.toSorted((a, b) => a.name.localeCompare(b.name))
const blocks = blockCategories.toSorted((a, b) =>
  a.category.localeCompare(b.category),
)

export function GlobalSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  useHotkeys('f', toggle, { preventDefault: true }, [toggle])
  useHotkeys('ctrl+f', toggle, { preventDefault: true }, [toggle])

  const navigate = useCallback(
    (href: string) => {
      router.push(href)
      setOpen(false)
    },
    [router],
  )

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className={cn(
          'text-muted-foreground hidden h-8 w-48 justify-start gap-2 md:flex',
          open && 'pointer-events-none opacity-80',
        )}
      >
        <Search data-icon="inline-start" />
        <span className="truncate">Search…</span>
        <CommandShortcut className="ml-auto">F</CommandShortcut>
      </Button>

      <CommandDialog
        open={open}
        modal={false}
        className="top-1/5 shadow-lg"
        onOpenChange={setOpen}
        title="Global search"
        description="Search patterns, intents and blocks"
      >
        <Command>
          <CommandInput placeholder="Search patterns, intents, blocks…" />
          <CommandList className="2xl:max-h-80">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Patterns">
              {patterns.map((item) => (
                <CommandItem
                  key={item.key}
                  className="h-9"
                  value={`pattern ${item.name}`}
                  onSelect={() => navigate(item.href)}
                >
                  <LayoutGrid className="size-4 shrink-0 opacity-60" />
                  <span className="truncate">{item.name}</span>
                  {item.count !== undefined && (
                    <CommandShortcut>{item.count}</CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            {domains.map((domain) => {
              const domainIntents = domain.intents
                .filter((intent) => intent.manifest)
                .toSorted((a, b) => a.name.localeCompare(b.name))
              if (domainIntents.length === 0) return null

              return (
                <CommandGroup
                  key={`intent-${domain.slug}`}
                  heading={`Intents · ${domain.name}`}
                >
                  {domainIntents.map((intent) => (
                    <CommandItem
                      key={intent.slug}
                      className="h-9"
                      value={`intent ${domain.name} ${intent.name}`}
                      onSelect={() => navigate(`/intents/${intent.slug}`)}
                    >
                      <Sparkles className="size-4 shrink-0 opacity-60" />
                      <span className="truncate">{intent.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )
            })}

            <CommandSeparator />

            <CommandGroup heading="Blocks">
              {blocks.map((block) => (
                <CommandItem
                  key={`block-${block.slug}`}
                  className="h-9"
                  value={`block ${block.category}`}
                  onSelect={() => navigate(`/blocks?category=${block.slug}`)}
                >
                  <Blocks className="size-4 shrink-0 opacity-60" />
                  <span className="truncate">{block.category}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <div className="text-muted-foreground flex items-center gap-4 border-t px-3 py-2 text-xs">
            <span className="flex items-center gap-1.5">
              <Kbd>
                <ArrowUp />
              </Kbd>
              <Kbd>
                <ArrowDown />
              </Kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>
                <CornerDownLeft />
              </Kbd>
              Open
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>Esc</Kbd>
              Close
            </span>
          </div>
        </Command>
      </CommandDialog>
    </>
  )
}
