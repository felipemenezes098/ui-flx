'use client'

import { useState } from 'react'

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
import { cn } from '@/lib/utils'

const images = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1635746065098-a0ae3eadfa6f?q=80&w=400&auto=format&fit=crop',
    alt: 'Gradient abstract',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1530912780732-0d2507ded3e8?q=80&w=400&auto=format&fit=crop',
    alt: 'Soft shapes',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1719448683263-8424028681f2?q=80&w=400&auto=format&fit=crop',
    alt: 'Blue waves',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
    alt: 'Purple flow',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400&auto=format&fit=crop',
    alt: 'Color mesh',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=400&auto=format&fit=crop',
    alt: 'Warm gradient',
  },
]

export function Dialog15() {
  const [selected, setSelected] = useState(images[0].id)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Choose cover</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose image</DialogTitle>
          <DialogDescription>
            Pick a cover image for your project page.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2">
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelected(image.id)}
              className={cn(
                'focus-visible:ring-ring relative aspect-square overflow-hidden rounded-lg border-2 focus-visible:ring-2 focus-visible:outline-none',
                selected === image.id
                  ? 'border-primary ring-primary/20 ring-2'
                  : 'border-transparent',
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
              />
            </button>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Choose</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
