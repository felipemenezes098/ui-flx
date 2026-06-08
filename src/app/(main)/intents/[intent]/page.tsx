import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { allIntents, getIntentManifest } from '@/lib/intents/intent-catalog'
import { buildDecisionView } from './lib/intent-view'

import { DecisionAlternatives } from '../components/decision-alternatives'
import { IntentHero } from '../components/intent-hero'

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

  const recommended =
    manifest.decisions.find((d) => d.recommended) ?? manifest.decisions[0]
  const alternatives = manifest.decisions.filter((d) => d !== recommended)

  const recommendedView = buildDecisionView(manifest, recommended)
  const alternativeItems = alternatives.map((d) => ({
    view: buildDecisionView(manifest, d),
    Demo: d.demo,
  }))

  const RecommendedDemo = recommended.demo

  return (
    <div className="flex flex-col gap-8">
      <header className="flex max-w-xl flex-col gap-2">
        <span className="text-muted-foreground text-sm font-medium">
          You want to
        </span>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {manifest.name}
        </h1>
        <p className="text-muted-foreground mt-1">{manifest.problem}</p>
      </header>

      <IntentHero view={recommendedView}>
        <RecommendedDemo />
      </IntentHero>

      <DecisionAlternatives
        items={alternativeItems}
        columns={manifest.grid?.columns ?? 2}
      />
    </div>
  )
}
