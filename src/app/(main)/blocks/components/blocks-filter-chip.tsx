import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function BlocksFilterChip({
  href,
  active,
  label,
  count,
  className,
}: Readonly<{
  href: string
  active: boolean
  label: string
  count?: number
  className?: string
}>) {
  return (
    <Link
      href={href}
      aria-current={active ? 'true' : undefined}
      className={cn(
        buttonVariants({
          variant: 'outline',
          size: 'sm',
          className: cn(
            'h-7 cursor-default px-2 text-xs transition-none',
            !active &&
              'border-border/50 text-muted-foreground/80 hover:text-foreground',
            className,
          ),
        }),
      )}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={cn(
            'tabular-nums',
            active ? 'text-muted-foreground' : 'text-muted-foreground/50',
          )}
        >
          {count}
        </span>
      )}
    </Link>
  )
}
