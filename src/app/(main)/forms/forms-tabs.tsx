'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { AnimatedBackground } from '@/components/core/animated-background'

import { useFormsFilter } from './forms-filter-context'

const tabs = [
  { label: 'React Hook Form', href: '/forms/react-hook-form' },
  { label: 'TanStack Form', href: '/forms/tanstack-form' },
]

export function FormsTabs() {
  const pathname = usePathname()
  const { active } = useFormsFilter()
  const hash = active && active !== 'all' ? `#${active}` : ''

  return (
    <div className="bg-muted rounded-full p-1">
      <AnimatedBackground
        value={pathname}
        className="bg-background rounded-full"
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
        }}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={`${tab.href}${hash}`}
            scroll={false}
            data-id={tab.href}
            className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-center text-sm font-medium transition-transform active:scale-[0.98]"
          >
            {tab.label}
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  )
}
