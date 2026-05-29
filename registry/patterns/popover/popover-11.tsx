import { CalendarIcon, MapPinIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Popover11() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link" className="h-auto p-0 font-medium">
          @sofia.r
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 overflow-hidden p-0">
        <div className="bg-muted relative h-20 w-full">
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="-mt-8 flex flex-col gap-3 p-4">
          <Avatar className="border-background size-16 border-4">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
              alt="Sofia Rodrigues"
            />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold">Sofia Rodrigues</p>
            <p className="text-muted-foreground text-xs">@sofia.r</p>
          </div>
          <p className="text-sm">
            Product designer crafting calm interfaces. Currently shipping the new
            blocks library.
          </p>
          <div className="text-muted-foreground flex flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-1">
              <MapPinIcon className="size-3" />
              Lisbon, PT
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="size-3" />
              Joined March 2023
            </span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              Follow
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Message
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
