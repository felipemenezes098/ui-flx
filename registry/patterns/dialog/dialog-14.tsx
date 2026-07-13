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
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

export function Dialog14() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">Notification settings</Button>}
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage how and when we contact you.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium">Notifications</h4>
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground text-sm">
                Product updates
              </span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground text-sm">
                Comment mentions
              </span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground text-sm">
                Weekly digest
              </span>
              <Switch />
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium">Security</h4>
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground text-sm">
                Login alerts
              </span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground text-sm">
                New device approval
              </span>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
