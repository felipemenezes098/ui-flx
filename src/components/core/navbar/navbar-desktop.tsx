'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { dataNavbar } from '@/data/navbar'
import { cn } from '@/lib/utils'

import { Logo } from '../logo'
import { GlobalSearch } from './global-search'
import { ThemeSwitcher } from './theme'
import { shellContainerClass, useUI } from '@/contexts/ui-context'

export function NavbarDesktop() {
  const pathname = usePathname()
  const firstPath = pathname.split('/')[1]
  const { shellWidth, hideNavbar } = useUI()
  const isWide = shellWidth === 'wide'

  return (
    <header
      className="bg-background hidden w-full md:block"
      aria-label="Main navigation"
      aria-hidden={hideNavbar || undefined}
    >
      <div
        className={cn(
          shellContainerClass(shellWidth),
          !isWide && 'container-page-inner',
          'py-3!',
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <nav className="flex min-w-0 flex-1 items-center gap-1 text-sm">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'hover:bg-muted h-7 shrink-0 rounded-lg px-2',
                }),
              )}
            >
              <div className="flex items-center gap-1.5">
                <div className="relative size-5 overflow-hidden rounded-xl">
                  <Logo.Flexnative className="text-primary mt-0.5 h-6 w-auto" />
                </div>
                <span className="block text-sm font-medium md:hidden">
                  {siteConfig.shortName}
                </span>
                <span className="hidden text-sm font-medium md:block">
                  {siteConfig.name}
                </span>
              </div>
            </Link>
            <div className="scroll-fade-x scroll-fade-[50px] no-scrollbar hidden min-w-0 flex-1 overflow-x-auto py-1 md:flex">
              <div className="inline-flex w-max flex-nowrap gap-1 first:ml-0.5 last:mr-0.5">
                {dataNavbar.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'hover:bg-muted dark:hover:bg-muted/50 shrink-0 rounded-lg px-2 py-1 text-sm font-medium',
                      firstPath === item.href.split('/')[1] &&
                        'bg-muted dark:bg-muted/50',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="flex shrink-0 items-center gap-3">
            <GlobalSearch />
            <div className="flex items-center gap-1">
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                    className: 'h-8 w-8 transition-none',
                  }),
                )}
              >
                <Logo.X className="size-3" />
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                    className: 'h-8 w-8 transition-none',
                  }),
                )}
              >
                <Logo.Github className="size-4" />
              </Link>
            </div>
            <div className="flex items-center">
              <Separator orientation="vertical" className="!h-4" />
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
