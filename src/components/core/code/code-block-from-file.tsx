// server component – used in MDX

import { Separator } from '@/components/ui/separator'
import { extractCodeFromFilePath } from '@/lib/code'

import { CodeBlock } from './code-block'
import { CodeBlockCode } from './code-block-code'
import { CodeBlockGroup } from './code-block-group'
import { CodeCollapsible, CodeCollapsibleButton } from './code-collapsible'
import { CodeBlockCopy } from './code-copy'

export function CodeBlockFromFile({
  filePath,
  language = 'tsx',
  title,
  collapsible = false,
  showLineNumbers,
  highlightLines,
  highlightWords,
}: {
  filePath: string
  language?: string
  title?: string
  collapsible?: boolean
  withCopy?: boolean
  showLineNumbers?: boolean
  highlightLines?: string
  highlightWords?: string
}) {
  const code = extractCodeFromFilePath(filePath)

  if (!code) return null

  const hasHeader = Boolean(title)

  return (
    <CodeBlock collapsible={collapsible}>
      {hasHeader && (
        <CodeBlockGroup>
          <span className="min-w-0 truncate text-sm font-medium">{title}</span>
          <div className="flex shrink-0 items-center gap-1">
            <CodeCollapsibleButton />
            {collapsible && (
              <Separator orientation="vertical" className="!h-4" />
            )}
            <CodeBlockCopy fileContent={code} />
          </div>
        </CodeBlockGroup>
      )}

      <CodeCollapsible>
        <CodeBlockCode
          code={code}
          language={language}
          showLineNumbers={showLineNumbers}
          highlightLines={highlightLines}
          highlightWords={highlightWords}
          withCopy={!hasHeader}
        />
      </CodeCollapsible>
    </CodeBlock>
  )
}
