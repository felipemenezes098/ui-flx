import { CopyIcon, GlobeIcon, LinkIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function InviteLinkDecision() {
  return (
    <div className="bg-card flex w-full max-w-sm flex-col gap-4 rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Invite with a link</span>
        <span className="text-muted-foreground text-xs">
          Anyone with the link can join your workspace.
        </span>
      </div>
      <InputGroup>
        <InputGroupAddon>
          <LinkIcon />
        </InputGroupAddon>
        <InputGroupInput readOnly value="acme.com/join/3f9k" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy invite link">
            <CopyIcon data-icon="inline-start" />
            Copy
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <div className="flex items-center gap-2">
        <Select defaultValue="member">
          <SelectTrigger size="sm" className="flex-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="member">Joins as Member</SelectItem>
              <SelectItem value="viewer">Joins as Viewer</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select defaultValue="7d">
          <SelectTrigger size="sm" className="flex-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1d">Expires in 1 day</SelectItem>
              <SelectItem value="7d">Expires in 7 days</SelectItem>
              <SelectItem value="never">Never expires</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
        <GlobeIcon className="size-3.5" />
        Link sharing is on
      </div>
    </div>
  )
}
