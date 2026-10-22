import { Maximize2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function BlockFullscreenButton({ src }: Readonly<{ src: string }>) {
  return (
    <Button
      variant="outline"
      size="xs"
      className="bg-background/80 shadow-none backdrop-blur"
      nativeButton={false}
      render={<a href={src} target="_blank" rel="noopener noreferrer" />}
    >
      <Maximize2 className="size-3.5" aria-hidden />
      Full screen
    </Button>
  )
}
