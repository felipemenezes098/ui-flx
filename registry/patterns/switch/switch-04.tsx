import { Switch } from '@/components/ui/switch'

export function Switch04() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Switch size="sm" defaultChecked />
        <span className="text-muted-foreground text-xs">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Switch size="default" defaultChecked />
        <span className="text-muted-foreground text-xs">default</span>
      </div>
    </div>
  )
}
