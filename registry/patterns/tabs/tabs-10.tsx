import { LayersIcon, PaletteIcon, RocketIcon } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Tabs10() {
  return (
    <Tabs defaultValue="build" className="w-full max-w-sm">
      <TabsList variant="line" className="mb-2.5 h-auto w-full gap-0 p-0">
        <TabsTrigger
          value="design"
          className="h-auto min-w-0 flex-1 flex-col gap-1.5 px-2 py-2.5"
        >
          <PaletteIcon className="size-4 shrink-0" />
          <span className="text-xs font-medium">Design</span>
        </TabsTrigger>
        <TabsTrigger
          value="build"
          className="h-auto min-w-0 flex-1 flex-col gap-1.5 px-2 py-2.5"
        >
          <LayersIcon className="size-4 shrink-0" />
          <span className="text-xs font-medium">Build</span>
        </TabsTrigger>
        <TabsTrigger
          value="ship"
          className="h-auto min-w-0 flex-1 flex-col gap-1.5 px-2 py-2.5"
        >
          <RocketIcon className="size-4 shrink-0" />
          <span className="text-xs font-medium">Ship</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="design" className="w-full pt-4">
        <div className="w-full space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-primary h-9 rounded-md" />
            <div className="bg-muted h-9 rounded-md" />
            <div className="bg-accent h-9 rounded-md" />
            <div className="bg-secondary h-9 rounded-md" />
          </div>
          <div className="space-y-2">
            <div className="bg-muted/70 h-2.5 w-full rounded-full" />
            <div className="bg-muted/50 h-2 w-4/5 rounded-full" />
            <div className="bg-muted/35 h-2 w-3/5 rounded-full" />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="build" className="w-full pt-4">
        <div className="w-full space-y-2">
          <div className="bg-muted/60 h-14 w-full rounded-lg border" />
          <div className="bg-muted/40 h-10 w-[85%] rounded-lg border" />
          <div className="bg-muted/25 h-8 w-[65%] rounded-lg border" />
        </div>
      </TabsContent>

      <TabsContent value="ship" className="w-full pt-4">
        <div className="w-full space-y-2">
          <div className="bg-muted/50 flex h-24 w-full flex-col gap-2 rounded-lg border p-2">
            <div className="flex gap-1.5">
              <span className="bg-muted size-2 rounded-full" />
              <span className="bg-muted size-2 rounded-full" />
              <span className="bg-muted size-2 rounded-full" />
            </div>
            <div className="bg-background flex-1 rounded-md border" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-muted/40 h-9 rounded-md border" />
            <div className="bg-muted/40 h-9 rounded-md border" />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
