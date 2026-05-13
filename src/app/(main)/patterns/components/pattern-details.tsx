'use client'

import { useState } from 'react'
import { CodeIcon } from 'lucide-react'
import type { RegistryItem } from 'shadcn/schema'

import { useQuery } from '@tanstack/react-query'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CodeBlockCommand } from '@/components/core/code/code-block-command'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { siteConfig } from '@/config/site'

interface PatternDetailsProps {
  item: RegistryItem
}

export function PatternDetails({ item }: PatternDetailsProps) {
  const [open, setOpen] = useState(false)

  const { data: code, isLoading } = useQuery({
    queryKey: ['pattern-code', item.name],
    queryFn: async () => {
      const res = await fetch(`/r/${item.name}.json`)
      if (!res.ok) return ''
      const data = await res.json()
      return (data.files?.[0]?.content ?? '') as string
    },
    staleTime: Infinity,
    enabled: open,
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground size-7"
          aria-label="View code"
        >
          <CodeIcon className="size-3.5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>
        <div className="flex max-w-full min-w-0 flex-col gap-2">
          <CodeBlockCommand
            command={`shadcn@latest add @${siteConfig.codeName}/${item.name}`}
          />
          {isLoading && (
            <div className="bg-muted h-48 animate-pulse rounded-xl" />
          )}
          {!isLoading && code && (
            <CodeBlock>
              <CodeBlockCode code={code} language="tsx" withCopy />
            </CodeBlock>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
