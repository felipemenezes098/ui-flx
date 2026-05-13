'use client'

import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

export default function Inputs02() {
  return (
    <div className="relative w-64">
      <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
      <Input className="pl-9" placeholder="Search..." type="search" />
    </div>
  )
}
