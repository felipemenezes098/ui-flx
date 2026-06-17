'use client'

import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

import {
  LineItemDialog,
  lineItemSchema,
  type LineItem,
} from './rhf-advanced-02-line-item-dialog'

const formSchema = z.object({
  client: z.string().min(1, 'Client name is required.'),
  items: z.array(lineItemSchema).min(1, 'Add at least one line item.'),
})

type FormValues = z.infer<typeof formSchema>

function lineTotal(item: LineItem) {
  return Number(item.quantity) * Number(item.unitPrice)
}

function money(value: number) {
  return `$${value.toFixed(2)}`
}

export function RhfAdvanced02() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { client: '', items: [] },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  })

  const total = fields.reduce((sum, item) => sum + lineTotal(item), 0)

  function onSubmit(data: FormValues) {
    toast.success('Invoice created', {
      description: `${data.items.length} item(s) · ${money(total)}`,
    })
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Create invoice</CardTitle>
        <CardDescription>
          Add a client, then build the line items one at a time.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <CardContent className="flex flex-col gap-6">
          <Controller
            control={form.control}
            name="client"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-advanced-02-client">Client</FieldLabel>
                <Input
                  {...field}
                  id="rhf-advanced-02-client"
                  placeholder="Acme Inc."
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Line items</span>
              {fields.length > 0 && (
                <span className="text-muted-foreground text-sm tabular-nums">
                  Total {money(total)}
                </span>
              )}
            </div>

            {fields.length === 0 ? (
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
                {fields.map((item, index) => (
                  <li
                    key={item.id}
                    className="bg-muted/30 flex items-center justify-between gap-3 rounded-lg border px-3 py-2"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm">{item.description}</p>
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
                        onClick={() => remove(index)}
                      >
                        <Trash2Icon className="size-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <LineItemDialog onAdd={(item) => append(item)} />
            <Controller
              control={form.control}
              name="items"
              render={({ fieldState }) =>
                fieldState.error?.root ? (
                  <FieldError errors={[fieldState.error.root]} />
                ) : (
                  <></>
                )
              }
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit" size="sm" disabled={fields.length === 0}>
            Create invoice
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
