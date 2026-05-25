import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs02() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md items-center">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-muted-foreground pt-4">
        Snapshot of your workspace.
      </TabsContent>
      <TabsContent value="activity" className="text-muted-foreground pt-4">
        Latest events across your team.
      </TabsContent>
      <TabsContent value="reports" className="text-muted-foreground pt-4">
        Generated reports and exports.
      </TabsContent>
    </Tabs>
  )
}
