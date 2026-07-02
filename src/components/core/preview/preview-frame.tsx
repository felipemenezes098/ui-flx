'use client'

import * as React from 'react'

import { Loader } from 'lucide-react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { cn } from '@/lib/utils'

/**
 * Reload/loading state for a preview iframe. Shared by the tabs viewer (via
 * context) and the standalone frame so both get identical refresh behaviour.
 */
export function usePreviewReload() {
  const [reloadKey, setReloadKey] = React.useState(0)
  const [loading, setLoading] = React.useState(true)

  const refresh = React.useCallback(() => {
    setLoading(true)
    setReloadKey((k) => k + 1)
  }, [])

  const handleLoad = React.useCallback(() => setLoading(false), [])

  return { reloadKey, loading, refresh, handleLoad }
}

export const previewPanelClass =
  'relative w-full overflow-hidden rounded-lg border'

export const previewFallbackHeightClass = 'h-[600px] md:h-[80vh]'

interface PreviewFrameProps {
  src: string
  title?: string
  height?: number
  reloadKey: number
  loading: boolean
  onLoad: () => void
  className?: string
}

/**
 * Generic, domain-agnostic preview surface: a resizable iframe with a loading
 * overlay. Controlled — the caller owns reload/loading state (usePreviewReload).
 */
export function PreviewFrame({
  src,
  title = 'Preview',
  height,
  reloadKey,
  loading,
  onLoad,
  className,
}: Readonly<PreviewFrameProps>) {
  return (
    <div
      className={cn(
        previewPanelClass,
        'bg-muted/50 dark:bg-muted/20',
        !height && previewFallbackHeightClass,
        className,
      )}
      style={height ? { height } : undefined}
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
            title={title}
            loading="lazy"
            className={cn(
              'h-full w-full transition-opacity duration-200',
              loading && 'opacity-0',
            )}
            onLoad={onLoad}
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
  )
}
