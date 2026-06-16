'use client'
import { cn } from '@/lib/utils'
import { Transition, motion } from 'motion/react'
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
} from 'react'

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ 'data-id': string }>[]
    | ReactElement<{ 'data-id': string }>
  defaultValue?: string
  value?: string
  onValueChange?: (newActiveId: string | null) => void
  className?: string
  transition?: Transition
  enableHover?: boolean
}

export function AnimatedBackground({
  children,
  defaultValue,
  value,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [uncontrolledActiveId, setUncontrolledActiveId] = useState<
    string | null
  >(defaultValue ?? null)
  const uniqueId = useId()
  const isControlled = value !== undefined
  const activeId = isControlled ? value : uncontrolledActiveId

  const handleSetActiveId = (id: string | null) => {
    if (!isControlled) {
      setUncontrolledActiveId(id)
    }

    onValueChange?.(id)
  }

  useEffect(() => {
    if (!isControlled && defaultValue !== undefined) {
      setUncontrolledActiveId(defaultValue)
    }
  }, [defaultValue, isControlled])

  return Children.map(children, (child: any, index) => {
    const id = child.props['data-id']

    const interactionProps = isControlled
      ? enableHover
        ? {
            onMouseEnter: () => handleSetActiveId(id),
            onMouseLeave: () => handleSetActiveId(null),
          }
        : onValueChange
          ? { onClick: () => handleSetActiveId(id) }
          : {}
      : enableHover
        ? {
            onMouseEnter: () => handleSetActiveId(id),
            onMouseLeave: () => handleSetActiveId(null),
          }
        : {
            onClick: () => handleSetActiveId(id),
          }

    return cloneElement(
      child,
      {
        key: index,
        className: cn('relative inline-flex', child.props.className),
        'data-checked': activeId === id ? 'true' : 'false',
        ...interactionProps,
      },
      <>
        {activeId === id ? (
          <motion.div
            layoutId={`background-${uniqueId}`}
            className={cn('absolute inset-0', className)}
            transition={transition}
          />
        ) : null}
        <div className="z-10">{child.props.children}</div>
      </>,
    )
  })
}
