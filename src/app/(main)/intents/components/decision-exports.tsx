'use client'

import { ClipboardList, ShieldCheck } from 'lucide-react'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const formats = [
  { key: 'spec', label: 'Spec', icon: ClipboardList },
  { key: 'rules', label: 'Rules', icon: ShieldCheck },
] as const

type FormatKey = (typeof formats)[number]['key']

export function DecisionExports({
  spec,
  rules,
}: Readonly<{ spec: string; rules: string }>) {
  const content: Record<FormatKey, string> = { spec, rules }

  return (
    <section className="flex flex-col gap-4 border-t pt-8">
      <Tabs defaultValue="spec" className="gap-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-sm font-semibold">More formats</h2>
            <p className="text-muted-foreground text-xs">
              Same decision, ready for a spec or a rules file.
            </p>
          </div>
          <TabsList className="bg-muted/40 h-auto gap-1 rounded-full border p-1 shadow-none">
            {formats.map(({ key, label, icon: Icon }) => (
              <TabsTrigger
                key={key}
                value={key}
                className="text-muted-foreground hover:text-foreground data-active:text-foreground data-active:bg-background dark:data-active:bg-background dark:data-active:text-foreground h-auto flex-none gap-1.5 rounded-full px-3 py-1 text-xs font-medium after:hidden data-active:shadow-sm dark:data-active:border-transparent"
              >
                <Icon className="size-3.5" aria-hidden />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {formats.map(({ key }) => (
          <TabsContent key={key} value={key} className="mt-0">
            <CodeBlock className="dark:bg-background/40">
              <CodeBlockCode code={content[key]} language="markdown" withCopy />
            </CodeBlock>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
