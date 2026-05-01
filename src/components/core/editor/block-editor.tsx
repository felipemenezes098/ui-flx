'use client'

import * as React from 'react'
import { PanelImperativeHandle } from 'react-resizable-panels'
import type { registryItemSchema } from 'shadcn/schema'
import type { z } from 'zod'

import { blocks, type BlockItem } from '@/lib/catalog'
import type { FileTree } from '@/lib/registry-utils'
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from '@/lib/registry-utils'

type LoadStatus = 'loading' | 'success' | 'not-found' | 'error'

type BlockEditorContextValue = {
  item: z.infer<typeof registryItemSchema>
  config: BlockItem
  view: 'code' | 'preview'
  setView: (view: 'code' | 'preview') => void
  activeFile: string | null
  setActiveFile: (file: string) => void
  resizablePanelRef: React.RefObject<PanelImperativeHandle | null> | null
  tree: FileTree[] | null
  previewSize: number
  setPreviewSize: (size: number) => void
  iframeKey: number
  refreshPreview: () => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void

  // inline / embed
  category: string
  previewSrc: string
  iframeHeight?: number
}

interface BlockEditorProps {
  category: string
  slug: string
  variation?: string
  iframeHeight?: number
  children: React.ReactNode
}

const BlockEditorContext = React.createContext<BlockEditorContextValue | null>(
  null,
)

export function useBlockEditor() {
  const context = React.useContext(BlockEditorContext)
  if (!context) {
    throw new Error('useBlockEditor must be used within BlockEditor')
  }
  return context
}

export function BlockEditor({
  category,
  slug,
  variation,
  iframeHeight,
  children,
}: BlockEditorProps) {
  const [item, setItem] = React.useState<z.infer<
    typeof registryItemSchema
  > | null>(null)

  const [tree, setTree] = React.useState<FileTree[] | null>(null)
  const [view, setView] = React.useState<'preview' | 'code'>('preview')
  const [activeFile, setActiveFile] = React.useState<string | null>(null)

  const resizablePanelRef = React.useRef<PanelImperativeHandle>(null)
  const [previewSize, setPreviewSize] = React.useState(100)
  const [iframeKey, setIframeKey] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  const [status, setStatus] = React.useState<LoadStatus>('loading')
  const [error, setError] = React.useState<string | null>(null)

  const previewSrc = variation
    ? `/preview/${category}/${slug}/${variation}`
    : `/preview/${category}/${slug}`

  const config = React.useMemo(() => {
    const localConfig =
      blocks
        .find((c) => c.slug === category)
        ?.blocks.find((b) => b.slug === slug) ?? null
    if (localConfig) return localConfig

    return {
      name: item?.name ?? slug,
      description: '',
      image: { light: '', dark: '' },
      slug: slug,
    } as BlockItem
  }, [category, slug, item])

  React.useEffect(() => {
    let mounted = true

    async function loadItem() {
      setStatus('loading')
      setError(null)
      setItem(null)
      setTree(null)

      try {
        const registryItem = await getRegistryItem(slug)

        if (!mounted) return

        if (!registryItem) {
          setStatus('not-found')
          return
        }

        setItem(registryItem)

        if (registryItem.files?.length) {
          const fileTree = createFileTreeForRegistryItemFiles(
            registryItem.files,
          )
          setTree(fileTree)

          const firstFile = registryItem.files[1] ?? registryItem.files[0]
          setActiveFile(firstFile.target ?? firstFile.path)
        }

        setStatus('success')
      } catch (err) {
        console.error(err)
        if (!mounted) return
        setError('Failed to load block data')
        setStatus('error')
      }
    }

    loadItem()

    return () => {
      mounted = false
    }
  }, [slug])

  const refreshPreview = React.useCallback(() => {
    setIsLoading(true)
    setIframeKey((k) => k + 1)
  }, [])

  React.useEffect(() => {
    if (status !== 'success') return

    setIsLoading(true)
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [iframeKey, slug, status])

  if (status === 'loading') {
    return (
      <div className="flex h-44 items-center justify-center rounded-xl border md:h-160">
        <p className="text-muted-foreground text-sm">Loading block…</p>
      </div>
    )
  }

  if (status === 'not-found') {
    return (
      <div className="flex h-96 flex-col items-center justify-center gap-2 rounded-xl border text-center">
        <p className="text-lg font-medium">
          <code className="bg-muted rounded-md px-2 py-1">
            {category}/{slug}
          </code>{' '}
          not found
        </p>
        <p className="text-muted-foreground text-sm">
          The block does not exist or was removed.
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex h-96 flex-col items-center justify-center gap-2 rounded-xl border text-center">
        <p className="text-lg font-medium">Something went wrong</p>
        <p className="text-muted-foreground text-sm">
          {error ?? 'Unexpected error'}
        </p>
      </div>
    )
  }

  return (
    <BlockEditorContext.Provider
      value={{
        item: item!,
        config,
        view,
        setView,
        activeFile,
        setActiveFile,
        tree,
        previewSize,
        setPreviewSize,
        resizablePanelRef,
        iframeKey,
        refreshPreview,
        isLoading,
        setIsLoading,
        category,
        previewSrc,
        iframeHeight,
      }}
    >
      <div className="flex min-w-0 flex-col gap-4">{children}</div>
    </BlockEditorContext.Provider>
  )
}
