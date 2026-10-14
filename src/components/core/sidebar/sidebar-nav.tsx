'use client'

import { usePathname } from 'next/navigation'

import { SidebarExternalLink } from './sidebar-external-link'
import { SidebarLink } from './sidebar-link'
import {
  isActiveNavPath,
  sidebarNavItems,
  swiftuiLink,
} from './sidebar-nav-items'

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
      <SidebarExternalLink href={swiftuiLink.href}>
        {swiftuiLink.name}
      </SidebarExternalLink>
    </nav>
  )
}
