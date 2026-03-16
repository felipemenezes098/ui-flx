import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '@/components/core/footer'
import { Logo } from '@/components/core/logo'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

import { BlockShowcase } from './components/block-showcase'
import { BlocksPreview } from './components/blocks-preview'
import { ButtonGithub } from './components/button-github'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Simple. Beautiful. Your blocks.'
const description = siteConfig.description

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function HomePage() {
  return (
    <main className="mx-auto md:max-w-5xl lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[90rem]">
      <div className="flex flex-col gap-16 px-3 py-8 md:py-16">
        <section>
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 md:gap-2">
                <h1 className="max-w-6xl text-2xl font-bold md:text-4xl">
                  Simple. Beautiful. Your blocks.
                </h1>
                <p className="max-w-2xl text-base md:text-lg">
                  {siteConfig.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button asChild size="sm" className="rounded-xl">
                  <Link href="/blocks">Explore Blocks</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="rounded-xl"
                >
                  <ButtonGithub />
                </Button>
              </div>
            </div>
            <div className="text-muted-foreground flex w-full flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <Logo.ShadcnIcon className="text-muted-foreground h-6 w-auto" />
                <span className="font-medium">Shadcn</span>
              </div>
              <div className="flex items-center gap-2">
                <Logo.TailwindcssIcon className="text-muted-foreground h-4 w-auto" />
                <span className="font-medium">Tailwind</span>
              </div>
              <div className="flex items-center gap-2">
                <Logo.Sanity className="text-muted-foreground h-5 w-auto" />
                <span className="font-medium">Sanity</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <BlockShowcase />
        </section>
        <section className="mt-10 flex flex-col gap-4">
          <h2 className="text-foreground text-center text-2xl font-bold">
            Blocks
          </h2>
          <BlocksPreview />
        </section>
      </div>
      <Footer />
    </main>
  )
}
