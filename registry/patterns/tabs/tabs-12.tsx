import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs12() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Workspace</CardTitle>
        <CardDescription>Switch between views.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="overview" className="gap-0">
          <TabsList variant="line" className="mx-6 w-[calc(100%-3rem)]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <Separator />
          <div className="px-6 py-6">
            <TabsContent value="overview" className="mt-0 space-y-6">
              <dl className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <dt className="text-muted-foreground text-xs">Projects</dt>
                  <dd className="text-2xl font-semibold tabular-nums">12</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-muted-foreground text-xs">Members</dt>
                  <dd className="text-2xl font-semibold tabular-nums">4</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-muted-foreground text-xs">Storage</dt>
                  <dd className="text-2xl font-semibold tabular-nums">87%</dd>
                </div>
              </dl>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You are on track this month. Storage is nearing capacity —
                consider upgrading before the next billing cycle.
              </p>
            </TabsContent>
            <TabsContent value="members" className="mt-0 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                      AR
                    </span>
                    <span className="text-sm font-medium">Alex Rivera</span>
                  </div>
                  <span className="text-muted-foreground text-xs">Owner</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                      JL
                    </span>
                    <span className="text-sm font-medium">Jordan Lee</span>
                  </div>
                  <span className="text-muted-foreground text-xs">Admin</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                      SC
                    </span>
                    <span className="text-sm font-medium">Sam Chen</span>
                  </div>
                  <span className="text-muted-foreground text-xs">Editor</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm">
                Invite teammates or adjust roles from settings.
              </p>
            </TabsContent>
            <TabsContent value="billing" className="mt-0 space-y-4">
              <div className="bg-muted/50 flex items-baseline justify-between rounded-lg border px-4 py-3">
                <div>
                  <p className="text-sm font-medium">Pro plan</p>
                  <p className="text-muted-foreground text-xs">
                    Billed annually
                  </p>
                </div>
                <p className="text-lg font-semibold tabular-nums">$115/yr</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Renews on July 12. Update payment method or switch plans
                anytime.
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
