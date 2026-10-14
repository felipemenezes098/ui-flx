'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const items = [
  {
    title: 'Design',
    description:
      'Clean, accessible components that make your product feel modern and easy to use.',
    image:
      'https://images.unsplash.com/photo-1695152560286-b09a744834e1?q=80&w=1133&auto=format&fit=crop',
  },
  {
    title: 'Components',
    description:
      'Pre-built blocks you can drop into any layout. Customize once, reuse everywhere.',
    image:
      'https://images.unsplash.com/photo-1683143724745-d66cf5ea5ce7?q=80&w=1202&auto=format&fit=crop',
  },
  {
    title: 'Developer Experience',
    description:
      'Built with TypeScript, clear APIs, and documentation that gets you shipping faster.',
    image:
      'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1241&auto=format&fit=crop',
  },
  {
    title: 'Customization',
    description:
      'Themes, variants, and overrides. Make it look and behave exactly how you need.',
    image:
      'https://images.unsplash.com/photo-1683143726118-9abaed4e10f9?q=80&w=1062&auto=format&fit=crop',
  },
  {
    title: 'Performance',
    description:
      'Optimized for speed and accessibility. Less bundle size, smoother interactions.',
    image:
      'https://images.unsplash.com/photo-1734552452335-e8b67797bad0?q=80&w=1212&auto=format&fit=crop',
  },
]

export function Feature01() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <nav
            className="flex flex-col justify-center gap-1"
            aria-label="Features"
          >
            {items.map((item, index) => {
              const isSelected = index === selectedIndex

              return (
                <Button
                  key={item.title}
                  variant="ghost"
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-current={isSelected ? 'true' : undefined}
                  className={cn(
                    'hover:bg-muted/50 h-auto w-full justify-start rounded-sm py-2.5 text-left font-normal whitespace-normal hover:opacity-100',
                    isSelected
                      ? 'text-foreground bg-muted/50'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span className="flex flex-col gap-1">
                    <span
                      className={cn('text-base', isSelected && 'font-medium')}
                    >
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

          <div className="relative min-h-[320px] w-full overflow-hidden rounded-lg outline outline-black/10 md:min-h-[420px] dark:outline-white/10">
            {items.map((item, index) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={cn(
                  'absolute inset-0 size-full object-cover transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  index === selectedIndex ? 'opacity-100' : 'opacity-0',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
