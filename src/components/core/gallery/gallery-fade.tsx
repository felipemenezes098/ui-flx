import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'

function GalleryFade({
  className,
  children,
}: Readonly<{
  className?: string
  children: ReactNode
}>) {
  return (
    <div data-slot="gallery-fade" className={cn('relative', className)}>
      {children}
    </div>
  )
}

function GalleryFadeFooter({
  className,
  children,
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-fade-footer"
      className={cn(
        'from-background absolute inset-x-0 -bottom-10 flex h-40 items-end justify-center bg-gradient-to-t from-30% to-transparent pb-10',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { GalleryFade, GalleryFadeFooter }
