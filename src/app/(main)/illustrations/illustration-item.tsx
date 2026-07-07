'use client'

import { useMemo, useState } from 'react'
import { Code2, Sparkles } from 'lucide-react'
import type { RegistryItem } from 'shadcn/schema'

import { useQuery } from '@tanstack/react-query'

import { CopyButton } from '@/components/core/copy-button'
import { Logo } from '@/components/core/logo'
import { PatternRenderer } from '@/components/core/patterns/pattern-renderer'
import {
  MosaicCell,
  type MosaicCellSize,
} from '@/components/core/mosaic/mosaic-cell'
import type { MosaicSpan } from '@/components/core/mosaic/mosaic-span'
import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CodeBlockCommand } from '@/components/core/code/code-block-command'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useActiveFile } from '@/hooks/use-active-file'
import { useConfig } from '@/hooks/use-config'
import { illustrationRegistry } from '@/lib/illustrations/illustration-registry'
import { buildIllustrationPrompt } from '@/lib/illustrations/illustrations-utils'
import {
  registryAddCommand,
  registryInstallTarget,
} from '@/lib/registry-command'
import { fetchRegistryCodeFiles } from '@/lib/registry-source'
import { cn } from '@/lib/utils'

interface IllustrationItemProps {
  slug: string
  name: string
  description?: string
  categorySlug: string
  span?: MosaicSpan
  size?: MosaicCellSize
}

const tooltipContentClass =
  'pointer-events-none border bg-background text-foreground shadow-md [&>span>svg]:bg-background [&>span>svg]:fill-background dark:border-transparent dark:bg-foreground dark:text-background dark:[&>span>svg]:bg-foreground dark:[&>span>svg]:fill-foreground'

export function IllustrationItem({
  slug,
  name,
  description,
  categorySlug,
  span = 1,
  size = 'md',
}: Readonly<IllustrationItemProps>) {
  const [openCode, setOpenCode] = useState(false)
  const [config] = useConfig()
  const cliCommand = registryAddCommand(slug, config.packageManager || 'npm')

  const item = {
    name: slug,
    title: name,
    description,
    type: 'registry:block',
  } as RegistryItem

  const { data: codeFiles = [], isLoading } = useQuery({
    queryKey: ['registry-code-files', slug],
    queryFn: () => fetchRegistryCodeFiles(slug),
    staleTime: Infinity,
  })

  const prompt = useMemo(
    () => buildIllustrationPrompt(item, categorySlug, codeFiles),
    [item, categorySlug, codeFiles],
  )

  const { activeFile, setActiveName } = useActiveFile(codeFiles)

  return (
    <MosaicCell span={span} size={size} className="group hover:bg-muted/50">
      <PatternRenderer name={slug} registry={illustrationRegistry} />

      <TooltipProvider delay={300}>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-3 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100">
          <div className="flex items-center gap-1">
            <Dialog open={openCode} onOpenChange={setOpenCode}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="border-border border"
                        aria-label="View code"
                      >
                        <Code2 className="size-4" />
                      </Button>
                    </DialogTrigger>
                  }
                />
                <TooltipContent
                  side="top"
                  sideOffset={4}
                  className={tooltipContentClass}
                >
                  Code
                </TooltipContent>
              </Tooltip>
              <DialogContent className="max-h-[95vh] overflow-y-auto sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{name}</DialogTitle>
                </DialogHeader>
                <div className="flex max-w-full min-w-0 flex-col gap-2">
                  <CodeBlockCommand
                    command={registryInstallTarget(slug)}
                    className="dark:bg-background/40"
                  />
                  {isLoading && (
                    <div className="bg-muted h-48 animate-pulse rounded-xl" />
                  )}
                  {!isLoading && activeFile && (
                    <CodeBlock className="dark:bg-background/40">
                      {codeFiles.length > 1 && (
                        <div className="mb-1 flex flex-wrap gap-1.5 border-b px-4 py-2.5">
                          {codeFiles.map((file) => (
                            <Badge
                              key={file.name}
                              variant="outline"
                              asChild
                              className={cn(
                                'cursor-pointer font-mono text-[11px] font-normal transition-colors',
                                activeFile?.name === file.name &&
                                  'border-foreground/20 bg-muted/30 text-foreground',
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
                      <CodeBlockCode
                        code={activeFile.content}
                        language="tsx"
                        withCopy
                      />
                    </CodeBlock>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <Tooltip>
              <TooltipTrigger
                render={
                  <CopyButton
                    text={cliCommand}
                    variant="ghost"
                    size="icon-sm"
                    icon={<Logo.ShadcnIcon className="size-4" />}
                    iconClassName="size-4"
                    aria-label="Copy CLI command"
                    className="border-border border"
                  />
                }
              />
              <TooltipContent
                side="top"
                sideOffset={4}
                className={tooltipContentClass}
              >
                CLI
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <CopyButton
                    text={prompt}
                    variant="ghost"
                    size="icon-sm"
                    icon={<Sparkles className="size-4" strokeWidth={1.5} />}
                    iconClassName="size-4"
                    aria-label="Copy prompt"
                    className="border-border border"
                  />
                }
              />
              <TooltipContent
                side="top"
                sideOffset={4}
                className={tooltipContentClass}
              >
                Prompt
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    </MosaicCell>
  )
}
