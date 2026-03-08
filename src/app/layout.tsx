import './globals.css'

import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

import { Analytics } from '@/components/core/analytics'
import { Toaster } from '@/components/ui/sonner'
import { siteConfig } from '@/config/site'
import { UIProvider } from '@/contexts/ui-context'
import { ConfigProvider } from '@/hooks/use-config'
import { QueryProvider } from '@/providers/query-provider'

import { ThemeProvider } from '../providers/theme-provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'UI',
    'Shadcn',
    'Blocks',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Sanity',
    'CMS',
    'Components',
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.twitter,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@fmenezes_',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} overflow-x-hidden font-sans antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <UIProvider>
              <ConfigProvider>
                <BalancerProvider>{children}</BalancerProvider>
              </ConfigProvider>
            </UIProvider>
          </ThemeProvider>
        </QueryProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
