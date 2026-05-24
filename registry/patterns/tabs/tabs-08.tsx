import { GridIcon, LayoutListIcon, RowsIcon } from 'lucide-react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs08() {
  return (
    <Tabs defaultValue="grid" className="w-full max-w-xs">
      <TabsList>
        <TabsTrigger value="grid" aria-label="Grid view">
          <GridIcon />
        </TabsTrigger>
        <TabsTrigger value="list" aria-label="List view">
          <LayoutListIcon />
        </TabsTrigger>
        <TabsTrigger value="rows" aria-label="Rows view">
          <RowsIcon />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="grid" className="w-full pt-4">
        <div className="grid w-full grid-cols-3 gap-2">
          <div className="bg-muted/80 aspect-square rounded-md border" />
          <div className="bg-muted/80 aspect-square rounded-md border" />
          <div className="bg-muted/80 aspect-square rounded-md border" />
          <div className="bg-muted/80 aspect-square rounded-md border" />
          <div className="bg-muted/80 aspect-square rounded-md border" />
          <div className="bg-muted/80 aspect-square rounded-md border" />
        </div>
      </TabsContent>
      <TabsContent value="list" className="w-full pt-4">
        <ul className="w-full space-y-2">
          <li className="flex w-full items-center gap-2">
            <div className="bg-muted/80 size-8 shrink-0 rounded-md border" />
            <div className="bg-muted/50 h-2 flex-1 rounded-full" />
          </li>
          <li className="flex w-full items-center gap-2">
            <div className="bg-muted/80 size-8 shrink-0 rounded-md border" />
            <div className="bg-muted/50 h-2 flex-1 rounded-full" />
          </li>
          <li className="flex w-full items-center gap-2">
            <div className="bg-muted/80 size-8 shrink-0 rounded-md border" />
            <div className="bg-muted/50 h-2 flex-1 rounded-full" />
          </li>
          <li className="flex w-full items-center gap-2">
            <div className="bg-muted/80 size-8 shrink-0 rounded-md border" />
            <div className="bg-muted/50 h-2 flex-1 rounded-full" />
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="rows" className="w-full pt-4">
        <ul className="w-full space-y-2">
          <li className="bg-muted/50 flex h-14 w-full items-center gap-2 rounded-md border px-2 py-2">
            <div className="bg-muted/80 size-6 shrink-0 rounded border" />
            <div className="bg-muted/80 h-2 flex-1 rounded-full" />
          </li>
          <li className="bg-muted/50 flex h-10 w-full items-center gap-2 rounded-md border px-2 py-2">
            <div className="bg-muted/80 size-6 shrink-0 rounded border" />
            <div className="bg-muted/80 h-2 flex-1 rounded-full" />
          </li>
          <li className="bg-muted/50 flex h-12 w-full items-center gap-2 rounded-md border px-2 py-2">
            <div className="bg-muted/80 size-6 shrink-0 rounded border" />
            <div className="bg-muted/80 h-2 flex-1 rounded-full" />
          </li>
          <li className="bg-muted/50 flex h-9 w-full items-center gap-2 rounded-md border px-2 py-2">
            <div className="bg-muted/80 size-6 shrink-0 rounded border" />
            <div className="bg-muted/80 h-2 flex-1 rounded-full" />
          </li>
        </ul>
      </TabsContent>
    </Tabs>
  )
}
