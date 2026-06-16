'use client'

import { useForm } from '@tanstack/react-form'
import { Hash } from 'lucide-react'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const MIN = 1
const MAX = 99

const formSchema = z.object({
  quantity: z.coerce
    .number({ message: 'Enter a number.' })
    .int('Whole numbers only.')
    .min(MIN, `Minimum is ${MIN}.`)
    .max(MAX, `Maximum is ${MAX}.`),
})

export function TsfRules03() {
  const form = useForm({
    defaultValues: { quantity: 1 },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Quantity confirmed', {
        description: `${value.quantity} item(s)`,
      })
    },
  })

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Hash className="text-muted-foreground size-4" />
          Number range
        </CardTitle>
        <CardDescription>
          Tell us how many you&apos;d like to order.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field name="quantity">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Quantity</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="number"
                      inputMode="numeric"
                      min={MIN}
                      max={MAX}
                      aria-invalid={isInvalid}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid ? (
                      <FieldError errors={field.state.meta.errors} />
                    ) : (
                      <FieldDescription>
                        Pick a whole number between {MIN} and {MAX}.
                      </FieldDescription>
                    )}
                  </Field>
                )
              }}
            </form.Field>
            <Button type="submit" size="sm">
              Add to cart
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
