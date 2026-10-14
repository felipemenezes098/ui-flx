'use client'

import { Columns2, Rows2 } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useConfig } from '@/hooks/use-config'

const layouts = ['list', 'grid'] as const

type BlocksLayout = (typeof layouts)[number]

function isBlocksLayout(value: string | undefined): value is BlocksLayout {
  return layouts.some((layout) => layout === value)
}

export function BlocksLayoutToggle() {
  const [config, setConfig] = useConfig()
  const layout = config.blocksLayout ?? 'list'

  function handleChange(value: string[]) {
    const next = value[0]
    if (isBlocksLayout(next)) {
      setConfig({ ...config, blocksLayout: next })
    }
  }

  return (
    <ToggleGroup
      value={[layout]}
      onValueChange={handleChange}
      size="sm"
      spacing={1}
      aria-label="Layout"
      className="hidden md:flex"
    >
      <ToggleGroupItem value="list" aria-label="One column">
        <Rows2 className="size-3.5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Two columns">
        <Columns2 className="size-3.5" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
