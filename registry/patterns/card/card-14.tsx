import { CreditCardIcon } from 'lucide-react'

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
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Card14() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Payment details</CardTitle>
        <CardDescription>
          Enter your card information to complete checkout.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-14-name">Name on card</FieldLabel>
              <Input id="card-14-name" placeholder="John Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-14-number">Card number</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="card-14-number"
                  placeholder="1234 1234 1234 1234"
                  inputMode="numeric"
                />
                <InputGroupAddon>
                  <CreditCardIcon />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="card-14-expiry">Expires</FieldLabel>
                <Input id="card-14-expiry" placeholder="MM / YY" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-14-cvc">CVC</FieldLabel>
                <Input id="card-14-cvc" placeholder="123" inputMode="numeric" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="card-14-country">Country</FieldLabel>
              <Select defaultValue="us">
                <SelectTrigger id="card-14-country" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="br">Brazil</SelectItem>
                    <SelectItem value="pt">Portugal</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Pay $29.00
        </Button>
      </CardFooter>
    </Card>
  )
}
