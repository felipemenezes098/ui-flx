export default function BlocksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container-page container-page-inner relative mx-auto w-full">
      {children}
    </div>
  )
}
