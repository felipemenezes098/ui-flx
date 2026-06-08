import { notFound } from 'next/navigation'

import { Footer } from '@/components/core/footer'
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
        <div className="flex flex-col gap-8 px-3 py-10">
          <section className="max-w-xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {category.name}
            </h1>
            <p className="text-muted-foreground mt-2">{category.description}</p>
          </section>

          <PatternCategoryNav />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
