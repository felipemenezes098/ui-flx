import { GlobeIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select16() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-56">
        <span className="flex min-w-0 flex-1 items-center gap-2">
          <GlobeIcon className="text-muted-foreground size-4 shrink-0" />
          <SelectValue placeholder="Select a language" />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
