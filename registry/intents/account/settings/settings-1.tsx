import { Bell, CreditCard, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Settings1() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <p className="text-muted-foreground text-sm">
          Manage your profile, notifications, and billing.
        </p>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="profile" className="w-full">
          <div className="no-scrollbar mb-6 min-w-0 overflow-x-auto overflow-y-hidden">
            <TabsList>
              <TabsTrigger value="profile">
                <User className="size-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="size-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="billing">
                <CreditCard className="size-4" />
                Billing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile" className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-14">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces"
                  alt="Ada Lovelace"
                />
                <AvatarFallback className="bg-muted">AL</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Change photo
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="as-name">Full name</Label>
                <Input id="as-name" defaultValue="Ada Lovelace" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="as-email">Email</Label>
                <Input id="as-email" type="email" defaultValue="ada@acme.com" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="as-tz">Timezone</Label>
              <Select defaultValue="lon">
                <SelectTrigger id="as-tz" className="w-full sm:w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Americas</SelectLabel>
                    <SelectItem value="nyc">New York (GMT-5)</SelectItem>
                    <SelectItem value="sao">Sao Paulo (GMT-3)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="lon">London (GMT+0)</SelectItem>
                    <SelectItem value="ber">Berlin (GMT+1)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="tok">Tokyo (GMT+9)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost">Cancel</Button>
              <Button>Save changes</Button>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">Product updates</span>
                <span className="text-muted-foreground text-xs">
                  News about features and releases.
                </span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">Weekly digest</span>
                <span className="text-muted-foreground text-xs">
                  A summary of activity every Monday.
                </span>
              </div>
              <Switch />
            </div>
          </TabsContent>

          <TabsContent value="billing" className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">Pro plan</span>
                <span className="text-muted-foreground text-xs">
                  $29 per month, renews June 30.
                </span>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
