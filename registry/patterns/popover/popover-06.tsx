import { Settings2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Popover06() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Settings2Icon data-icon="inline-start" />
          Dimensions
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="width" className="w-20">
              Width
            </FieldLabel>
            <Input id="width" defaultValue="100%" className="h-8" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="max-width" className="w-20">
              Max width
            </FieldLabel>
            <Input id="max-width" defaultValue="300px" className="h-8" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="height" className="w-20">
              Height
            </FieldLabel>
            <Input id="height" defaultValue="25px" className="h-8" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="max-height" className="w-20">
              Max height
            </FieldLabel>
            <Input id="max-height" defaultValue="none" className="h-8" />
          </Field>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  )
}
