'use client'

import { useState } from 'react'
import { XIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

const initialTags = ['Design', 'Engineering', 'Marketing', 'Sales']

export function Badge08() {
  const [tags, setTags] = useState(initialTags)

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
          <button
            type="button"
            onClick={() => setTags((prev) => prev.filter((t) => t !== tag))}
            aria-label={`Remove ${tag}`}
            className="data-[icon=inline-end]:-mr-0.5 rounded-full opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
            data-icon="inline-end"
          >
            <XIcon className="size-3" />
          </button>
        </Badge>
      ))}
      {tags.length === 0 && (
        <button
          type="button"
          onClick={() => setTags(initialTags)}
          className="text-muted-foreground text-xs underline-offset-4 hover:underline"
        >
          Reset
        </button>
      )}
    </div>
  )
}
