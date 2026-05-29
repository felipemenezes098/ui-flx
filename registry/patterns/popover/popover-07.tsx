import { BellIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'

const settings = [
  {
    id: 'product-updates',
    label: 'Product updates',
    description: 'New releases and improvements.',
    defaultChecked: true,
  },
  {
    id: 'weekly-digest',
    label: 'Weekly digest',
    description: 'Summary of activity every Monday.',
    defaultChecked: true,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description: 'Offers, tips, and partnerships.',
    defaultChecked: false,
  },
] as const

export function Popover07() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Notification settings"
        >
          <BellIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Notifications</PopoverTitle>
          <PopoverDescription>
            Choose what you want to hear about.
          </PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          {settings.map((s) => (
            <Field key={s.id} orientation="horizontal">
              <div className="flex flex-1 flex-col gap-0.5">
                <FieldLabel htmlFor={s.id}>{s.label}</FieldLabel>
                <FieldDescription>{s.description}</FieldDescription>
              </div>
              <Switch id={s.id} defaultChecked={s.defaultChecked} />
            </Field>
          ))}
        </FieldGroup>
      </PopoverContent>
    </Popover>
  )
}
