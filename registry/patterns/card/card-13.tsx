import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function Card13() {
  return (
    <Card className="relative w-full max-w-sm border-0 py-0 text-white">
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=640&q=80"
        alt="Sunlit mountain ridge"
        className="aspect-[4/5] object-cover"
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
        <Badge variant="secondary" className="w-fit">
          Featured
        </Badge>
        <h3 className="font-heading text-xl font-semibold">
          Into the wild
        </h3>
        <p className="text-sm text-white/80">
          A photo series capturing dawn across remote alpine trails.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-2 w-fit"
        >
          Explore
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </Card>
  )
}
