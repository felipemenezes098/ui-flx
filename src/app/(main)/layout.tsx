import { Analytics } from '@/components/core/analytics'
import { Navbar } from '@/components/core/navbar'
import { SpeedInsights } from '@/components/core/speed-insights'

export const dynamic = 'force-static'
export const revalidate = false

// Analytics lives here and not in the root layout: /preview and /block-editor
// render inside iframes, and every iframe would report its own pageview.
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
