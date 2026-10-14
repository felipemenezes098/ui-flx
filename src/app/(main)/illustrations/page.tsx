import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

import { PageHeader } from '@/components/core/page-header/page-header'
import { PageHeaderDescription } from '@/components/core/page-header/page-header-description'
import { PageHeaderTitle } from '@/components/core/page-header/page-header-title'

import { IllustrationsGallery } from './illustrations-gallery'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Illustrations'
const description =
  'UI illustrations and motion components that make interfaces feel alive, built with shadcn/ui and Motion. Copy and paste.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: '/illustrations',
})

const railClass =
  'pointer-events-none absolute inset-y-0 hidden w-px [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] [background:repeating-linear-gradient(to_bottom,var(--border)_0_5px,transparent_5px_12px)] lg:block'

export default function IllustrationsPage() {
  return (
    <main className="container-page relative min-w-0">
      <div aria-hidden className={`${railClass} left-0`} />
      <div aria-hidden className={`${railClass} right-0`} />

      <div className="container-page-inner">
        <div className="flex flex-col gap-12 px-3 pt-7 pb-10 md:pt-27">
          <PageHeader>
            <PageHeaderTitle>Illustrations</PageHeaderTitle>
            <PageHeaderDescription>
              Elegant UI visuals built with shadcn/ui and Motion.{' '}
              <span className="text-foreground font-medium">
                Copy and paste.
              </span>
            </PageHeaderDescription>
          </PageHeader>

          <IllustrationsGallery />
        </div>
      </div>
    </main>
  )
}
