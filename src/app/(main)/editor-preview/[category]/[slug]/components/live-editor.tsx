'use client'

import * as React from 'react'
import { Eye, PanelLeft } from 'lucide-react'
import Link from 'next/link'

import type { BlockItem } from '@/lib/blocks-source'
import {
  blocks,
  getBlockDefaultsFromRegistry,
  getBlockEditorFields,
} from '@/lib/blocks-source'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { EditorLayout } from './editor-layout'

interface LiveEditorProps {
  item: BlockItem
  category: string
}

export function LiveEditor({ item, category }: Readonly<LiveEditorProps>) {
  const EditorFields = getBlockEditorFields(item.slug)
  const defaults = getBlockDefaultsFromRegistry(item.slug)
  const [props, setProps] = React.useState<Record<string, unknown>>(defaults)
  const [sidebarOpen, setSidebarOpen] = React.useState(true)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)

  const categorySlug = blocks.find((c) =>
    c.blocks.some((b) => b.slug === item.slug),
  )?.slug

  function sendPropsToIframe(currentProps: Record<string, unknown>) {
    iframeRef.current?.contentWindow?.postMessage(
      { type: 'EDITOR_PROPS_UPDATE', props: currentProps },
      globalThis.location.origin,
    )
  }

  function handleUpdate(newProps: Record<string, unknown>) {
    setProps(newProps)
    sendPropsToIframe(newProps)
  }

  function handleIframeLoad() {
    sendPropsToIframe(props)
  }

  if (!EditorFields) {
    return (
      <div className="flex h-full items-center justify-center p-4">
        <p className="text-muted-foreground text-sm">
          Editor not found for: {item.slug}
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <Button
              variant="outline"
              size="sm"
              className="shrink-0"
              onClick={() => setSidebarOpen((v) => !v)}
            >
              <PanelLeft />
              {sidebarOpen ? 'Hide Props' : 'Show Props'}
            </Button>
            <div className="flex items-center gap-4">
              <Separator orientation="vertical" className="h-4" />
            </div>
          </div>
          <span className="text-sm font-semibold">{item.name}</span>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link
            href={`/docs/${categorySlug}/${item.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye className="size-4" />
            Docs
          </Link>
        </Button>
      </nav>
      <EditorLayout>
        <EditorLayout.Sidebar open={sidebarOpen}>
          <EditorFields props={props} onUpdate={handleUpdate} />
        </EditorLayout.Sidebar>
        <EditorLayout.Preview>
          <div className="h-[calc(100vh-10rem)] overflow-hidden rounded-lg border 2xl:max-h-200">
            <iframe
              ref={iframeRef}
              src={`/preview-editor/${category}/${item.slug}`}
              title="Block preview"
              className="h-full w-full border-0"
              onLoad={handleIframeLoad}
            />
          </div>
        </EditorLayout.Preview>
      </EditorLayout>
    </div>
  )
}
