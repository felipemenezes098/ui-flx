'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

export type DocPageItem = { name: string; href: string }

export function DocsPrevNext({ pages }: Readonly<{ pages: DocPageItem[] }>) {
  const pathname = usePathname()
  const currentIndex = pages.findIndex((p) => p.href === pathname)
  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null
  const next =
    currentIndex >= 0 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : null

  if (!prev && !next) return null

  return (
    <nav
      className="mt-6 flex flex-wrap items-center justify-between gap-4"
      aria-label="Documentation page navigation"
    >
      <div className="min-w-0 flex-1">
        {prev ? (
          <Button
            variant="secondary"
            size="sm"
            className="group gap-1.5 !px-3"
            asChild
          >
            <Link href={prev.href}>
              <ArrowLeft className="size-4 transition-transform group-hover:translate-x-[-2px]" />
              <span className="max-w-20 truncate md:max-w-full">
                {prev.name}
              </span>
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </div>
      <div className="min-w-0 flex-1 text-right">
        {next ? (
          <Button
            variant="secondary"
            size="sm"
            className="group ml-auto gap-1.5 !px-3"
            asChild
          >
            <Link href={next.href}>
              <span className="max-w-20 truncate md:max-w-full">
                {next.name}
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </div>
    </nav>
  )
}
