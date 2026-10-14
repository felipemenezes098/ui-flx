import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

import { getFormLibraryBySlug } from '@/lib/forms/catalog'

import { FormsGallery } from '../components/forms-gallery'

export const dynamic = 'force-static'
export const revalidate = false

const library = getFormLibraryBySlug('react-hook-form')!
const title = library.name
const description = library.description

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: '/forms/react-hook-form',
})

export default function ReactHookFormPage() {
  return <FormsGallery librarySlug="react-hook-form" />
}
