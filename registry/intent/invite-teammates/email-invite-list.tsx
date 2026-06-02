import { SendIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

const pending = [
  { email: 'sofia@acme.com', initials: 'SR', role: 'admin' },
  { email: 'liam@acme.com', initials: 'LC', role: 'member' },
  { email: 'ana@acme.com', initials: 'AM', role: 'member' },
]

function RoleSelect({ defaultValue }: { defaultValue: string }) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger size="sm" className="max-w-28 flex-1">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="member">Member</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function EmailInviteListDecision() {
  return (
    <div className="bg-card flex w-full max-w-sm flex-col gap-4 rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Invite teammates</span>
        <span className="text-muted-foreground text-xs">
          They&apos;ll get an email to join Acme.
        </span>
      </div>
      <div className="flex gap-2">
        <Input placeholder="name@company.com" className="flex-1" />
        <Button>
          <SendIcon data-icon="inline-start" />
          Invite
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-2.5">
        {pending.map((p) => (
          <div key={p.email} className="flex items-center gap-2.5">
            <Avatar className="size-7">
              <AvatarFallback className="text-xs">{p.initials}</AvatarFallback>
            </Avatar>
            <span className="flex-1 truncate text-sm">{p.email}</span>
            <RoleSelect defaultValue={p.role} />
          </div>
        ))}
      </div>
      <Button className="w-full">Send 3 invites</Button>
    </div>
  )
}
