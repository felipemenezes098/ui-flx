'use client'

import { useForm } from '@tanstack/react-form'
import { ReceiptTextIcon, Trash2Icon } from 'lucide-react'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  Field,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

import {
  LineItemDialog,
  lineItemSchema,
  type LineItem,
} from './tsf-advanced-02-line-item-dialog'

const formSchema = z.object({
  client: z.string().min(1, 'Client name is required.'),
  items: z.array(lineItemSchema).min(1, 'Add at least one line item.'),
})

function lineTotal(item: LineItem) {
  return Number(item.quantity) * Number(item.unitPrice)
}

function money(value: number) {
  return `$${value.toFixed(2)}`
}

export function TsfAdvanced02() {
  const form = useForm({
    defaultValues: {
      client: '',
      items: [] as LineItem[],
    },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      const total = value.items.reduce((sum, i) => sum + lineTotal(i), 0)
      toast.success('Invoice created', {
        description: `${value.items.length} item(s) · ${money(total)}`,
      })
    },
  })

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Create invoice</CardTitle>
        <CardDescription>
          Add a client, then build the line items one at a time.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
        className="flex flex-col gap-3"
      >
        <CardContent className="flex flex-col gap-6">
          <form.Field name="client">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Client</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    placeholder="Acme Inc."
                    aria-invalid={isInvalid}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>

          <form.Field name="items" mode="array">
            {(itemsField) => {
              const items = itemsField.state.value
              const total = items.reduce((sum, i) => sum + lineTotal(i), 0)
              return (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Line items</span>
                    {items.length > 0 && (
                      <span className="text-muted-foreground text-sm tabular-nums">
                        Total {money(total)}
                      </span>
                    )}
                  </div>

                  {items.length === 0 ? (
                    <Empty className="border">
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <ReceiptTextIcon />
                        </EmptyMedia>
                        <EmptyTitle>No line items</EmptyTitle>
                        <EmptyDescription>
                          Add billable items to build out this invoice.
                        </EmptyDescription>
                      </EmptyHeader>
                    </Empty>
                  ) : (
                    <ul className="flex flex-col gap-2">
                      {items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-muted/30 flex items-center justify-between gap-3 rounded-lg border px-3 py-2"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm">
                              {item.description}
                            </p>
                            <p className="text-muted-foreground text-xs tabular-nums">
                              {item.quantity} × {money(Number(item.unitPrice))}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm tabular-nums">
                              {money(lineTotal(item))}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              aria-label="Remove item"
                              onClick={() => itemsField.removeValue(index)}
                            >
                              <Trash2Icon className="size-4" />
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  <LineItemDialog
                    onAdd={(item) => itemsField.pushValue(item)}
                  />
                </div>
              )
            }}
          </form.Field>
        </CardContent>
        <form.Subscribe selector={(state) => state.values.items.length}>
          {(count) => (
            <CardFooter className="justify-end">
              <Button type="submit" size="sm" disabled={count === 0}>
                Create invoice
              </Button>
            </CardFooter>
          )}
        </form.Subscribe>
      </form>
    </Card>
  )
}
