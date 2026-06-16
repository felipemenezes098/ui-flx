'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  framework: z.string().min(1, 'Select a framework.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfFields07() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { framework: '' },
  })

  const { errors } = form.formState

  function onSubmit(data: FormValues) {
    toast.success('Framework selected', { description: data.framework })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="framework"
          render={({ field }) => (
            <Field data-invalid={!!errors.framework}>
              <FieldLabel htmlFor="rhf-fields-07-framework">
                Framework
              </FieldLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="rhf-fields-07-framework"
                  className="w-full"
                  aria-invalid={!!errors.framework}
                >
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frontend</SelectLabel>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Backend</SelectLabel>
                    <SelectItem value="express">Express</SelectItem>
                    <SelectItem value="fastify">Fastify</SelectItem>
                    <SelectItem value="nest">NestJS</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.framework && <FieldError errors={[errors.framework]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  )
}
