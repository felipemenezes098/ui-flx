'use client'

import type { CSSProperties } from 'react'
import { Bell, CreditCard, Lock, Plug, User, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { Switch } from '@/components/ui/switch'

const nav = [
  { icon: User, label: 'Profile', active: true },
  { icon: Lock, label: 'Security' },
  { icon: Bell, label: 'Notifications' },
  { icon: CreditCard, label: 'Billing' },
  { icon: Users, label: 'Team' },
  { icon: Plug, label: 'Integrations' },
]

export function Settings2() {
  return (
    <Card className="p-0">
      <SidebarProvider
        className="h-[420px] min-h-0"
        style={{ '--sidebar-width': '13rem' } as CSSProperties}
      >
        <Sidebar collapsible="none" className="hidden border-r sm:flex">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="bg-primary/15 text-primary flex size-7 items-center justify-center rounded-md text-xs font-semibold">
                AL
              </div>
              <span className="text-sm font-medium">Acme Inc</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarMenu>
                {nav.map(({ icon: Icon, label, active }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton isActive={active}>
                      <Icon />
                      {label}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex flex-1 flex-col gap-6 overflow-auto p-6">
          <div>
            <h3 className="text-base font-semibold">Profile</h3>
            <p className="text-muted-foreground text-sm">
              Update how others see you across the workspace.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sl-name">Full name</Label>
              <Input id="sl-name" defaultValue="Ada Lovelace" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sl-role">Role</Label>
              <Input id="sl-role" defaultValue="Engineering Lead" />
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">Show online status</span>
              <span className="text-muted-foreground text-xs">
                Let teammates see when you are active.
              </span>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex justify-end">
            <Button>Save changes</Button>
          </div>
        </main>
      </SidebarProvider>
    </Card>
  )
}
