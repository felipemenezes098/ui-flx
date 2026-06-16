'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

type FormValues = z.infer<typeof formSchema>

export function RhfRules04() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { bio: '' },
  })

  const { errors } = form.formState
  const count = form.watch('bio').length
  const overLimit = count > MAX

  function onSubmit(data: FormValues) {
    toast.success('Bio saved', { description: `${data.bio.length} characters` })
  }

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field data-invalid={!!errors.bio}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="rhf-rules-04-bio">Bio</FieldLabel>
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
                id="rhf-rules-04-bio"
                rows={3}
                placeholder="Tell us a little about yourself…"
                aria-invalid={!!errors.bio}
                {...form.register('bio')}
              />
              {errors.bio && <FieldError errors={[errors.bio]} />}
            </Field>
            <Button type="submit" size="sm">
              Save bio
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
