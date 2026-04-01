import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

export interface CtaProps {
  ctaEnabled?: boolean
  text: string
  link: string
  variant?: ButtonVariant
  size?: 'default' | 'sm' | 'lg'
}

export function Cta({
  cta,
  className,
}: Readonly<{ cta: CtaProps; className?: string }>) {
  if (!cta?.ctaEnabled) {
    return null
  }

  return (
    <Button
      className={cn(
        'w-fit rounded-full',
        cta?.size === 'sm' ? 'px-4' : 'px-5',
        className,
      )}
      variant={cta?.variant ?? 'default'}
      asChild
      size={cta?.size ?? 'default'}
    >
      <a
        href={cta?.link ?? ''}
        target={cta?.link ? '_blank' : '_self'}
        rel={cta?.link ? 'noopener noreferrer' : undefined}
        aria-label={cta?.text}
      >
        {cta?.text}
        {cta?.link && (
          <span className="sr-only">{`${cta?.text} (opens in new tab)`}</span>
        )}
      </a>
    </Button>
  )
}
