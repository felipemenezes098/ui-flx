export default function BlocksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container-page mx-auto w-full px-5 py-6">{children}</div>
  )
}
