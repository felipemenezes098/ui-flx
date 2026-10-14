export default function MeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-w-0 px-5 pt-12 pb-16 md:px-12 md:pt-32">
      <div className="mx-auto w-full max-w-[880px]">
        <div className="max-w-xl">{children}</div>
      </div>
    </main>
  )
}
