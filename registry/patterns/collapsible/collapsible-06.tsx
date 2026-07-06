import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronDownIcon } from 'lucide-react'

export function Collapsible06() {
  return (
    <form className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Project name</Label>
        <Input id="name" placeholder="my-app" />
      </div>
      <Collapsible className="space-y-4">
        <CollapsibleTrigger className="group text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm font-medium">
          <ChevronDownIcon className="size-4 transition-transform group-data-panel-open:rotate-180" />
          Advanced options
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 p-1">
          <div className="space-y-2">
            <Label htmlFor="region">Region</Label>
            <Input id="region" placeholder="us-east-1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="branch">Production branch</Label>
            <Input id="branch" placeholder="main" />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </form>
  )
}
