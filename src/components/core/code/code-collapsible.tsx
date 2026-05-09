'use client'

import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

import { useCodeBlock } from './code-block-context'

export function CodeCollapsible({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { isOpened, setIsOpened, collapsible } = useCodeBlock()

  if (!collapsible) return <>{children}</>

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className="relative w-full"
    >
      <CollapsibleContent forceMount asChild>
        <motion.div
          initial={false}
          animate={{ height: isOpened ? 'auto' : 200 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={cn(className, 'collapsible-code-content overflow-hidden')}
          data-collapsible="true"
          data-collapsed={isOpened ? undefined : 'true'}
        >
          {children}
        </motion.div>
      </CollapsibleContent>

      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="show-more-overlay"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="from-background via-background/70 absolute inset-x-0 bottom-0 flex h-24 items-end justify-center bg-gradient-to-t to-transparent p-4"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="bg-card text-muted-foreground hover:bg-muted"
              >
                Expand
              </Button>
            </CollapsibleTrigger>
          </motion.div>
        )}
      </AnimatePresence>
    </Collapsible>
  )
}

export function CodeCollapsibleButton() {
  const { isOpened, setIsOpened, collapsible } = useCodeBlock()
  if (!collapsible) return null

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsOpened(!isOpened)}
      className="bg-card text-muted-foreground hover:bg-muted/80"
    >
      {isOpened ? (
        <>
          Collapse
          <ChevronsDownUp className="size-4" />
        </>
      ) : (
        <>
          Expand
          <ChevronsUpDown className="size-4" />
        </>
      )}
    </Button>
  )
}
