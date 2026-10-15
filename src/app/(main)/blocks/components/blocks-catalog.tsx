import { Suspense } from 'react'

import { GithubStarButton } from '@/components/core/github-star-button'
import { PageHeader } from '@/components/core/page-header/page-header'
import { PageHeaderDescription } from '@/components/core/page-header/page-header-description'
import { PageHeaderTitle } from '@/components/core/page-header/page-header-title'

import { Blocks } from './blocks'
import { BlocksFallback } from './blocks-fallback'
import { BlocksLayoutToggle } from './blocks-layout-toggle'

export function BlocksCatalog({
  title,
  description,
}: Readonly<{
  title: string
  description: string
}>) {
  return (
    <main className="min-w-0 px-5 pt-12 pb-8 md:px-12 md:pt-32">
      <div className="mx-auto flex w-full max-w-[880px] flex-col gap-4 md:gap-12">
        <div className="flex w-full flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <PageHeader>
            <PageHeaderTitle>{title}</PageHeaderTitle>
            <PageHeaderDescription>{description}</PageHeaderDescription>
            <div className="mt-3 hidden md:block">
              <BlocksLayoutToggle />
            </div>
          </PageHeader>
          <GithubStarButton className="shrink-0" />
        </div>
        <Suspense fallback={<BlocksFallback />}>
          <Blocks />
        </Suspense>
      </div>
    </main>
  )
}
