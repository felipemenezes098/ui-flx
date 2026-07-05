'use client'

import { CopyButton } from '@/components/core/copy-button'
import { cn } from '@/lib/utils'

import { previewFallbackHeightClass, previewPanelClass } from './preview-frame'

interface PromptPanelProps {
  prompt: string
  className?: string
}

/**
 * Generic AI-prompt viewer: scrollable prompt text with a copy button. Mirrors
 * CodePanel's chrome so it sits naturally as a sibling tab.
 */
export function PromptPanel({ prompt, className }: Readonly<PromptPanelProps>) {
  return (
    <div
      className={cn(
        previewPanelClass,
        previewFallbackHeightClass,
        'bg-card flex flex-col',
        className,
      )}
    >
      <div className="flex shrink-0 items-center justify-between gap-2 border-b px-4 py-2.5">
        <span className="text-muted-foreground font-mono text-[11px]">
          AI prompt
        </span>
        <CopyButton
          text={prompt}
          variant="ghost"
          size="icon-sm"
          className="bg-card text-muted-foreground hover:bg-muted/80 h-7 shrink-0 px-2 shadow-none"
        />
      </div>

      <div className="no-scrollbar min-h-0 flex-1 overflow-auto p-4">
        {prompt ? (
          <pre className="text-muted-foreground font-mono text-xs break-words whitespace-pre-wrap">
            {prompt}
          </pre>
        ) : (
          <p className="text-muted-foreground flex h-full items-center justify-center text-sm italic">
            No prompt available.
          </p>
        )}
      </div>
    </div>
  )
}
