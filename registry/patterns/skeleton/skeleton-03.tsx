import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function Skeleton03() {
  return (
    <Card className="w-full max-w-sm gap-0 overflow-hidden py-0">
      <Skeleton className="h-32 w-full rounded-none" />
      <CardHeader className="gap-2 pt-4">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </CardContent>
      <CardFooter className="justify-between pt-4 pb-4">
        <Skeleton className="h-8 w-24 rounded-md" />
        <Skeleton className="size-8 rounded-md" />
      </CardFooter>
    </Card>
  )
}
