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

const heroImage =
  'https://images.unsplash.com/photo-1635746065098-a0ae3eadfa6f?q=80&w=800&auto=format&fit=crop'

export function Dialog09() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Welcome tour</Button>} />
      <DialogContent
        className="gap-0 overflow-hidden p-0 sm:max-w-sm"
        showCloseButton={false}
      >
        <div className="h-50 w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Abstract gradient workspace"
            className="size-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 px-6 pt-5 pb-6">
          <DialogHeader className="gap-1.5 text-left">
            <DialogTitle>Welcome to Flexnative</DialogTitle>
            <DialogDescription>
              Copy-paste patterns and blocks for Next.js. Start from the gallery
              or install with the CLI.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button className="w-full">Get started</Button>
            <DialogClose
              render={
                <Button variant="ghost" className="w-full">
                  Skip for now
                </Button>
              }
            />
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
