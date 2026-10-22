'use client'

import { usePathname } from 'next/navigation'

import { patternCategories } from '@/lib/patterns/patterns-catalog'

import { SidebarLink } from './sidebar-link'
import { SidebarSection } from './sidebar-section'

const patternsPath = '/patterns'
const formsHref = '/forms/react-hook-form'

const categories = [
  ...patternCategories.map((category) => ({
    slug: category.slug,
    name: category.name,
    href: `${patternsPath}/${category.slug}`,
  })),
  { slug: 'forms', name: 'Forms', href: formsHref },
].toSorted((a, b) => a.name.localeCompare(b.name))

function isCategoryActive(pathname: string, slug: string, href: string) {
  if (slug === 'forms') {
    return pathname.startsWith('/forms')
  }

  return pathname === href
}

export function SidebarPatternFilters() {
  const pathname = usePathname()
  const section = pathname.split('/')[1]

  if (section !== 'patterns' && section !== 'forms') {
    return null
  }

  return (
    <SidebarSection label="Categories">
      <SidebarLink href={patternsPath} active={pathname === patternsPath}>
        All patterns
      </SidebarLink>
      {categories.map((category) => (
        <SidebarLink
          key={category.slug}
          href={category.href}
          active={isCategoryActive(pathname, category.slug, category.href)}
        >
          {category.name}
        </SidebarLink>
      ))}
    </SidebarSection>
  )
}
