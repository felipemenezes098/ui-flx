import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function Card06() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-06-email">Email</FieldLabel>
              <Input
                id="card-06-email"
                type="email"
                placeholder="you@example.com"
              />
            </Field>
            <Field>
              <div className="flex items-center">
                <FieldLabel htmlFor="card-06-password">Password</FieldLabel>
                <Button
                  variant="link"
                  className="ml-auto h-auto p-0 text-sm font-normal"
                >
                  Forgot?
                </Button>
              </div>
              <Input id="card-06-password" type="password" />
              <FieldDescription>Must be at least 8 characters.</FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign in
        </Button>
        <Button variant="outline" className="w-full">
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
