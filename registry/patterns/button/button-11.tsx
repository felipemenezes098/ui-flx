import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button11() {
  return (
    <Button className="group/cta">
      Get started
      <ArrowRightIcon
        data-icon="inline-end"
        className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
      />
    </Button>
  )
}
