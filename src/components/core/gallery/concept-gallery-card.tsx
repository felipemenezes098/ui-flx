import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import {
  GalleryCard,
  GalleryCardBadge,
  GalleryCardFooter,
  GalleryCardMedia,
  GalleryCardTitle,
} from './gallery-card'

function ConceptGalleryCard({
  className,
  ...props
}: Readonly<ComponentProps<typeof GalleryCard>>) {
  return <GalleryCard className={cn('bg-card/50', className)} {...props} />
}

function ConceptGalleryCardMedia({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <GalleryCardMedia
      className={cn(
        'border-border bg-muted/40 dark:bg-background [&>:not([data-slot=gallery-card-badge])]:transition-transform [&>:not([data-slot=gallery-card-badge])]:duration-200 [&>:not([data-slot=gallery-card-badge])]:ease-out group-hover/gallery-grid-link:[&>:not([data-slot=gallery-card-badge])]:-translate-y-0.5',
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
    <GalleryCardFooter className={cn('items-center', className)} {...props} />
  )
}

function ConceptGalleryCardTitle({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <GalleryCardTitle
      className={cn(
        'text-center group-hover/gallery-grid-link:underline group-hover/gallery-grid-link:underline-offset-4',
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
