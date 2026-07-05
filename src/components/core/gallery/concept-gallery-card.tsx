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
  return (
    <GalleryCard className={cn('bg-card/50 p-3 py-3', className)} {...props} />
  )
}

function ConceptGalleryCardMedia({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <GalleryCardMedia
      className={cn(
        'border-border bg-muted/40 dark:bg-background transition-transform duration-200 ease-out group-hover/gallery-grid-link:-translate-y-0.5',
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
    <GalleryCardFooter
      className={cn('items-center', className)}
      {...props}
    />
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
