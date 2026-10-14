import { CodeBlockCode } from '@/components/core/code/code-block-code'
import type { RegistryCodeFile } from '@/lib/registry-source'

export function BlockCode({ files }: Readonly<{ files: RegistryCodeFile[] }>) {
  if (files.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-6">
      {files.map((file) => (
        <div key={file.name} className="flex flex-col gap-2">
          <p className="text-muted-foreground font-mono text-xs">{file.name}</p>
          <div className="bg-card rounded-xl border px-4">
            <CodeBlockCode code={file.content} />
          </div>
        </div>
      ))}
    </section>
  )
}
