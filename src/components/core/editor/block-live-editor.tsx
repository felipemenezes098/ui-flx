'use client'

import * as React from 'react'

import type { PresetId } from 'registry/presets/presets-config'
import { getBlockBySlug } from '@/lib/catalog'
import {
  FALLBACK_PRESET,
  readPresetFromStorage,
  writePresetToStorage,
} from '@/lib/preset-storage'

import { BlockPreviewToolbar } from './block-preview-toolbar'

type BlockLiveEditorContextValue = {
  category: string
  slug: string
  props: Record<string, unknown>
  handleUpdate: (newProps: Record<string, unknown>) => void
  preset: PresetId
  setPreset: (next: PresetId) => void
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
  const [preset, setPresetState] = React.useState<PresetId>(FALLBACK_PRESET)
  const [expanded, setExpanded] = React.useState(false)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)

  const propsRef = React.useRef(props)
  const presetRef = React.useRef(preset)
  propsRef.current = props
  presetRef.current = preset

  React.useLayoutEffect(() => {
    const stored = readPresetFromStorage()
    if (stored) {
      setPresetState(stored)
      presetRef.current = stored
    }
  }, [])

  const broadcast = React.useCallback(() => {
    const win = iframeRef.current?.contentWindow
    if (!win) return
    const origin = globalThis.location.origin
    win.postMessage(
      { type: 'EDITOR_PROPS_UPDATE', props: propsRef.current },
      origin,
    )
    win.postMessage(
      { type: 'EDITOR_PRESET_UPDATE', preset: presetRef.current },
      origin,
    )
  }, [])

  function handleUpdate(newProps: Record<string, unknown>) {
    setProps(newProps)
    propsRef.current = newProps
    broadcast()
  }

  function setPreset(next: PresetId) {
    setPresetState(next)
    presetRef.current = next
    writePresetToStorage(next)
    broadcast()
  }

  function handleIframeLoad() {
    broadcast()
  }

  const contextValue = React.useMemo(
    () => ({
      category,
      slug,
      props,
      handleUpdate,
      preset,
      setPreset,
      iframeRef,
      handleIframeLoad,
      expanded,
      setExpanded,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, slug, props, preset, expanded],
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
    <div className="bg-muted/50 dark:bg-muted/20 relative h-[600px] w-full overflow-hidden rounded-lg border md:h-[80vh] lg:h-[85vh] xl:h-[88vh]">
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
