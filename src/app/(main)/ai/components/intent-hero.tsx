'use client'

import { AlertCircle, ArrowRight, Check, CopyIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

interface IntentHeroProps {
  name: string
  best: string
  caveat: string
  prompt: string
  children: ReactNode
}

export function IntentHero({
  name,
  best,
  caveat,
  prompt,
  children,
}: Readonly<IntentHeroProps>) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await copyToClipboard(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-card relative overflow-hidden rounded-2xl border shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <span className="relative flex size-2">
            <span className="bg-primary/60 absolute inline-flex size-full animate-ping rounded-full" />
            <span className="bg-primary relative inline-flex size-2 rounded-full" />
          </span>
          {name}
          <span className="text-primary text-xs font-medium tracking-wide uppercase">
            · Recommended
          </span>
        </span>
      </div>

      <div className="grid lg:h-[30rem] lg:grid-cols-2">
        <div className="flex flex-col border-b lg:border-r lg:border-b-0">
          <div className="bg-muted/20 dark:bg-background/40 relative flex flex-1 items-center justify-center [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px] p-8 md:p-12">
            <div className="bg-background/0 relative">{children}</div>
          </div>
          <div className="flex flex-col gap-2 border-t px-5 py-4 text-sm">
            <div className="grid grid-cols-[auto_1fr] gap-x-2.5">
              <Check
                className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                aria-hidden
              />
              <p className="text-muted-foreground leading-relaxed">{best}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-2.5">
              <AlertCircle
                className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden
              />
              <p className="text-muted-foreground/80 leading-relaxed">
                {caveat}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 dark:bg-background/30 flex min-h-0 flex-col">
          <div className="flex items-center justify-between gap-2 border-b px-4 py-2">
            <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs font-medium">
              <span className="text-primary font-mono">$</span>
              Prompt
            </span>
            <Button
              type="button"
              size="xs"
              variant="outline"
              onClick={handleCopy}
              className="h-7 gap-1.5"
            >
              {copied ? (
                <Check className="size-3.5 text-green-400" aria-hidden />
              ) : (
                <CopyIcon className="size-3.5" aria-hidden />
              )}
              {copied ? 'Copied' : 'Copy prompt'}
            </Button>
          </div>
          <pre className="text-muted-foreground max-h-72 flex-1 overflow-auto p-5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap lg:max-h-none">
            {prompt}
          </pre>
          <div className="border-t px-5 py-3">
            <p className="text-muted-foreground inline-flex items-center gap-1.5 text-xs">
              <ArrowRight className="size-3 shrink-0" aria-hidden />
              Paste into your AI tool and adapt it to your scenario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
