import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function Checkbox03() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-03-a" disabled />
        <Label htmlFor="checkbox-03-a" className="opacity-50">
          Disabled unchecked
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-03-b" disabled defaultChecked />
        <Label htmlFor="checkbox-03-b" className="opacity-50">
          Disabled checked
        </Label>
      </div>
    </div>
  )
}
