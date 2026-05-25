import { siteConfig } from '@/config/site'

import { GitHubButton } from './github-button'
import { ExploreButton } from './explore-button'
import { NewsBanner } from './news-banner'

export function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <NewsBanner />

      <div className="flex flex-col items-center gap-4">
        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {siteConfig.title}
        </h1>
        <p className="text-muted-foreground max-w-xl text-base">
          {siteConfig.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <ExploreButton />
        <GitHubButton />
      </div>
    </div>
  )
}
