'use client'

import { Fullscreen, Palette, RotateCcw } from 'lucide-react'
import Link from 'next/link'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Dumb toolbar actions for a preview surface. Each scenario composes the ones
 * it needs — e.g. a read-only viewer omits EditButton. None of these know
 * about blocks/compositions; callers pass ready-made hrefs / handlers.
 */

export function RefreshButton({
  onClick,
  className,
}: Readonly<{ onClick: () => void; className?: string }>) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      title="Refresh preview"
      aria-label="Refresh preview"
      className={className}
      onClick={onClick}
    >
      <RotateCcw className="size-3.5 shrink-0" />
    </Button>
  )
}

export function FullscreenButton({
  href,
  className,
}: Readonly<{ href: string; className?: string }>) {
  return (
    <Link
      href={href}
      target="_blank"
      title="Open fullscreen"
      aria-label="Open fullscreen"
      className={cn(
        buttonVariants({
          variant: 'outline',
          size: 'sm',
          className,
        }),
      )}
    >
      <Fullscreen className="size-3.5 shrink-0" />
    </Link>
  )
}

export function EditButton({
  href,
  className,
}: Readonly<{ href: string; className?: string }>) {
  return (
    <Link
      href={href}
      title="Edit"
      aria-label="Edit"
      className={cn(
        buttonVariants({
          variant: 'outline',
          size: 'sm',
          className,
        }),
      )}
    >
      <Palette className="size-3.5 shrink-0" />
    </Link>
  )
}
