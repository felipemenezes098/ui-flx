import { HoverPrefetchLink } from '@/components/core/hover-prefetch-link'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Logo } from '../logo'

export function SidebarLogo({ className }: Readonly<{ className?: string }>) {
  return (
    <HoverPrefetchLink
      href="/"
      aria-label={siteConfig.name}
      className={cn(
        'bg-foreground flex size-6 shrink-0 items-center justify-center rounded-md',
        className,
      )}
    >
      <Logo.Flexnative className="text-background size-3.5" />
    </HoverPrefetchLink>
  )
}
