import { Badge } from '@/components/ui/badge'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs07() {
  return (
    <Tabs defaultValue="inbox" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="inbox">
          Inbox
          <Badge variant="secondary">12</Badge>
        </TabsTrigger>
        <TabsTrigger value="drafts">
          Drafts
          <Badge variant="secondary">3</Badge>
        </TabsTrigger>
        <TabsTrigger value="archive">Archive</TabsTrigger>
      </TabsList>
      <TabsContent value="inbox" className="w-full pt-4">
        <ul className="divide-border/60 w-full divide-y rounded-lg border">
          <li className="flex items-center gap-3 px-3 py-2.5 first:rounded-t-lg">
            <span className="bg-primary size-2 shrink-0 rounded-full" aria-hidden />
            <span className="truncate text-sm font-medium">
              Q2 roadmap review
            </span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2.5">
            <span className="bg-primary size-2 shrink-0 rounded-full" aria-hidden />
            <span className="truncate text-sm font-medium">
              Design system handoff
            </span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2.5 last:rounded-b-lg">
            <span className="size-2 shrink-0 rounded-full" aria-hidden />
            <span className="text-muted-foreground truncate text-sm">
              Invoice #1042
            </span>
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="drafts" className="w-full pt-4">
        <ul className="w-full space-y-2">
          <li className="text-muted-foreground rounded-lg border border-dashed px-3 py-2.5 text-sm">
            Weekly update
          </li>
          <li className="text-muted-foreground rounded-lg border border-dashed px-3 py-2.5 text-sm">
            Partnership intro
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="archive" className="w-full pt-4">
        <div className="text-muted-foreground w-full rounded-lg border border-dashed px-4 py-8">
          <p className="text-sm font-medium text-foreground">All caught up</p>
          <p className="text-xs">Archived threads appear here.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
