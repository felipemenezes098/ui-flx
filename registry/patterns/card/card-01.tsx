import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Card01() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Project Phoenix</CardTitle>
        <CardDescription>
          A complete rebuild of the analytics dashboard.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            View
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Ship the new reporting suite with live charts, exports, and shareable
        links by the end of the quarter.
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-muted-foreground text-sm">Updated 2h ago</span>
        <Button size="sm">Open</Button>
      </CardFooter>
    </Card>
  )
}
