import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
const releases = [
  {
    version: '2.4.0',
    date: 'May 12',
    tag: 'Latest',
    highlights: ['Pattern gallery filters', 'Registry sync improvements'],
  },
  {
    version: '2.3.2',
    date: 'Apr 28',
    highlights: ['Tabs pattern pack', 'Dark mode contrast fixes'],
  },
  {
    version: '2.3.0',
    date: 'Apr 10',
    highlights: ['Input OTP component', 'Dialog pattern examples'],
  },
  {
    version: '2.2.1',
    date: 'Mar 22',
    highlights: ['Button group variants', 'Select avatar triggers'],
  },
  {
    version: '2.2.0',
    date: 'Mar 1',
    highlights: ['New blocks registry', 'Preview performance'],
  },
]

export function Dialog06() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View changelog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Release notes</DialogTitle>
          <DialogDescription>
            Header stays visible while you scroll through recent updates.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 max-h-[50vh] overflow-y-auto px-4">
          <div className="relative flex flex-col gap-0 pb-2">
            <div
              className="bg-border absolute top-2 bottom-2 left-[11px] w-px"
              aria-hidden
            />
            {releases.map((release) => (
              <div key={release.version} className="relative flex gap-4 py-3">
                <div className="bg-background relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border">
                  <span className="bg-primary size-2 rounded-full" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium">{release.version}</span>
                    <span className="text-muted-foreground text-xs">
                      {release.date}
                    </span>
                    {release.tag ? (
                      <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                        {release.tag}
                      </Badge>
                    ) : null}
                  </div>
                  <ul className="flex flex-col gap-1">
                    {release.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
