'use client'

import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Balancer from 'react-wrap-balancer'

export type MediaGridInteractiveItem = {
  title: string
  description?: string
  media: { src: string; alt: string }
}

export interface MediaGridInteractiveProps {
  title: string
  description?: string
  items: MediaGridInteractiveItem[]
  selectedItem?: MediaGridInteractiveItem | null
  onSelectedItemChange?: (item: MediaGridInteractiveItem | null) => void
}

function ItemDialog({
  item,
  onClose,
}: Readonly<{
  item: MediaGridInteractiveItem
  onClose: () => void
}>) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    globalThis.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      globalThis.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="bg-background/95 fixed inset-0 backdrop-blur-sm" />
      <button
        type="button"
        onClick={onClose}
        className="text-muted-foreground hover:text-foreground fixed top-5 right-5 z-20 cursor-pointer transition-colors"
        aria-label="Fechar"
      >
        <X className="size-5" />
      </button>
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-5 px-6 py-24"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 14 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72 w-full overflow-hidden rounded-xl">
          <img
            src={item.media.src}
            alt={item.media.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          {item.description && (
            <p className="text-muted-foreground text-sm whitespace-pre-line">
              {item.description}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function MediaGridInteractive({
  title,
  description,
  items,
  selectedItem,
  onSelectedItemChange,
}: Readonly<MediaGridInteractiveProps>) {
  const [internalSelected, setInternalSelected] =
    useState<MediaGridInteractiveItem | null>(null)

  const isControlled = selectedItem !== undefined
  const selected = isControlled ? (selectedItem ?? null) : internalSelected

  const setSelected = (item: MediaGridInteractiveItem | null) => {
    if (isControlled) onSelectedItemChange?.(item)
    if (!isControlled) setInternalSelected(item)
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          {title && (
            <h2 className="text-3xl font-bold">
              <Balancer>{title}</Balancer>
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground max-w-xl">
              <Balancer>{description}</Balancer>
            </p>
          )}
        </div>
        {items && items.length > 0 && (
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
            {items.map((item, index) => (
              <li key={`${item.title}-${index}`}>
                <button
                  type="button"
                  className="group relative block h-96 w-full [transform:translateZ(0)] cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelected(item)}
                >
                  <img
                    src={item.media.src}
                    alt={item.media.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex h-20 translate-y-full items-center justify-center bg-gradient-to-t from-black/60 to-transparent transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-xs font-medium text-white/90 uppercase">
                      Details
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <AnimatePresence>
        {selected ? (
          <ItemDialog item={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </>
  )
}
