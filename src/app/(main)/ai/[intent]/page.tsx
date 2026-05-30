import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/core/footer'
import { allIntents, getIntentManifest } from '@/lib/intent-catalog'
import { buildDecisionExports, buildIntentDocs } from '@/lib/intent-exports'

import { DecisionAlternatives } from '../components/decision-alternatives'
import { DecisionExports } from '../components/decision-exports'
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
  const RecommendedDemo = recommended.demo

  const recommendedExports = buildDecisionExports(manifest, recommended)
  const docs = buildIntentDocs(manifest)
  const alternativeItems = alternatives.map((decision) => ({
    decision,
    exports: buildDecisionExports(manifest, decision),
  }))

  return (
    <div>
      <main className="container-page container-page-inner min-w-0">
        <div className="flex flex-col gap-12 px-3">
          <div className="flex flex-col gap-5">
            <Link
              href="/ai"
              className="text-muted-foreground hover:text-foreground group inline-flex w-fit items-center gap-1.5 text-sm transition-colors"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
              All intents
            </Link>

            <header className="flex max-w-xl flex-col gap-2">
              <span className="text-muted-foreground text-sm font-medium">
                You want to
              </span>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {manifest.name}
              </h1>
              <p className="text-muted-foreground mt-1">{manifest.problem}</p>
            </header>
          </div>

          <IntentHero
            name={recommended.name}
            best={recommended.best}
            caveat={recommended.caveat}
            prompt={recommendedExports.prompt}
            install={recommendedExports.install}
          >
            <RecommendedDemo />
          </IntentHero>

          <DecisionAlternatives
            items={alternativeItems.map(({ decision, exports }) => ({
              slug: decision.slug,
              name: decision.name,
              best: decision.best,
              caveat: decision.caveat,
              demo: decision.demo,
              prompt: exports.prompt,
              install: exports.install,
            }))}
          />

          <DecisionExports spec={docs.spec} rules={docs.rules} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
