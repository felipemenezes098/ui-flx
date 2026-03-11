import { CheckIcon } from 'lucide-react'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { CopyPageMarkdown } from './app/(main)/docs/components/copy-page-markdown'
import { CodeBlock } from './components/core/code/code-block'
import { CodeBlockCode } from './components/core/code/code-block-code'
import { CodeBlockCommand } from './components/core/code/code-block-command'
import { CodeBlockFromFile } from './components/core/code/code-block-from-file'
import { CodeTabs } from './components/core/code/code-tabs'
import { BlockEditor } from './components/core/editor/block-editor'
import {
  BlockEditorCodeContainer,
  BlockEditorCodeView,
  BlockEditorFileTree,
} from './components/core/editor/block-editor-code'
import { BlockEditorDisplayContentMobile } from './components/core/editor/block-editor-display'
import { BlockEditorPreview } from './components/core/editor/block-editor-preview'
import {
  BlockEditorCli,
  BlockEditorTabs,
  BlockEditorTools,
} from './components/core/editor/block-editor-toolbar'
import { BlockPreview } from './components/core/editor/block-preview'
import { Button } from './components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './components/ui/resizable'
import { ScrollArea, ScrollBar } from './components/ui/scroll-area'
import { Separator } from './components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

let headingCounter = 0

