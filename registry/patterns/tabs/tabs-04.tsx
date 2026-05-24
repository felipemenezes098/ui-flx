import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs04() {
  return (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="w-full max-w-md"
    >
      <TabsList variant="line">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="text-muted-foreground px-4">
        Update your personal details and avatar.
      </TabsContent>
      <TabsContent value="billing" className="text-muted-foreground px-4">
        Manage invoices and payment methods.
      </TabsContent>
      <TabsContent value="team" className="text-muted-foreground px-4">
        Invite members and assign roles.
      </TabsContent>
      <TabsContent value="security" className="text-muted-foreground px-4">
        Configure two-factor authentication.
      </TabsContent>
    </Tabs>
  )
}
