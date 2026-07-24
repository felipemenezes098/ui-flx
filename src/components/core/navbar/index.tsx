'use client'

import { motion } from 'motion/react'

import { NavbarDesktop } from './navbar-desktop'
import { NavbarMobile } from './navbar-mobile'
import { useUI } from '@/contexts/ui-context'

const navbarTransition = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 36,
  mass: 0.8,
}

export function Navbar() {
  const { hideNavbar } = useUI()

  return (
    <motion.div
      initial={false}
      animate={{
        height: hideNavbar ? 0 : 'auto',
        opacity: hideNavbar ? 0 : 1,
      }}
      transition={navbarTransition}
      className="sticky top-0 z-50 overflow-hidden"
    >
      <NavbarDesktop />
      <NavbarMobile />
    </motion.div>
  )
}
