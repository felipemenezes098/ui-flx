import { Badge } from '@/components/ui/badge'

const tags = [
  'react',
  'typescript',
  'tailwind',
  'next.js',
  'shadcn/ui',
  'motion',
  'radix',
]

export function Badge13() {
  return (
    <div className="flex max-w-xs flex-wrap gap-1.5">
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="font-normal">
          {tag}
        </Badge>
      ))}
    </div>
  )
}
