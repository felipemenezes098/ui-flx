import type { ReactNode } from 'react'

import { PageHeader } from '@/components/core/page-header/page-header'
import { PageHeaderDescription } from '@/components/core/page-header/page-header-description'
import { PageHeaderTitle } from '@/components/core/page-header/page-header-title'

import { FormsFilterProvider } from './forms-filter-context'
import { FormsToolbar } from './forms-toolbar'

export default function FormsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="container-page min-w-0">
      <div className="container-page-inner">
        <div className="flex flex-col gap-6 px-3 pt-7 pb-10 md:pt-27">
          <PageHeader>
            <PageHeaderTitle>Forms</PageHeaderTitle>
            <PageHeaderDescription>
              Forms with built-in validation, built with shadcn/ui. React Hook
              Form or TanStack Form.{' '}
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>
            </PageHeaderDescription>
          </PageHeader>

          <FormsFilterProvider>
            <FormsToolbar />
            <div className="flex w-full flex-col gap-12">{children}</div>
          </FormsFilterProvider>
        </div>
      </div>
    </main>
  )
}
