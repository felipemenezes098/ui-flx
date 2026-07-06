import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronsUpDownIcon } from 'lucide-react'

const repos = ['@radix-ui/primitives', '@radix-ui/colors', '@stitches/react']

export function Collapsible01() {
  return (
    <Collapsible defaultOpen className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between gap-4 px-1">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Toggle repos">
              <ChevronsUpDownIcon />
            </Button>
          }
        />
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">
        {repos[0]}
      </div>
      <CollapsibleContent className="space-y-2">
        {repos.slice(1).map((repo) => (
          <div
            key={repo}
            className="rounded-md border px-4 py-2 font-mono text-sm"
          >
            {repo}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
