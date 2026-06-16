'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserPlus } from 'lucide-react'
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
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z
  .object({
    name: z.string().min(2, 'Enter your full name.'),
    email: z.email('Enter a valid email.'),
    password: z
      .string()
      .min(8, 'Use at least 8 characters.')
      .regex(/[A-Z]/, 'Include an uppercase letter.')
      .regex(/[0-9]/, 'Include a number.'),
    confirm: z.string(),
    country: z.string().min(1, 'Select your country.'),
    terms: z.boolean().refine((v) => v, 'Accept the terms to continue.'),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match.',
    path: ['confirm'],
  })

type FormValues = z.infer<typeof formSchema>

export function RhfRecipes02() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
      country: '',
      terms: false,
    },
  })

  const { errors } = form.formState

  function onSubmit(data: FormValues) {
    toast.success('Account created', { description: data.email })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="text-muted-foreground size-4" />
          Create your account
        </CardTitle>
        <CardDescription>Get started in less than a minute.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="rhf-recipes-02-name">Full name</FieldLabel>
              <Input
                id="rhf-recipes-02-name"
                placeholder="Ada Lovelace"
                aria-invalid={!!errors.name}
                {...form.register('name')}
              />
              {errors.name && <FieldError errors={[errors.name]} />}
            </Field>
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="rhf-recipes-02-email">Email</FieldLabel>
              <Input
                id="rhf-recipes-02-email"
                type="email"
                placeholder="ada@example.com"
                aria-invalid={!!errors.email}
                {...form.register('email')}
              />
              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>
            <Field data-invalid={!!errors.password}>
              <FieldLabel htmlFor="rhf-recipes-02-password">
                Password
              </FieldLabel>
              <Input
                id="rhf-recipes-02-password"
                type="password"
                placeholder="••••••••"
                aria-invalid={!!errors.password}
                {...form.register('password')}
              />
              {errors.password ? (
                <FieldError errors={[errors.password]} />
              ) : (
                <FieldDescription>
                  8+ characters, one uppercase and one number.
                </FieldDescription>
              )}
            </Field>
            <Field data-invalid={!!errors.confirm}>
              <FieldLabel htmlFor="rhf-recipes-02-confirm">
                Confirm password
              </FieldLabel>
              <Input
                id="rhf-recipes-02-confirm"
                type="password"
                placeholder="••••••••"
                aria-invalid={!!errors.confirm}
                {...form.register('confirm')}
              />
              {errors.confirm && <FieldError errors={[errors.confirm]} />}
            </Field>
            <Controller
              control={form.control}
              name="country"
              render={({ field }) => (
                <Field data-invalid={!!errors.country}>
                  <FieldLabel htmlFor="rhf-recipes-02-country">
                    Country
                  </FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="rhf-recipes-02-country"
                      className="w-full"
                      aria-invalid={!!errors.country}
                    >
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Americas</SelectLabel>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="br">Brazil</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Europe</SelectLabel>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="pt">Portugal</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.country && <FieldError errors={[errors.country]} />}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="terms"
              render={({ field }) => (
                <Field orientation="horizontal" data-invalid={!!errors.terms}>
                  <Checkbox
                    id="rhf-recipes-02-terms"
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                    aria-invalid={!!errors.terms}
                  />
                  <FieldContent>
                    <FieldLabel htmlFor="rhf-recipes-02-terms">
                      I agree to the Terms and Privacy Policy.
                    </FieldLabel>
                    {errors.terms && <FieldError errors={[errors.terms]} />}
                  </FieldContent>
                </Field>
              )}
            />
            <Button type="submit" size="sm">
              Create account
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
