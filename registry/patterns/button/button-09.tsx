import { ExternalLinkIcon } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Button09() {
  return (
    <a
      href="https://ui.shadcn.com"
      target="_blank"
      rel="noreferrer"
      className={cn(buttonVariants({ variant: 'link' }))}
    >
      Read the docs
      <ExternalLinkIcon data-icon="inline-end" />
    </a>
  )
}
