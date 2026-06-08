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
  type ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'

type Node = {
  name: string
  type: string
  size: string
  subRows?: Node[]
}

const data: Node[] = [
  {
    name: 'src',
    type: 'Folder',
    size: '—',
    subRows: [
      {
        name: 'components',
        type: 'Folder',
        size: '—',
        subRows: [
          { name: 'button.tsx', type: 'Component', size: '4 KB' },
          { name: 'table.tsx', type: 'Component', size: '6 KB' },
        ],
      },
      { name: 'utils.ts', type: 'Module', size: '2 KB' },
    ],
  },
  {
    name: 'public',
    type: 'Folder',
    size: '—',
    subRows: [{ name: 'logo.svg', type: 'Asset', size: '12 KB' }],
  },
]

const columns: ColumnDef<Node>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row, getValue }) => (
      <div
        className="flex items-center gap-1"
        style={{ paddingLeft: row.depth * 20 }}
      >
        {row.getCanExpand() ? (
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            onClick={row.getToggleExpandedHandler()}
            aria-label={row.getIsExpanded() ? 'Collapse' : 'Expand'}
          >
            <ChevronRightIcon
              className={row.getIsExpanded() ? 'rotate-90' : ''}
            />
          </Button>
        ) : (
          <span className="size-6" />
        )}
        <span className="font-medium">{getValue<string>()}</span>
      </div>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue('type')}</span>
    ),
  },
  {
    accessorKey: 'size',
    header: () => <div className="text-right">Size</div>,
    cell: ({ row }) => (
      <div className="text-muted-foreground text-right tabular-nums">
        {row.getValue('size')}
      </div>
    ),
  },
]

export function Table19() {
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const table = useReactTable({
    data,
    columns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
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
