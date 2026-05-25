import { Button } from '@/components/ui/button'

export function Button03() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline" size="xs">
        Extra small
      </Button>
      <Button variant="outline" size="sm">
        Small
      </Button>
      <Button variant="outline" size="default">
        Default
      </Button>
      <Button variant="outline" size="lg">
        Large
      </Button>
    </div>
  )
}
