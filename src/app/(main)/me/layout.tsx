export default function MeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">{children}</main>
  )
}
