import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/core/footer'
import { allIntents, getIntentManifest } from '@/lib/intent-catalog'

import { PatternGrid } from '../../patterns/components/pattern-grid'
import { DecisionCard } from '../components/decision-card'
import { DecisionExports } from '../components/decision-exports'
import { ExportButtons } from '../components/export-buttons'

export const dynamic = 'force-static'
export const revalidate = false

export function generateStaticParams() {
  return allIntents.filter((i) => i.manifest).map((i) => ({ intent: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ intent: string }>
}): Promise<Metadata> {
  const { intent: slug } = await params
  const manifest = getIntentManifest(slug)
  if (!manifest) return {}
  return {
    title: manifest.name,
    description: manifest.problem,
    openGraph: { title: manifest.name, description: manifest.problem },
  }
}

export default async function IntentPage({
  params,
}: Readonly<{
  params: Promise<{ intent: string }>
}>) {
  const { intent: slug } = await params
  const manifest = getIntentManifest(slug)

  if (!manifest) notFound()

  const decisions = [...manifest.decisions].sort((a, b) => {
    if (a.recommended) return -1
    if (b.recommended) return 1
    return 0
  })

  return (
    <div>
      <main className="container-page container-page-inner min-w-0">
        <div className="flex flex-col gap-8 px-3 py-10">
          <div className="flex flex-col gap-2">
            <section className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {manifest.name}
              </h1>
              <p className="text-muted-foreground mt-2">{manifest.problem}</p>
            </section>
            <ExportButtons exports={manifest.exports} className="mt-4" />
          </div>

          <PatternGrid columns={3}>
            {decisions.map((decision) => {
              const Demo = decision.demo
              return (
                <DecisionCard
                  key={decision.slug}
                  name={decision.name}
                  best={decision.best}
                  caveat={decision.caveat}
                  recommended={decision.recommended}
                >
                  <Demo />
                </DecisionCard>
              )
            })}
          </PatternGrid>

          <DecisionExports exports={manifest.exports} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
