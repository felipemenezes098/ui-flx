import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

import { OgImage } from '@/components/core/og/og-image'
import { siteConfig } from '@/config/site'

const fontWeights = [400, 500, 600] as const

function loadFonts() {
  return Promise.all(
    fontWeights.map(async (weight) => ({
      name: 'Inter',
      data: await readFile(
        join(process.cwd(), `assets/fonts/inter-latin-${weight}-normal.woff`),
      ),
      weight,
      style: 'normal' as const,
    })),
  )
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? siteConfig.title
  const description = searchParams.get('description') ?? siteConfig.description
  const fonts = await loadFonts()

  return new ImageResponse(
    <OgImage title={title} description={description} />,
    {
      width: 1200,
      height: 630,
      fonts,
    },
  )
}
