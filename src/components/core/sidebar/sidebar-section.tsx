export function SidebarSection({
  label,
  children,
}: Readonly<{
  label: string
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-muted-foreground/60 mb-2 text-xs">{label}</p>
      {children}
    </div>
  )
}
