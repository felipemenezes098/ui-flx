import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select05() {
  const items = [
    {
      value: 'free',
      label: 'Free',
      description: 'Up to 3 projects, 1 user',
    },
    {
      value: 'pro',
      label: 'Pro',
      description: 'Unlimited projects, 5 users',
    },
    {
      value: 'team',
      label: 'Team',
      description: 'Unlimited projects, 20 users',
    },
  ]

  return (
    <Select defaultValue="free">
      <SelectTrigger className="h-11! w-full max-w-64 *:data-[slot=select-value]:text-start">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-muted-foreground text-xs font-normal">
                  {item.description}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
