import { BarChart3Icon, BellIcon, UserIcon } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Tabs06() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">
          <UserIcon data-icon="inline-start" />
          Account
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <BellIcon data-icon="inline-start" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="analytics">
          <BarChart3Icon data-icon="inline-start" />
          Analytics
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="w-full pt-4">
        <div className="bg-muted/40 flex w-full items-center gap-3 rounded-lg border px-3 py-3">
          <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-medium">
            JD
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Jane Doe</p>
            <p className="text-muted-foreground truncate text-xs">
              jane@acme.co
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="notifications" className="w-full pt-4">
        <ul className="w-full space-y-2">
          <li className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5">
            <span className="text-sm">Product updates</span>
            <span className="bg-primary size-4 rounded-full" aria-hidden />
          </li>
          <li className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5">
            <span className="text-sm">Comments</span>
            <span className="bg-primary size-4 rounded-full" aria-hidden />
          </li>
          <li className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5">
            <span className="text-sm">Marketing</span>
            <span className="bg-muted size-4 rounded-full" aria-hidden />
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="analytics" className="w-full pt-4">
        <dl className="grid w-full grid-cols-2 gap-3">
          <div className="bg-muted/40 rounded-lg border px-3 py-3">
            <dt className="text-muted-foreground text-xs">Views</dt>
            <dd className="text-xl font-semibold tabular-nums">2.4k</dd>
          </div>
          <div className="bg-muted/40 rounded-lg border px-3 py-3">
            <dt className="text-muted-foreground text-xs">Conversion</dt>
            <dd className="text-xl font-semibold tabular-nums">3.8%</dd>
          </div>
        </dl>
      </TabsContent>
    </Tabs>
  )
}
