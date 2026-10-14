export function PageHeaderDescription({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="text-muted-foreground text-base leading-relaxed text-pretty">
      {children}
    </p>
  )
}
