import { EyeOffIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'

export function Input04() {
  return (
    <InputGroup>
      <InputGroupInput type="password" placeholder="Enter password" />
      <InputGroupAddon align="inline-end">
        <EyeOffIcon />
      </InputGroupAddon>
    </InputGroup>
  )
}
