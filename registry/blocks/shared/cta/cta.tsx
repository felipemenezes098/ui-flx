import { cva } from 'class-variance-authority'

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

const ctaVariants = cva('w-fit rounded-full px-4', {
  variants: {
    invert: {
      true: 'bg-white! text-zinc-900! border-transparent hover:bg-zinc-100!',
      false: '',
    },
  },
  defaultVariants: {
    invert: false,
  },
})

export function Cta({
  cta,
  className,
  invert,
}: Readonly<{ cta: CtaProps; className?: string; invert?: boolean }>) {
  if (!cta?.ctaEnabled) {
    return null
  }

  const variant = cta.variant ?? (invert ? 'secondary' : 'default')

  if (!cta?.link) {
    return (
      <Button
        className={cn(ctaVariants({ invert }), className)}
        variant={variant}
        size={cta?.size ?? 'default'}
        aria-label={cta?.text}
        type="button"
      >
        {cta?.text}
      </Button>
    )
  }

  return (
    <Button
      className={cn(ctaVariants({ invert }), className)}
      variant={variant}
      asChild
      size={cta?.size ?? 'default'}
    >
      <a
        href={cta.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={cta?.text}
      >
        {cta?.text}
        <span className="sr-only">{`${cta?.text} (opens in new tab)`}</span>
      </a>
    </Button>
  )
}
