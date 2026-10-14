import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Logo } from '../logo'
import { ThemeSwitcher } from '../navbar/theme'

const iconLinkClassName = cn(
  buttonVariants({
    variant: 'ghost',
    size: 'icon',
    className:
      'text-muted-foreground hover:text-foreground h-8 w-8 transition-none',
  }),
)

export function SidebarSocialLinks({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        aria-label="X"
        className={iconLinkClassName}
      >
        <Logo.X className="size-3" />
      </Link>
      <Link
        href={siteConfig.links.github}
        target="_blank"
        aria-label="GitHub"
        className={iconLinkClassName}
      >
        <Logo.Github className="size-4" />
      </Link>
      <ThemeSwitcher />
    </div>
  )
}
