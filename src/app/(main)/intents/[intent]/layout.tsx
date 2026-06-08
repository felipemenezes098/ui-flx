import { Footer } from '@/components/core/footer'
import { SidebarProvider } from '@/components/ui/sidebar'

import { IntentSidebar } from '../components/intent-sidebar'

export const dynamic = 'force-static'
export const revalidate = false

export default function IntentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="container-page container-page-inner min-w-0 pb-0!">
      <SidebarProvider className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
        <IntentSidebar />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="min-w-0 flex-1">{children}</div>
          <Footer />
        </div>
      </SidebarProvider>
    </main>
  )
}
