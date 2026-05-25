import { ArrowUpIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'

export function Input17() {
  return (
    <ButtonGroup className="max-w-md">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Add attachment">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup className="min-w-0 flex-1">
        <InputGroup className="w-full">
          <InputGroupInput placeholder="Send a message..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-label="Send message" size="icon-xs">
              <ArrowUpIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
