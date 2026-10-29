import { siteConfig } from '@/config/site'

type Breadcrumb = Readonly<{ name: string; path: string }>

const author = {
  '@type': 'Person',
  name: siteConfig.author,
  url: siteConfig.links.twitter,
}

export function getSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    codeRepository: siteConfig.links.github,
    programmingLanguage: ['TypeScript', 'React'],
    keywords: 'shadcn/ui, blocks, landing page, React, Next.js, Tailwind CSS',
    author,
  }
}

export function getBreadcrumbStructuredData(items: readonly Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  }
}
