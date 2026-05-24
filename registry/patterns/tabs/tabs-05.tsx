import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs05() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md items-center">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="reports" disabled>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-muted-foreground pt-2">
        Snapshot of your workspace.
      </TabsContent>
      <TabsContent value="activity" className="text-muted-foreground pt-2">
        Latest events across your team.
      </TabsContent>
      <TabsContent value="reports" className="text-muted-foreground pt-2">
        Reports unavailable on the current plan.
      </TabsContent>
    </Tabs>
  )
}
