export function PageHeaderTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h1 className="text-base font-medium">{children}</h1>
}
