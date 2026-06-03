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
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Task = {
  id: string
  title: string
  assignee: string
  status: string
}

const data: Task[] = [
  {
    id: 'T-101',
    title: 'Set up CI pipeline',
    assignee: 'Ava Carter',
    status: 'In progress',
  },
  {
    id: 'T-102',
    title: 'Design empty states',
    assignee: 'Ben Lopez',
    status: 'Todo',
  },
  {
    id: 'T-103',
    title: 'Audit accessibility',
    assignee: 'Cara Diaz',
    status: 'Done',
  },
  {
    id: 'T-104',
    title: 'Write API docs',
    assignee: 'Dan Wells',
    status: 'In progress',
  },
]

const columns: ColumnDef<Task>[] = [
  { accessorKey: 'id', header: 'ID', size: 80 },
  {
    accessorKey: 'title',
    header: 'Title',
    size: 240,
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue('title')}</span>
    ),
  },
  { accessorKey: 'assignee', header: 'Assignee', size: 160 },
  { accessorKey: 'status', header: 'Status', size: 120 },
]

export function Table16() {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full max-w-2xl">
      <div className="overflow-x-auto rounded-lg border">
        <Table style={{ width: table.getTotalSize() }} className="table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header, index) => {
                  const isLastColumn = index === headerGroup.headers.length - 1

                  return (
                    <TableHead
                      key={header.id}
                      style={{ width: header.getSize() }}
                      className={cn(
                        'relative',
                        !isLastColumn && 'border-border border-r',
                      )}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {header.column.getCanResize() && !isLastColumn && (
                        <button
                          type="button"
                          aria-label={`Resize ${header.column.id}`}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={cn(
                            'absolute inset-y-0 right-0 z-20 flex w-4 translate-x-1/2 cursor-col-resize touch-none justify-center select-none',
                          )}
                        ></button>
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-transparent">
                {row.getVisibleCells().map((cell, index) => {
                  const isLastColumn =
                    index === row.getVisibleCells().length - 1

                  return (
                    <TableCell
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                      className={cn(
                        'truncate',
                        !isLastColumn && 'border-border border-r',
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
