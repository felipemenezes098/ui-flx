import { Badge } from '@/components/ui/badge'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs14() {
  return (
    <Tabs defaultValue="yearly" className="w-full max-w-sm items-center gap-6">
      <TabsList className="w-full">
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">
          Yearly
          <Badge variant="secondary">−20%</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="monthly" className="text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-semibold">$12</span>
          <span className="text-muted-foreground text-sm">/ month</span>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">
          Billed monthly. Cancel anytime.
        </p>
      </TabsContent>
      <TabsContent value="yearly" className="text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-semibold">$115</span>
          <span className="text-muted-foreground text-sm">/ year</span>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">
          Two months free vs monthly billing.
        </p>
      </TabsContent>
    </Tabs>
  )
}
