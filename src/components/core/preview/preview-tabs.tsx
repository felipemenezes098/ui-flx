'use client'

import * as React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { RegistryCodeFile } from '@/lib/registry-source'
import { cn } from '@/lib/utils'

import { CodePanel } from './code-panel'
import { RefreshButton } from './preview-actions'
import { PreviewFrame, usePreviewReload } from './preview-frame'

type PreviewTabsContextValue = {
  activeTab: string
  setActiveTab: (tab: string) => void
} & ReturnType<typeof usePreviewReload>

const PreviewTabsContext = React.createContext<PreviewTabsContextValue | null>(
  null,
)

function usePreviewTabs() {
  const ctx = React.useContext(PreviewTabsContext)
  if (!ctx) {
    throw new Error('PreviewTabs.* must be used within <PreviewTabs>')
  }
  return ctx
}

/** Read the active tab value (e.g. to lazy-render a tab's content). */
export function usePreviewTab() {
  return usePreviewTabs().activeTab
}

const triggerClass =
  'text-muted-foreground data-active:text-foreground data-active:bg-background inline-flex h-7 items-center gap-1.5 rounded-sm px-3 text-xs font-medium after:hidden data-active:shadow-sm'

/**
 * Domain-agnostic Preview/Code viewer. Holds tab + reload state in one context
 * so a composed toolbar (PreviewTabs.RefreshButton) drives the frame without
 * prop drilling. Domain wrappers (BlockView, etc.) supply src/files/toolbar.
 *
 * Consumers write their own tabs (order + which tabs) via TabsList/Trigger:
 *
 * <PreviewTabs>
 *   <PreviewTabs.Bar>
 *     <PreviewTabs.TabsList>
 *       <PreviewTabs.Trigger value="preview">Preview</PreviewTabs.Trigger>
 *       <PreviewTabs.Trigger value="code" disabled={!files.length}>Code</PreviewTabs.Trigger>
 *     </PreviewTabs.TabsList>
 *     <PreviewTabs.Actions>{toolbar}</PreviewTabs.Actions>
 *   </PreviewTabs.Bar>
 *   <PreviewTabs.Preview src={src} height={h} />
 *   <PreviewTabs.Code files={files} />
 * </PreviewTabs>
 */
export function PreviewTabs({
  defaultTab = 'preview',
  className,
  children,
}: Readonly<{
  defaultTab?: string
  className?: string
  children: React.ReactNode
}>) {
  const [activeTab, setActiveTab] = React.useState(defaultTab)
  const reload = usePreviewReload()

  const value = React.useMemo(
    () => ({ activeTab, setActiveTab, ...reload }),
    [activeTab, reload],
  )

  return (
    <PreviewTabsContext.Provider value={value}>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className={cn('flex w-full flex-col gap-2', className)}
      >
        {children}
      </Tabs>
    </PreviewTabsContext.Provider>
  )
}

function Bar({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-center justify-between gap-2">{children}</div>
  )
}

/** Styled tab-trigger container. Consumers place Trigger children in the order
 * and with the tabs they want. */
function List({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <TabsList className="bg-muted/50 h-auto gap-0.5 rounded-md border p-0.5 shadow-none">
      {children}
    </TabsList>
  )
}

/** A single tab trigger, consistently styled. */
function Trigger({
  value,
  disabled,
  children,
}: Readonly<{ value: string; disabled?: boolean; children: React.ReactNode }>) {
  return (
    <TabsTrigger value={value} className={triggerClass} disabled={disabled}>
      {children}
    </TabsTrigger>
  )
}

/** Content panel for a custom tab value (Preview/Code have dedicated panels). */
function Panel({
  value,
  children,
}: Readonly<{ value: string; children: React.ReactNode }>) {
  return (
    <TabsContent value={value} className="mt-0">
      {children}
    </TabsContent>
  )
}

function Actions({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex items-center gap-1">{children}</div>
}

function Preview({
  src,
  height,
  title,
}: Readonly<{ src: string; height?: number; title?: string }>) {
  const { reloadKey, loading, handleLoad } = usePreviewTabs()
  return (
    <TabsContent value="preview" className="mt-0">
      <PreviewFrame
        src={src}
        title={title}
        height={height}
        reloadKey={reloadKey}
        loading={loading}
        onLoad={handleLoad}
      />
    </TabsContent>
  )
}

function Code({ files }: Readonly<{ files: RegistryCodeFile[] }>) {
  return (
    <TabsContent value="code" className="mt-0">
      <CodePanel files={files} />
    </TabsContent>
  )
}

/** RefreshButton wired to the tabs reload state. */
function TabsRefreshButton() {
  const { refresh } = usePreviewTabs()
  return <RefreshButton onClick={refresh} />
}

PreviewTabs.Bar = Bar
PreviewTabs.TabsList = List
PreviewTabs.Trigger = Trigger
PreviewTabs.Actions = Actions
PreviewTabs.Preview = Preview
PreviewTabs.Code = Code
PreviewTabs.Panel = Panel
PreviewTabs.RefreshButton = TabsRefreshButton
