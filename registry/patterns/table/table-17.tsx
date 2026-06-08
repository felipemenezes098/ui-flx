'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import {
  type Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { type CSSProperties } from 'react'

type Row = {
  id: string
  name: string
  q1: string
  q2: string
  q3: string
  q4: string
  total: string
}

const data: Row[] = [
  {
    id: 'r1',
    name: 'North region',
    q1: '$12k',
    q2: '$18k',
    q3: '$15k',
    q4: '$22k',
    total: '$67k',
  },
  {
    id: 'r2',
    name: 'South region',
    q1: '$9k',
    q2: '$11k',
    q3: '$14k',
    q4: '$19k',
    total: '$53k',
  },
  {
    id: 'r3',
    name: 'East region',
    q1: '$21k',
    q2: '$24k',
    q3: '$20k',
    q4: '$28k',
    total: '$93k',
  },
  {
    id: 'r4',
    name: 'West region',
    q1: '$16k',
    q2: '$13k',
    q3: '$17k',
    q4: '$25k',
    total: '$71k',
  },
]

function getPinningStyles(column: Column<Row>): CSSProperties {
  const pinned = column.getIsPinned()
  return {
    left: pinned === 'left' ? column.getStart('left') : undefined,
    right: pinned === 'right' ? column.getAfter('right') : undefined,
    position: pinned ? 'sticky' : undefined,
    zIndex: pinned ? 1 : undefined,
  }
}

const columns: ColumnDef<Row>[] = [
  {
    accessorKey: 'name',
    header: 'Region',
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue('name')}</span>
    ),
  },
  { accessorKey: 'q1', header: 'Q1' },
  { accessorKey: 'q2', header: 'Q2' },
  { accessorKey: 'q3', header: 'Q3' },
  { accessorKey: 'q4', header: 'Q4' },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row }) => (
      <span className="font-medium tabular-nums">{row.getValue('total')}</span>
    ),
  },
]

const pinnedCellClass = 'bg-background shadow-[inset_1px_0_0] shadow-border'

export function Table17() {
  const table = useReactTable({
    data,
    columns,
    initialState: { columnPinning: { right: ['total'] } },
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full max-w-xl">
      <p className="text-muted-foreground mb-2 text-sm">
        Scroll horizontally — the Total column stays pinned on the right.
      </p>
      <div className="overflow-x-auto rounded-lg border">
        <Table className="w-[720px]">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={getPinningStyles(header.column)}
                    className={cn(
                      header.column.getIsPinned() && pinnedCellClass,
                    )}
                  >
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
              <TableRow key={row.id} className="hover:bg-transparent">
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={getPinningStyles(cell.column)}
                    className={cn(cell.column.getIsPinned() && pinnedCellClass)}
                  >
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
