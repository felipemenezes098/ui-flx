'use client'

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

import { useUI } from '@/contexts/ui-context'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

import { SidebarBlockFilters } from '../sidebar/sidebar-block-filters'
import { SidebarExternalLink } from '../sidebar/sidebar-external-link'
import { SidebarLink } from '../sidebar/sidebar-link'
import { SidebarLogo } from '../sidebar/sidebar-logo'
import {
  isActiveNavPath,
  sidebarNavItems,
  swiftuiLink,
} from '../sidebar/sidebar-nav-items'
import { SidebarSocialLinks } from '../sidebar/sidebar-social-links'

const menuLabels = {
  open: 'Close menu',
  closed: 'Open menu',
}

const easing = [0.32, 0.72, 0, 1] as const

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export function NavbarMobile() {
  const isMobile = useIsMobile()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { hideNavbar } = useUI()

  useEffect(() => {
    if (!isMobile) setOpen(false)
    document.body.style.overflow = (open && 'hidden') || ''
  }, [open, isMobile])

  function closeOnLinkClick(event: React.MouseEvent<HTMLDivElement>) {
    if ((event.target as Element).closest('a')) {
      setOpen(false)
    }
  }

  return (
    <>
      <header
        className="bg-background relative z-[42] w-full overflow-hidden md:hidden"
        aria-label="Main navigation"
        aria-hidden={hideNavbar || undefined}
      >
        <div className="container-page px-5 py-3">
          <div className="flex items-center justify-between gap-2">
            <SidebarLogo />
            <div className="flex items-center gap-1">
              <SidebarSocialLinks />
              <button
                type="button"
                aria-label={menuLabels[(open && 'open') || 'closed']}
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                className="extend-touch-target text-muted-foreground hover:text-foreground ml-1 flex h-8 touch-manipulation items-center justify-start gap-3 p-0"
              >
                <div className="relative flex h-8 w-4 items-center justify-center">
                  <div className="relative mb-1 size-3">
                    <span
                      className={cn(
                        'absolute left-0 block h-0.5 w-4 bg-current transition-all duration-300',
                        open && 'top-[0.4rem] -rotate-45',
                        !open && 'top-1',
                      )}
                    />
                    <span
                      className={cn(
                        'absolute left-0 block h-0.5 w-4 bg-current transition-all duration-300',
                        open && 'top-[0.4rem] rotate-45',
                        !open && 'top-2.5',
                      )}
                    />
                  </div>
                </div>
              </button>
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
              transition={{ duration: 1.3, ease: easing }}
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
                transition={{ duration: 0.35, ease: easing, delay: 0.1 }}
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
                transition: { staggerChildren: 0.06, delayChildren: 0.15 },
              },
            }}
            onClick={closeOnLinkClick}
            className="no-scrollbar fixed top-[3.5rem] right-0 bottom-0 left-0 z-[41] flex flex-col gap-10 overflow-auto px-5 pt-6 pb-6 md:hidden [&_a[aria-current]]:py-2 [&_a[aria-current]]:text-base"
          >
            <nav className="flex flex-col">
              {sidebarNavItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <SidebarLink
                    href={item.href}
                    active={isActiveNavPath(pathname, item.href)}
                  >
                    {item.name}
                  </SidebarLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                variants={itemVariants}
                className="flex flex-col"
              >
                <SidebarExternalLink
                  href={swiftuiLink.href}
                  className="py-2 text-base"
                >
                  {swiftuiLink.name}
                </SidebarExternalLink>
              </motion.div>
            </nav>
            <motion.div initial={{ opacity: 0, y: 8 }} variants={itemVariants}>
              <Suspense>
                <SidebarBlockFilters />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
