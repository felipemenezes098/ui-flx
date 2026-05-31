'use client'

import { AlertCircle, ArrowRight, Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'

import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CopyButton } from '@/components/core/code/copy-button'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useActiveFile } from '@/hooks/use-active-file'
import type { DecisionView } from '@/lib/intent-manifest-types'
import { cn } from '@/lib/utils'

export function IntentHero({
  view,
  children,
}: Readonly<{ view: DecisionView; children: ReactNode }>) {
  const { name, best, caveat, prompt, codeFiles, registryName } = view
  const { activeFile, setActiveName } = useActiveFile(codeFiles)
  const [panel, setPanel] = useState('prompt')

  return (
    <section className="bg-card dark:bg-background relative overflow-hidden rounded-2xl border shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <span className="relative flex size-2">
            <span className="bg-primary/60 absolute inline-flex size-full animate-ping rounded-full" />
            <span className="bg-primary relative inline-flex size-2 rounded-full" />
          </span>
          {name}
          <span className="text-primary text-xs font-medium tracking-wide uppercase">
            · Recommended
          </span>
        </span>
      </div>

      <div className="grid min-w-0 lg:h-[30rem] lg:grid-cols-2">
        <div className="flex min-w-0 flex-col border-b lg:border-r lg:border-b-0">
          <div className="bg-muted/20 dark:bg-background relative flex min-w-0 flex-1 items-center justify-center overflow-hidden [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px] p-8 md:p-12">
            <div className="relative max-w-full min-w-0">{children}</div>
          </div>
          <div className="flex flex-col gap-2 border-t px-5 py-4 text-sm">
            <div className="grid grid-cols-[auto_1fr] gap-x-2.5">
              <Check
                className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                aria-hidden
              />
              <p className="text-muted-foreground leading-relaxed">{best}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-2.5">
              <AlertCircle
                className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden
              />
              <p className="text-muted-foreground/80 leading-relaxed">
                {caveat}
              </p>
            </div>
            <p className="text-muted-foreground/55 mt-1 border-t pt-2.5 text-[11px] leading-relaxed">
              Example result — your output may vary with your context and the
              prompt you pass.
            </p>
          </div>
        </div>

        <Tabs
          value={panel}
          onValueChange={setPanel}
          className="bg-muted/30 dark:bg-background/30 flex min-h-0 min-w-0 flex-col gap-0 overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
            <TabsList className="bg-muted/50 h-auto gap-0.5 rounded-md border p-0.5 shadow-none">
              <TabsTrigger
                value="prompt"
                className="text-muted-foreground data-active:text-foreground data-active:bg-background inline-flex h-7 items-center gap-1.5 rounded-sm px-2.5 text-xs font-medium after:hidden data-active:shadow-sm"
              >
                <span className="text-primary font-mono">$</span>
                Prompt
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="text-muted-foreground data-active:text-foreground data-active:bg-background h-7 rounded-sm px-2.5 text-xs font-medium after:hidden data-active:shadow-sm"
              >
                Code
              </TabsTrigger>
            </TabsList>
            <div className="flex min-w-0 flex-wrap items-center justify-end gap-1.5">
              {panel === 'prompt' && (
                <CopyButton
                  text={prompt}
                  label="Copy prompt"
                  className="gap-1.5 text-xs"
                />
              )}
              {panel === 'code' && (
                <>
                  <RegistryCli registryName={registryName} />
                  <CopyButton
                    text={activeFile?.content ?? ''}
                    label="Copy code"
                    className="gap-1.5 text-xs"
                  />
                </>
              )}
            </div>
          </div>

          <TabsContent
            value="prompt"
            className="mt-0 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden"
          >
            <pre className="text-muted-foreground max-h-72 min-w-0 flex-1 overflow-auto p-5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap lg:max-h-none">
              {prompt}
            </pre>
            <div className="border-t px-5 py-3">
              <p className="text-muted-foreground inline-flex items-center gap-1.5 text-xs">
                <ArrowRight className="size-3 shrink-0" aria-hidden />
                Paste into your AI tool and adapt it to your context.
              </p>
            </div>
          </TabsContent>

          <TabsContent
            value="code"
            className="mt-0 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden"
          >
            <div className="flex flex-wrap gap-1.5 border-b px-4 py-2.5">
              {codeFiles.length > 0 ? (
                codeFiles.map((file) => (
                  <Badge
                    key={file.name}
                    variant="outline"
                    asChild
                    className={cn(
                      'cursor-pointer font-mono text-[11px] font-normal transition-colors',
                      activeFile?.name === file.name &&
                        'border-foreground/20 bg-muted text-foreground',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveName(file.name)}
                    >
                      {file.name}
                    </button>
                  </Badge>
                ))
              ) : (
                <p className="text-muted-foreground text-xs">
                  No files in registry for this decision.
                </p>
              )}
            </div>
            <div className="no-scrollbar bg-muted/5 min-h-0 min-w-0 flex-1 overflow-auto pr-3 pl-1">
              {activeFile ? (
                <CodeBlockCode
                  code={activeFile.content}
                  language="tsx"
                  className="max-h-110"
                />
              ) : (
                <p className="text-muted-foreground flex h-full items-center justify-center p-5 text-sm italic">
                  No code for this decision.
                </p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
