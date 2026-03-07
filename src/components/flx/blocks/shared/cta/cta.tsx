import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import type { CtaProps } from './types'

export function Cta({
  cta,
  className,
}: Readonly<{ cta: CtaProps; className?: string }>) {
  if (!cta?.ctaEnabled) {
    return null
  }

  return (
    <Button
      className={cn('w-fit rounded-full px-5', className)}
      variant={cta?.variant ?? 'default'}
      asChild
    >
      <Link
        href={cta?.link ?? ''}
        target={cta?.link ? '_blank' : '_self'}
        rel={cta?.link ? 'noopener noreferrer' : undefined}
        aria-label={cta?.text}
      >
        {cta?.text}
        {cta?.link && (
          <span className="sr-only">{`${cta?.text} (opens in new tab)`}</span>
        )}
      </Link>
    </Button>
  )
}
