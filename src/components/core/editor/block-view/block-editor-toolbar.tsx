'use client'

import { Fullscreen, Monitor, RotateCw, Smartphone } from 'lucide-react'
import Link from 'next/link'

import { RegistryCli } from '@/components/core/registry/registry-cli'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import { useBlockEditor } from './block-editor'

export function BlockEditorCli() {
  const { item } = useBlockEditor()
  return <RegistryCli registryName={item.name} labelClassName="text-sm" />
}

export function BlockEditorTools() {
  const {
    setView,
    setPreviewSize,
    refreshPreview,
    previewSrc,
    resizablePanelRef,
  } = useBlockEditor()

  return (
    <div className="flex h-8 items-center gap-1.5 rounded-md border p-1">
      <ToggleGroup
        type="single"
        defaultValue="100"
        onValueChange={(value) => {
          if (value) {
            setView('preview')
            setPreviewSize(Number.parseInt(value))
            if (resizablePanelRef?.current) {
              resizablePanelRef.current.resize(value)
            }
          }
        }}
        className="gap-1"
      >
        <ToggleGroupItem
          value="100"
          title="Desktop"
          className="size-6 rounded-sm"
        >
          <Monitor className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="30"
          title="Mobile"
          className="size-6 rounded-sm"
        >
          <Smartphone className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex items-center">
        <Separator orientation="vertical" className="!h-4" />
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="size-6 rounded-sm p-0"
        title="Preview Fullscreen"
        asChild
      >
        <Link href={previewSrc ?? '#'} target="_blank">
          <Fullscreen className="size-4" />
          <span className="sr-only">Preview Fullscreen</span>
        </Link>
      </Button>
      <div className="flex items-center">
        <Separator orientation="vertical" className="!h-4" />
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="size-6 rounded-sm p-0"
        title="Refresh Preview"
        onClick={refreshPreview}
      >
        <RotateCw className="size-4" />
        <span className="sr-only">Refresh Preview</span>
      </Button>
    </div>
  )
}

export function BlockEditorTabs() {
  const { view, setView } = useBlockEditor()
  return (
    <Tabs
      value={view}
      onValueChange={(value) => setView(value as 'preview' | 'code')}
    >
      <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-1">
        <TabsTrigger value="preview" className="h-6 rounded-sm px-2 text-xs">
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className="h-6 rounded-sm px-2 text-xs">
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
