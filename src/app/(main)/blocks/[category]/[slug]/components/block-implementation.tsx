import type { RegistryItem } from 'shadcn/schema'

import { useMDXComponents } from '@/mdx-components'

interface BlockImplementationProps {
  category: string
  slug: string
  item: RegistryItem | undefined
}

function toPascalCase(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

/**
 * Install/usage docs generated from the registry item: the CLI command, the
 * npm and shadcn dependencies, and one copy step per file. Nothing here is
 * written per block, so a new block gets its page from the catalog alone.
 */
export function BlockImplementation({
  category,
  slug,
  item,
}: Readonly<BlockImplementationProps>) {
  const {
    CodeTabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Steps,
    Step,
    CodeBlockCommand,
    CodeBlockFromFile,
    h2: H2,
    code: Code,
    p: P,
  } = useMDXComponents({}) as Record<string, React.ElementType>

  const component = toPascalCase(slug)
  const blockDir = `registry/blocks/${category}/${slug}/`
  const files = item?.files ?? []
  // Own files first, then files pulled in from other registry items
  // (e.g. an illustration), which the reader has to add as well.
  const ownFiles = files.filter((f) => f.path.startsWith(blockDir))
  const extraFiles = files.filter((f) => !f.path.startsWith(blockDir))

  const packages = item?.dependencies ?? []
  const shadcnComponents = (item?.registryDependencies ?? []).filter(
    (dep) => !dep.startsWith('@') && !dep.startsWith('http'),
  )

  const usage = (
    <P>
      Import <Code>{component}</Code> from{' '}
      <Code>{`@/components/flx/blocks/${category}/${slug}`}</Code> and render{' '}
      <Code>{`<${component} />`}</Code>. The copy, images and links live in the
      file, so edit them there.
    </P>
  )

  return (
    <>
      <H2>Implementation</H2>

      <CodeTabs>
        <TabsList>
          <TabsTrigger value="cli">Command</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContent value="cli">
          <CodeBlockCommand command={`shadcn@latest add @flx/${slug}`} />
          <H2>Usage</H2>
          {usage}
        </TabsContent>

        <TabsContent value="manual">
          <Steps>
            {(shadcnComponents.length > 0 || packages.length > 0) && (
              <>
                <Step>Install dependencies</Step>
                {shadcnComponents.length > 0 && (
                  <CodeBlockCommand
                    command={`shadcn@latest add ${shadcnComponents.join(' ')}`}
                  />
                )}
                {packages.map((pkg) => (
                  <CodeBlockCommand key={pkg} command={pkg} isPackage />
                ))}
              </>
            )}

            {extraFiles.map((file) => (
              <FileStep
                key={file.path}
                label={`Add ${fileName(file.path)}`}
                file={file}
                Step={Step}
                CodeBlockFromFile={CodeBlockFromFile}
                P={P}
                Code={Code}
              />
            ))}

            {ownFiles.map((file, index) => (
              <FileStep
                key={file.path}
                label={
                  index === 0
                    ? 'Copy the component'
                    : `Copy ${fileName(file.path)}`
                }
                file={file}
                Step={Step}
                CodeBlockFromFile={CodeBlockFromFile}
                P={P}
                Code={Code}
              />
            ))}

            <Step>Use the component</Step>
            {usage}
          </Steps>
        </TabsContent>
      </CodeTabs>
    </>
  )
}

function fileName(path: string) {
  return path.split('/').pop() ?? path
}

function FileStep({
  label,
  file,
  Step,
  CodeBlockFromFile,
  P,
  Code,
}: Readonly<{
  label: string
  file: NonNullable<RegistryItem['files']>[number]
  Step: React.ElementType
  CodeBlockFromFile: React.ElementType
  P: React.ElementType
  Code: React.ElementType
}>) {
  return (
    <>
      <Step>{label}</Step>
      {file.target && (
        <P>
          Save it as <Code>{file.target}</Code>.
        </P>
      )}
      <CodeBlockFromFile
        filePath={file.path}
        title={fileName(file.path)}
        collapsible
      />
    </>
  )
}
