'use client'

import { Fullscreen, Palette, RotateCcw } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

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
    <Button
      variant="outline"
      size="sm"
      title="Open fullscreen"
      aria-label="Open fullscreen"
      className={className}
      render={<Link href={href} target="_blank" />}
      nativeButton={false}
    >
      <Fullscreen className="size-3.5 shrink-0" />
    </Button>
  )
}

export function EditButton({
  href,
  className,
}: Readonly<{ href: string; className?: string }>) {
  return (
    <Button
      variant="outline"
      size="sm"
      title="Edit"
      aria-label="Edit"
      className={className}
      render={<Link href={href} />}
      nativeButton={false}
    >
      <Palette className="size-3.5 shrink-0" />
    </Button>
  )
}
