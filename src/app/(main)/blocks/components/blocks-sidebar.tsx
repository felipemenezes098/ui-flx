'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { PanelLeftCloseIcon } from 'lucide-react'

import { isAllCategories } from '../lib/blocks-category'
import {
  allBlocksHref,
  categoryFilterHref,
  presetFilterHref,
} from '../lib/blocks-filter-url'
import {
  getAllBlocksCount,
  getCategoryBlockCount,
  getPresetBlockCount,
  getValidPresetSlug,
  isAllPresets,
} from '../lib/blocks-preset'
import { useBlocksNavCategories } from '../hooks/use-blocks-nav-category'
import { BlocksFilterChip } from './blocks-filter-chip'
import { Button } from '@/components/ui/button'
import { blockCategories, blockPresets } from '@/lib/blocks/block-catalog'

function Section({
  label,
  children,
}: Readonly<{
  label: string
  children: React.ReactNode
}>) {
  return (
    <div className="space-y-2.5">
      <p className="text-muted-foreground text-sm">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  )
}

export function BlocksSidebar({
  onHide,
}: Readonly<{
  onHide: () => void
}>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const navCategories = useBlocksNavCategories()
  const activeCategories = navCategories ?? []
  const activePreset = getValidPresetSlug(searchParams.get('preset'))
  const presetIsAll = isAllPresets(activePreset)
  const categoryIsAll = isAllCategories(activeCategories)
  const isAllActive = categoryIsAll && presetIsAll

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-1 pr-3">
        <div className="mb-4 flex items-center justify-between gap-2">
          <p className="text-sm font-medium">Filters</p>
          <Button
            type="button"
            variant="outline"
            size="icon-xs"
            onClick={onHide}
            aria-label="Hide filters"
            className="shrink-0 transition-none"
          >
            <PanelLeftCloseIcon />
          </Button>
        </div>

        <nav className="flex flex-col gap-4 pb-6">
          <Section label="View">
            <BlocksFilterChip
              href={allBlocksHref(pathname, searchParams)}
              active={isAllActive}
              label="All blocks"
              count={getAllBlocksCount()}
            />
          </Section>

          <Section label="Presets">
            {blockPresets.map((preset) => (
              <BlocksFilterChip
                key={preset.id}
                href={presetFilterHref(
                  pathname,
                  searchParams,
                  preset.id,
                  activePreset,
                )}
                active={activePreset === preset.id}
                label={preset.name}
                count={getPresetBlockCount(preset.id)}
              />
            ))}
          </Section>

          <Section label="Categories">
            {blockCategories.map((block) => (
              <BlocksFilterChip
                key={block.slug}
                href={categoryFilterHref(
                  pathname,
                  searchParams,
                  block.slug,
                  activeCategories,
                )}
                active={activeCategories.includes(block.slug)}
                label={block.category}
                count={getCategoryBlockCount(block.slug, activePreset)}
              />
            ))}
          </Section>
        </nav>
      </div>
    </div>
  )
}
