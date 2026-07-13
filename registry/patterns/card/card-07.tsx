import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function Card07() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Pro plan</CardTitle>
        <CardDescription>Billed annually · renews Jan 2027</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Unlimited projects, priority support, and advanced analytics for your
        whole team.
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger
            render={<Button className="w-full">Manage subscription</Button>}
          />
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Manage subscription</DialogTitle>
              <DialogDescription>
                Your Pro plan is active. Changes take effect on the next billing
                cycle.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex flex-col">
                <span className="font-medium">Pro · Annual</span>
                <span className="text-muted-foreground text-sm">
                  $290.00 / year
                </span>
              </div>
              <span className="text-2xl font-semibold tabular-nums">$290</span>
            </div>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Close</Button>} />
              <Button variant="destructive">Cancel plan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
