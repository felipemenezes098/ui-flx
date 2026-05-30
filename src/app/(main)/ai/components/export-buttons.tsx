'use client'

import {
  CheckIcon,
  ClipboardList,
  MessageSquareText,
  ShieldCheck,
  Wand2,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import type { IntentExports } from '@/lib/intent-catalog'
import { cn } from '@/lib/utils'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

const formats = [
  { key: 'prompt', label: 'Prompt', icon: MessageSquareText },
  { key: 'skill', label: 'Skill', icon: Wand2 },
  { key: 'spec', label: 'Spec', icon: ClipboardList },
  { key: 'rules', label: 'Rules', icon: ShieldCheck },
] as const

type FormatKey = (typeof formats)[number]['key']

export function ExportButtons({
  exports: exp,
  className,
}: Readonly<{ exports: IntentExports; className?: string }>) {
  const [copied, setCopied] = useState<FormatKey | null>(null)

  async function handleCopy(key: FormatKey) {
    await copyToClipboard(exp[key])
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {formats.map(({ key, label, icon: Icon }) => {
        const done = copied === key
        return (
          <Button
            key={key}
            type="button"
            size="sm"
            variant="outline"
            onClick={() => handleCopy(key)}
          >
            {done ? (
              <CheckIcon className="text-green-500" aria-hidden />
            ) : (
              <Icon aria-hidden />
            )}
            {label}
          </Button>
        )
      })}
    </div>
  )
}
