import type { ComponentProps } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

function GalleryCard({
  className,
  size = 'sm',
  ...props
}: Readonly<ComponentProps<typeof Card>>) {
  return (
    <Card
      size={size}
      className={cn(
        'group/gallery-card gap-3 p-2 py-2 hover:bg-card/30',
        className,
      )}
      {...props}
    />
  )
}

function GalleryCardMedia({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-card-media"
      className={cn(
        'border-border/50 relative w-full min-w-0 overflow-hidden rounded-lg border',
        className,
      )}
      {...props}
    />
  )
}

function GalleryCardBadge({
  className,
  children = 'New',
  ...props
}: Readonly<ComponentProps<typeof Badge>>) {
  return (
    <Badge
      data-slot="gallery-card-badge"
      className={cn(
        'absolute top-2 right-2 z-10 h-auto rounded-full px-2 py-0.5 text-[10px]',
        className,
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}

export type ThemeImageSource = Readonly<{
  light: string
  dark: string
}>

function GalleryCardThemeImage({
  src,
  alt,
  className,
}: Readonly<{
  src: ThemeImageSource
  alt: string
  className?: string
}>) {
  return (
    <>
      <img
        src={src.light}
        alt={alt}
        data-slot="gallery-card-image"
        className={cn('block w-full dark:hidden', className)}
      />
      <img
        src={src.dark}
        alt={alt}
        data-slot="gallery-card-image"
        className={cn('hidden w-full dark:block', className)}
      />
    </>
  )
}

function GalleryCardFooter({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-card-footer"
      className={cn(
        'flex w-full flex-col items-start gap-0.5 px-0.5',
        className,
      )}
      {...props}
    />
  )
}

function GalleryCardTitle({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-card-title"
      className={cn('text-foreground text-left text-sm font-medium', className)}
      {...props}
    />
  )
}

function GalleryCardSublabel({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-card-sublabel"
      className={cn(
        'text-muted-foreground line-clamp-1 text-left text-xs',
        className,
      )}
      {...props}
    />
  )
}

export {
  GalleryCard,
  GalleryCardBadge,
  GalleryCardFooter,
  GalleryCardMedia,
  GalleryCardSublabel,
  GalleryCardThemeImage,
  GalleryCardTitle,
}
