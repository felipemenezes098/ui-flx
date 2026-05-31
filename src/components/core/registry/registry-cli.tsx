'use client'

import { Check, ChevronDownIcon } from 'lucide-react'
import * as React from 'react'

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

import { Logo } from '../logo'

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun'

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
}: Readonly<{ registryName: string; size?: 'sm' | 'xs' }>) {
  const [config, setConfig] = useConfig()
  const [isCopied, setIsCopied] = React.useState(false)

  const packageManager = config.packageManager ?? 'pnpm'

  const copyCommand = () => {
    const pm = PACKAGE_MANAGERS.find((p) => p.name === packageManager)
    const command = pm ? `${pm.command}/${registryName}` : ''
    navigator.clipboard.writeText(command)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleSelectPackageManager = (name: PackageManager) => {
    setConfig({ ...config, packageManager: name })
  }

  return (
    <ButtonGroup>
      <Button
        variant="outline"
        className="w-fit max-w-48 gap-1 px-2 shadow-none"
        size={size}
        onClick={copyCommand}
      >
        {isCopied ? (
          <Check className="size-3.5" />
        ) : (
          <Logo.ShadcnIcon className="size-3.5" />
        )}
        <span className="truncate font-mono text-xs">
          @{siteConfig.codeName}/{registryName}
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
