'use client'

import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Slide = {
  image: string
  alt: string
  title: string
  body: string
}

const SLIDES: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80',
    alt: 'A team collaborating around a laptop',
    title: 'Welcome aboard',
    body: 'A calmer way to plan work and ship together. Let’s get you set up in under a minute.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=640&q=80',
    alt: 'A tidy desk with a notebook and coffee',
    title: 'Everything in one place',
    body: 'Projects, docs, and tasks live side by side — no more hunting across tabs.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=640&q=80',
    alt: 'People discussing ideas at a table',
    title: 'Better with your team',
    body: 'Invite teammates and move from idea to done together, in real time.',
  },
]

export function IntroSlidesDecision() {
  const [i, setI] = useState(0)
  const last = SLIDES.length - 1
  const slide = SLIDES[i]

  return (
    <div className="bg-card w-80 overflow-hidden rounded-xl border shadow-sm">
      <div className="bg-muted relative h-44 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.image}
          alt={slide.alt}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-base font-semibold">{slide.title}</h3>
        <p className="text-muted-foreground min-h-10 text-sm">{slide.body}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {SLIDES.map((s, idx) => (
              <span
                key={s.title}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  idx === i ? 'bg-primary w-4' : 'bg-muted-foreground/25 w-1.5',
                )}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              className={cn('size-8', i === 0 && 'invisible')}
              disabled={i === 0}
              onClick={() => setI((s) => Math.max(0, s - 1))}
              aria-label="Previous"
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              className="px-4"
              onClick={() => setI((s) => (s === last ? 0 : s + 1))}
            >
              {i === last ? 'Get started' : 'Next'}
              {i !== last && <ArrowRightIcon />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
