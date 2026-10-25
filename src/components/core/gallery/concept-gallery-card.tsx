import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import { GalleryCardBadge } from './gallery-card'

function ConceptGalleryCard({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="concept-gallery-card"
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  )
}

function ConceptGalleryCardMedia({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-card-media"
      className={cn(
        'border-border/50 group-hover/gallery-grid-link:border-border [&>:not([data-slot=gallery-card-badge])]:transition-transform [&>:not([data-slot=gallery-card-badge])]:duration-200relative flex h-36 w-full min-w-0 items-center justify-center rounded-xl border transition-colors duration-200 [&>:not([data-slot=gallery-card-badge])]:ease-out group-hover/gallery-grid-link:[&>:not([data-slot=gallery-card-badge])]:-translate-y-0.5',
        className,
      )}
      {...props}
    />
  )
}

function ConceptGalleryCardFooter({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-card-footer"
      className={cn('flex w-full items-center justify-center', className)}
      {...props}
    />
  )
}

function ConceptGalleryCardTitle({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-card-title"
      className={cn(
        'text-muted-foreground group-hover/gallery-grid-link:text-foreground text-sm transition-colors duration-200',
        className,
      )}
      {...props}
    />
  )
}

export {
  ConceptGalleryCard,
  ConceptGalleryCardFooter,
  ConceptGalleryCardMedia,
  ConceptGalleryCardTitle,
  GalleryCardBadge as ConceptGalleryCardBadge,
}
