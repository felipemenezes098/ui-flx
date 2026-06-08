'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

type Invoice = {
  id: string
  customer: string
  status: 'paid' | 'pending' | 'overdue'
  amount: string
}

const data: Invoice[] = [
  { id: 'INV-001', customer: 'Acme Inc.', status: 'paid', amount: '$1,200.00' },
  { id: 'INV-002', customer: 'Globex', status: 'pending', amount: '$640.00' },
  { id: 'INV-003', customer: 'Soylent', status: 'paid', amount: '$320.00' },
  { id: 'INV-004', customer: 'Initech', status: 'overdue', amount: '$980.00' },
  { id: 'INV-005', customer: 'Umbrella', status: 'pending', amount: '$540.00' },
  { id: 'INV-006', customer: 'Stark', status: 'paid', amount: '$2,100.00' },
]

const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'id',
    header: 'Invoice',
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue('id')}</span>
    ),
  },
  { accessorKey: 'customer', header: 'Customer' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className="text-muted-foreground capitalize">
        {row.getValue('status')}
      </span>
    ),
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.getValue('amount')}</div>
    ),
  },
]

export function Table12() {
  const [globalFilter, setGlobalFilter] = useState('')
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, columnFilters },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  const statusFilter =
    (table.getColumn('status')?.getFilterValue() as string) ?? 'all'

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search invoices..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-xs"
        />
        <Select
          value={statusFilter}
          onValueChange={(value) =>
            table
              .getColumn('status')
              ?.setFilterValue(value === 'all' ? undefined : value)
          }
        >
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-muted-foreground h-20 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
