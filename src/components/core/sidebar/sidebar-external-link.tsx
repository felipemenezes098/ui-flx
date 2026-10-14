import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export function SidebarExternalLink({
  href,
  className,
  children,
}: Readonly<{
  href: string
  className?: string
  children: React.ReactNode
}>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'text-muted-foreground hover:text-foreground flex items-center gap-1 py-1 text-sm',
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-3 opacity-60" aria-hidden />
    </a>
  )
}
