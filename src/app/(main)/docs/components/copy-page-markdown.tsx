'use client'

import { useQuery } from '@tanstack/react-query'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

async function fetchCode(filePath: string) {
  const res = await fetch(`/api/code?path=${encodeURIComponent(filePath)}`)
  if (!res.ok) throw new Error('Failed to load')
  return res.json() as Promise<{ code: string }>
}

type CopyPageMarkdownProps = Readonly<{
  filePath: string
}> &
  Omit<React.ComponentProps<typeof Button>, 'children'>

export function CopyPageMarkdown({
  filePath,
  className,
  ...props
}: CopyPageMarkdownProps) {
  const [isCopied, setIsCopied] = useState(false)
  const { data } = useQuery({
    queryKey: ['page-markdown', filePath],
    queryFn: () => fetchCode(filePath),
    enabled: !!filePath,
  })

  const handleCopy = async () => {
    if (!data?.code) return

    const result = await copyToClipboard(data.code)
    if (!result.success) {
      toast.error(result.error)
      return
    }

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  if (!filePath) return null

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handleCopy}
      disabled={!data?.code}
      className={cn(className)}
      {...props}
    >
      {isCopied ? (
        <>
          <CheckIcon className="size-3.5 text-green-500" />
          Copied
        </>
      ) : (
        <>
          <CopyIcon className="size-3.5" />
          Copy Page
        </>
      )}
    </Button>
  )
}
