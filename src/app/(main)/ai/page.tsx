import type { Metadata } from 'next'
import Link from 'next/link'
import type { ComponentType } from 'react'

import {
  CategoryPreviewCard,
  CategoryPreviewCardBadge,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardTitle,
} from '@/components/core/category-preview-card'
import { Footer } from '@/components/core/footer'
import { intentDomains } from '@/lib/intent-catalog'

import { IntentSoonConcept } from './components/intent-soon-concept'

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
  preview: Preview,
  comingSoon,
}: Readonly<{
  name: string
  href?: string
  preview?: ComponentType
  comingSoon?: boolean
}>) {
  const card = (
    <CategoryPreviewCard className={comingSoon ? 'opacity-50' : undefined}>
      <CategoryPreviewCardPreview className="aspect-square">
        {comingSoon ? (
          <>
            <CategoryPreviewCardBadge>Soon</CategoryPreviewCardBadge>
            <IntentSoonConcept />
          </>
        ) : (
          Preview && (
            <div className="pointer-events-none flex size-full items-center justify-center p-6">
              <div className="scale-[0.72]">
                <Preview />
              </div>
            </div>
          )
        )}
      </CategoryPreviewCardPreview>
      <CategoryPreviewCardFooter>
        <CategoryPreviewCardTitle>{name}</CategoryPreviewCardTitle>
      </CategoryPreviewCardFooter>
    </CategoryPreviewCard>
  )

  if (comingSoon || !href) return card

  return (
    <Link href={href} className="group">
      {card}
    </Link>
  )
}

export default function AiPage() {
  return (
    <main className="container-page container-page-inner min-w-0">
      <div className="flex flex-col gap-16 px-3 py-14 md:py-20">
        <section className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Interface Decisions
          </h1>
          <p className="text-muted-foreground max-w-md text-balance">
            Reusable decisions for everyday interfaces.{' '}
            <span className="text-foreground font-medium">
              See the result.
            </span>
          </p>
        </section>

        <div className="flex flex-col gap-20">
          {intentDomains.map((domain) => {
            const available = domain.intents.filter((i) => i.manifest).length

            return (
              <section key={domain.slug} className="flex flex-col gap-6">
                <div className="flex items-baseline justify-between border-b pb-4">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-foreground text-lg font-semibold tracking-tight">
                      {domain.name}
                    </h2>
                    <span className="text-muted-foreground text-sm">
                      {available > 0
                        ? `${available} ${available === 1 ? 'intent' : 'intents'}`
                        : 'Coming soon'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {domain.intents.map((intent) => {
                    const recommended =
                      intent.manifest?.decisions.find((d) => d.recommended) ??
                      intent.manifest?.decisions[0]

                    return (
                      <IntentPreviewCard
                        key={intent.slug}
                        name={intent.name}
                        href={
                          intent.comingSoon
                            ? undefined
                            : `/ai/${intent.slug}`
                        }
                        preview={recommended?.demo}
                        comingSoon={intent.comingSoon}
                      />
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}
