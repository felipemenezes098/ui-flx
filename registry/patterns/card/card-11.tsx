import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

const settings = [
  {
    id: 'card-11-product',
    label: 'Product updates',
    description: 'News about features and improvements.',
    defaultChecked: true,
  },
  {
    id: 'card-11-security',
    label: 'Security alerts',
    description: 'Get notified about suspicious activity.',
    defaultChecked: true,
  },
  {
    id: 'card-11-marketing',
    label: 'Marketing emails',
    description: 'Tips, offers, and occasional surveys.',
    defaultChecked: false,
  },
]

export function Card11() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what you want to hear about.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          {settings.map((setting) => (
            <Field key={setting.id} orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor={setting.id}>{setting.label}</FieldLabel>
                <FieldDescription>{setting.description}</FieldDescription>
              </FieldContent>
              <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
