import { reactHookFormLibrary } from 'registry/forms/react-hook-form/catalog'
import { tanstackFormLibrary } from 'registry/forms/tanstack-form/catalog'

import type { FormLibrary } from '@/lib/patterns/pattern-types'

export const formsLibraries: FormLibrary[] = [
  reactHookFormLibrary,
  tanstackFormLibrary,
]

/** Flat list of every category across all libraries. */
export const formsCategories = formsLibraries.flatMap((lib) => lib.categories)

/** Flat list of every pattern, tagged with its library + category slug. */
export const allFormPatterns = formsLibraries.flatMap((lib) =>
  lib.categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      librarySlug: lib.slug,
      categorySlug: category.slug,
    })),
  ),
)

export function getFormLibraryBySlug(slug: string): FormLibrary | undefined {
  return formsLibraries.find((lib) => lib.slug === slug)
}
