'use client'

import { Check, ChevronRight, Clipboard, File, Folder } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from '@/components/ui/sidebar'
import type { FileTree } from '@/lib/registry-utils'

import { CodeBlockCode } from '../code/code-block-code'
import { useBlockEditor } from './block-editor'

export function BlockEditorFileTree() {
  const { tree, view } = useBlockEditor()

  if (!tree || tree.length === 0) {
    return null
  }

  if (view !== 'code') {
    return null
  }

  return (
    <div className="size-full overflow-hidden">
      <SidebarProvider className="flex !min-h-full flex-col">
        <Sidebar collapsible="none" className="w-full flex-1">
          <SidebarGroupLabel className="h-12 rounded-none border-b px-4 text-sm font-medium">
            Files
          </SidebarGroupLabel>
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="translate-x-0 gap-1.5">
                {tree.map((item, index) => (
                  <TreeItem key={index} item={item} index={1} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}

function TreeItem({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockEditor()

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="hover:bg-muted-foreground/10 focus:bg-muted-foreground/10 focus-visible:bg-muted-foreground/10 active:bg-muted-foreground/10 data-[active=true]:bg-muted-foreground/10 rounded-none whitespace-nowrap transition-colors"
          style={
            {
              paddingLeft: `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible size-4" />
          <File className="size-4" />
          <span className="truncate">{item.name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="hover:bg-muted-foreground/10 focus:bg-muted-foreground/10 focus-visible:bg-muted-foreground/10 active:bg-muted-foreground/10 data-[active=true]:bg-muted-foreground/10 rounded-none whitespace-nowrap transition-colors"
            style={
              {
                paddingLeft: `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="size-4 transition-transform" />
            <Folder className="size-4" />
            <span className="truncate">{item.name}</span>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <TreeItem key={key} item={subItem} index={index + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

export function BlockEditorCodeView() {
  const { view, item, activeFile } = useBlockEditor()
  const [isCopied, setIsCopied] = React.useState(false)

  if (view !== 'code') {
    return null
  }

  const currentFile = item.files?.find(
    (f) => (f.target ?? f.path) === activeFile,
  )

  const copyCode = () => {
    if (currentFile?.content) {
      navigator.clipboard.writeText(currentFile.content)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
      {currentFile && (
        <div className="text-muted-foreground bg-muted/20 flex h-12 shrink-0 items-center gap-2 border-b px-4 py-2">
          <File className="size-4 opacity-70" />
          <span className="truncate text-sm font-medium">
            {currentFile.target ?? currentFile.path}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-muted-foreground/10 size-7 transition-colors"
              onClick={copyCode}
              title="Copy code"
            >
              {isCopied ? (
                <Check className="size-4 text-green-500" />
              ) : (
                <Clipboard className="size-4" />
              )}
            </Button>
          </div>
        </div>
      )}

      <div className="no-scrollbar bg-muted/5 max-h-full flex-1 overflow-auto pr-3 pl-1">
        {currentFile?.content ? (
          <CodeBlockCode
            code={currentFile.content ?? ''}
            language="tsx"
            className="max-h-110"
          />
        ) : (
          <div className="text-muted-foreground flex h-full items-center justify-center text-sm italic">
            Select a file to view its content
          </div>
        )}
      </div>
    </div>
  )
}

export function BlockEditorCodeContainer({
  children,
}: {
  children: React.ReactNode
}) {
  const { view } = useBlockEditor()

  if (view !== 'code') {
    return null
  }

  return (
    <div className="bg-muted/10 min-h-96 overflow-hidden rounded-xl border">
      {children}
    </div>
  )
}
