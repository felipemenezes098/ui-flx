'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogIn } from 'lucide-react'
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
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z.email('Enter a valid email.'),
  password: z.string().min(1, 'Enter your password.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfRecipes03() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  })

  const { errors } = form.formState

  function onSubmit(data: FormValues) {
    toast.success('Welcome back', { description: data.email })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LogIn className="text-muted-foreground size-4" />
          Sign in
        </CardTitle>
        <CardDescription>Use your email and password to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="rhf-recipes-03-email">Email</FieldLabel>
              <Input
                id="rhf-recipes-03-email"
                type="email"
                placeholder="ada@example.com"
                aria-invalid={!!errors.email}
                {...form.register('email')}
              />
              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>
            <Field data-invalid={!!errors.password}>
              <FieldLabel htmlFor="rhf-recipes-03-password">Password</FieldLabel>
              <Input
                id="rhf-recipes-03-password"
                type="password"
                placeholder="••••••••"
                aria-invalid={!!errors.password}
                {...form.register('password')}
              />
              {errors.password && <FieldError errors={[errors.password]} />}
            </Field>
            <Button type="submit" size="sm">
              Sign in
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
