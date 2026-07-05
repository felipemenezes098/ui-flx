'use client'

import * as React from 'react'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getBlockBySlug } from '@/lib/blocks/block-catalog'

interface PreviewEditorProps {
  category: string
  slug: string
  variation?: string
}

export function PreviewEditor({
  category,
  slug,
  variation,
}: Readonly<PreviewEditorProps>) {
  const manifest = getBlockBySlug(slug)
  const EditorFields = manifest?.editorFields
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const [props, setProps] = React.useState<Record<string, unknown>>(() => {
    const variationProps = variation
      ? manifest?.variationDefaults?.[variation]
      : undefined
    return (variationProps ?? manifest?.defaults ?? {}) as Record<
      string,
      unknown
    >
  })

  const frameSrc = `/block-editor/frame/${category}/${slug}`

  const postProps = React.useCallback((next: Record<string, unknown>) => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: 'preview-editor:props', props: next },
      '*',
    )
  }, [])

  React.useEffect(() => {
    function onReady(event: MessageEvent) {
      if (event.data?.type === 'preview-editor:ready') postProps(props)
    }
    window.addEventListener('message', onReady)
    return () => window.removeEventListener('message', onReady)
  }, [props, postProps])

  const handleUpdate = (next: Record<string, unknown>) => {
    setProps(next)
    postProps(next)
  }

  if (!manifest) return null

  return (
    <div className="flex min-h-screen w-full flex-col lg:h-screen lg:min-h-0">
      <header className="flex shrink-0 items-center gap-3 border-b px-4 py-3">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/blocks/${category}/${slug}`}>
            <ArrowLeft className="size-4" />
            Back
          </Link>
        </Button>
        <span className="text-sm font-medium">{manifest.name}</span>
        {variation && (
          <span className="text-muted-foreground text-xs">/ {variation}</span>
        )}
      </header>

      <div className="flex flex-1 flex-col-reverse lg:min-h-0 lg:flex-row">
        <aside className="scroll-fade no-scrollbar w-full overflow-y-auto border-t p-4 lg:w-[340px] lg:border-t-0 lg:border-r">
          {EditorFields ? (
            <EditorFields props={props} onUpdate={handleUpdate} />
          ) : (
            <p className="text-muted-foreground text-sm italic">
              No editor available for this block.
            </p>
          )}
        </aside>

        <main className="bg-muted/50 dark:bg-muted/20 h-[60vh] w-full overflow-hidden lg:h-auto lg:flex-1">
          <iframe
            ref={iframeRef}
            src={frameSrc}
            title="Block preview"
            className="h-full w-full"
          />
        </main>
      </div>
    </div>
  )
}
