import { CodeBlockCode } from '@/components/core/code/code-block-code'
import { CopyButton } from '@/components/core/copy-button'
import type { RegistryCodeFile } from '@/lib/registry-source'

export function BlockCode({ files }: Readonly<{ files: RegistryCodeFile[] }>) {
  if (files.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-6">
      {files.map((file) => (
        <div
          key={file.name}
          className="border-border overflow-hidden rounded-xl border"
        >
          <div className="border-border flex h-11 items-center justify-between gap-4 border-b pr-2 pl-4">
            <p className="text-muted-foreground truncate font-mono text-xs">
              {file.name}
            </p>
            <CopyButton
              text={file.content}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground h-7 shrink-0 px-2 shadow-none"
            />
          </div>
          <CodeBlockCode code={file.content} className="py-3" />
        </div>
      ))}
    </section>
  )
}
