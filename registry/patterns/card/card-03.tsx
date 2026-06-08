import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'

export function Card03() {
  return (
    <Card className="flex w-full max-w-md flex-row gap-0 py-0">
      <img
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
        alt="Open laptop on a desk"
        className="w-32 shrink-0 rounded-t-none rounded-l-xl object-cover sm:w-40"
      />
      <div className="flex flex-col gap-2 p-5">
        <Badge variant="secondary" className="w-fit">
          Engineering
        </Badge>
        <CardTitle>Designing resilient APIs</CardTitle>
        <CardDescription className="line-clamp-2">
          Patterns for versioning, idempotency, and graceful degradation under
          load.
        </CardDescription>
        <div className="mt-auto pt-2">
          <Button variant="link" className="h-auto p-0">
            Read article
          </Button>
        </div>
      </div>
    </Card>
  )
}
