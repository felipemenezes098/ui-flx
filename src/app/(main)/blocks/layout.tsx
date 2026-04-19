import { BlocksSidebar } from './components/blocks-sidebar'

export default function BlocksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div
        className="container-page 3xl:fixed:container 3xl:fixed:px-3 mx-auto flex min-h-min w-full flex-1 flex-col px-5 [--top-spacing:0] lg:[--top-spacing:--spacing(4)]"
        style={{ '--header-height': '3.75rem' } as React.CSSProperties}
      >
        <div className="items-start lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-x-8">
          <BlocksSidebar />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}
