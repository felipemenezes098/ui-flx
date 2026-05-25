import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function Button17() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Profile</Button>
      <Button variant="outline">Billing</Button>
      <Button variant="outline">Team</Button>
      <Button variant="outline">Settings</Button>
    </ButtonGroup>
  )
}
