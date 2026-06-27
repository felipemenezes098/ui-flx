'use client'

import { flushSync } from 'react-dom'
import { usePathname, useRouter } from 'next/navigation'
import {
  AppWindow,
  ArrowDown,
  ArrowUp,
  Blocks,
  CornerDownLeft,
  LayoutGrid,
  PencilRuler,
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
import { conceptCategories } from '@/lib/concepts/concepts-catalog'
import { intentDomains } from '@/lib/intents/intent-catalog'
import { patternCategories } from '@/lib/patterns/patterns-catalog'
import { sketchCategories } from '@/lib/sketches/sketches-catalog'

const patterns = [
  ...patternCategories.map((category) => ({
    key: `pattern-${category.slug}`,
    name: category.name,
    href: `/patterns/${category.slug}`,
  })),
  {
    key: 'pattern-forms',
    name: 'Forms',
    href: '/forms/react-hook-form',
  },
].toSorted((a, b) => a.name.localeCompare(b.name))

const concepts = conceptCategories
  .map((category) => ({
    key: `concept-${category.slug}`,
    name: category.name,
    href: `/concepts#${category.slug}`,
  }))
  .toSorted((a, b) => a.name.localeCompare(b.name))

const sketches = sketchCategories
  .map((category) => ({
    key: `sketch-${category.slug}`,
    name: category.name,
    href: `/sketches#${category.slug}`,
  }))
  .toSorted((a, b) => a.name.localeCompare(b.name))

const intents = intentDomains
  .map((domain) => {
    const first = domain.intents.find(
      (intent) => intent.manifest && !intent.comingSoon,
    )
    if (!first) return null
    return {
      key: `intent-${domain.slug}`,
      name: domain.name,
      href: `/intents/${first.slug}`,
    }
  })
  .filter((item): item is NonNullable<typeof item> => item !== null)
  .toSorted((a, b) => a.name.localeCompare(b.name))

const blocks = blockCategories.toSorted((a, b) =>
  a.category.localeCompare(b.category),
)

export function GlobalSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  useHotkeys('f', toggle, { preventDefault: true }, [toggle])
  useHotkeys('ctrl+f', toggle, { preventDefault: true }, [toggle])

  const navigate = useCallback(
    (href: string) => {
      flushSync(() => setOpen(false))

      const [path, hash] = href.split('#')
      if (hash && path === pathname) {
        globalThis.location.hash = hash
        return
      }
      router.push(href)
    },
    [router, pathname],
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
        className="top-1/5 shadow-lg data-closed:!animate-none"
        onOpenChange={setOpen}
        title="Global search"
        description="Search patterns, concepts, blocks, intents and sketches"
      >
        <Command>
          <CommandInput placeholder="Search patterns, concepts, blocks…" />
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
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Concepts">
              {concepts.map((item) => (
                <CommandItem
                  key={item.key}
                  className="h-9"
                  value={`concept ${item.name}`}
                  onSelect={() => navigate(item.href)}
                >
                  <AppWindow className="size-4 shrink-0 opacity-60" />
                  <span className="truncate">{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>

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

            <CommandSeparator />

            <CommandGroup heading="Intents">
              {intents.map((item) => (
                <CommandItem
                  key={item.key}
                  className="h-9"
                  value={`intent ${item.name}`}
                  onSelect={() => navigate(item.href)}
                >
                  <Sparkles className="size-4 shrink-0 opacity-60" />
                  <span className="truncate">{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Sketches">
              {sketches.map((item) => (
                <CommandItem
                  key={item.key}
                  className="h-9"
                  value={`sketch ${item.name}`}
                  onSelect={() => navigate(item.href)}
                >
                  <PencilRuler className="size-4 shrink-0 opacity-60" />
                  <span className="truncate">{item.name}</span>
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
