import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Separator } from '@/components/ui/separator'

const categories = [
  { id: 'apparel', name: 'Apparel', count: 128, checked: true },
  { id: 'shoes', name: 'Shoes', count: 64, checked: false },
  { id: 'accessories', name: 'Accessories', count: 32, checked: false },
]

const products = [
  { name: 'Merino Crew Tee', price: '$48' },
  { name: 'Linen Overshirt', price: '$120' },
  { name: 'Stretch Chino', price: '$88' },
]

export function FacetedFilterDecision() {
  return (
    <div className="bg-card flex w-full max-w-sm flex-col gap-4 rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col gap-2.5">
        <span className="text-xs font-medium">Category</span>
        {categories.map((opt) => (
          <label
            key={opt.id}
            className="flex cursor-pointer items-center gap-2.5 text-sm"
          >
            <Checkbox defaultChecked={opt.checked} />
            <span className="flex-1">{opt.name}</span>
            <span className="text-muted-foreground text-xs">{opt.count}</span>
          </label>
        ))}
      </div>
      <Separator />
      <Command className="rounded-lg border shadow-none">
        <CommandInput placeholder="Search products…" />
        <CommandList className="max-h-none">
          <CommandGroup heading="Results">
            {products.map((p) => (
              <CommandItem key={p.name}>
                <span className="flex-1">{p.name}</span>
                <span className="text-muted-foreground text-xs">{p.price}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-xs">224 results</span>
        <Badge variant="secondary">2 filters</Badge>
      </div>
    </div>
  )
}
