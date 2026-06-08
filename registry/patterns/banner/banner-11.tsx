'use client'

import { useState } from 'react'
import { Check, MailWarning } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Banner11() {
  const [sent, setSent] = useState(false)

  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-3.5 sm:flex-row sm:items-center">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400">
        <MailWarning className="size-5" />
      </span>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
          Verify your email address
        </p>
        <p className="text-sm text-blue-700/80 dark:text-blue-300/80">
          We sent a link to alex@company.com. Confirm it to secure your account.
        </p>
      </div>
      <Button
        size="sm"
        variant="outline"
        disabled={sent}
        onClick={() => setSent(true)}
        className="shrink-0 border-blue-500/30 bg-transparent text-blue-700 hover:bg-blue-500/10 dark:text-blue-300"
      >
        {sent ? (
          <>
            <Check />
            Email sent
          </>
        ) : (
          'Resend email'
        )}
      </Button>
    </div>
  )
}
