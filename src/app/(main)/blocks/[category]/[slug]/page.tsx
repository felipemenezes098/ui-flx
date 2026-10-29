import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { JsonLd } from '@/components/core/json-ld'
import { PageHeader } from '@/components/core/page-header/page-header'
import { PageHeaderDescription } from '@/components/core/page-header/page-header-description'
import { PageHeaderTitle } from '@/components/core/page-header/page-header-title'
import { categories } from '@/lib/blocks/block-catalog'
import { createPageMetadata } from '@/lib/metadata'
import { toRegistryCodeFiles } from '@/lib/registry-source'
import { getRegistryItem } from '@/lib/registry-utils.server'
import { getBreadcrumbStructuredData } from '@/lib/structured-data'

import { BlockCopyPromptButton } from '../../components/block-copy-prompt-button'
import { BlockBreadcrumb } from './components/block-breadcrumb'
import { BlockCode } from './components/block-code'
import { BlockFullscreenButton } from './components/block-fullscreen-button'
import { BlockInstallButton } from './components/block-install-button'
import { BlockLivePreview } from './components/block-live-preview'

export const dynamicParams = false

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.blocks.map((block) => ({
      category: category.slug,
      slug: block.slug,
    })),
  )
}

function findBlock(category: string, slug: string) {
  const cat = categories.find((c) => c.slug === category)
  const manifest = cat?.blocks.find((b) => b.slug === slug)
  return cat && manifest ? { cat, manifest } : undefined
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { category, slug } = await params
  const found = findBlock(category, slug)
  if (!found) return {}

  // "Hero 02" alone is not something people search for, so name the
  // category and the stack in the title.
  const title = `${found.manifest.name}: ${found.cat.category} block for shadcn/ui`
  const description = `${found.manifest.description} Copy and paste, or install with the shadcn CLI.`

  return createPageMetadata({
    title,
    description,
    path: `/blocks/${category}/${slug}`,
    imageTitle: found.manifest.name,
    type: 'article',
  })
}

export default async function BlockPage({ params }: Readonly<Props>) {
  const { category, slug } = await params
  const found = findBlock(category, slug)
  if (!found) notFound()

  const { manifest } = found
  const files = toRegistryCodeFiles(getRegistryItem(slug))
  const height = manifest.meta?.iframeHeight ?? 800
  const previewSrc = `/preview/blocks/${category}/${slug}`

  return (
    <main className="min-w-0 px-5 pt-12 pb-8 md:px-12 md:pt-32">
      <JsonLd
        data={getBreadcrumbStructuredData([
          { name: 'Blocks', path: '/blocks' },
          { name: found.cat.category, path: `/blocks/${category}` },
          { name: manifest.name, path: `/blocks/${category}/${slug}` },
        ])}
      />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">
        <div className="mx-auto w-full max-w-[880px]">
          <PageHeader>
            <BlockBreadcrumb
              category={category}
              title={manifest.name}
              className="mb-6"
            />
            <PageHeaderTitle>{manifest.name}</PageHeaderTitle>
            <PageHeaderDescription>
              {manifest.description}
            </PageHeaderDescription>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <BlockCopyPromptButton slug={slug} />
              <BlockFullscreenButton src={previewSrc} />
              <BlockInstallButton slug={slug} />
            </div>
          </PageHeader>
        </div>
        <BlockLivePreview
          src={previewSrc}
          title={manifest.name}
          height={height}
        />
        <div className="mx-auto w-full max-w-[880px]">
          <BlockCode files={files} />
        </div>
      </div>
    </main>
  )
}
