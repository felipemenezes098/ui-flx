'use client'

import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { PlusIcon } from 'lucide-react'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export const lineItemSchema = z.object({
  description: z.string().min(1, 'Describe the item.'),
  quantity: z
    .string()
    .min(1, 'Required.')
    .refine(
      (v) => Number.isInteger(Number(v)) && Number(v) >= 1,
      'Use a whole number, 1 or more.',
    ),
  unitPrice: z
    .string()
    .min(1, 'Required.')
    .refine((v) => Number(v) > 0, 'Must be greater than 0.'),
})

export type LineItem = z.infer<typeof lineItemSchema>

const emptyItem: LineItem = { description: '', quantity: '1', unitPrice: '' }

export function LineItemDialog({
  onAdd,
}: Readonly<{ onAdd: (item: LineItem) => void }>) {
  const [open, setOpen] = useState(false)
  const form = useForm({
    defaultValues: emptyItem,
    validators: { onSubmit: lineItemSchema },
    onSubmit: async ({ value }) => {
      onAdd(value)
      form.reset()
      setOpen(false)
    },
  })

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) form.reset()
      }}
    >
      <DialogTrigger
        render={
          <Button type="button" variant="outline" size="sm" className="w-full">
            <PlusIcon className="size-4" />
            Add line item
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add line item</DialogTitle>
          <DialogDescription>
            This item is validated on its own before it joins the invoice.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field name="description">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      placeholder="Design retainer"
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
            <div className="flex gap-3">
              <form.Field name="quantity">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Quantity</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        min="1"
                        step="1"
                        placeholder="1"
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
              <form.Field name="unitPrice">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Unit price (USD)
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
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
            </div>
          </FieldGroup>
          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" size="sm">
              Add item
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
