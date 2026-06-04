import { MapPinIcon, StarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Card02() {
  return (
    <Card className="w-full max-w-sm">
      <img
        src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=640&q=80"
        alt="Forested valley at golden hour"
        className="aspect-video object-cover"
      />
      <CardHeader>
        <CardTitle>Mountain retreat</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPinIcon className="size-3.5" />
          Aspen, Colorado
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        A secluded cabin with floor-to-ceiling windows, a wood stove, and trail
        access from the back porch.
      </CardContent>
      <CardFooter className="justify-between">
        <span className="flex items-center gap-1 text-sm font-medium">
          <StarIcon className="size-4 fill-amber-400 text-amber-400" />
          4.9
        </span>
        <Button>Book now</Button>
      </CardFooter>
    </Card>
  )
}
