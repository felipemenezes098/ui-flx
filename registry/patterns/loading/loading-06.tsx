import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

export function Loading06() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3 py-6">
      <Button disabled>
        <Spinner />
        Saving…
      </Button>
      <Button variant="secondary" disabled>
        <Spinner />
        Please wait
      </Button>
      <Button variant="outline" size="icon" disabled aria-label="Loading">
        <Spinner />
      </Button>
    </div>
  )
}
