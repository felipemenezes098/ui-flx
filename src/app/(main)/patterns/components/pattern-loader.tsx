'use client'

import dynamic from 'next/dynamic'

const components: Record<string, React.ComponentType> = {
  'select-01': dynamic(() => import('registry/patterns/select/select-01')),
  'select-02': dynamic(() => import('registry/patterns/select/select-02')),
  'dialog-01': dynamic(() => import('registry/patterns/dialog/dialog-01')),
  'dialog-02': dynamic(() => import('registry/patterns/dialog/dialog-02')),
  'dialog-03': dynamic(() => import('registry/patterns/dialog/dialog-03')),
  'inputs-01': dynamic(() => import('registry/patterns/inputs/inputs-01')),
  'inputs-02': dynamic(() => import('registry/patterns/inputs/inputs-02')),
  'accordion-01': dynamic(
    () => import('registry/patterns/accordion/accordion-01'),
  ),
  'accordion-02': dynamic(
    () => import('registry/patterns/accordion/accordion-02'),
  ),
}

export function PatternLoader({ name }: { name: string }) {
  const Component = components[name]
  if (!Component) return null
  return <Component />
}
