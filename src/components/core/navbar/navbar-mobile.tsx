'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { dataNavbar } from '@/data/navbar'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

import { Logo } from '../logo'
import { ThemeSwitcher } from './theme'

export function NavbarMobile() {
  const isMobile = useIsMobile()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!isMobile) setOpen(false)
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open, isMobile])

  return (
    <>
      <header
        className="bg-background sticky top-0 z-50 w-full overflow-hidden md:hidden"
        aria-label="Main navigation"
      >
        <div className="container-page px-5 py-3">
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="extend-touch-target flex h-8 touch-manipulation items-center justify-start gap-3 p-0"
            >
              <div className="relative flex h-8 w-4 items-center justify-center">
                <div className="relative mb-1 size-3">
                  <span
                    className={cn(
                      'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-300',
                      open ? 'top-[0.4rem] -rotate-45' : 'top-1',
                    )}
                  />
                  <span
                    className={cn(
                      'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-300',
                      open ? 'top-[0.4rem] rotate-45' : 'top-2.5',
                    )}
                  />
                </div>
              </div>
            </button>

            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: open ? 0 : 1 }}
                transition={{
                  duration: 0.5,
                  delay: open ? 0 : 0.15,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className={cn(
                  'flex items-center gap-2',
                  open && 'pointer-events-none',
                )}
                aria-hidden={open}
              >
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
                <Separator orientation="vertical" className="!h-4" />
                <ThemeSwitcher />
                <Separator orientation="vertical" className="!h-4" />
                <Button
                  variant="ghost"
                  className="hover:bg-muted h-7 rounded-lg px-2"
                  size="sm"
                  asChild
                >
                  <Link href="/" className="flex items-center gap-1.5">
                    <Logo.Flexnative className="text-primary h-6 w-auto" />
                    <span className="text-sm font-medium">
                      {siteConfig.name}
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.3,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="bg-background fixed inset-0 top-[3.5rem] z-[39] md:hidden"
              aria-hidden
            />
            <div
              key="mobile-panel-bg"
              className="fixed top-[2rem] right-0 bottom-0 left-0 z-40 overflow-hidden md:hidden"
            >
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.1,
                }}
                style={{ transformOrigin: 'top' }}
                className="bg-background h-full w-full"
              />
            </div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-panel-content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.15,
                },
              },
            }}
            className="fixed top-[3.5rem] right-0 bottom-0 left-0 z-[41] overflow-auto px-5 pt-6 pb-6 md:hidden"
          >
            <nav className="flex flex-col items-start gap-6">
              {dataNavbar.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -8,
                      transition: { duration: 0.2 },
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.32, 0.72, 0, 1],
                      },
                    },
                  }}
                >
                  <MobileLink href={item.href} onClose={() => setOpen(false)}>
                    <span className="text-xl font-medium">{item.name}</span>
                  </MobileLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileLink({
  href,
  onClose,
  children,
}: Readonly<{
  href: string
  onClose: () => void
  children: React.ReactNode
}>) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="text-foreground hover:text-foreground/80 focus-visible:outline-ring focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {children}
    </Link>
  )
}
