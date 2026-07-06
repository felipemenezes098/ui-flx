import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  ChevronRightIcon,
  FileIcon,
  FileJsonIcon,
  FileTextIcon,
  FolderIcon,
  FolderOpenIcon,
} from 'lucide-react'

type TreeNode = {
  name: string
  children?: TreeNode[]
}

const tree: TreeNode[] = [
  {
    name: 'app',
    children: [
      {
        name: '(main)',
        children: [{ name: 'layout.tsx' }, { name: 'page.tsx' }],
      },
      { name: 'globals.css' },
    ],
  },
  {
    name: 'components',
    children: [
      {
        name: 'ui',
        children: [{ name: 'button.tsx' }, { name: 'collapsible.tsx' }],
      },
    ],
  },
  { name: 'package.json' },
  { name: 'tsconfig.json' },
]

function fileIcon(name: string) {
  if (name.endsWith('.json')) return FileJsonIcon
  if (name.endsWith('.tsx') || name.endsWith('.ts')) return FileTextIcon
  return FileIcon
}

function Tree({ nodes, level = 0 }: { nodes: TreeNode[]; level?: number }) {
  return (
    <ul>
      {nodes.map((node) =>
        node.children ? (
          <li key={node.name}>
            <Collapsible defaultOpen={level === 0}>
              <CollapsibleTrigger
                className="group/folder hover:bg-accent flex w-full items-center gap-1.5 rounded-md py-1 pr-2 text-sm"
                style={{ paddingLeft: `${level * 16 + 8}px` }}
              >
                <ChevronRightIcon className="text-muted-foreground size-3.5 shrink-0 transition-transform group-data-panel-open/folder:rotate-90" />
                <FolderIcon className="text-muted-foreground size-4 shrink-0 group-data-panel-open/folder:hidden" />
                <FolderOpenIcon className="text-muted-foreground hidden size-4 shrink-0 group-data-panel-open/folder:block" />
                {node.name}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Tree nodes={node.children} level={level + 1} />
              </CollapsibleContent>
            </Collapsible>
          </li>
        ) : (
          <li key={node.name}>
            <FileRow name={node.name} level={level} />
          </li>
        ),
      )}
    </ul>
  )
}

function FileRow({ name, level }: { name: string; level: number }) {
  const Icon = fileIcon(name)
  return (
    <div
      className="hover:bg-accent text-muted-foreground flex items-center gap-1.5 rounded-md py-1 pr-2 text-sm"
      style={{ paddingLeft: `${level * 16 + 26}px` }}
    >
      <Icon className="size-4 shrink-0" />
      {name}
    </div>
  )
}

export function Collapsible03() {
  return (
    <div className="w-full max-w-xs rounded-lg border p-2">
      <Tree nodes={tree} />
    </div>
  )
}
