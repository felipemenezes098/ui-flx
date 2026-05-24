import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function Button22() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Previous page">
        <ChevronLeftIcon />
      </Button>
      <Button variant="outline">1</Button>
      <Button variant="outline" aria-current="page">
        2
      </Button>
      <Button variant="outline">3</Button>
      <Button variant="outline">4</Button>
      <Button variant="outline" size="icon" aria-label="Next page">
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  )
}
