'use client'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useState } from 'react'

const people = [
  { id: 'u1', name: 'Ava Carter', email: 'ava@example.com', role: 'Designer' },
  { id: 'u2', name: 'Ben Lopez', email: 'ben@example.com', role: 'Engineer' },
  { id: 'u3', name: 'Cara Diaz', email: 'cara@example.com', role: 'Manager' },
  { id: 'u4', name: 'Dan Wells', email: 'dan@example.com', role: 'Engineer' },
]

export function Table07() {
  const [selected, setSelected] = useState<string[]>(['u2'])

  const allChecked = selected.length === people.length
  const someChecked = selected.length > 0 && !allChecked

  const toggleAll = (next: boolean) =>
    setSelected(next ? people.map((person) => person.id) : [])

  const toggleRow = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id],
    )

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                aria-label="Select all"
                checked={
                  allChecked ? true : someChecked ? 'indeterminate' : false
                }
                onCheckedChange={(value) => toggleAll(value === true)}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {people.map((person) => {
            const isSelected = selected.includes(person.id)
            return (
              <TableRow
                key={person.id}
                data-state={isSelected ? 'selected' : undefined}
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${person.name}`}
                    checked={isSelected}
                    onCheckedChange={() => toggleRow(person.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {person.email}
                </TableCell>
                <TableCell className="text-right">{person.role}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <p className="text-muted-foreground mt-3 text-sm">
        {selected.length} of {people.length} row(s) selected.
      </p>
    </div>
  )
}
