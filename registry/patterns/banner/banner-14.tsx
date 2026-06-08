'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, Loader2, UploadCloud } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export function Banner14() {
  const [value, setValue] = useState(12)

  useEffect(() => {
    if (value >= 100) return
    const timer = setTimeout(() => {
      setValue((prev) => Math.min(prev + 11, 100))
    }, 800)
    return () => clearTimeout(timer)
  }, [value])

  const done = value >= 100

  return (
    <div className="bg-card flex w-full flex-col gap-3 rounded-lg border px-4 py-3.5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full">
          {done ? (
            <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <UploadCloud className="size-5" />
          )}
        </span>
        <div className="flex flex-1 flex-col gap-0.5">
          <p className="flex items-center gap-2 text-sm font-medium">
            {done ? 'Import complete' : 'Importing your data'}
            {!done && (
              <Loader2 className="text-muted-foreground size-3.5 animate-spin" />
            )}
          </p>
          <p className="text-muted-foreground text-sm">
            {done
              ? '1,284 records imported successfully.'
              : `Processing records — ${value}%`}
          </p>
        </div>
        {done && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setValue(12)}
            className="shrink-0"
          >
            Run again
          </Button>
        )}
      </div>
      <Progress value={value} className="h-1.5" />
    </div>
  )
}
