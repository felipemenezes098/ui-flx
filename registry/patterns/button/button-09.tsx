import { ExternalLinkIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button09() {
  return (
    <Button
      variant="link"
      render={
        <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" />
      }
      nativeButton={false}
    >
      Read the docs
      <ExternalLinkIcon data-icon="inline-end" />
    </Button>
  )
}
