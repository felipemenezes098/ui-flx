import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function Button18() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Bold">
        <BoldIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <ItalicIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <UnderlineIcon />
      </Button>
    </ButtonGroup>
  )
}
