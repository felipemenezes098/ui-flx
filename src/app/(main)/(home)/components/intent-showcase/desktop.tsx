'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, CornerDownLeft } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { showcaseIntents, type ShowcaseIntent } from './intents'

type Message =
  | { id: number; role: 'user'; text: string }
  | { id: number; role: 'assistant'; intent: ShowcaseIntent }

const FIRST = showcaseIntents[0]

export function IntentShowcaseDesktop() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'user', text: FIRST.prompt },
    { id: 1, role: 'assistant', intent: FIRST },
  ])
  const [active, setActive] = useState<ShowcaseIntent>(FIRST)
  const [typing, setTyping] = useState(false)
  const nextId = useRef(2)
  const threadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = threadRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function ask(intent: ShowcaseIntent) {
    if (typing || intent.slug === active.slug) return

    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, role: 'user', text: intent.prompt },
    ])
    setTyping(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: 'assistant', intent },
      ])
      setActive(intent)
      setTyping(false)
    }, 700)
  }

  return (
    <Card className="dark:bg-background hidden gap-0 py-0 shadow-sm md:block">
      <div className="grid grid-cols-5">
        <div className="relative col-span-2 border-r">
          <div className="absolute inset-0 flex flex-col">
            <div
              ref={threadRef}
              className="no-scrollbar flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-5"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex',
                    msg.role === 'user' ? 'justify-end' : 'justify-start',
                  )}
                >
                  {msg.role === 'user' ? (
                    <p className="bg-primary text-primary-foreground max-w-[85%] rounded-2xl rounded-br-sm px-3.5 py-2 text-sm">
                      {msg.text}
                    </p>
                  ) : (
                    <AssistantBubble intent={msg.intent} />
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-muted flex items-center gap-1 rounded-2xl rounded-bl-sm px-3.5 py-3">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="bg-muted-foreground/50 size-1.5 animate-pulse rounded-full"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="shrink-0 border-t p-3">
              <div className="flex flex-wrap gap-1.5">
                {showcaseIntents.map((intent) => (
                  <button
                    key={intent.slug}
                    type="button"
                    onClick={() => ask(intent)}
                    disabled={typing}
                    className={cn(
                      'rounded-full border px-2.5 py-1 text-xs font-medium transition-colors disabled:opacity-50',
                      intent.slug === active.slug
                        ? 'border-foreground/20 bg-foreground text-background'
                        : 'text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:bg-muted',
                    )}
                  >
                    {intent.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col">
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b px-5 py-2.5">
            <div className="flex min-w-0 items-center gap-2">
              <span className="text-muted-foreground text-xs">Decision</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={active.slug}
                  initial={{ opacity: 0, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.25 }}
                  className="truncate text-sm font-semibold"
                >
                  {active.decision}
                </motion.span>
              </AnimatePresence>
            </div>
            <Link
              href={`/intents/${active.slug}`}
              className="text-muted-foreground hover:text-foreground group inline-flex shrink-0 items-center gap-1 text-xs font-medium transition-colors"
            >
              Open intent
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="bg-muted/20 dark:bg-background relative flex min-h-120 flex-1 items-center justify-center [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px] p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.25 }}
                className="flex w-full max-w-full min-w-0 items-center justify-center"
              >
                <active.Demo />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Card>
  )
}

function AssistantBubble({ intent }: Readonly<{ intent: ShowcaseIntent }>) {
  return (
    <div className="bg-muted/60 flex max-w-[92%] flex-col gap-2 rounded-2xl rounded-bl-sm border px-3.5 py-3">
      <div className="flex items-center gap-1.5 text-xs">
        <span className="text-muted-foreground">{intent.domain}</span>
        <span className="text-muted-foreground/40">·</span>
        <span className="text-foreground font-semibold">{intent.decision}</span>
      </div>
      <p className="text-muted-foreground text-[13px] leading-relaxed">
        {intent.rationale}
      </p>
      <div className="flex flex-wrap gap-1">
        {intent.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-muted-foreground bg-background/50 px-1.5 py-0 text-[10px] font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <p className="text-muted-foreground/60 mt-0.5 inline-flex items-center gap-1 text-[11px]">
        <CornerDownLeft className="size-3" aria-hidden />
        Preview updated on the right
      </p>
    </div>
  )
}
