'use client'

import { Check, ChevronDownIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { siteConfig } from '@/config/site'
import { useConfig } from '@/hooks/use-config'
import { useCopy } from '@/hooks/use-copy'

import { Logo } from '../logo'
import { cn } from '@/lib/utils'

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun'

const copyTransition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
} as const

const PACKAGE_MANAGERS: { name: PackageManager; command: string }[] = [
  {
    name: 'npm',
    command: `npx shadcn@latest add @${siteConfig.codeName}`,
  },
  {
    name: 'pnpm',
    command: `pnpm dlx shadcn@latest add @${siteConfig.codeName}`,
  },
  {
    name: 'yarn',
    command: `yarn dlx shadcn@latest add @${siteConfig.codeName}`,
  },
  {
    name: 'bun',
    command: `bunx shadcn@latest add @${siteConfig.codeName}`,
  },
]

export function RegistryCli({
  registryName,
  size = 'sm',
  className,
  labelClassName,
}: Readonly<{
  registryName: string
  size?: 'sm' | 'xs' | 'default'
  className?: string
  labelClassName?: string
}>) {
  const [config, setConfig] = useConfig()
  const { copied, copy } = useCopy()

  const packageManager = config.packageManager ?? 'pnpm'
  const registryLabel = `@${siteConfig.codeName}/${registryName}`

  const copyCommand = () => {
    const pm = PACKAGE_MANAGERS.find((p) => p.name === packageManager)
    const command = pm ? `${pm.command}/${registryName}` : ''
    if (command) copy(command)
  }

  const handleSelectPackageManager = (name: PackageManager) => {
    setConfig({ ...config, packageManager: name })
  }

  return (
    <ButtonGroup>
      <Button
        variant="outline"
        className={cn('w-fit max-w-48 gap-1 px-2 shadow-none', className)}
        size={size}
        onClick={copyCommand}
        aria-label={labelClassName ? registryLabel : undefined}
      >
        <span className="relative grid size-3.5 shrink-0 place-items-center">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={copied ? 'check' : 'copy'}
              initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
              transition={copyTransition}
              className="flex items-center justify-center"
            >
              {copied ? (
                <Check className="size-3.5" aria-hidden />
              ) : (
                <Logo.ShadcnIcon className="size-3.5" aria-hidden />
              )}
            </motion.div>
          </AnimatePresence>
        </span>
        <span className={cn('truncate text-xs', labelClassName)}>
          {registryLabel}
        </span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-fit gap-1 px-2 !pl-2 shadow-none"
            size={size}
          >
            <ChevronDownIcon className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuGroup>
            {PACKAGE_MANAGERS.map((pm) => (
              <DropdownMenuItem
                className="justify-between"
                key={pm.name}
                onClick={() => handleSelectPackageManager(pm.name)}
              >
                {pm.name}
                {pm.name === packageManager && <Check className="size-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
