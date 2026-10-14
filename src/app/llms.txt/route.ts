import { siteConfig } from '@/config/site'
import { blocks } from '@/lib/blocks/block-catalog'
import { illustrationCategories } from '@/lib/illustrations/illustrations-catalog'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

export const dynamic = 'force-static'

const url = siteConfig.url

function item(name: string, href: string, description?: string) {
  return `- [${name}](${href})${description ? `: ${description}` : ''}`
}

function buildLlmsTxt() {
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    'Every item is source code added to the user\'s project with the shadcn CLI, so the user owns and edits it. Items use shadcn/ui components, Tailwind CSS theme tokens and lucide-react icons.',
    '',
    `- Install any item: \`npx shadcn@latest add @flx/<name>\`. The \`@flx\` registry is listed in the shadcn directory, or use the full URL \`${url}/r/<name>.json\`.`,
    '- Without the CLI, copy the code from the item\'s page.',
    `- Full registry index: ${url}/r/registry.json`,
    '',
  ]

  for (const category of blocks) {
    lines.push(`## ${category.category} blocks`, '')
    for (const block of category.blocks) {
      lines.push(
        item(
          block.name,
          `${url}/blocks/${category.slug}/${block.slug}`,
          block.description,
        ),
      )
    }
    lines.push('')
  }

  lines.push('## Illustrations', '')
  for (const category of illustrationCategories) {
    for (const illustration of category.items) {
      lines.push(
        item(
          illustration.name,
          `${url}/illustrations`,
          illustration.description,
        ),
      )
    }
  }
  lines.push('')

  lines.push('## Patterns', '')
  for (const category of patternCategories) {
    lines.push(
      item(category.name, `${url}/patterns/${category.slug}`, category.description),
    )
  }

  return lines.join('\n') + '\n'
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
