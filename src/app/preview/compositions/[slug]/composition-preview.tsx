'use client'

import { compositionRegistry } from '@/lib/compositions/composition-registry'
import { cn } from '@/lib/utils'

/**
 * Full-bleed composition render for the preview iframe. Compositions are whole
 * screens, so no centering/padding — the component owns the viewport.
 */
export function CompositionPreview({
  slug,
  containerClassName,
}: Readonly<{ slug: string; containerClassName?: string }>) {
  const Composition = compositionRegistry[slug]
  if (!Composition) return null

  return (
    <div
      data-composition-preview
      className={cn('min-h-screen w-full', containerClassName)}
    >
      <Composition />
    </div>
  )
}
