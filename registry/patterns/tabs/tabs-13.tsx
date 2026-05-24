import { CodeIcon, EyeIcon } from 'lucide-react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs13() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-md items-center gap-4">
      <TabsList variant="line">
        <TabsTrigger value="preview">
          <EyeIcon data-icon="inline-start" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon data-icon="inline-start" />
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="w-full">
        <div className="bg-muted/40 flex h-28 items-center justify-center rounded-md border">
          <span className="text-muted-foreground text-sm">Live preview</span>
        </div>
      </TabsContent>
      <TabsContent value="code" className="w-full">
        <pre className="bg-muted text-muted-foreground overflow-x-auto rounded-md border p-3 font-mono text-xs">
          {`<Button>Click me</Button>`}
        </pre>
      </TabsContent>
    </Tabs>
  )
}
