import { ArrowDownUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Button26() {
  return (
    <ButtonGroup>
      <Select defaultValue="newest">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="popular">Most popular</SelectItem>
            <SelectItem value="price-asc">Price: low to high</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant="outline" aria-label="Toggle sort direction">
        <ArrowDownUpIcon />
      </Button>
    </ButtonGroup>
  )
}
