'use client'

import * as React from 'react'

import { Check, Fullscreen, RotateCcw, Terminal } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useCopy } from '@/hooks/use-copy'
import { cn } from '@/lib/utils'

interface BlockPreviewFrameProps {
  category: string
  slug: string
  variation?: string
  iframeHeight?: number
  className?: string
}

export function BlockPreviewFrame({
  category,
  slug,
  variation,
  iframeHeight,
  className,
}: Readonly<BlockPreviewFrameProps>) {
  const [reloadKey, setReloadKey] = React.useState(0)
  const { copied, copy } = useCopy()

  const src = variation
    ? `/preview/${category}/${slug}/${variation}`
    : `/preview/${category}/${slug}`

  const installCommand = `shadcn@latest add @flx/${slug}`

  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      <div className="flex items-center justify-end gap-0.5">
        <Button
          type="button"
          variant="outline"
          size="sm"
          title="Copy install command"
          aria-label="Copy install command"
          className="rounded-lg"
          onClick={() => copy(installCommand)}
        >
          {copied ? (
            <Check className="size-3.5 shrink-0" />
          ) : (
            <Terminal className="size-3.5 shrink-0" />
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          title="Refresh preview"
          aria-label="Refresh preview"
          className="rounded-lg"
          onClick={() => setReloadKey((k) => k + 1)}
        >
          <RotateCcw className="size-3.5 shrink-0" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          title="Open fullscreen"
          aria-label="Open fullscreen"
          className="rounded-lg"
          asChild
        >
          <Link href={src} target="_blank">
            <Fullscreen className="size-3.5 shrink-0" />
          </Link>
        </Button>
      </div>

      <div
        className={cn(
          'bg-muted/50 dark:bg-muted/20 relative w-full overflow-hidden rounded-lg border',
          !iframeHeight && 'h-[600px] md:h-[80vh]',
        )}
        style={iframeHeight ? { height: iframeHeight } : undefined}
      >
        <iframe
          key={reloadKey}
          src={src}
          title="Block preview"
          loading="lazy"
          className="h-full w-full"
        />
      </div>
    </div>
  )
}
