'use client'

import { useForm } from '@tanstack/react-form'
import { PenLine } from 'lucide-react'
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
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const MIN = 10
const MAX = 160

const formSchema = z.object({
  bio: z
    .string()
    .min(MIN, `At least ${MIN} characters.`)
    .max(MAX, `No more than ${MAX} characters.`),
})

export function TsfRules04() {
  const form = useForm({
    defaultValues: { bio: '' },
    validators: { onChange: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Bio saved', {
        description: `${value.bio.length} characters`,
      })
    },
  })

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PenLine className="text-muted-foreground size-4" />
          Character limit
        </CardTitle>
        <CardDescription>Keep your bio short and to the point.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field name="bio">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                const count = field.state.value.length
                const overLimit = count > MAX
                return (
                  <Field data-invalid={isInvalid}>
                    <div className="flex items-center justify-between">
                      <FieldLabel htmlFor={field.name}>Bio</FieldLabel>
                      <span
                        className={cn(
                          'text-muted-foreground text-xs tabular-nums',
                          overLimit && 'text-destructive',
                        )}
                      >
                        {count}/{MAX}
                      </span>
                    </div>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      rows={3}
                      placeholder="Tell us a little about yourself…"
                      aria-invalid={isInvalid}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            </form.Field>
            <Button type="submit" size="sm">
              Save bio
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
