'use client'

import { useLayoutEffect, useState } from 'react'
import { PanelLeftIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { BlocksSidebar } from './blocks-sidebar'
import { Button } from '@/components/ui/button'
import { useUI } from '@/contexts/ui-context'
import { cn } from '@/lib/utils'

const sidebarTransition = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 36,
  mass: 0.8,
}

export function BlocksShell({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [filtersOpen, setFiltersOpen] = useState(true)
  const { setHideNavbar } = useUI()

  useLayoutEffect(() => {
    return () => {
      setHideNavbar(false)
    }
  }, [setHideNavbar])

  function openFilters() {
    setFiltersOpen(true)
    setHideNavbar(false)
  }

  function closeFilters() {
    setFiltersOpen(false)
    setHideNavbar(true)
  }

  return (
    <div
      className={cn('container-page flex min-w-0 items-start px-5 pt-4 pb-8')}
    >
      <motion.aside
        aria-label="Filters"
        aria-hidden={!filtersOpen}
        initial={false}
        animate={{
          width: filtersOpen ? 224 : 0,
          marginRight: filtersOpen ? 24 : 0,
          opacity: filtersOpen ? 1 : 0,
        }}
        transition={sidebarTransition}
        className={cn(
          'sticky top-20 z-30 hidden h-[calc(100svh-120px)] shrink-0 self-start overflow-hidden lg:block',
          !filtersOpen && 'pointer-events-none',
        )}
      >
        <div className="h-full w-56">
          <BlocksSidebar onHide={closeFilters} />
        </div>
      </motion.aside>

      <div className="min-w-0 flex-1">
        <AnimatePresence initial={false}>
          {!filtersOpen ? (
            <motion.div
              key="filters-open-btn"
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 24, marginBottom: 16 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={sidebarTransition}
              className="hidden overflow-hidden lg:block"
            >
              <Button
                type="button"
                variant="outline"
                size="xs"
                onClick={openFilters}
                className="transition-none"
              >
                <PanelLeftIcon data-icon="inline-start" />
                Filters
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
        {children}
      </div>
    </div>
  )
}
