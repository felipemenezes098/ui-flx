'use client'

import * as React from 'react'

import { getBlockBySlug } from '@/lib/catalog'

import { BlockPreviewToolbar } from './block-preview-toolbar'

type BlockLiveEditorContextValue = {
  category: string
  slug: string
  props: Record<string, unknown>
  handleUpdate: (newProps: Record<string, unknown>) => void
  iframeRef: React.RefObject<HTMLIFrameElement | null>
  handleIframeLoad: () => void
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const BlockLiveEditorContext =
  React.createContext<BlockLiveEditorContextValue | null>(null)

export function useBlockLiveEditorOptional() {
  return React.useContext(BlockLiveEditorContext)
}

function useBlockLiveEditor() {
  const ctx = React.useContext(BlockLiveEditorContext)
  if (!ctx) throw new Error('Must be used inside BlockLiveEditor')
  return ctx
}

export function BlockLiveEditorRoot({
  category,
  slug,
  children,
}: Readonly<{ category: string; slug: string; children: React.ReactNode }>) {
  const manifest = getBlockBySlug(slug)
  const defaults = (manifest?.defaults ?? {}) as Record<string, unknown>
  const [props, setProps] = React.useState<Record<string, unknown>>(defaults)
  const [expanded, setExpanded] = React.useState(false)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)

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

  const contextValue = React.useMemo(
    () => ({
      category,
      slug,
      props,
      handleUpdate,
      iframeRef,
      handleIframeLoad,
      expanded,
      setExpanded,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, slug, props, expanded],
  )

  return (
    <BlockLiveEditorContext.Provider value={contextValue}>
      {children}
    </BlockLiveEditorContext.Provider>
  )
}

export function BlockLiveEditorFields() {
  const { slug, props, handleUpdate } = useBlockLiveEditor()
  const manifest = getBlockBySlug(slug)
  const EditorFields = manifest?.editorFields

  if (!EditorFields) return null

  return <EditorFields props={props} onUpdate={handleUpdate} />
}

export function BlockLiveEditorPreview() {
  const { category, slug, iframeRef, handleIframeLoad } = useBlockLiveEditor()

  return (
    <div className="bg-muted/50 dark:bg-muted/20 relative h-[600px] w-full overflow-hidden rounded-lg border md:h-[80vh] lg:h-[85vh] xl:h-[88vh] 2xl:h-[600px]">
      <iframe
        ref={iframeRef}
        src={`/preview-editor/${category}/${slug}`}
        title="Block preview"
        className="h-full w-full"
        onLoad={handleIframeLoad}
      />
      <BlockPreviewToolbar />
    </div>
  )
}
