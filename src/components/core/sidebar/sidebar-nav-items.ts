import { dataNavbar } from '@/data/navbar'

export const swiftuiLink = {
  name: 'SwiftUI',
  href: 'https://swiftui.flexnative.com/',
}

export const sidebarNavItems = [{ name: 'Home', href: '/' }, ...dataNavbar]

export function isActiveNavPath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/'
  }
  return pathname.split('/')[1] === href.split('/')[1]
}
