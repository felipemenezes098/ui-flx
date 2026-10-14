import { cn } from '@/lib/utils'

export function PageHeader({
  className,
  children,
}: Readonly<{
  className?: string
  children: React.ReactNode
}>) {
  return (
    <section className={cn('flex max-w-xl flex-col gap-3', className)}>
      {children}
    </section>
  )
}
