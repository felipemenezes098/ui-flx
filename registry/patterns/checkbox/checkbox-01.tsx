import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function Checkbox01() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="checkbox-01-terms" defaultChecked />
      <Label htmlFor="checkbox-01-terms">Accept terms and conditions</Label>
    </div>
  )
}
