'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const items = [
  {
    title: 'Build faster',
    description: 'Create interfaces quickly using reusable blocks.',
    image: {
      src: 'https://images.unsplash.com/photo-1486092642310-0c4e84309adb?q=80&w=2070&auto=format&fit=crop',
      alt: 'Alt 1',
    },
  },
  {
    title: 'Customize easily',
    description: 'Adapt everything to your design system.',
    image: {
      src: 'https://images.unsplash.com/photo-1479707406242-e8929e87e734?q=80&w=1170&auto=format&fit=crop',
      alt: 'Alt 2',
    },
  },
  {
    title: 'Stay consistent',
    description: 'Keep layouts balanced with a clear visual rhythm.',
    image: {
      src: 'https://images.unsplash.com/photo-1628880689946-f4a0533ac5fc?q=80&w=1170&auto=format&fit=crop',
      alt: 'Alt 3',
    },
  },
  {
    title: 'Guide attention',
    description: 'Highlight the right content without adding noise.',
    image: {
      src: 'https://images.unsplash.com/photo-1571495653425-621ba3cb7ac1?q=80&w=1170&auto=format&fit=crop',
      alt: 'Alt 4',
    },
  },
  {
    title: 'Scale calmly',
    description: 'Expand your pages with patterns that stay elegant.',
    image: {
      src: 'https://images.unsplash.com/photo-1561990306-7462bfe923b6?q=80&w=1170&auto=format&fit=crop',
      alt: 'Alt 5',
    },
  },
]

export function Scroll01() {
  const [activeIndex, setActiveIndex] = useState(0)
  const textRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // A text item becomes active while it crosses the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute('data-index')))
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    textRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="space-y-10 md:hidden">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col items-start space-y-4"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
            <img
              src={item.image.src}
              alt={item.image.alt}
              className="h-72 w-full rounded-2xl object-cover"
            />
          </article>
        ))}
      </div>

      <div className="hidden gap-10 md:grid md:grid-cols-2">
        <div className="sticky top-20 h-[70vh] self-start overflow-hidden rounded-2xl">
          {items.map((item, index) => (
            <img
              key={item.title}
              src={item.image.src}
              alt={item.image.alt}
              className={cn(
                'absolute inset-0 size-full object-cover transition-opacity duration-300 ease-linear',
                activeIndex === index ? 'opacity-100' : 'opacity-0',
              )}
            />
          ))}
        </div>

        <div className="space-y-[30vh] py-[35vh]">
          {items.map((item, index) => (
            <article
              key={item.title}
              ref={(el) => {
                textRefs.current[index] = el
              }}
              data-index={index}
              className={cn(
                'text-center transition-opacity duration-300',
                activeIndex === index ? 'opacity-100' : 'opacity-30',
              )}
            >
              <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
