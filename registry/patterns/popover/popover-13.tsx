import { FilterIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function Popover13() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <FilterIcon data-icon="inline-start" />
          Filters
          <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
            3
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80">
        <PopoverHeader>
          <PopoverTitle>Filters</PopoverTitle>
          <PopoverDescription>
            Narrow results by status and priority.
          </PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel>Status</FieldLabel>
            <ToggleGroup
              multiple
              defaultValue={['open', 'in-progress']}
              variant="outline"
              size="sm"
              className="justify-start"
            >
              <ToggleGroupItem value="open">Open</ToggleGroupItem>
              <ToggleGroupItem value="in-progress">In progress</ToggleGroupItem>
              <ToggleGroupItem value="done">Done</ToggleGroupItem>
            </ToggleGroup>
          </Field>
          <Field>
            <FieldLabel>Priority</FieldLabel>
            <ToggleGroup
              multiple
              defaultValue={['high']}
              variant="outline"
              size="sm"
              className="justify-start"
            >
              <ToggleGroupItem value="low">Low</ToggleGroupItem>
              <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
              <ToggleGroupItem value="high">High</ToggleGroupItem>
              <ToggleGroupItem value="urgent">Urgent</ToggleGroupItem>
            </ToggleGroup>
          </Field>
        </FieldGroup>
        <Separator />
        <div className="flex justify-between gap-2">
          <Button variant="ghost" size="sm">
            Reset
          </Button>
          <Button size="sm">Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
