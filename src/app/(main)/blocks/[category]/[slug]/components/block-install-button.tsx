'use client'

import { track } from '@vercel/analytics'

import { RegistryCli } from '@/components/core/registry/registry-cli'

export function BlockInstallButton({ slug }: Readonly<{ slug: string }>) {
  return (
    <RegistryCli
      registryName={slug}
      size="xs"
      showCommand
      className="max-w-full font-mono"
      onCopy={() => track('block_copy_command', { block: slug })}
    />
  )
}
