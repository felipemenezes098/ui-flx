import type { RegistryItem } from 'shadcn/schema'

export interface RegistryCodeFile {
  name: string
  content: string
}

export function toRegistryCodeFiles(
  item: RegistryItem | undefined,
): RegistryCodeFile[] {
  if (!item?.files) return []

  return item.files
    .filter((file) => file.content)
    .map((file) => {
      const path = file.target ?? file.path
      return {
        name: path.split('/').pop() ?? path,
        content: String(file.content),
      }
    })
}

export function formatCodeFilesForPrompt(
  files: RegistryCodeFile[],
  language = 'tsx',
): string {
  if (files.length === 0) return ''

  return files
    .map((file) => {
      const label = files.length > 1 ? `\n// ${file.name}\n` : '\n'
      return `\`\`\`${language}${label}${file.content.trim()}\n\`\`\``
    })
    .join('\n\n')
}

export function appendCodeToPrompt(
  prompt: string,
  files: RegistryCodeFile[],
): string {
  const source = formatCodeFilesForPrompt(files)
  if (!source) return prompt
  return `${prompt.trim()}\n\n${source}`
}

export async function fetchRegistryCodeFiles(
  name: string,
): Promise<RegistryCodeFile[]> {
  const res = await fetch(`/r/${name}.json`)
  if (!res.ok) return []

  const data = (await res.json()) as RegistryItem
  return toRegistryCodeFiles(data)
}
