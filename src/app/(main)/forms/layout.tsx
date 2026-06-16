import type { ReactNode } from 'react'

import { Footer } from '@/components/core/footer'

import { FormsFilterProvider } from './forms-filter-context'
import { FormsToolbar } from './forms-toolbar'

export default function FormsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="container-page min-w-0">
      <div className="container-page-inner">
        <div className="flex flex-col items-center gap-8 px-3 py-10">
          <section className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Forms
            </h1>
            <p className="text-muted-foreground max-w-md text-balance">
              Forms with built-in validation, built with shadcn/ui. React Hook
              Form or TanStack Form.{' '}
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>
            </p>
          </section>

          <FormsFilterProvider>
            <FormsToolbar />
            <div className="flex w-full flex-col gap-12">{children}</div>
          </FormsFilterProvider>
        </div>
      </div>
      <Footer />
    </main>
  )
}
