import { ExternalLinkIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button09() {
  return (
    <Button asChild variant="link">
      <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
        Read the docs
        <ExternalLinkIcon data-icon="inline-end" />
      </a>
    </Button>
  )
}
