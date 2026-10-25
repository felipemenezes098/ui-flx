'use client'

import { useState } from 'react'

import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const filters = ['All', 'Interiors', 'Architecture', 'Objects']

const projects = [
  {
    title: 'Concrete Hall',
    year: '2021',
    category: 'Architecture',
    description:
      'A long public hall in board-marked concrete, lit from a single clerestory so the walls change colour through the day.',
    image:
      'https://images.unsplash.com/photo-1566883497053-3666f2141bec?q=80&w=1100&auto=format&fit=crop',
    alt: 'Alt 1',
    grayscale: true,
  },
  {
    title: 'Arch House',
    year: '2022',
    category: 'Interiors',
    description:
      'A family home organised around one soft arched passage, with every room opening onto the next without a single door.',
    image:
      'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1100&auto=format&fit=crop',
    alt: 'Alt 2',
    grayscale: true,
  },
  {
    title: 'Slat Lounge',
    year: '2023',
    category: 'Interiors',
    description:
      'A hotel lounge wrapped in vertical oak slats, with low furniture and warm light kept close to the floor.',
    image:
      'https://images.unsplash.com/photo-1640357960494-9242650846d3?q=80&w=1100&auto=format&fit=crop',
    alt: 'Alt 3',
    grayscale: true,
  },
  {
    title: 'Stoneware Range',
    year: '2024',
    category: 'Objects',
    description:
      'A small family of hand-built vessels in raw clay, made in one workshop and finished with a single matte glaze.',
    image:
      'https://images.unsplash.com/photo-1631125915597-adf46a94e436?q=80&w=1100&auto=format&fit=crop',
    alt: 'Alt 4',
    grayscale: false,
  },
]

export function Lists01() {
  const [filter, setFilter] = useState('All')

  const visible = projects.filter(
    (project) => filter === 'All' || project.category === filter,
  )

  return (
    <section className="bg-background w-full">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-foreground text-sm font-semibold">Projects</h2>
          <Tabs
            value={filter}
            onValueChange={(value) => setFilter(String(value))}
          >
            <TabsList variant="line" className="h-auto flex-wrap gap-x-2">
              {filters.map((item) => (
                <TabsTrigger
                  key={item}
                  value={item}
                  className="h-10 px-3 text-sm"
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <ul className="border-border flex flex-col border-t">
          {visible.map((project) => (
            <li
              key={project.title}
              className="border-border grid grid-cols-1 gap-6 border-b py-8 md:grid-cols-12 md:gap-x-8"
            >
              <div className="flex flex-col gap-1 md:col-span-3">
                <h3 className="text-foreground text-base font-medium">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm tabular-nums">
                  {project.category}, {project.year}
                </p>
              </div>

              <div className="order-3 flex flex-col items-start justify-between gap-8 md:order-none md:col-span-4">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  className="h-10 gap-1.5 rounded-full px-5"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Read more
                  <ArrowUpRight className="size-3.5" />
                </Button>
              </div>

              <div className="bg-muted relative aspect-[3/2] w-full overflow-hidden outline outline-black/10 md:col-span-5 md:col-start-8 dark:outline-white/10">
                <img
                  src={project.image}
                  alt={project.alt}
                  className={
                    project.grayscale
                      ? 'size-full object-cover grayscale'
                      : 'size-full object-cover'
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
