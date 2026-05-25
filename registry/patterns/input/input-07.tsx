import { useState } from 'react'
import { XIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'

export function Input07() {
  const [value, setValue] = useState('')

  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput
        placeholder="Search..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {value.length > 0 && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Clear"
            size="icon-xs"
            onClick={() => setValue('')}
          >
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}
