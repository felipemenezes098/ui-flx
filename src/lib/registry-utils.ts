import { registryItemSchema } from 'shadcn/schema'
import { z } from 'zod'

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

/**
 * Fetches a registry item from the public/r directory
 * and resolves all registryDependencies recursively
 */
export async function getRegistryItem(name: string) {
  try {
    const response = await fetch(`/r/${name}.json`)
    if (!response.ok) {
      return null
    }

    const item = await response.json()
    const parsed = registryItemSchema.safeParse(item)

    if (!parsed.success) {
      console.error('Failed to parse registry item:', parsed.error.message)
      return null
    }

    // Resolve registry dependencies recursively
    const resolvedItem = await resolveRegistryDependencies(parsed.data)

    return resolvedItem
  } catch (error) {
    console.error('Failed to fetch registry item:', error)
    return null
  }
}

/**
 * Resolves registry dependencies recursively and merges all files
 */
async function resolveRegistryDependencies(
  item: z.infer<typeof registryItemSchema>,
  visited: Set<string> = new Set(),
): Promise<z.infer<typeof registryItemSchema>> {
  // Avoid circular dependencies
  if (visited.has(item.name)) {
    return item
  }
  visited.add(item.name)

  // If no dependencies, return as is
  if (!item.registryDependencies || item.registryDependencies.length === 0) {
    return item
  }

  // Collect all files from dependencies
  const allFiles = [...(item.files || [])]

  for (const dep of item.registryDependencies) {
    // Remove registry prefix if present (@${siteConfig.codeName}/cta -> cta)
    const depName = dep.replace(/^@[^/]+\//, '')

    try {
      const depResponse = await fetch(`/r/${depName}.json`)
      if (!depResponse.ok) {
        console.warn(`Failed to fetch dependency: ${depName}`)
        continue
      }

      const depItem = await depResponse.json()
      const parsedDep = registryItemSchema.safeParse(depItem)

      if (!parsedDep.success) {
        console.warn(`Failed to parse dependency: ${depName}`)
        continue
      }

      // Recursively resolve nested dependencies
      const resolvedDep = await resolveRegistryDependencies(
        parsedDep.data,
        visited,
      )

      // Merge files from dependency
      if (resolvedDep.files) {
        allFiles.push(...resolvedDep.files)
      }
    } catch (error) {
      console.warn(`Error fetching dependency ${depName}:`, error)
    }
  }

  return {
    ...item,
    files: allFiles,
  }
}

/**
 * Creates a file tree structure from registry item files
 * Adapted from the reference implementation
 */
export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>,
): FileTree[] {
  const root: FileTree[] = []

  for (const file of files) {
    const path = file.target ?? file.path
    const parts = path.split('/')
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      const existingNode = currentLevel.find((node) => node.name === part)

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path
        }
        if (!isFile) {
          // Move to next level in the tree
          currentLevel = existingNode.children!
        }
      }
      if (!existingNode) {
        const newNode: FileTree = isFile
          ? { name: part, path }
          : { name: part, children: [] }

        currentLevel.push(newNode)

        if (!isFile) {
          currentLevel = newNode.children!
        }
      }
    }
  }

  return root
}

/**
 * Type for registry item with inferred schema
 */
export type RegistryItem = z.infer<typeof registryItemSchema>

/**
 * Type for registry item file
 */
export type RegistryItemFile = NonNullable<RegistryItem['files']>[number]
