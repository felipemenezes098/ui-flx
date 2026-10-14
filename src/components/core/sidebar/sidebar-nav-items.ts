import { dataNavbar } from '@/data/navbar'

export const sidebarNavItems = [{ name: 'Home', href: '/' }, ...dataNavbar]

export function isActiveNavPath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/'
  }
  return pathname.split('/')[1] === href.split('/')[1]
}
