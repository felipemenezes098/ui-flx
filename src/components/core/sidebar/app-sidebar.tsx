import { Suspense } from 'react'

import { SidebarBlockFilters } from './sidebar-block-filters'
import { SidebarLogo } from './sidebar-logo'
import { SidebarNav } from './sidebar-nav'
import { SidebarSocialLinks } from './sidebar-social-links'

export function AppSidebar() {
  return (
    <aside
      aria-label="Main navigation"
      className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col px-8 pt-10 pb-5 md:flex"
    >
      <SidebarLogo className="self-start" />

      <div className="no-scrollbar -mx-2 mt-10 flex min-h-0 flex-1 flex-col gap-10 overflow-y-auto px-2 pt-2 pb-6">
        <SidebarNav />
        <Suspense>
          <SidebarBlockFilters />
        </Suspense>
      </div>

      <SidebarSocialLinks className="-ml-2" />
    </aside>
  )
}
