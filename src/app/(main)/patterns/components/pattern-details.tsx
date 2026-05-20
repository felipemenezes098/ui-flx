'use client'

import { useState } from 'react'
import { BrainIcon, CodeIcon } from 'lucide-react'
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
  const [openCode, setOpenCode] = useState(false)
  const [openPrompt, setOpenPrompt] = useState(false)

  const { data: code, isLoading } = useQuery({
    queryKey: ['pattern-code', item.name],
    queryFn: async () => {
      const res = await fetch(`/r/${item.name}.json`)
      if (!res.ok) return ''
      const data = await res.json()
      return (data.files?.[0]?.content ?? '') as string
    },
    staleTime: Infinity,
    enabled: openCode,
  })

  return (
    <div className="flex items-center gap-0.5">
      <Dialog open={openPrompt} onOpenChange={setOpenPrompt}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            aria-label="AI prompt"
            className="text-muted-foreground hover:text-foreground gap-1.5"
          >
            <BrainIcon className="size-3" />
            AI
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
      <Dialog open={openCode} onOpenChange={setOpenCode}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            aria-label="View code"
            className="text-muted-foreground hover:text-foreground gap-1.5"
          >
            <CodeIcon className="size-3" />
            Code
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
    </div>
  )
}
