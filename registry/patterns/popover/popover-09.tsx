'use client'

import { useState } from 'react'
import { CheckIcon, CopyIcon, Share2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'

const link = 'https://ui.flexnative.com/p/9f4c2'

export function Popover09() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline">
            <Share2Icon data-icon="inline-start" />
            Share
          </Button>
        }
      />
      <PopoverContent align="end" className="w-80">
        <PopoverHeader>
          <PopoverTitle>Share link</PopoverTitle>
          <PopoverDescription>
            Anyone with this link can view the project.
          </PopoverDescription>
        </PopoverHeader>
        <InputGroup>
          <InputGroupInput
            readOnly
            value={link}
            className="font-mono text-xs"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label={copied ? 'Copied' : 'Copy link'}
              size="icon-xs"
              onClick={copy}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </PopoverContent>
    </Popover>
  )
}
