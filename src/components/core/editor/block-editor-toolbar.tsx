'use client'

import {
  Check,
  ChevronDownIcon,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
} from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { siteConfig } from '@/config/site'
import { useConfig } from '@/hooks/use-config'

import { Logo } from '../logo'
import { useBlockEditor } from './block-editor'

export function BlockEditorTitle() {
  const { config } = useBlockEditor()
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">{config.name}</h2>
      </div>
      {config.description && (
        <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
          {config.description}
        </p>
      )}
    </div>
  )
}

const PACKAGE_MANAGERS = [
  {
    name: 'npm' as const,
    command: `npx shadcn@latest add @${siteConfig.codeName}`,
  },
  {
    name: 'pnpm' as const,
    command: `pnpm dlx shadcn@latest add @${siteConfig.codeName}`,
  },
  {
    name: 'yarn' as const,
    command: `yarn dlx shadcn@latest add @${siteConfig.codeName}`,
  },
  {
    name: 'bun' as const,
    command: `bunx shadcn@latest add @${siteConfig.codeName}`,
  },
]

export function BlockEditorCli() {
  const { item } = useBlockEditor()
  const [config, setConfig] = useConfig()
  const [isCopied, setIsCopied] = React.useState(false)

  const packageManager = config.packageManager ?? 'pnpm'

  const copyCommand = () => {
    const pm = PACKAGE_MANAGERS.find((p) => p.name === packageManager)
    const command = pm ? `${pm.command}/${item.name}` : ''
    navigator.clipboard.writeText(command)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleSelectPackageManager = (
    name: 'npm' | 'yarn' | 'pnpm' | 'bun',
  ) => {
    setConfig({ ...config, packageManager: name })
  }

  return (
    <ButtonGroup>
      <Button
        variant="outline"
        className="w-fit gap-1 px-2 shadow-none"
        size="sm"
        onClick={copyCommand}
      >
        {isCopied ? (
          <Check className="size-4 text-green-500" />
        ) : (
          <Logo.ShadcnIcon className="size-4" />
        )}
        <span>
          @{siteConfig.codeName}/{item.name}
        </span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-fit gap-1 px-2 !pl-2 shadow-none"
            size="sm"
          >
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuGroup>
            {PACKAGE_MANAGERS.map((pm) => (
              <DropdownMenuItem
                className="justify-between"
                key={pm.name}
                onClick={() => handleSelectPackageManager(pm.name)}
              >
                {pm.name}
                {pm.name === packageManager && <Check className="size-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
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

export function BlockEditorToolbar() {
  return (
    <div className="flex w-full flex-col gap-4">
      <BlockEditorTitle />
      <div className="flex w-full items-center gap-2">
        <BlockEditorCli />
        <div className="ml-auto flex items-center gap-2">
          <BlockEditorTools />
          <div className="flex items-center">
            <Separator orientation="vertical" className="mx-1 !h-4" />
          </div>
          <BlockEditorTabs />
        </div>
      </div>
    </div>
  )
}
