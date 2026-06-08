'use client'

import { Field, FieldLabel } from '@/components/ui/field'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectGroup,
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
import { cn } from '@/lib/utils'
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

type User = {
  id: number
  name: string
  role: string
  team: string
}

const teams = ['Platform', 'Growth', 'Design', 'Support']
const roles = ['Engineer', 'Manager', 'Designer', 'Analyst']

const data: User[] = Array.from({ length: 23 }, (_, index) => ({
  id: index + 1,
  name: `Member ${index + 1}`,
  role: roles[index % roles.length],
  team: teams[index % teams.length],
}))

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue('name')}</span>
    ),
  },
  { accessorKey: 'role', header: 'Role' },
  {
    accessorKey: 'team',
    header: () => <div className="text-right">Team</div>,
    cell: ({ row }) => (
      <div className="text-muted-foreground text-right">
        {row.getValue('team')}
      </div>
    ),
  },
]

export function Table13() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  })

  const { pageIndex, pageSize } = table.getState().pagination

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
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
      <div className="flex items-center justify-between gap-4">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="table-13-rows-per-page">Rows per page</FieldLabel>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger size="sm" className="w-16" id="table-13-rows-per-page">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectGroup>
                {[5, 10, 20].map((size) => (
                  <SelectItem key={size} value={`${size}`}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground text-sm">
            Page {pageIndex + 1} of {table.getPageCount()}
          </span>
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  aria-disabled={!table.getCanPreviousPage()}
                  className={cn(
                    !table.getCanPreviousPage() &&
                      'pointer-events-none opacity-50',
                  )}
                  onClick={(event) => {
                    event.preventDefault()
                    table.previousPage()
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  aria-disabled={!table.getCanNextPage()}
                  className={cn(
                    !table.getCanNextPage() && 'pointer-events-none opacity-50',
                  )}
                  onClick={(event) => {
                    event.preventDefault()
                    table.nextPage()
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
