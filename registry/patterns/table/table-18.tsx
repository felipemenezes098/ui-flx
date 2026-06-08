'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
  type RowSelectionState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Trash2Icon } from 'lucide-react'
import { useState } from 'react'

type Subscriber = {
  id: string
  email: string
  plan: string
  joined: string
}

const data: Subscriber[] = [
  { id: 's1', email: 'ava@example.com', plan: 'Pro', joined: 'Jan 2025' },
  { id: 's2', email: 'ben@example.com', plan: 'Free', joined: 'Feb 2025' },
  { id: 's3', email: 'cara@example.com', plan: 'Pro', joined: 'Mar 2025' },
  { id: 's4', email: 'dan@example.com', plan: 'Team', joined: 'Apr 2025' },
]

const columns: ColumnDef<Subscriber>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? 'indeterminate'
              : false
        }
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(value === true)
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(value === true)}
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue('email')}</span>
    ),
  },
  { accessorKey: 'plan', header: 'Plan' },
  {
    accessorKey: 'joined',
    header: () => <div className="text-right">Joined</div>,
    cell: ({ row }) => (
      <div className="text-muted-foreground text-right">
        {row.getValue('joined')}
      </div>
    ),
  },
]

export function Table18() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const table = useReactTable({
    data,
    columns,
    state: { rowSelection },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  })

  const selectedCount = table.getSelectedRowModel().rows.length

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div className="flex h-9 items-center justify-between">
        {selectedCount > 0 ? (
          <>
            <span className="text-sm font-medium">
              {selectedCount} selected
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.resetRowSelection()}
              >
                Clear
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2Icon data-icon="inline-start" />
                Delete
              </Button>
            </div>
          </>
        ) : (
          <span className="text-muted-foreground text-sm">
            Select rows to act on them.
          </span>
        )}
      </div>
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="first:w-10">
                    {flexRender(
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
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? 'selected' : undefined}
              >
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
