import Link from 'next/link'
import { Children, type ComponentProps, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

function splitIntoColumns<T>(items: readonly T[], columnCount: number): T[][] {
  const columns = Array.from({ length: columnCount }, () => [] as T[])

  items.forEach((item, index) => {
    columns[index % columnCount].push(item)
  })

  return columns
}

function GalleryGridLink({
  href,
  id,
  className,
  children,
}: Readonly<{
  href: string
  id?: string
  className?: string
  children: ReactNode
}>) {
  return (
    <Link
      href={href}
      id={id}
      data-slot="gallery-grid-link"
      className={cn(
        'group/gallery-grid-link relative block w-full min-w-0',
        id && 'scroll-mt-16',
        className,
      )}
    >
      {children}
    </Link>
  )
}

function AlternatingColumnGrid({
  items,
  columnCount,
  className,
}: Readonly<{
  items: readonly ReactNode[]
  columnCount: number
  className?: string
}>) {
  const columns = splitIntoColumns(items, columnCount)

  return (
    <div
      data-slot="gallery-grid-columns"
      className={cn('grid gap-4', className)}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
      }}
    >
      {columns.map((columnItems, columnIndex) => (
        <div
          key={columnIndex}
          data-slot="gallery-grid-column"
          className="flex min-w-0 flex-col gap-4"
        >
          {columnItems}
        </div>
      ))}
    </div>
  )
}

function GalleryGrid({
  columns = 2,
  lgColumns,
  className,
  children,
}: Readonly<{
  columns?: number
  lgColumns?: number
  className?: string
  children: ReactNode
}>) {
  const items = Children.toArray(children)

  return (
    <div data-slot="gallery-grid" className={className}>
      <div
        data-slot="gallery-grid-stack"
        className="flex flex-col gap-4 sm:hidden"
      >
        {items}
      </div>
      <AlternatingColumnGrid
        items={items}
        columnCount={columns}
        className={cn('hidden sm:grid', lgColumns && 'lg:hidden')}
      />
      {lgColumns && (
        <AlternatingColumnGrid
          items={items}
          columnCount={lgColumns}
          className="hidden lg:grid"
        />
      )}
    </div>
  )
}

function GalleryGridUniform({
  className,
  children,
}: Readonly<{
  className?: string
  children: ReactNode
}>) {
  return (
    <div
      data-slot="gallery-grid-uniform"
      className={cn(
        'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

function GalleryGridItem({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      data-slot="gallery-grid-item"
      className={cn('min-w-0', className)}
      {...props}
    />
  )
}

export { GalleryGrid, GalleryGridItem, GalleryGridLink, GalleryGridUniform }
