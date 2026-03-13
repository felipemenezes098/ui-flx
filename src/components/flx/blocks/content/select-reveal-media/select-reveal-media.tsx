'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface SelectRevealMediaItem {
  id: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
}

export interface SelectRevealMediaProps {
  items: SelectRevealMediaItem[]
}

export function SelectRevealMedia({ items }: Readonly<SelectRevealMediaProps>) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!items.length) return null

  return (
    <div
      className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14"
      aria-label="List of items"
    >
      <nav className="flex flex-col justify-center gap-1">
        {items.map((item, index) => {
          const isSelected = index === selectedIndex
          return (
            <Button
              key={item.id}
              variant="ghost"
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-current={isSelected ? 'true' : undefined}
              className={cn(
                'h-auto w-full justify-start rounded-sm py-2.5 text-left font-normal whitespace-normal',
                'hover:bg-muted/50 transition-none hover:opacity-100',
                isSelected && 'text-foreground bg-muted/50',
                !isSelected && 'text-muted-foreground hover:text-foreground',
              )}
            >
              <span className="flex flex-col gap-1">
                <span className={cn('text-base', isSelected && 'font-medium')}>
                  {item.title}
                </span>
                <span
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    isSelected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <span className="overflow-hidden">
                    <span
                      className={cn(
                        'text-muted-foreground block pb-0.5 text-sm transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        isSelected ? 'opacity-100' : 'opacity-0',
                      )}
                    >
                      {item.description}
                    </span>
                  </span>
                </span>
              </span>
            </Button>
          )
        })}
      </nav>

      <div className="relative min-h-[320px] w-full overflow-hidden rounded-lg md:min-h-[420px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
              index === selectedIndex ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt || item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
