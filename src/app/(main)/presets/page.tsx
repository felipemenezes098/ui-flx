import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'
import { PresetsPageContent } from '@/app/(main)/presets/components/presets-page-content'
import { loadPresetCss } from '@/app/(main)/presets/lib/load-preset-css'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Presets'
const description =
  'Visual atmospheres on top of your theme — same surfaces, four inherited token sets.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function PresetsPage() {
  const cssByPreset = loadPresetCss()

  return (
    <main className="container-page container-page-inner pb-0!">
      <div className="flex flex-col gap-16 px-3 py-8 md:gap-24 md:py-14">
        <PresetsPageContent cssByPreset={cssByPreset} />
      </div>
      <Footer />
    </main>
  )
}
