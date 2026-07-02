'use client'

import * as React from 'react'

import { Fullscreen, Loader, Palette, RotateCcw } from 'lucide-react'
import Link from 'next/link'

import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CopyButton } from '@/components/core/copy-button'
import { RegistryCli } from '@/components/core/registry/registry-cli'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useActiveFile } from '@/hooks/use-active-file'
import type { RegistryCodeFile } from '@/lib/registry-source'
import { cn } from '@/lib/utils'

interface BlockViewTabsProps {
  category: string
  slug: string
  variation?: string
  codeFiles: RegistryCodeFile[]
  registryName: string
  iframeHeight?: number
  className?: string
}

const triggerClass =
  'text-muted-foreground data-active:text-foreground data-active:bg-background inline-flex h-7 items-center gap-1.5 rounded-sm px-3 text-xs font-medium after:hidden data-active:shadow-sm'

const panelClass = 'relative w-full overflow-hidden rounded-lg border'

const fallbackHeightClass = 'h-[600px] md:h-[80vh]'

export function BlockViewTabs({
  category,
  slug,
  variation,
  codeFiles,
  registryName,
  iframeHeight,
  className,
}: Readonly<BlockViewTabsProps>) {
  const [panel, setPanel] = React.useState('preview')
  const [reloadKey, setReloadKey] = React.useState(0)
  const [loading, setLoading] = React.useState(true)
  const { activeFile, activeName, setActiveName } = useActiveFile(codeFiles)

  const src = variation
    ? `/preview/${category}/${slug}/${variation}`
    : `/preview/${category}/${slug}`
  const editSrc = variation
    ? `/preview-editor/${category}/${slug}/${variation}`
    : `/preview-editor/${category}/${slug}`
  const hasCode = codeFiles.length > 0

  return (
    <Tabs
      value={panel}
      onValueChange={setPanel}
      className={cn('flex w-full flex-col gap-2', className)}
    >
      <div className="flex items-center justify-between gap-2">
        <TabsList className="bg-muted/50 h-auto gap-0.5 rounded-md border p-0.5 shadow-none">
          <TabsTrigger value="preview" className={triggerClass}>
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className={triggerClass}
            disabled={!hasCode}
          >
            Code
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-1">
          <RegistryCli
            registryName={registryName}
            className="w-fit max-w-none"
            labelClassName="hidden"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            title="Refresh preview"
            aria-label="Refresh preview"
            onClick={() => {
              setLoading(true)
              setReloadKey((k) => k + 1)
            }}
          >
            <RotateCcw className="size-3.5 shrink-0" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            title="Open fullscreen"
            aria-label="Open fullscreen"
            asChild
          >
            <Link href={src} target="_blank">
              <Fullscreen className="size-3.5 shrink-0" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            title="Edit block"
            aria-label="Edit block"
            asChild
          >
            <Link href={editSrc}>
              <Palette className="size-3.5 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>

      <TabsContent value="preview" className="mt-0">
        <div
          className={cn(
            panelClass,
            'bg-muted/50 dark:bg-muted/20',
            !iframeHeight && fallbackHeightClass,
          )}
          style={iframeHeight ? { height: iframeHeight } : undefined}
        >
          {loading && (
            <div className="bg-muted/50 dark:bg-muted/20 absolute inset-0 z-10 flex items-center justify-center">
              <Loader className="text-muted-foreground size-4 animate-spin" />
            </div>
          )}
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize="100%" minSize="30%">
              <iframe
                key={reloadKey}
                src={src}
                title="Block preview"
                loading="lazy"
                className={cn(
                  'h-full w-full transition-opacity duration-200',
                  loading && 'opacity-0',
                )}
                onLoad={() => setLoading(false)}
              />
            </ResizablePanel>
            <ResizableHandle
              withHandle
              className="[&>div]:bg-muted-foreground/30 hover:[&>div]:bg-muted-foreground/60 bg-transparent [&>div]:h-6 [&>div]:w-1 [&>div]:rounded-full [&>div]:shadow-none [&>div]:transition-colors"
            />
            <ResizablePanel
              defaultSize="0%"
              className="bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[16px_16px]"
            />
          </ResizablePanelGroup>
        </div>
      </TabsContent>

      <TabsContent value="code" className="mt-0">
        <div
          className={cn(
            panelClass,
            fallbackHeightClass,
            'bg-card flex flex-col',
          )}
        >
          {hasCode && (
            <div className="flex shrink-0 items-center justify-between gap-2 border-b px-4 py-2.5">
              <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                {codeFiles.length > 1 &&
                  codeFiles.map((file) => (
                    <Badge
                      key={file.name}
                      variant="outline"
                      asChild
                      className={cn(
                        'cursor-pointer font-mono text-[11px] font-normal transition-colors',
                        activeName === file.name &&
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
                {codeFiles.length === 1 && (
                  <span className="text-muted-foreground font-mono text-[11px]">
                    {activeFile?.name}
                  </span>
                )}
              </div>
              <CopyButton
                text={activeFile?.content ?? ''}
                variant="ghost"
                size="icon-sm"
                className="bg-card text-muted-foreground hover:bg-muted/80 h-7 shrink-0 px-2 shadow-none"
              />
            </div>
          )}

          <div className="no-scrollbar min-h-0 flex-1 overflow-auto">
            {activeFile ? (
              <CodeBlockCode
                code={activeFile.content}
                language="tsx"
                showLineNumbers
                collapsible
                className="max-h-none px-4"
              />
            ) : (
              <p className="text-muted-foreground flex h-full items-center justify-center p-5 text-sm italic">
                No code available for this block.
              </p>
            )}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
