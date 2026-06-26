import type { ComponentProps } from 'react'

import type { BlockImage } from '@/lib/blocks/block-manifest-types'
import { cn } from '@/lib/utils'

function BlockPreviewCard({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'bg-card hover:bg-card/30 flex min-w-0 flex-col gap-3 overflow-hidden rounded-xl border p-2 shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

function BlockPreviewCardPreview({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'border-border/50 relative w-full min-w-0 overflow-hidden rounded-lg border',
        className,
      )}
      {...props}
    />
  )
}

function BlockPreviewCardBadge({
  className,
  children = 'New',
  ...props
}: Readonly<ComponentProps<'span'>>) {
  return (
    <span
      className={cn(
        'absolute top-2 right-2 z-10 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

function BlockPreviewCardImage({
  image,
  alt,
  className,
}: Readonly<{
  image: BlockImage
  alt: string
  className?: string
}>) {
  return (
    <>
      <img
        src={image.light}
        alt={alt}
        className={cn('block w-full dark:hidden', className)}
      />
      <img
        src={image.dark}
        alt={alt}
        className={cn('hidden w-full dark:block', className)}
      />
    </>
  )
}

function BlockPreviewCardFooter({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-start gap-0.5 px-0.5',
        className,
      )}
      {...props}
    />
  )
}

function BlockPreviewCardTitle({
  className,
  ...props
}: Readonly<ComponentProps<'span'>>) {
  return (
    <span
      className={cn('text-foreground text-left text-sm font-medium', className)}
      {...props}
    />
  )
}

function BlockPreviewCardSublabel({
  className,
  ...props
}: Readonly<ComponentProps<'span'>>) {
  return (
    <span
      className={cn(
        'text-muted-foreground line-clamp-1 text-left text-xs',
        className,
      )}
      {...props}
    />
  )
}

export {
  BlockPreviewCard,
  BlockPreviewCardBadge,
  BlockPreviewCardFooter,
  BlockPreviewCardImage,
  BlockPreviewCardPreview,
  BlockPreviewCardSublabel,
  BlockPreviewCardTitle,
}
