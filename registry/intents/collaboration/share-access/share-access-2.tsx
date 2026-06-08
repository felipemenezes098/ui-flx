'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Person = {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  owner?: boolean
}

const INITIAL: Person[] = [
  {
    id: 'ada',
    name: 'Ada Lovelace',
    email: 'ada@acme.com',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces',
    role: 'owner',
    owner: true,
  },
  {
    id: 'grace',
    name: 'Grace Hopper',
    email: 'grace@acme.com',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces',
    role: 'editor',
  },
  {
    id: 'alan',
    name: 'Alan Turing',
    email: 'alan@acme.com',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces',
    role: 'viewer',
  },
]

export function ShareAccess2() {
  const [people, setPeople] = useState<Person[]>(INITIAL)
  const [email, setEmail] = useState('')
  const [inviteRole, setInviteRole] = useState('viewer')

  const invite = () => {
    const value = email.trim()
    if (!value) return
    const name = value.split('@')[0].replace(/[._]/g, ' ')
    setPeople((prev) => [
      ...prev,
      {
        id: value,
        name: name.replace(/\b\w/g, (c) => c.toUpperCase()),
        email: value,
        avatar: '',
        role: inviteRole,
      },
    ])
    setEmail('')
  }

  const setRole = (id: string, role: string) =>
    role === 'remove'
      ? setPeople((prev) => prev.filter((p) => p.id !== id))
      : setPeople((prev) => prev.map((p) => (p.id === id ? { ...p, role } : p)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share with people</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Input
            type="email"
            placeholder="Add by email"
            className="min-w-[12rem] flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && invite()}
          />
          <div className="flex gap-2">
            <Select value={inviteRole} onValueChange={setInviteRole}>
              <SelectTrigger className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button size="icon" onClick={invite} aria-label="Invite">
              <Plus className="size-4" />
            </Button>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-3">
          {people.map((person) => (
            <div key={person.id} className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback className="bg-muted text-xs">
                  {person.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm font-medium">
                  {person.name}
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  {person.email}
                </span>
              </div>
              {person.owner ? (
                <span className="text-muted-foreground text-xs">Owner</span>
              ) : (
                <Select
                  value={person.role}
                  onValueChange={(v) => setRole(person.id, v)}
                >
                  <SelectTrigger size="sm" className="w-28 shrink-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="remove" className="text-destructive">
                        Remove
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
