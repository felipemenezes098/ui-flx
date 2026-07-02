'use client'

import * as React from 'react'

import { Fullscreen, Loader, Palette, RotateCcw } from 'lucide-react'
import Link from 'next/link'

import { RegistryCli } from '@/components/core/registry/registry-cli'
import { Button } from '@/components/ui/button'
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
  const [loading, setLoading] = React.useState(true)

  const src = variation
    ? `/preview/${category}/${slug}/${variation}`
    : `/preview/${category}/${slug}`

  const editSrc = variation
    ? `/preview-editor/${category}/${slug}/${variation}`
    : `/preview-editor/${category}/${slug}`

  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      <div className="flex items-center justify-end gap-0.5">
        <RegistryCli
          registryName={slug}
          className="w-fit max-w-none"
          labelClassName="hidden"
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          title="Refresh preview"
          aria-label="Refresh preview"
          className="rounded-lg"
          onClick={() => {
            setLoading(true)
            setReloadKey((k) => k + 1)
          }}
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
        <Button
          variant="outline"
          size="sm"
          title="Edit block"
          aria-label="Edit block"
          className="rounded-lg"
          asChild
        >
          <Link href={editSrc}>
            <Palette className="size-3.5 shrink-0" />
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
        {loading && (
          <div className="bg-muted/50 dark:bg-muted/20 absolute inset-0 flex items-center justify-center">
            <Loader className="text-muted-foreground size-4 animate-spin" />
          </div>
        )}
        <iframe
          key={reloadKey}
          src={src}
          title="Block preview"
          loading="lazy"
          className={cn(
            'h-full w-full transition-opacity duration-200',
            loading && 'opacity-0',
          )}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  )
}
