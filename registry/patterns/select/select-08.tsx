'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

const users = [
  {
    value: 'sarah',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    initials: 'SC',
  },
  {
    value: 'marcus',
    name: 'Marcus Lee',
    email: 'marcus@example.com',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    initials: 'ML',
  },
  {
    value: 'priya',
    name: 'Priya Patel',
    email: 'priya@example.com',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    initials: 'PP',
  },
]

export function Select08() {
  const [value, setValue] = useState(users[0].value)
  const selected = users.find((user) => user.value === value)

  return (
    <Select value={value} onValueChange={(value) => setValue(value ?? '')}>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="Select a user">
          {selected && (
            <span className="flex items-center gap-2">
              <Avatar size="sm">
                <AvatarImage src={selected.avatar} alt="" />
                <AvatarFallback>{selected.initials}</AvatarFallback>
              </Avatar>
              <span>{selected.name}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {users.map((user) => (
            <SelectItem key={user.value} value={user.value}>
              <Avatar size="sm">
                <AvatarImage src={user.avatar} alt="" />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-muted-foreground text-xs font-normal">
                  {user.email}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
