import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  CircleIcon,
  TriangleAlertIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from 'lucide-react'

const items = [
  {
    value: 'none',
    label: 'None',
    icon: CircleIcon,
  },

  {
    value: 'low',
    label: 'Low',
    icon: ClockIcon,
  },
  {
    value: 'medium',
    label: 'Medium',
    icon: TriangleAlertIcon,
  },
  {
    value: 'high',
    label: 'High',
    icon: XCircleIcon,
  },
  {
    value: 'done',
    label: 'Done',
    icon: CheckCircleIcon,
  },
]

export function Select04() {
  return (
    <Select defaultValue="done">
      <SelectTrigger className="w-full max-w-56">
        <SelectValue placeholder="Select a priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon className="size-3.5" />
              <span>{item.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
