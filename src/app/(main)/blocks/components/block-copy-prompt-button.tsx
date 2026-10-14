'use client'

import { track } from '@vercel/analytics'

import { CopyButton } from '@/components/core/copy-button'

async function fetchPrompt(slug: string) {
  const response = await fetch(`/prompts/blocks/${slug}`)
  return response.text()
}

export function BlockCopyPromptButton({ slug }: Readonly<{ slug: string }>) {
  return (
    <CopyButton
      text={() => fetchPrompt(slug)}
      label="Prompt"
      size="xs"
      className="bg-background/80 shadow-none backdrop-blur"
      onClick={() => track('blocks_copy_prompt', { block: slug })}
    />
  )
}
