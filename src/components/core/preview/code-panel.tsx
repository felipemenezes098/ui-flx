'use client'

import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CopyButton } from '@/components/core/copy-button'
import { Badge } from '@/components/ui/badge'
import { useActiveFile } from '@/hooks/use-active-file'
import type { RegistryCodeFile } from '@/lib/registry-source'
import { cn } from '@/lib/utils'

import { previewFallbackHeightClass, previewPanelClass } from './preview-frame'

interface CodePanelProps {
  files: RegistryCodeFile[]
  className?: string
}

/**
 * Generic code viewer: a file switcher (when >1 file), copy button, and
 * syntax-highlighted source. Domain-agnostic — takes resolved code files only.
 */
export function CodePanel({ files, className }: Readonly<CodePanelProps>) {
  const { activeFile, activeName, setActiveName } = useActiveFile(files)
  const hasCode = files.length > 0

  return (
    <div
      className={cn(
        previewPanelClass,
        previewFallbackHeightClass,
        'bg-card flex flex-col',
        className,
      )}
    >
      {hasCode && (
        <div className="flex shrink-0 items-center justify-between gap-2 border-b px-4 py-2.5">
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            {files.length > 1 &&
              files.map((file) => (
                <Badge
                  key={file.name}
                  variant="outline"
                  asChild
                  className={cn(
                    'hover:bg-muted cursor-pointer font-mono text-[11px] font-normal transition-colors',
                    activeName === file.name &&
                      'border-foreground/20 bg-muted text-foreground',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActiveName(file.name)}
                  >
                    {file.name}
                  </button>
                </Badge>
              ))}
            {files.length === 1 && (
              <span className="text-muted-foreground font-mono text-[11px]">
                {activeFile?.name}
              </span>
            )}
          </div>
          <CopyButton
            text={activeFile?.content ?? ''}
            variant="ghost"
            size="icon-sm"
            className="bg-card text-muted-foreground hover:bg-muted/80 h-7 shrink-0 px-2 shadow-none"
          />
        </div>
      )}

      <div className="no-scrollbar min-h-0 flex-1 overflow-auto">
        {activeFile ? (
          <CodeBlockCode
            code={activeFile.content}
            language="tsx"
            showLineNumbers
            collapsible
            className="max-h-none pr-4 pl-1.5"
          />
        ) : (
          <p className="text-muted-foreground flex h-full items-center justify-center p-5 text-sm italic">
            No code available for this block.
          </p>
        )}
      </div>
    </div>
  )
}
