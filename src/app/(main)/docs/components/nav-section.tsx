'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function NavSection({
  section,
}: Readonly<{
  section: { name: string; href: string; isNew?: boolean }
}>) {
  const pathname = usePathname()
  const isActive = pathname === section.href
  return (
    <Link
      href={section.href}
      className={cn(
        'text-muted-foreground hover:text-foreground hover:bg-muted/70 flex h-8 items-center gap-2 rounded-md px-2 text-xs',
        isActive && 'text-foreground bg-muted',
      )}
    >
      {section.name}
      {section.isNew && (
        <span className="ring-background h-1.5 w-1.5 rounded-full bg-emerald-500 ring-2" />
      )}
    </Link>
  )
}

export function NavBlockSection({
  section,
}: Readonly<{
  section: { name: string; href: string; image: string; hasNew?: boolean }
}>) {
  const pathname = usePathname()
  const isActive = pathname === section.href
  return (
    <Link
      href={section.href}
      className={cn(
        'text-muted-foreground hover:text-foreground flex items-center gap-3 rounded-lg px-2 py-1.5 text-xs',
        'hover:bg-muted/70',
        isActive && 'bg-muted text-foreground',
      )}
    >
      <div className="relative h-8 w-8 shrink-0">
        <div className="border-border h-full w-full overflow-hidden rounded-md border bg-white">
          <Image
            src={section.image}
            alt=""
            fill
            className="object-contain p-0.5"
            sizes="32px"
          />
        </div>
        {section.hasNew && (
          <span className="ring-background absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-500 ring-2" />
        )}
      </div>
      <span className="truncate">{section.name}</span>
    </Link>
  )
}
