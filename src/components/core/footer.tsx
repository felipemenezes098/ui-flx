import Link from 'next/link'

import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="my-8">
      <div className="text-muted-foreground mx-auto flex flex-col items-center justify-center gap-1 px-3 text-center text-sm leading-relaxed md:max-w-5xl lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[90rem]">
        <p>
          Built by{' '}
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            {siteConfig.author}
          </Link>
          . The source code is available on{' '}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
