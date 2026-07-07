'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutGrid, Search } from 'lucide-react'
import { useState } from 'react'

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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { intentDomains } from '@/lib/intents/intent-catalog'
import type {
  IntentDomain,
  IntentEntry,
} from '@/lib/intents/intent-manifest-types'

const domains = intentDomains.toSorted((a, b) => a.name.localeCompare(b.name))

function getAvailableIntents(domain: IntentDomain): IntentEntry[] {
  return domain.intents
    .filter((intent) => intent.manifest)
    .toSorted((a, b) => a.name.localeCompare(b.name))
}

function getDomainForPath(pathname: string): IntentDomain | undefined {
  return domains.find((domain) =>
    domain.intents.some((intent) => pathname === `/intents/${intent.slug}`),
  )
}

function getActiveIntentName(pathname: string): string | undefined {
  for (const domain of domains) {
    const intent = getAvailableIntents(domain).find(
      (entry) => pathname === `/intents/${entry.slug}`,
    )
    if (intent) return intent.name
  }
  return undefined
}

export function IntentSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [showAllOpen, setShowAllOpen] = useState(false)

  const activeDomain = getDomainForPath(pathname)
  const activeIntentName = getActiveIntentName(pathname)
  const mobileLabel =
    activeDomain && activeIntentName
      ? `${activeDomain.name} · ${activeIntentName}`
      : (activeIntentName ?? 'Intents')

  function navigate(href: string) {
    router.push(href)
    setShowAllOpen(false)
  }

  return (
    <>
      <div className="w-full shrink-0 lg:hidden">
        <Popover open={showAllOpen} onOpenChange={setShowAllOpen}>
          <PopoverTrigger
            render={
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Search data-icon="inline-start" />
                <span className="truncate">{mobileLabel}</span>
              </Button>
            }
          />
          <PopoverContent
            align="start"
            className="w-[min(100vw-2rem,22rem)] overscroll-contain p-0"
          >
            <IntentCommandList onNavigate={navigate} />
          </PopoverContent>
        </Popover>
      </div>

      <Sidebar
        collapsible="none"
        className="bg-background sticky top-20 z-30 hidden h-[calc(100svh-80px)] w-48 shrink-0 lg:flex"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <Link href="/intents">
                  <LayoutGrid className="size-4" />
                  <span className="text-xs">All intents</span>
                </Link>
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="overflow-hidden py-0">
          <div className="scroll-fade scroll-fade-9 no-scrollbar flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pb-2">
            {domains.map((domain) => {
              const domainIntents = getAvailableIntents(domain)
              if (domainIntents.length === 0) return null

              return (
                <SidebarGroup key={domain.slug} className="p-1">
                  <SidebarGroupLabel className="text-muted-foreground mb-1.5 h-auto px-2 text-[11px] font-medium">
                    {domain.name}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu className="gap-px">
                      {domainIntents.map((intent) => {
                        const href = `/intents/${intent.slug}`
                        return (
                          <SidebarMenuItem key={intent.slug}>
                            <SidebarMenuButton
                              asChild
                              size="sm"
                              className="font-medium"
                              isActive={pathname === href}
                            >
                              <Link href={href}>
                                <span>{intent.name}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              )
            })}
          </div>
        </SidebarContent>
      </Sidebar>
    </>
  )
}

function IntentCommandList({
  onNavigate,
}: Readonly<{ onNavigate: (href: string) => void }>) {
  return (
    <Command>
      <CommandInput placeholder="Search intents…" />
      <CommandList>
        <CommandEmpty>No intents found.</CommandEmpty>
        <CommandGroup heading="Overview">
          <CommandItem
            value="All intents"
            onSelect={() => onNavigate('/intents')}
          >
            <LayoutGrid className="size-4 shrink-0" />
            <span className="text-sm font-medium">All intents</span>
          </CommandItem>
        </CommandGroup>
        {domains.map((domain) => {
          const domainIntents = getAvailableIntents(domain)
          if (domainIntents.length === 0) return null

          return (
            <CommandGroup key={domain.slug} heading={domain.name}>
              {domainIntents.map((intent) => (
                <CommandItem
                  key={intent.slug}
                  value={`${domain.name} ${intent.name}`}
                  onSelect={() => onNavigate(`/intents/${intent.slug}`)}
                >
                  <span className="shrink-0 truncate text-sm font-medium">
                    {intent.name}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )
        })}
      </CommandList>
    </Command>
  )
}
