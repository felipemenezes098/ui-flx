'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { dataNavbar } from '@/data/navbar'
import { cn } from '@/lib/utils'

import { Logo } from '../logo'
import { ThemeSwitcher } from './theme'

export function NavbarDesktop() {
  const pathname = usePathname()
  const firstPath = pathname.split('/')[1]

  return (
    <header
      className="bg-background sticky top-0 z-50 hidden w-full overflow-hidden md:block"
      aria-label="Main navigation"
    >
      <div className="container-page px-5 py-3">
        <div className="flex items-center justify-between gap-2">
          <nav className="flex items-center gap-2 text-sm">
            <Button
              variant="ghost"
              className="hover:bg-muted h-7 rounded-lg px-2"
              size="sm"
              asChild
            >
              <Link href="/">
                <div className="flex items-center gap-1.5">
                  <div className="relative size-5 overflow-hidden rounded-xl">
                    <Logo.Flexnative className="text-primary mt-0.5 h-6 w-auto" />
                  </div>
                  <span className="text-sm font-medium">{siteConfig.name}</span>
                </div>
              </Link>
            </Button>
            <div className="hidden gap-1 md:flex">
              {dataNavbar.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'hover:bg-muted dark:hover:bg-muted/50 rounded-lg px-2 py-1 text-sm font-medium',
                    firstPath === item.href.split('/')[1] &&
                      'bg-muted dark:bg-muted/50',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8 transition-none"
              >
                <Link href={siteConfig.links.twitter} target="_blank">
                  <Logo.X className="size-3.5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8 transition-none"
              >
                <Link href={siteConfig.links.github} target="_blank">
                  <Logo.Github className="size-4.5" />
                </Link>
              </Button>
            </div>
            <Separator orientation="vertical" className="!h-4" />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
