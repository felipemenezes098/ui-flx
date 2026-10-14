import { HoverPrefetchLink } from '@/components/core/hover-prefetch-link'

import { cn } from '@/lib/utils'

export function SidebarLink({
  href,
  active,
  children,
}: Readonly<{
  href: string
  active: boolean
  children: React.ReactNode
}>) {
  return (
    <HoverPrefetchLink
      href={href}
      aria-current={active && 'page'}
      className={cn(
        'hover:text-foreground py-1 text-sm',
        active && 'text-foreground',
        !active && 'text-muted-foreground',
      )}
    >
      {children}
    </HoverPrefetchLink>
  )
}
