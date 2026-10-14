import { notFound } from 'next/navigation'

import { PageHeader } from '@/components/core/page-header/page-header'
import { PageHeaderDescription } from '@/components/core/page-header/page-header-description'
import { PageHeaderTitle } from '@/components/core/page-header/page-header-title'
import { getCategoryBySlug } from '@/lib/patterns/patterns-catalog'

import { PatternCategoryNav } from '../components/pattern-category-nav'

export const dynamic = 'force-static'
export const revalidate = false

export default async function PatternCategoryLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ category: string }>
}>) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  return (
    <div>
      <main className="container-page container-page-inner min-w-0">
        <div className="flex flex-col gap-6 px-3 pt-7 pb-10 md:pt-27">
          <PageHeader>
            <PageHeaderTitle>{category.name}</PageHeaderTitle>
            <PageHeaderDescription>
              {category.description}
            </PageHeaderDescription>
          </PageHeader>

          <PatternCategoryNav />
          {children}
        </div>
      </main>
    </div>
  )
}
