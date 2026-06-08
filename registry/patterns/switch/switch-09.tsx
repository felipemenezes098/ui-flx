import { WifiIcon } from 'lucide-react'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

export function Switch09() {
  return (
    <div className="w-full max-w-xs">
      <div className="bg-primary text-primary-foreground flex aspect-[1.586/1] flex-col justify-between rounded-xl p-5 shadow-md">
        <div className="flex items-center justify-between">
          <div className="bg-primary-foreground/20 h-7 w-10 rounded-md" />
          <WifiIcon className="size-5 rotate-90" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono text-lg tracking-widest">
            •••• •••• •••• 4242
          </span>
          <div className="flex items-end justify-between">
            <span className="text-sm font-medium">Ada Lovelace</span>
            <span className="text-sm font-semibold italic">VISA</span>
          </div>
        </div>
      </div>
      <Field orientation="horizontal" className="mt-4">
        <FieldContent>
          <FieldLabel htmlFor="switch-09">Automatic payments</FieldLabel>
          <FieldDescription>
            Charge this card on the 1st of each month.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-09" defaultChecked />
      </Field>
    </div>
  )
}
