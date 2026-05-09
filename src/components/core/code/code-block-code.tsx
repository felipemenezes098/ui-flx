'use client'

import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerRemoveLineBreak,
} from '@shikijs/transformers'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BundledTheme, codeToHtml } from 'shiki'

import { cn } from '@/lib/utils'

import { CodeBlockCopy } from './code-copy'

export type CodeBlockCodeProps = {
  code: string
  language?: string
  theme?: BundledTheme
  className?: string
  showLineNumbers?: boolean
  highlightLines?: string
  highlightWords?: string
  withCopy?: boolean
  collapsible?: boolean
} & React.HTMLProps<HTMLDivElement>

function CodeBlockCode({
  code,
  language = 'tsx',
  theme = 'min-light',
  className,
  showLineNumbers = false,
  highlightLines,
  highlightWords,
  withCopy = false,
  collapsible,
  ...props
}: CodeBlockCodeProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null)
  const { theme: themeName } = useTheme()

  useEffect(() => {
    async function highlight() {
      if (!code) {
        setHighlightedHtml('<pre><code></code></pre>')
        return
      }

      const transformers = [
        {
          pre(node: any) {
            node.properties.style = 'editor.background: transparent;'
          },
        },
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerRemoveLineBreak(),
      ]

      if (highlightLines) {
        transformers.push(transformerMetaHighlight())
      }
      if (highlightWords) {
        transformers.push(transformerMetaWordHighlight())
      }

      // Create meta string for transformers
      let metaString = ''
      if (highlightLines) {
        metaString += `{${highlightLines}}`
      }
      if (highlightWords) {
        metaString += ` /${highlightWords}/`
      }

      const html = await codeToHtml(code, {
        lang: language,
        theme: themeName === 'dark' ? 'min-dark' : 'min-light',
        transformers,
        meta: metaString ? { __raw: metaString.trim() } : undefined,
      })

      setHighlightedHtml(html)
    }
    highlight()
  }, [code, language, theme, themeName, highlightLines, highlightWords])

  const classNames = cn(
    'w-full overflow-auto no-scrollbar text-[13px] py-2  font-monos',
    showLineNumbers && 'shiki-with-lines',
    !collapsible && 'max-h-100',
    className,
  )

  const content = highlightedHtml ? (
    <div
      className={classNames}
      data-rehype-pretty-code-fragment
      dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      {...props}
    />
  ) : (
    <div className={classNames} {...props} data-rehype-pretty-code-fragment>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )

  if (withCopy) {
    return (
      <div className="relative">
        <div className="pointer-events-none sticky top-2 z-10 flex h-0 w-full justify-end pr-2">
          <div className="pointer-events-auto">
            <CodeBlockCopy fileContent={code} />
          </div>
        </div>
        {content}
      </div>
    )
  }

  return content
}

export { CodeBlockCode }
