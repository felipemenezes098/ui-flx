import type { MetadataRoute } from 'next'

import { getSitemapEntries } from '@/lib/sitemap-urls'

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries()
}
