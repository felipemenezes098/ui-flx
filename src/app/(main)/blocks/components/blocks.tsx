'use client'

import { EyeIcon, Palette } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

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
import { BlocksNavigation } from './blocks-navigation'
import { Button } from '@/components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { getValidBlocksCategorySlug } from '@/app/(main)/blocks/lib/blocks-category'
import { blocks } from '@/lib/catalog'
import { cn } from '@/lib/utils'

export function Blocks() {
  const searchParams = useSearchParams()
  const { resolvedTheme } = useTheme()

  const activeTab = getValidBlocksCategorySlug(searchParams.get('category'))

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
          const offset = 50
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
    <div className="space-y-6">
      <div className="bg-background sticky top-14 z-30 w-full lg:hidden">
        <BlocksNavigation />
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
                          <div className="flex items-center">
                            <Separator
                              orientation="vertical"
                              className="h-5! shrink-0"
                            />
                          </div>
                          <BlockEditorTools />
                        </div>
                        <div className="flex shrink-0 flex-wrap items-center gap-4">
                          <BlockEditorCli />
                          <div className="flex items-center">
                            <Separator
                              orientation="vertical"
                              className="h-5!"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button asChild variant="outline" size="sm">
                              <Link
                                href={`/editor-preview/${block.slug}/${subBlock.slug}`}
                                className="flex items-center gap-1.5"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Palette className="size-4 shrink-0" />
                                <span>Edit</span>
                              </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                              <Link
                                href={`/docs/${block.slug}/${subBlock.slug}`}
                                className="flex items-center gap-1.5"
                              >
                                <EyeIcon className="size-4 shrink-0" />
                                <span>Details</span>
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
                      <Link
                        href={`/docs/${block.slug}/${subBlock.slug}`}
                        className="group border-border overflow-hidden rounded-xl border"
                      >
                        <div className="bg-muted group-hover:bg-accent-foreground/6 dark:group-hover:bg-accent-foreground/20 p-3">
                          <div className="rounded-lg bg-white p-3">
                            <Image
                              src={
                                resolvedTheme === 'dark'
                                  ? subBlock.image.dark
                                  : subBlock.image.light
                              }
                              alt={subBlock.name}
                              data-block={subBlock.name}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="h-auto w-full"
                            />
                          </div>
                        </div>
                      </Link>
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
    </div>
  )
}
