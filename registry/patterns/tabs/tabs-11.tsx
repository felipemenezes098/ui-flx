import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Tabs11() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md gap-4">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Update your profile details. Click save when done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="tabs11-name">Name</FieldLabel>
                <Input id="tabs11-name" defaultValue="shadcn" />
              </Field>
              <Field>
                <FieldLabel htmlFor="tabs11-username">Username</FieldLabel>
                <Input id="tabs11-username" defaultValue="@shadcn" />
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              You will be signed out after changing your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="tabs11-current">
                  Current password
                </FieldLabel>
                <Input id="tabs11-current" type="password" />
              </Field>
              <Field>
                <FieldLabel htmlFor="tabs11-new">New password</FieldLabel>
                <Input id="tabs11-new" type="password" />
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Button>Update password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
