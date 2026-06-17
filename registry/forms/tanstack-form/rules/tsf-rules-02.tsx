'use client'

import { useForm } from '@tanstack/react-form'
import { CheckCircle2, Mail } from 'lucide-react'
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

const formSchema = z.object({
  email: z.email('Enter a valid email address.'),
})

export function TsfRules02() {
  const form = useForm({
    defaultValues: { email: '' },
    validators: { onChange: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Email confirmed', { description: value.email })
    },
  })

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="text-muted-foreground size-4" />
          Email address
        </CardTitle>
        <CardDescription>
          Enter the email where we can reach you.
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
            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                const isOk =
                  field.state.meta.isTouched &&
                  field.state.meta.isValid &&
                  field.state.value.length > 0
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      placeholder="you@example.com"
                      aria-invalid={isInvalid}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid ? (
                      <FieldError errors={field.state.meta.errors} />
                    ) : isOk ? (
                      <FieldDescription className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500">
                        <CheckCircle2 className="size-3.5" />
                        Looks good.
                      </FieldDescription>
                    ) : (
                      <FieldDescription>
                        We&apos;ll never share your email.
                      </FieldDescription>
                    )}
                  </Field>
                )
              }}
            </form.Field>
            <Button type="submit" size="sm">
              Continue
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
