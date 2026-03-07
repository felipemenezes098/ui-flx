'use client'

import { EyeIcon, Palette } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { BlockEditor } from '@/components/core/editor/block-editor'
import {
  BlockEditorCodeContainer,
  BlockEditorCodeView,
  BlockEditorFileTree,
} from '@/components/core/editor/block-editor-code'
import { BlockEditorPreview } from '@/components/core/editor/block-editor-preview'
import {
  BlockEditorCli,
  BlockEditorTabs,
  BlockEditorTools,
} from '@/components/core/editor/block-editor-toolbar'
import { ScrollFadeEdges } from '@/components/flx/blocks/shared/scroll-fade-edges'
import { Button } from '@/components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { blocks } from '@/lib/block-registry'
import { cn } from '@/lib/utils'

function getValidCategorySlug(slug: string | null): string {
  if (!slug) return blocks[0]?.slug ?? 'hero'
  const exists = blocks.some((b) => b.slug === slug)
  return exists ? slug : (blocks[0]?.slug ?? 'hero')
}

export function Blocks() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const activeTab = getValidCategorySlug(searchParams.get('category'))

  const visitedRef = useRef<Set<string>>(new Set())
  visitedRef.current.add(activeTab)

  useEffect(() => {
    const hash =
      globalThis.window === undefined
        ? ''
        : globalThis.window.location.hash.slice(1)
    if (hash) {
      const scrollToBlock = () => {
        const el = document.getElementById(hash)
        if (el) {
          const offset = 180
          const y =
            el.getBoundingClientRect().top +
            (globalThis.window?.scrollY ?? 0) -
            offset
          globalThis.window?.scrollTo({
            top: Math.max(0, y),
            behavior: 'smooth',
          })
        }
      }
      const t = setTimeout(scrollToBlock, 150)
      return () => clearTimeout(t)
    }
  }, [activeTab])

  return (
    <section className="grid grid-cols-1 gap-6">
      <div className="bg-background sticky top-[55px] z-30 w-full">
        <ScrollFadeEdges
          direction="horizontal"
          className="w-full"
          scrollClassName="py-3 no-scrollbar"
          fadeWidth={50}
        >
          <div className="inline-flex h-auto w-max flex-nowrap gap-2 p-0">
            {blocks.map((block) => {
              const isActive = activeTab === block.slug
              const params = new URLSearchParams(searchParams.toString())
              params.set('category', block.slug)
              const href = `${pathname}?${params.toString()}`
              return (
                <Link
                  key={block.slug}
                  href={href}
                  className={cn(
                    'flex shrink-0 flex-col items-center gap-1.5 rounded-xl border transition-all',
                    'border-border hover:border-primary p-1',
                    isActive && 'border-primary',
                  )}
                  aria-current={isActive ? 'true' : undefined}
                  aria-label={block.category}
                >
                  <div className="rounded-t-lg bg-white p-1">
                    <div className="relative h-14 min-h-14 w-28 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={block.image}
                        alt=""
                        fill
                        className="object-contain object-center"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <span className="px-2 text-xs font-medium">
                    {block.category}
                  </span>
                </Link>
              )
            })}
          </div>
        </ScrollFadeEdges>
      </div>
      {blocks.map((block) => {
        if (!visitedRef.current.has(block.slug)) return null
        const isActive = activeTab === block.slug
        return (
          <div
            key={block.slug}
            className={cn(
              'transition-opacity duration-300',
              isActive ? 'opacity-100' : 'hidden opacity-0',
            )}
            role="tabpanel"
            aria-hidden={!isActive}
          >
            <div className="grid grid-cols-1 gap-6">
              {block.blocks.map((subBlock) => (
                <div
                  key={subBlock.slug}
                  id={`${block.slug}-${subBlock.slug}`}
                  className="flex flex-col gap-4"
                >
                  <BlockEditor category={block.slug} slug={subBlock.slug}>
                    <div className="hidden flex-col gap-4 md:flex">
                      <div className="flex w-full flex-wrap justify-between gap-4 pr-4 pl-1 xl:flex-row xl:items-center">
                        <div className="flex min-w-0 items-center gap-4 xl:flex-1">
                          <BlockEditorTabs />
                          <Separator
                            orientation="vertical"
                            className="!h-5 shrink-0"
                          />
                          <p className="min-w-0 truncate text-sm font-medium">
                            {subBlock.description}
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-wrap items-center gap-4">
                          <BlockEditorTools />
                          <Separator orientation="vertical" className="!h-5" />
                          <BlockEditorCli />
                          <Separator orientation="vertical" className="!h-5" />
                          <div className="group/actions flex items-center gap-2">
                            <Button asChild variant="outline" size="sm">
                              <Link
                                href={`/editor-preview/${block.slug}/${subBlock.slug}`}
                                className="flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Palette className="size-4 shrink-0" />

                                <span className="-ml-1.5 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover/actions:ml-1 group-hover/actions:max-w-20 group-hover/actions:opacity-100">
                                  Edit
                                </span>
                              </Link>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="group"
                            >
                              <Link
                                href={`/docs/${block.slug}/${subBlock.slug}`}
                                className="flex items-center"
                              >
                                <EyeIcon className="size-4 shrink-0" />

                                <span className="-ml-1.5 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover/actions:ml-1 group-hover/actions:max-w-20 group-hover/actions:opacity-100">
                                  Details
                                </span>
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <BlockEditorPreview />
                      <BlockEditorCodeContainer>
                        <ResizablePanelGroup orientation="horizontal">
                          <ResizablePanel
                            defaultSize="30%"
                            minSize="20%"
                            maxSize="50%"
                          >
                            <BlockEditorFileTree />
                          </ResizablePanel>
                          <ResizableHandle withHandle />
                          <ResizablePanel defaultSize="70%" minSize="20%">
                            <BlockEditorCodeView />
                          </ResizablePanel>
                        </ResizablePanelGroup>
                      </BlockEditorCodeContainer>
                    </div>
                    <div className="flex flex-col gap-4 md:hidden">
                      <div className="flex items-center justify-between gap-2 px-2">
                        <div className="line-clamp-1 text-sm font-medium">
                          {subBlock.description}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="h-6.5 w-fit"
                        >
                          <Link href={`/docs/${block.slug}/${subBlock.slug}`}>
                            <EyeIcon className="size-3.5 shrink-0" />
                            <span className="text-xs">View</span>
                          </Link>
                        </Button>
                      </div>
                      <div className="overflow-hidden rounded-xl border bg-white p-3">
                        <Link href={`/docs/${block.slug}/${subBlock.slug}`}>
                          <Image
                            src={subBlock.image}
                            alt={subBlock.name}
                            data-block={subBlock.name}
                            width={1440}
                            height={900}
                            className="object-cover"
                          />
                        </Link>
                      </div>
                    </div>
                  </BlockEditor>
                  {/* <BlockEditorDisplay
                    category={block.slug}
                    slug={subBlock.slug}
                  /> */}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
