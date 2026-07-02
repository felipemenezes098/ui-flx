'use client'

import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'

import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CopyButton } from '@/components/core/copy-button'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useActiveFile } from '@/hooks/use-active-file'
import type { DecisionView } from '@/lib/intents/intent-manifest-types'
import { cn } from '@/lib/utils'

import { DecisionCodeDialog } from './decision-code-dialog'
import { DecisionPreview } from './decision-preview'

export function IntentHero({
  view,
  children,
}: Readonly<{ view: DecisionView; children: ReactNode }>) {
  const { name, prompt, codeFiles, registryName, styles } = view
  const { activeFile, setActiveName } = useActiveFile(codeFiles)
  const [panel, setPanel] = useState('prompt')
  const isFull = styles?.span === 'full'
  const previewSize = styles?.previewSize ?? (isFull ? 'full' : 'lg')

  return (
    <section className="bg-card dark:bg-background relative overflow-hidden rounded-2xl border shadow-sm">
      {isFull && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3">
          <span className="inline-flex items-center gap-2 text-sm font-semibold">
            {name}
          </span>
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <DecisionCodeDialog view={view} />
            <CopyButton
              text={prompt}
              label="Copy prompt"
              size="sm"
              className="text-xs"
            />
          </div>
        </div>
      )}

      <div
        className={cn('grid min-w-0', !isFull && 'lg:relative lg:grid-cols-5')}
      >
        <div
          className={cn(
            'flex min-w-0 flex-col',
            !isFull && 'border-b lg:col-span-3 lg:border-r lg:border-b-0',
          )}
        >
          <div className="bg-muted/20 dark:bg-background relative flex min-w-0 shrink-0 items-center justify-center overflow-hidden [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px] p-8 md:p-12">
            <DecisionPreview
              size={previewSize}
              className={cn(
                'relative overflow-hidden py-1 lg:min-h-70',
                styles?.className,
              )}
            >
              {children}
            </DecisionPreview>
          </div>
          <div className="flex shrink-0 flex-col gap-2 border-t px-5 py-[13px] text-sm">
            <p className="text-muted-foreground/55 text-[11px] leading-relaxed">
              Example result — your output may vary with your context and the
              prompt you pass.
            </p>
          </div>
        </div>

        <Tabs
          value={panel}
          onValueChange={setPanel}
          className={cn(
            'bg-muted/30 dark:bg-background/30 flex min-h-0 min-w-0 flex-col gap-0 overflow-hidden',
            'max-lg:h-80',
            isFull
              ? 'lg:hidden'
              : 'lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-2/5',
          )}
        >
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
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
                  <RegistryCli
                    registryName={registryName}
                    className="w-fit max-w-none lg:max-w-40"
                    labelClassName="hidden"
                  />
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
            className="mt-0 flex min-h-0 min-w-0 flex-1 basis-0 flex-col overflow-hidden"
          >
            <pre className="text-muted-foreground no-scrollbar h-0 min-h-0 min-w-0 flex-1 overflow-auto p-5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap">
              {prompt}
            </pre>
            <div className="shrink-0 border-t px-5 py-3">
              <p className="text-muted-foreground inline-flex items-center gap-1.5 text-xs">
                <ArrowRight className="size-3 shrink-0" aria-hidden />
                Paste into your AI tool and adapt it to your context.
              </p>
            </div>
          </TabsContent>

          <TabsContent
            value="code"
            className="mt-0 flex min-h-0 min-w-0 flex-1 basis-0 flex-col overflow-hidden"
          >
            {codeFiles.length > 1 && (
              <div className="flex shrink-0 flex-wrap gap-1.5 border-b px-4 py-2.5">
                {codeFiles.map((file) => (
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
                ))}
              </div>
            )}

            <div className="scroll-fade scroll-fade-9 no-scrollbar bg-muted/5 h-0 min-h-0 min-w-0 flex-1 overflow-y-auto pr-3 pl-1">
              {activeFile ? (
                <CodeBlockCode
                  code={activeFile.content}
                  language="tsx"
                  collapsible
                  className="max-h-none overflow-visible"
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
