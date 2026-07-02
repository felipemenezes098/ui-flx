'use client'

import { compositionRegistry } from '@/app/(main)/compositions/components/composition-registry'
import { PatternRenderer } from '@/components/core/patterns/pattern-renderer'

/**
 * Full-bleed composition render for the preview iframe. Compositions are whole
 * screens, so no centering/padding — the component owns the viewport.
 */
export function CompositionPreview({ slug }: Readonly<{ slug: string }>) {
  return (
    <div data-composition-preview className="min-h-screen w-full">
      <PatternRenderer name={slug} registry={compositionRegistry} />
    </div>
  )
}
