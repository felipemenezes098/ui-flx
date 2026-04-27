'use client'

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react'
import { useRef, useState, Dispatch, SetStateAction } from 'react'

type StickyScrollMediaItem = {
  title: string
  description: string
  media: string
}

export interface StickyScrollMediaProps {
  items: StickyScrollMediaItem[]
}

function ScrollItem({
  item,
  index,
  setActive,
}: {
  item: StickyScrollMediaItem
  index: number
  setActive: Dispatch<SetStateAction<number>>
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 15%'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [20, -20])

  const opacityValues = index === 0 ? [1, 0.7, 1, 0] : [0, 0.7, 1, 0]
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], opacityValues)

  const isActive = useTransform(scrollYProgress, (v) => v > 0.4 && v < 0.6)

  useMotionValueEvent(isActive, 'change', (v) => {
    if (v) {
      setActive((prev) => (prev === index ? prev : index))
    }
  })

  return (
    <motion.article
      ref={ref}
      style={{ opacity, y }}
      className="flex flex-col items-center"
    >
      <div className="text-center">
        <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
        <p className="text-muted-foreground">{item.description}</p>
      </div>
    </motion.article>
  )
}

export function StickyScrollMedia({ items }: Readonly<StickyScrollMediaProps>) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <>
      <div className="space-y-10 md:hidden">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="flex flex-col items-start space-y-4"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
            <img
              src={item.media}
              alt={item.title}
              className="h-72 w-full rounded-2xl object-cover"
            />
          </article>
        ))}
      </div>

      <div className="hidden gap-10 md:grid md:grid-cols-2">
        <div className="sticky top-20 max-h-[70vh] overflow-hidden rounded-2xl">
          {items.map((item, index) => (
            <motion.img
              key={`${item.title}-${index}`}
              src={item.media}
              alt={item.title}
              className="absolute inset-0 aspect-4/3 h-full w-full object-cover"
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                willChange: 'opacity',
              }}
              transition={{
                duration: 0.15,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="py-[35vh]">
          <div className="space-y-[30vh]">
            {items.map((item, index) => (
              <ScrollItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                setActive={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
