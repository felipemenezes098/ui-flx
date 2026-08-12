import { CheckCircle2, Send, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const checklist = ['Three-tier layout', 'Monthly / yearly toggle']

export function BlockBuilderDemo() {
  return (
    <div
      className={cn(
        'bg-card w-full max-w-md overflow-hidden rounded-xl border',
        'shadow-[0_20px_50px_-16px_rgba(0,0,0,0.25)]',
        'dark:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.6)]',
      )}
    >
      <div className="border-b px-5 py-3">
        <span className="text-muted-foreground text-[11px] font-medium tracking-wide uppercase">
          Block builder
        </span>
      </div>

      <div className="flex flex-col gap-3.5 px-5 py-5">
        <div className="flex items-end gap-2.5">
          <div className="bg-foreground text-background flex size-7 shrink-0 items-center justify-center rounded-md">
            <Sparkles className="size-4" />
          </div>
          <div className="bg-muted max-w-[80%] rounded-xl rounded-bl-sm px-3.5 py-2.5 text-[13px] leading-relaxed">
            Hi! Describe the block you want to build.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-foreground text-background max-w-[80%] rounded-xl rounded-br-sm px-3.5 py-2.5 text-[13px] leading-relaxed">
            A pricing section with three tiers
          </div>
        </div>

        <div className="bg-muted/60 space-y-2 rounded-xl p-3.5">
          <span className="text-sm font-medium tracking-tight">
            Pricing-03 block
          </span>
          <ul className="text-muted-foreground space-y-1 text-xs leading-relaxed">
            {checklist.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
          <div className="text-foreground flex items-center gap-1.5 pt-0.5 text-xs font-medium">
            <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
            Ready to copy
          </div>
        </div>
      </div>

      <div className="border-t p-3">
        <div className="bg-muted/50 flex items-center gap-2 rounded-full py-2 pr-1.5 pl-4">
          <span className="text-muted-foreground min-w-0 flex-1 truncate text-[13px]">
            Describe your block…
          </span>
          <Button
            size="icon-xs"
            variant="default"
            className="size-8 shrink-0 rounded-full active:scale-[0.96]"
            aria-label="Send"
          >
            <Send className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
