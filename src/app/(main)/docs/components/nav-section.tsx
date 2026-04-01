'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function NavSection({
  section,
}: Readonly<{
  section: { name: string; href: string; isNew?: boolean }
}>) {
  const pathname = usePathname()
  const isActive = pathname === section.href
  const isNew = section.isNew ?? false
  return (
    <Link
      href={section.href}
      key={section.href}
      className="group cursor-pointer"
    >
      <Button
        className={cn(
          'group-hover:bg-muted dark:hover:bg-muted h-8 w-fit cursor-pointer justify-start rounded-md border-none bg-transparent px-2 text-left text-xs shadow-none transition-none',
          isActive && 'bg-muted text-foreground',
        )}
        variant="ghost"
      >
        {section.name}
        {isNew && <div className="h-2 w-2 rounded-full bg-green-400" />}
      </Button>
    </Link>
  )
}

export function NavBlockSection({
  section,
}: Readonly<{
  section: { name: string; href: string; image: string }
}>) {
  const pathname = usePathname()
  const isActive = pathname === section.href
  return (
    <div>
      <Link
        href={section.href}
        key={section.href}
        className={cn(
          'border-border dark:border-primary/20 hover:border-primary hover:dark:border-primary flex h-full flex-col gap-2 overflow-hidden rounded-xl border p-1 focus-visible:outline-1',
          isActive && 'border-primary dark:border-primary',
        )}
      >
        <div className="flex h-14 w-full shrink-0 items-center justify-center rounded-t-lg bg-white p-1">
          <div className="relative h-full w-full">
            <Image
              src={section.image}
              alt={section.name}
              fill
              className="object-contain object-center"
              sizes="400px"
            />
          </div>
        </div>
        <span className="line-clamp-2 px-3 pb-2 text-xs">{section.name}</span>
      </Link>
    </div>
  )
}
