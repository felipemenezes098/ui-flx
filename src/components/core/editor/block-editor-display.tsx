'use client'

import Image from 'next/image'
import * as React from 'react'
import { useTheme } from 'next-themes'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'

import { BlockEditor, useBlockEditor } from './block-editor'
import {
  BlockEditorCodeContainer,
  BlockEditorCodeView,
  BlockEditorFileTree,
} from './block-editor-code'
import { BlockEditorPreview } from './block-editor-preview'
import {
  BlockEditorCli,
  BlockEditorTabs,
  BlockEditorTools,
} from './block-editor-toolbar'

export function BlockEditorDisplayContentMobile() {
  const { config: subBlock } = useBlockEditor()
  const { resolvedTheme } = useTheme()
  const imageSrc =
    resolvedTheme === 'dark' ? subBlock.image.dark : subBlock.image.light

  return (
    <div className="flex flex-col gap-4 md:hidden">
      <div className="flex items-center gap-2 px-2">
        <div className="line-clamp-1 text-sm font-medium">
          {subBlock.description}
        </div>
        <div className="text-muted-foreground ml-auto shrink-0 font-mono text-xs">
          {subBlock.name}
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border p-3">
        <Image
          src={imageSrc}
          alt={subBlock.name}
          data-block={subBlock.name}
          width={1440}
          height={900}
          className="object-cover dark:hidden"
        />
      </div>
    </div>
  )
}

function BlockEditorDisplayContent() {
  const { config: subBlock, item: registryItem } = useBlockEditor()

  return (
    <div className="hidden flex-col gap-4 md:flex">
      <div className="flex w-full flex-wrap justify-between gap-4 pr-3 pl-1 xl:flex-row xl:items-center">
        <div className="flex items-center gap-4">
          <BlockEditorTabs />
          <div className="flex items-center">
            <Separator orientation="vertical" className="!h-5" />
          </div>
          <p className="line-clamp-1 truncate text-sm font-medium">
            {registryItem?.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <BlockEditorTools />
          <div className="flex items-center">
            <Separator orientation="vertical" className="!h-5" />
          </div>
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
          <ResizablePanel defaultSize="75%">
            <BlockEditorCodeView />
          </ResizablePanel>
        </ResizablePanelGroup>
      </BlockEditorCodeContainer>
    </div>
  )
}

export function BlockEditorDisplay({
  category,
  slug,
}: {
  category: string
  slug: string
}) {
  return (
    <BlockEditor category={category} slug={slug}>
      <BlockEditorDisplayContent />
      <BlockEditorDisplayContentMobile />
    </BlockEditor>
  )
}
