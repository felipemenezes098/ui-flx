import { siteConfig } from '@/config/site'

export type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

const packageRunners: Record<PackageManager, string> = {
  pnpm: 'pnpm dlx',
  npm: 'npx',
  yarn: 'yarn dlx',
  bun: 'bun dlx',
}

export function registryInstallTarget(registryName: string): string {
  return `shadcn@latest add @${siteConfig.codeName}/${registryName}`
}

export function registryAddCommand(
  registryName: string,
  packageManager: PackageManager = 'pnpm',
): string {
  return `${packageRunners[packageManager]} ${registryInstallTarget(registryName)}`
}

export function installCommand(registryName: string): string {
  return registryAddCommand(registryName, 'pnpm')
}

export function registryItemUrl(registryName: string): string {
  return `${siteConfig.url}/r/${registryName}.json`
}
