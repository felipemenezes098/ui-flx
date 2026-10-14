import { Analytics } from '@/components/core/analytics'
import { Navbar } from '@/components/core/navbar'
import { AppSidebar } from '@/components/core/sidebar/app-sidebar'
import { SpeedInsights } from '@/components/core/speed-insights'

export const dynamic = 'force-static'
export const revalidate = false

// Analytics lives here and not in the root layout: /preview renders inside
// iframes, and every iframe would report its own pageview.
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <AppSidebar />
      <div className="md:pl-64">{children}</div>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
