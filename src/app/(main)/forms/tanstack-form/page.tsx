import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

import { getFormLibraryBySlug } from '@/lib/forms/catalog'

import { FormsGallery } from '../components/forms-gallery'

export const dynamic = 'force-static'
export const revalidate = false

const library = getFormLibraryBySlug('tanstack-form')!
const title = library.name
const description = library.description

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: '/forms/tanstack-form',
})

export default function TanstackFormPage() {
  return <FormsGallery librarySlug="tanstack-form" />
}
