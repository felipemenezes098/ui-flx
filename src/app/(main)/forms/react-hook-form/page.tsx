import type { Metadata } from 'next'

import { getFormLibraryBySlug } from '@/lib/forms/catalog'

import { FormsGallery } from '../components/forms-gallery'

export const dynamic = 'force-static'
export const revalidate = false

const library = getFormLibraryBySlug('react-hook-form')!
const title = library.name
const description = library.description

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: 'summary_large_image', title, description },
}

export default function ReactHookFormPage() {
  return <FormsGallery librarySlug="react-hook-form" />
}
