'use client'

import { usePathname } from 'next/navigation'

import { SidebarLink } from './sidebar-link'
import { isActiveNavPath, sidebarNavItems } from './sidebar-nav-items'

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-0.5">
      {sidebarNavItems.map((item) => (
        <SidebarLink
          key={item.name}
          href={item.href}
          active={isActiveNavPath(pathname, item.href)}
        >
          {item.name}
        </SidebarLink>
      ))}
    </nav>
  )
}
