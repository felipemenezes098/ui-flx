'use client'

import { Loader2Icon } from 'lucide-react'
import * as React from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { cn } from '@/lib/utils'

import { useBlockEditor } from './block-editor'

export function BlockEditorPreview() {
  const {
    item,
    config,
    iframeKey,
    previewSrc,
    isLoading,
    setIsLoading,
    view,
    resizablePanelRef,
    iframeHeight,
  } = useBlockEditor()

  if (!item || view !== 'preview') {
    return null
  }

  const height =
    iframeHeight ?? item.meta?.iframeHeight ?? config.meta?.iframeHeight ?? 600
  const src = previewSrc ?? `/preview/content/${item.name}`

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative grid w-full gap-4">
      <div className="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"></div>
      <ResizablePanelGroup
        orientation="horizontal"
        className="after:bg-surface/50 relative z-10 after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl"
      >
        <ResizablePanel
          panelRef={resizablePanelRef}
          className="bg-background relative aspect-[4/2.5] overflow-hidden rounded-lg border md:aspect-auto md:rounded-xl"
          defaultSize="100%"
          minSize="30%"
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ height: `${height}px` }}
          >
            <div
              className={cn(
                'bg-background/80 absolute inset-0 z-30 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300',
                isLoading ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <Loader2Icon className="text-muted-foreground h-6 w-6 animate-spin" />
                <p className="text-muted-foreground text-sm font-medium">
                  Loading preview...
                </p>
              </div>
            </div>

            <iframe
              key={`${src}-${iframeKey}`}
              src={src}
              title="Preview"
              loading="lazy"
              className="no-scrollbar relative z-20 h-full w-full border-0"
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 focus-visible:ring-0 focus-visible:ring-offset-0 md:block" />
        <ResizablePanel defaultSize="0%" minSize="0%" />
      </ResizablePanelGroup>
    </div>
  )
}
