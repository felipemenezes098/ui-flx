'use client'

import { TerminalIcon } from 'lucide-react'
import * as React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useConfig } from '@/hooks/use-config'

import { CodeBlock } from './code-block'
import { CodeBlockCode } from './code-block-code'
import { CodeBlockGroup } from './code-block-group'
import { CodeBlockCopy } from './code-copy'

export function CodeBlockCommand({
  command,
  isPackage = false,
  isDevDependency = false,
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<'pre'> & {
  command?: string
  isPackage?: boolean
  isDevDependency?: boolean
  __npm__?: string
  __yarn__?: string
  __pnpm__?: string
  __bun__?: string
}) {
  const [config, setConfig] = useConfig()

  const packageManager = config.packageManager || 'npm'

  const tabs = React.useMemo(() => {
    const devFlag = isDevDependency
      ? {
          npm: '-D',
          pnpm: '-D',
          yarn: '-D',
          bun: '-d',
        }
      : {
          npm: '',
          pnpm: '',
          yarn: '',
          bun: '',
        }

    if (command) {
      return {
        npm:
          __npm__ ??
          (isPackage
            ? `npm install ${command} ${devFlag.npm}`.trim()
            : `npx ${command}`),

        pnpm:
          __pnpm__ ??
          (isPackage
            ? `pnpm add ${command} ${devFlag.pnpm}`.trim()
            : `pnpm dlx ${command}`),

        yarn:
          __yarn__ ??
          (isPackage
            ? `yarn add ${command} ${devFlag.yarn}`.trim()
            : `yarn dlx ${command}`),

        bun:
          __bun__ ??
          (isPackage
            ? `bun add ${command} ${devFlag.bun}`.trim()
            : `bun dlx ${command}`),
      }
    }

    return {
      npm: __npm__,
      pnpm: __pnpm__,
      yarn: __yarn__,
      bun: __bun__,
    }
  }, [
    command,
    isPackage,
    isDevDependency,
    __npm__,
    __pnpm__,
    __yarn__,
    __bun__,
  ])

  const [code, setCode] = React.useState(tabs[packageManager] ?? tabs.npm)

  React.useEffect(() => {
    setCode(tabs[packageManager] ?? tabs.npm)
  }, [packageManager, tabs])

  return (
    <CodeBlock>
      <Tabs
        value={packageManager}
        className="w-full gap-0"
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as 'npm' | 'pnpm' | 'yarn' | 'bun',
          })
          setCode(tabs[value as 'npm' | 'pnpm' | 'yarn' | 'bun'] || '')
        }}
      >
        <CodeBlockGroup>
          <div className="flex items-center gap-2">
            <div className="border-border bg-background flex size-7 items-center justify-center rounded-md border">
              <TerminalIcon className="size-3.5" />
            </div>
            <TabsList className="h-7 gap-1 bg-transparent p-0">
              {Object.entries(tabs).map(([key, value]) => {
                if (!value) return null
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-background ring-offset-background focus-visible:ring-ring data-[state=active]:text-foreground data-[state=active]:border-border text-muted-foreground hover:bg-muted hover:text-foreground h-7 rounded-md px-2 text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none data-[state=active]:border data-[state=active]:shadow-none"
                  >
                    {key}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>
          <CodeBlockCopy fileContent={code ?? ''} />
        </CodeBlockGroup>
        <div>
          {Object.entries(tabs).map(([key, value]) => {
            if (!value) return null
            return (
              <TabsContent key={key} value={key} className="relative mt-0">
                <CodeBlockCode code={value} language="bash" />
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
    </CodeBlock>
  )
}
