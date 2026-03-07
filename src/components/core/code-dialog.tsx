'use client'

import { useQuery } from '@tanstack/react-query'
import { CodeIcon, FileXIcon } from 'lucide-react'
import React from 'react'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CodeBlockGroup } from '@/components/core/code/code-block-group'
import { CodeBlockCopy } from '@/components/core/code/code-copy'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Skeleton } from '@/components/ui/skeleton'

interface CodeDialogProps {
  category?: string
  slug?: string
  title?: string
}

async function fetchCode(filePath: string) {
  const res = await fetch(`/api/code?path=${encodeURIComponent(filePath)}`)
  if (!res.ok) throw new Error('Failed to load code')
  return res.json()
}

function CodeBlockSkeleton() {
  return (
    <CodeBlock className="overflow-hidden">
      <div className="border-border/40 flex items-center justify-between border-b px-4 py-2">
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </CodeBlock>
  )
}

export function CodeDialog({
  category,
  slug,
  title,
}: Readonly<CodeDialogProps>) {
  const [open, setOpen] = React.useState(false)

  const pathTypes =
    category && slug ? `src/components/blocks/${category}/${slug}/types.ts` : ''
  const pathComponent =
    category && slug
      ? `src/components/blocks/${category}/${slug}/${slug}.tsx`
      : ''
  const pathUsage =
    category && slug
      ? `src/components/blocks/${category}/${slug}/${slug}-usage.tsx`
      : ''

  const {
    data: codeTypes,
    isLoading: isLoadingTypes,
    isError: isErrorTypes,
    refetch: refetchTypes,
  } = useQuery({
    queryKey: ['code-types', pathTypes],
    queryFn: () => fetchCode(pathTypes),
    enabled: open && !!pathTypes,
  })
  const {
    data: codeComponent,
    isLoading: isLoadingComponent,
    isError: isErrorComponent,
    refetch: refetchComponent,
  } = useQuery({
    queryKey: ['code-component', pathComponent],
    queryFn: () => fetchCode(pathComponent),
    enabled: open && !!pathComponent,
  })
  const {
    data: codeUsage,
    isLoading: isLoadingUsage,
    isError: isErrorUsage,
    refetch: refetchUsage,
  } = useQuery({
    queryKey: ['code-usage', pathUsage],
    queryFn: () => fetchCode(pathUsage),
    enabled: open && !!pathUsage,
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="rounded-xl">
          Code
          <CodeIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] max-w-xs flex-col gap-6 overflow-hidden lg:max-w-4xl xl:max-w-4xl">
        <DialogHeader className="md:px-6">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="-mx-6 flex-1 space-y-6 overflow-y-auto px-6">
          {category && slug && (
            <div className="flex flex-col gap-10 md:px-6">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">Create types file </span>
                {isLoadingTypes && <CodeBlockSkeleton />}
                {isErrorTypes && (
                  <Empty className="border-border rounded-lg border border-dashed py-8">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <FileXIcon className="size-5" />
                      </EmptyMedia>
                      <EmptyTitle>Failed to load</EmptyTitle>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-xl"
                        onClick={() => refetchTypes()}
                      >
                        Try again
                      </Button>
                    </EmptyHeader>
                  </Empty>
                )}
                {codeTypes?.code && (
                  <CodeBlock>
                    <CodeBlockGroup className="border-border/40 flex items-center justify-between gap-2 border-b">
                      <span className="text-sm font-medium">types.ts</span>
                      <CodeBlockCopy fileContent={codeTypes.code} />
                    </CodeBlockGroup>
                    <CodeBlockCode
                      code={codeTypes.code}
                      language="ts"
                      className="max-h-[200px] overflow-y-auto py-2 md:max-h-[320px]"
                    />
                  </CodeBlock>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">
                  Create component file
                </span>
                {isLoadingComponent && <CodeBlockSkeleton />}
                {isErrorComponent && (
                  <Empty className="border-border rounded-lg border border-dashed py-8">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <FileXIcon className="size-5" />
                      </EmptyMedia>
                      <EmptyTitle>Failed to load</EmptyTitle>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-xl"
                        onClick={() => refetchComponent()}
                      >
                        Try again
                      </Button>
                    </EmptyHeader>
                  </Empty>
                )}
                {codeComponent?.code && (
                  <CodeBlock>
                    <CodeBlockGroup className="border-border/40 flex items-center justify-between gap-2 border-b">
                      <span className="text-sm font-medium">{slug}.tsx</span>
                      <CodeBlockCopy fileContent={codeComponent.code} />
                    </CodeBlockGroup>
                    <CodeBlockCode
                      code={codeComponent.code}
                      language="tsx"
                      className="max-h-[200px] overflow-y-auto py-2 md:max-h-[320px]"
                    />
                  </CodeBlock>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">Create usage file</span>
                {isLoadingUsage && <CodeBlockSkeleton />}
                {isErrorUsage && (
                  <Empty className="border-border rounded-lg border border-dashed py-8">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <FileXIcon className="size-5" />
                      </EmptyMedia>
                      <EmptyTitle>Failed to load</EmptyTitle>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-xl"
                        onClick={() => refetchUsage()}
                      >
                        Try again
                      </Button>
                    </EmptyHeader>
                  </Empty>
                )}
                {codeUsage?.code && (
                  <CodeBlock>
                    <CodeBlockCode
                      code={codeUsage.code}
                      language="tsx"
                      className="max-h-[200px] overflow-y-auto py-2 md:max-h-[320px]"
                      withCopy={true}
                    />
                  </CodeBlock>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
