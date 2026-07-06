import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const groups = [
  {
    value: 'email',
    title: 'Email notifications',
    rows: [
      { id: 'email-product', label: 'Product updates', checked: true },
      { id: 'email-security', label: 'Security alerts', checked: true },
      { id: 'email-marketing', label: 'Marketing', checked: false },
    ],
  },
  {
    value: 'push',
    title: 'Push notifications',
    rows: [
      { id: 'push-mentions', label: 'Mentions', checked: true },
      { id: 'push-comments', label: 'Comments', checked: false },
    ],
  },
]

export function Accordion15() {
  return (
    <Accordion defaultValue={['email']} className="w-full max-w-md">
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value}>
          <AccordionTrigger>{group.title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {group.rows.map((row) => (
                <div key={row.id} className="flex items-center justify-between">
                  <Label htmlFor={row.id} className="font-normal">
                    {row.label}
                  </Label>
                  <Switch id={row.id} defaultChecked={row.checked} />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
