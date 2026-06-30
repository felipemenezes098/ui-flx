import { siteConfig } from '@/config/site'

export function registryInstallTarget(registryName: string): string {
  return `shadcn@latest add @${siteConfig.codeName}/${registryName}`
}

export function installCommand(registryName: string): string {
  return `pnpm dlx ${registryInstallTarget(registryName)}`
}

export function registryItemUrl(registryName: string): string {
  return `${siteConfig.url}/r/${registryName}.json`
}
