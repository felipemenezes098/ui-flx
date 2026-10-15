import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Logo } from './logo'

export function GithubStarButton({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <a
      href={siteConfig.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: 'outline', size: 'sm' }),
        className,
      )}
    >
      <Logo.Github className="size-3.5" />
      Star on GitHub
    </a>
  )
}
