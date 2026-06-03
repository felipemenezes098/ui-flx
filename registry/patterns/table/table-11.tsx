'use client'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from 'lucide-react'
import { useState } from 'react'

type Payment = {
  id: string
  customer: string
  email: string
  amount: number
}

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    customer: 'Ken Adams',
    email: 'ken99@example.com',
    amount: 316,
  },
  {
    id: '3u1reuv4',
    customer: 'Abe Lincoln',
    email: 'abe45@example.com',
    amount: 242,
  },
  {
    id: 'derv1ws0',
    customer: 'Monserrat Diaz',
    email: 'mon@example.com',
    amount: 837,
  },
  {
    id: '5kma53ae',
    customer: 'Silas Pena',
    email: 'silas22@example.com',
    amount: 874,
  },
  {
    id: 'bhqecj4p',
    customer: 'Carmella Rau',
    email: 'carmella@example.com',
    amount: 721,
  },
]

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue('customer')}</span>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue('email')}</span>
    ),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      const sorted = column.getIsSorted()
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(sorted === 'asc')}
          >
            Amount
            {sorted === 'asc' && <ArrowUpIcon data-icon="inline-end" />}
            {sorted === 'desc' && <ArrowDownIcon data-icon="inline-end" />}
            {!sorted && <ArrowUpDownIcon data-icon="inline-end" />}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = row.getValue<number>('amount')
      return (
        <div className="text-right font-medium tabular-nums">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(amount)}
        </div>
      )
    },
  },
]

export function Table11() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full max-w-xl">
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
