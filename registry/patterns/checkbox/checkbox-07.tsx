'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { FileIcon, FolderIcon } from 'lucide-react'
import { useState } from 'react'

type TreeNode = {
  id: string
  label: string
  children?: TreeNode[]
}

const tree: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button', label: 'button.tsx' },
          { id: 'input', label: 'input.tsx' },
        ],
      },
      {
        id: 'lib',
        label: 'lib',
        children: [{ id: 'utils', label: 'utils.ts' }],
      },
    ],
  },
  {
    id: 'public',
    label: 'public',
    children: [{ id: 'logo', label: 'logo.svg' }],
  },
]

function leafIds(node: TreeNode): string[] {
  return node.children ? node.children.flatMap(leafIds) : [node.id]
}

function TreeItem({
  node,
  checked,
  onToggle,
  depth = 0,
}: Readonly<{
  node: TreeNode
  checked: Set<string>
  onToggle: (ids: string[], next: boolean) => void
  depth?: number
}>) {
  const leaves = leafIds(node)
  const checkedLeaves = leaves.filter((id) => checked.has(id))
  const allLeavesChecked =
    checkedLeaves.length > 0 && checkedLeaves.length === leaves.length
  const someLeavesChecked =
    checkedLeaves.length > 0 && checkedLeaves.length < leaves.length

  return (
    <div className="flex flex-col gap-2.5">
      <div
        className="flex items-center gap-2.5"
        style={{ paddingLeft: depth * 20 }}
      >
        <Checkbox
          id={`checkbox-07-${node.id}`}
          checked={allLeavesChecked}
          indeterminate={someLeavesChecked}
          onCheckedChange={(value) => onToggle(leaves, value === true)}
        />
        {node.children ? (
          <FolderIcon className="text-muted-foreground size-4" />
        ) : (
          <FileIcon className="text-muted-foreground size-4" />
        )}
        <Label htmlFor={`checkbox-07-${node.id}`} className="font-normal">
          {node.label}
        </Label>
      </div>
      {node.children?.map((child) => (
        <TreeItem
          key={child.id}
          node={child}
          checked={checked}
          onToggle={onToggle}
          depth={depth + 1}
        />
      ))}
    </div>
  )
}

export function Checkbox07() {
  const [checked, setChecked] = useState<Set<string>>(
    () => new Set(['button', 'utils']),
  )

  const toggle = (ids: string[], next: boolean) =>
    setChecked((prev) => {
      const draft = new Set(prev)
      ids.forEach((id) => (next ? draft.add(id) : draft.delete(id)))
      return draft
    })

  return (
    <div className="flex w-full max-w-xs flex-col gap-2.5">
      {tree.map((node) => (
        <TreeItem
          key={node.id}
          node={node}
          checked={checked}
          onToggle={toggle}
        />
      ))}
    </div>
  )
}
