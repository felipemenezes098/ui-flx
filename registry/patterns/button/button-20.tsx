import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'

export function Button20() {
  return (
    <ButtonGroup>
      <ButtonGroupText>Sort by</ButtonGroupText>
      <Button variant="outline">Newest</Button>
      <Button variant="outline">Oldest</Button>
      <Button variant="outline">Popular</Button>
    </ButtonGroup>
  )
}
