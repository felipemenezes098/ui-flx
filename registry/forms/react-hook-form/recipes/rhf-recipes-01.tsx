'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MessageSquare } from 'lucide-react'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, 'Enter your name.'),
  email: z.email('Enter a valid email.'),
  topic: z.string().min(1, 'Pick a topic.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfRecipes01() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', topic: '', message: '' },
  })

  const { errors } = form.formState

  function onSubmit(data: FormValues) {
    toast.success('Message sent', { description: data.email })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="text-muted-foreground size-4" />
          Contact us
        </CardTitle>
        <CardDescription>
          Drop us a line and we&apos;ll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="rhf-recipes-01-name">Name</FieldLabel>
              <Input
                id="rhf-recipes-01-name"
                placeholder="Ada Lovelace"
                aria-invalid={!!errors.name}
                {...form.register('name')}
              />
              {errors.name && <FieldError errors={[errors.name]} />}
            </Field>
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="rhf-recipes-01-email">Email</FieldLabel>
              <Input
                id="rhf-recipes-01-email"
                type="email"
                placeholder="ada@example.com"
                aria-invalid={!!errors.email}
                {...form.register('email')}
              />
              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>
            <Controller
              control={form.control}
              name="topic"
              render={({ field }) => (
                <Field data-invalid={!!errors.topic}>
                  <FieldLabel htmlFor="rhf-recipes-01-topic">Topic</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="rhf-recipes-01-topic"
                      className="w-full"
                      aria-invalid={!!errors.topic}
                    >
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>How can we help?</SelectLabel>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.topic && <FieldError errors={[errors.topic]} />}
                </Field>
              )}
            />
            <Field data-invalid={!!errors.message}>
              <FieldLabel htmlFor="rhf-recipes-01-message">Message</FieldLabel>
              <Textarea
                id="rhf-recipes-01-message"
                rows={4}
                placeholder="How can we help?"
                aria-invalid={!!errors.message}
                {...form.register('message')}
              />
              {errors.message && <FieldError errors={[errors.message]} />}
            </Field>
            <Button type="submit" size="sm">
              Send message
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
