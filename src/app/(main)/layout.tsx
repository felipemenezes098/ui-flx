import { Navbar } from '@/components/core/navbar'

export const dynamic = 'force-static'
export const revalidate = false

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
