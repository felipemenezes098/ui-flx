'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

type FormInput = z.input<typeof formSchema>
type FormValues = z.output<typeof formSchema>

export function RhfRules03() {
  const form = useForm<FormInput, unknown, FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { quantity: 1 },
  })

  function onSubmit(data: FormValues) {
    toast.success('Quantity confirmed', {
      description: `${data.quantity} item(s)`,
    })
  }

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="quantity"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rhf-rules-03-quantity">
                    Quantity
                  </FieldLabel>
                  <Input
                    {...field}
                    value={field.value as number}
                    id="rhf-rules-03-quantity"
                    type="number"
                    inputMode="numeric"
                    min={MIN}
                    max={MAX}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : (
                    <FieldDescription>
                      Pick a whole number between {MIN} and {MAX}.
                    </FieldDescription>
                  )}
                </Field>
              )}
            />
            <Button type="submit" size="sm">
              Add to cart
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
