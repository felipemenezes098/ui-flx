'use client'

import { useEffect, useState } from 'react'
import { SearchIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Spinner } from '@/components/ui/spinner'

export function Loading03() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) return setLoading(false)
    // debounce: wait for typing to settle before firing the request
    const debounce = setTimeout(() => setLoading(true), 400)
    const settle = setTimeout(() => setLoading(false), 1300)
    return () => {
      clearTimeout(debounce)
      clearTimeout(settle)
    }
  }, [query])

  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground size-4" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Search projects…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {loading && (
        <InputGroupAddon align="inline-end">
          <Spinner className="text-muted-foreground size-4" />
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}
