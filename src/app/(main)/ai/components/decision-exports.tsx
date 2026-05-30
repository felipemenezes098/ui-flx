'use client'

import {
  ClipboardList,
  MessageSquareText,
  ShieldCheck,
  Wand2,
} from 'lucide-react'
import { useState } from 'react'

import { CodeBlock } from '@/components/core/code/code-block'
import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { cn } from '@/lib/utils'
import type { IntentExports } from '@/lib/intent-catalog'

const formats = [
  { key: 'prompt', label: 'Prompt', icon: MessageSquareText },
  { key: 'skill', label: 'SKILL.md', icon: Wand2 },
  { key: 'spec', label: 'Spec', icon: ClipboardList },
  { key: 'rules', label: 'Rules', icon: ShieldCheck },
] as const

type FormatKey = (typeof formats)[number]['key']

export function DecisionExports({
  exports: exp,
}: Readonly<{ exports: IntentExports }>) {
  const [active, setActive] = useState<FormatKey>('prompt')

  const content: Record<FormatKey, string> = {
    prompt: exp.prompt,
    skill: exp.skill,
    spec: exp.spec,
    rules: exp.rules,
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold tracking-tight">
          Use this decision
        </h2>
        <div className="bg-muted/40 inline-flex w-fit items-center gap-1 rounded-full border p-1">
          {formats.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors',
                active === key
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {label}
            </button>
          ))}
        </div>
      </div>

      <CodeBlock className="dark:bg-background/40">
        <CodeBlockCode code={content[active]} language="markdown" withCopy />
      </CodeBlock>
    </section>
  )
}
