import { Button } from '@/components/ui/button'
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

export function Dialog18() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Upgrade plan</Button>} />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Upgrade to Pro</DialogTitle>
          <DialogDescription>
            Unlock unlimited projects, priority support, and advanced analytics.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-muted/40 flex flex-col gap-1 rounded-lg border px-4 py-3">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-semibold">$24</span>
            <span className="text-muted-foreground text-sm">/ month</span>
          </div>
          <p className="text-muted-foreground text-xs">
            Billed annually. Cancel anytime.
          </p>
        </div>
        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button className="w-full">Upgrade now</Button>
          <DialogClose
            render={
              <Button variant="outline" className="w-full">
                Maybe later
              </Button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
