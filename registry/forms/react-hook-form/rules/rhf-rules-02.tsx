'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

type FormValues = z.infer<typeof formSchema>

export function RhfRules02() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: { email: '' },
  })

  function onSubmit(data: FormValues) {
    toast.success('Email confirmed', { description: data.email })
  }

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rhf-rules-02-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="rhf-rules-02-email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : fieldState.isDirty ? (
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
              )}
            />
            <Button type="submit" size="sm">
              Continue
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
