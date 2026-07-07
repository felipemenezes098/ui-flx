'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
  const form = useForm<LineItem>({
    resolver: zodResolver(lineItemSchema),
    defaultValues: emptyItem,
  })

  function handleAdd(data: LineItem) {
    onAdd(data)
    form.reset(emptyItem)
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) form.reset(emptyItem)
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
            e.stopPropagation()
            void form.handleSubmit(handleAdd)(e)
          }}
        >
          <FieldGroup>
            <Controller
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rhf-advanced-02-item-description">
                    Description
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rhf-advanced-02-item-description"
                    placeholder="Design retainer"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex gap-3">
              <Controller
                control={form.control}
                name="quantity"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="rhf-advanced-02-item-quantity">
                      Quantity
                    </FieldLabel>
                    <Input
                      {...field}
                      id="rhf-advanced-02-item-quantity"
                      type="number"
                      min="1"
                      step="1"
                      placeholder="1"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="unitPrice"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="rhf-advanced-02-item-price">
                      Unit price (USD)
                    </FieldLabel>
                    <Input
                      {...field}
                      id="rhf-advanced-02-item-price"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
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
