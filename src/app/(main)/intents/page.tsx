import type { Metadata } from 'next'
import type { ComponentType } from 'react'

import {
  ConceptGalleryCard,
  ConceptGalleryCardFooter,
  ConceptGalleryCardMedia,
  ConceptGalleryCardTitle,
} from '@/components/core/gallery/concept-gallery-card'
import { GalleryGridLink, GalleryGridUniform } from '@/components/core/gallery/gallery-grid'
import { Footer } from '@/components/core/footer'
import { intentDomains } from '@/lib/intents/intent-catalog'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'AI'
const description =
  'Interface decisions as code. Start from the problem, reach the decision, see the result.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: 'summary_large_image', title, description },
}

function IntentPreviewCard({
  name,
  href,
  concept: Concept,
  comingSoon,
}: Readonly<{
  name: string
  href?: string
  concept?: ComponentType
  comingSoon?: boolean
}>) {
  const card = (
    <ConceptGalleryCard className={comingSoon ? 'opacity-50' : undefined}>
      <ConceptGalleryCardMedia className="aspect-square">
        {Concept && <Concept />}
      </ConceptGalleryCardMedia>
      <ConceptGalleryCardFooter>
        <ConceptGalleryCardTitle>{name}</ConceptGalleryCardTitle>
      </ConceptGalleryCardFooter>
    </ConceptGalleryCard>
  )

  if (comingSoon || !href) return card

  return <GalleryGridLink href={href}>{card}</GalleryGridLink>
}

export default function AiPage() {
  return (
    <main className="container-page container-page-inner min-w-0">
      <div className="flex flex-col gap-16 px-3 py-14 md:py-20">
        <section className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Interface Decisions
          </h1>
          <p className="text-muted-foreground max-w-md text-balance">
            From prompt to decision for everyday interfaces. The reasoning and
            the code.{' '}
            <span className="text-foreground font-medium">See it work.</span>
          </p>
        </section>

        <div className="flex flex-col gap-20">
          {intentDomains
            .toSorted((a, b) => a.name.localeCompare(b.name))
            .map((domain) => {
              const available = domain.intents.filter((i) => i.manifest).length

              return (
                <section key={domain.slug} className="flex flex-col gap-6">
                  <div className="flex items-baseline justify-between border-b pb-4">
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-foreground text-lg font-semibold tracking-tight">
                        {domain.name}
                      </h2>
                      <span className="text-muted-foreground text-sm">
                        {available > 0 &&
                          `${available} ${available === 1 ? 'intent' : 'intents'}`}
                      </span>
                    </div>
                  </div>
                  <GalleryGridUniform>
                    {domain.intents.map((intent) => (
                      <IntentPreviewCard
                        key={intent.slug}
                        name={intent.name}
                        href={`/intents/${intent.slug}`}
                        concept={intent.manifest?.concept}
                        comingSoon={intent.comingSoon}
                      />
                    ))}
                  </GalleryGridUniform>
                </section>
              )
            })}
        </div>
      </div>
      <Footer />
    </main>
  )
}
