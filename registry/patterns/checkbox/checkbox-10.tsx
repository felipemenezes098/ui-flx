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

const invoices = [
  { id: 'INV-001', customer: 'Acme Inc.', status: 'Paid', amount: '$1,200.00' },
  { id: 'INV-002', customer: 'Globex', status: 'Pending', amount: '$640.00' },
  { id: 'INV-003', customer: 'Soylent', status: 'Paid', amount: '$320.00' },
  { id: 'INV-004', customer: 'Initech', status: 'Overdue', amount: '$980.00' },
]

export function Checkbox10() {
  const [selected, setSelected] = useState<string[]>(['INV-002'])

  const allChecked = selected.length === invoices.length
  const someChecked = selected.length > 0 && !allChecked

  const toggleAll = (next: boolean) =>
    setSelected(next ? invoices.map((invoice) => invoice.id) : [])

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
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            const isSelected = selected.includes(invoice.id)
            return (
              <TableRow
                key={invoice.id}
                data-state={isSelected ? 'selected' : undefined}
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${invoice.id}`}
                    checked={isSelected}
                    onCheckedChange={() => toggleRow(invoice.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell className="text-muted-foreground">
                  {invoice.status}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {invoice.amount}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <p className="text-muted-foreground mt-3 text-sm">
        {selected.length} of {invoices.length} row(s) selected.
      </p>
    </div>
  )
}
