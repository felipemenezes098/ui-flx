'use client'

import { useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type Channel = 'email' | 'push' | 'sms'

type Row = {
  id: string
  label: string
  hint: string
  channels: Record<Channel, boolean>
}

const INITIAL: Row[] = [
  {
    id: 'security',
    label: 'Security alerts',
    hint: 'New sign-ins and password changes',
    channels: { email: true, push: true, sms: true },
  },
  {
    id: 'mentions',
    label: 'Mentions and replies',
    hint: 'When someone tags you',
    channels: { email: true, push: true, sms: false },
  },
  {
    id: 'billing',
    label: 'Billing and receipts',
    hint: 'Invoices and payment issues',
    channels: { email: true, push: false, sms: false },
  },
  {
    id: 'product',
    label: 'Product updates',
    hint: 'New features and announcements',
    channels: { email: false, push: false, sms: false },
  },
]

const CHANNELS: { key: Channel; label: string }[] = [
  { key: 'email', label: 'Email' },
  { key: 'push', label: 'Push' },
  { key: 'sms', label: 'SMS' },
]

export function Notifications1() {
  const [rows, setRows] = useState<Row[]>(INITIAL)

  const toggle = (id: string, channel: Channel) =>
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              channels: {
                ...row.channels,
                [channel]: !row.channels[channel],
              },
            }
          : row,
      ),
    )

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Notification channels</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Notification</TableHead>
              {CHANNELS.map((channel) => (
                <TableHead key={channel.key} className="text-center">
                  {channel.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{row.label}</span>
                    <span className="text-muted-foreground text-xs">
                      {row.hint}
                    </span>
                  </div>
                </TableCell>
                {CHANNELS.map((channel) => (
                  <TableCell key={channel.key} className="text-center">
                    <Switch
                      checked={row.channels[channel.key]}
                      onCheckedChange={() => toggle(row.id, channel.key)}
                      aria-label={`${row.label} via ${channel.label}`}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
