import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function Button24() {
  return (
    <ButtonGroup>
      <Button variant="outline">Draft</Button>
      <Button variant="outline">Review</Button>
      <Button variant="outline" disabled>
        Publish
      </Button>
    </ButtonGroup>
  )
}
