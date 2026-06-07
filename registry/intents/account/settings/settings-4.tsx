'use client'

import { useState } from 'react'
import { Monitor, Moon, Settings2, Sun } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function Settings4() {
  const [theme, setTheme] = useState('system')
  const [sound, setSound] = useState(true)
  const [compact, setCompact] = useState(false)

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 rounded-lg border p-3">
      <div className="flex items-center gap-3">
        <Avatar className="size-9">
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces"
            alt="Ada Lovelace"
          />
          <AvatarFallback className="bg-muted">AL</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Ada Lovelace</span>
          <span className="text-muted-foreground text-xs">ada@acme.com</span>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Preferences">
            <Settings2 className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Preferences</DialogTitle>
            <DialogDescription>
              Quick settings without leaving the page.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Theme</Label>
              <ToggleGroup
                type="single"
                value={theme}
                onValueChange={(v) => v && setTheme(v)}
                variant="outline"
                className="w-full"
              >
                <ToggleGroupItem value="light" className="flex-1">
                  <Sun className="size-4" />
                  Light
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" className="flex-1">
                  <Moon className="size-4" />
                  Dark
                </ToggleGroupItem>
                <ToggleGroupItem value="system" className="flex-1">
                  <Monitor className="size-4" />
                  Auto
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <Label htmlFor="pd-sound" className="font-normal">
                Sound effects
              </Label>
              <Switch id="pd-sound" checked={sound} onCheckedChange={setSound} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="pd-compact" className="font-normal">
                Compact mode
              </Label>
              <Switch
                id="pd-compact"
                checked={compact}
                onCheckedChange={setCompact}
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="w-full">Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