const generateId = (children: React.ReactNode) => {
  headingCounter++
  const text =
    typeof children === 'string' ? children : `heading-${headingCounter}`
  return `${text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')}-${headingCounter}`
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children)
      return (
        <h1
          id={id}
          data-heading="1"
          {...props}
          className="mt-2 scroll-m-20 text-3xl font-bold"
        >
          {children}
        </h1>
      )
    },
    h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children)
      return (
        <h2
          id={id}
          data-heading="2"
          {...props}
          className="mt-12 scroll-m-20 pb-2 text-xl font-medium tracking-tight first:mt-0"
        >
          {children}
        </h2>
      )
    },
    h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children)
      return (
        <h3
          id={id}
          data-heading="3"
          className='"font-heading tracking-tight" mt-8 scroll-m-20 text-base font-medium'
          {...props}
        >
          {children}
        </h3>
      )
    },
    h4: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children)
      return (
        <h4 id={id} data-heading="4" {...props}>
          {children}
        </h4>
      )
    },
    p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
      <p {...props} className="leading-7 [&:not(:first-child)]:mt-4">
        {children}
      </p>
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className="mt-14" {...props} />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className={cn(
          'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm',
          className,
        )}
        {...props}
      />
    ),
    Steps: ({ ...props }) => (
      <div
        className="steps mt-5 ml-4 space-y-7 border-l pl-8 [counter-reset:step] md:ml-4"
        {...props}
      />
    ),
    Step: ({ className, children, ...props }: React.ComponentProps<'h3'>) => (
      <h3
        className={cn(
          'step relative mt-8 scroll-m-20 text-base font-medium tracking-tight first:mt-4',
          className,
        )}
        {...props}
      >
        {children}
      </h3>
    ),
    Features: ({ ...props }) => (
      <div className="flex flex-wrap gap-2" {...props} />
    ),
    Feature: ({ ...props }) => (
      <div
        className="mt-2 flex items-center gap-1 rounded-md border px-3 py-1 text-sm"
        {...props}
      >
        <CheckIcon className="size-3" />
        {props.children}
      </div>
    ),
    Badges: ({ ...props }) => (
      <div className="flex flex-wrap gap-2" {...props} />
    ),
    Badge: ({ ...props }) => (
      <div
        className="mt-2 flex items-center gap-1 rounded-md border px-3 py-1 text-sm"
        {...props}
      >
        {props.children}
      </div>
    ),
    a: ({ children, ...props }: React.ComponentProps<'a'>) => (
      <a
        {...props}
        className="text-primary font-medium underline dark:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <li className={cn('mt-2', className)} {...props} />
    ),

    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn('relative mt-6 w-full', className)} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
        className={cn('justify-start gap-4 rounded-none bg-transparent px-0')}
        {...props}
      />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger
        className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-primary dark:data-[state=active]:border-primary hover:text-primary rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pb-3 text-base data-[state=active]:bg-transparent data-[state=active]:shadow-none! dark:data-[state=active]:bg-transparent"
        {...props}
      />
    ),
    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent className={cn(className)} {...props} />
    ),
    table: ({ className, ...props }: React.ComponentProps<'table'>) => (
      <ScrollArea className="not-prose relative w-full table-auto overflow-auto rounded-lg border border-zinc-200 text-sm dark:border-zinc-800">
        <table
          className={cn('w-full', className)}
          role="table"
          aria-label="Data table"
          {...props}
        >
          <thead className="sr-only">
            <tr>
              <th>Column</th>
            </tr>
          </thead>
        </table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    ),
    thead: ({ className, ...props }: React.ComponentProps<'thead'>) => (
      <thead
        className={cn(
          'bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100',
          className,
        )}
        {...props}
      />
    ),
    tbody: ({ className, ...props }: React.ComponentProps<'tbody'>) => (
      <tbody
        className={cn(
          'divide-y divide-zinc-200 dark:divide-y dark:divide-zinc-600',
          className,
        )}
        {...props}
      />
    ),
    tr: ({ className, ...props }: React.ComponentProps<'tr'>) => (
      <tr className={cn('h-10', className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<'th'>) => (
      <th
        className={cn('px-4 pb-0 text-left align-middle font-[450]', className)}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.ComponentProps<'td'>) => (
      <td
        className={cn('px-4 py-2 text-left align-middle', className)}
        {...props}
      />
    ),
    Callout: ({
      children,
      className,
      ...props
    }: {
      children?: React.ReactNode
      className?: string
    }) => (
      <div
        className={cn(
          'bg-muted/30 mt-5 rounded-xl p-4 text-sm leading-relaxed [&>p]:m-0',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    ),
    BlockHeader: ({ children, ...props }) => (
      <header
        className="mb-6 flex flex-col items-start justify-between space-y-2 md:flex-row md:space-y-0"
        {...props}
      >
        {children}
      </header>
    ),
    BlockHeaderInfo: ({ children, ...props }) => (
      <div className="space-y-2" {...props}>
        {children}
      </div>
    ),
    BlockHeaderTitle: ({ children, ...props }) => (
      <h1 className="scroll-m-20 text-3xl font-bold" {...props}>
        {children}
      </h1>
    ),
    BlockHeaderDescription: ({ children, ...props }) => (
      <div className="text-muted-foreground max-w-prose text-base" {...props}>
        {children}
      </div>
    ),
    BlockHeaderActions: ({ children, ...props }) => (
      <div className="flex items-center gap-2 pt-1" {...props}>
        {children}
      </div>
    ),
    CMSLink: ({ href, children }) => (
      <Button variant="outline" size="sm" className="shadow-none" asChild>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      </Button>
    ),
    DocsLink: ({ href, children }) => (
      <Button variant="outline" size="sm" className="shadow-none" asChild>
        <Link href={href}>{children}</Link>
      </Button>
    ),
    CopyPageMarkdown,
    BlockPreview: ({
      category,
      slug,
      variation,
      iframeHeight,
    }: {
      category: string
      slug: string
      variation?: string
      iframeHeight?: number
    }) => (
      <div className="mt-4">
        <BlockPreview
          category={category}
          slug={slug}
          variation={variation}
          iframeHeight={iframeHeight}
        />
      </div>
    ),
    BlockEditorDisplay: ({ category, slug }) => (
      <BlockEditor category={category} slug={slug}>
        <div className="hidden flex-col gap-4 md:flex">
          <div className="flex w-full flex-wrap justify-between gap-4 pr-4 pl-1 xl:flex-row xl:items-center">
            <div className="flex items-center gap-4">
              <BlockEditorTabs />
              <Separator orientation="vertical" className="!h-5" />
              <BlockEditorTools />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <BlockEditorCli />
            </div>
          </div>
          <BlockEditorPreview />
          <BlockEditorCodeContainer>
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize="30%" minSize="20%" maxSize="50%">
                <BlockEditorFileTree />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize="70%" minSize="20%">
                <BlockEditorCodeView />
              </ResizablePanel>
            </ResizablePanelGroup>
          </BlockEditorCodeContainer>
        </div>
        <BlockEditorDisplayContentMobile />
      </BlockEditor>
    ),
    CodeBlockCommand,
    CodeTabs: ({ children, ...props }) => (
      <CodeTabs {...props} className="mt-6">
        {children}
      </CodeTabs>
    ),
    CodeBlock: ({ children, ...props }) => (
      <div className="my-4">
        <CodeBlock {...props}>{children}</CodeBlock>
      </div>
    ),
    CodeBlockCode,
    CodeBlockFromFile: ({ filePath, ...props }) => (
      <div className="my-6">
        <CodeBlockFromFile filePath={filePath} {...props} />
      </div>
    ),
  }
}
