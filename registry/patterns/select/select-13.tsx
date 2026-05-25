'use client'

import { useForm } from '@tanstack/react-form'
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
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const departments = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'support', label: 'Support' },
] as const

const formSchema = z.object({
  department: z.string().min(1, 'Select a department.'),
})

export function Select13() {
  const form = useForm({
    defaultValues: {
      department: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const label = departments.find(
        (item) => item.value === value.department,
      )?.label
      toast.success('Submitted', {
        description: label ?? value.department,
      })
    },
  })

  return (
    <form
      id="select-tanstack-form"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <form.Field name="department">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Department</FieldLabel>
                <Select
                  value={field.state.value}
                  onValueChange={(value) => {
                    field.handleChange(value)
                    field.handleBlur()
                  }}
                >
                  <SelectTrigger
                    id={field.name}
                    className="w-full"
                    aria-invalid={isInvalid}
                  >
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {departments.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
      </FieldGroup>
      <Button type="submit" size="sm">
        Submit
      </Button>
    </form>
  )
}
