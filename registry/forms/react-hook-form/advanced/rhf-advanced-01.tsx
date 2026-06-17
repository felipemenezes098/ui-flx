'use client'

import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckIcon,
  CopyIcon,
  PencilIcon,
  Trash2Icon,
  UserPlusIcon,
  UsersIcon,
} from 'lucide-react'
import { toast } from 'sonner'
import * as z from 'zod'

import { Badge } from '@/components/ui/badge'
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
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
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

const ROLES = [
  { value: 'owner', label: 'Owner' },
  { value: 'admin', label: 'Admin' },
  { value: 'member', label: 'Member' },
  { value: 'viewer', label: 'Viewer' },
]

const memberSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.email('Enter a valid email.'),
  role: z.string().min(1, 'Pick a role.'),
})

const formSchema = z.object({
  members: z.array(memberSchema).min(1, 'Add at least one teammate.'),
})

type Member = z.infer<typeof memberSchema>
type FormValues = z.infer<typeof formSchema>
type RowErrors = Partial<Record<keyof Member, string>>

const emptyMember: Member = { name: '', email: '', role: '' }

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')
}

function roleLabel(value: string) {
  return ROLES.find((r) => r.value === value)?.label ?? value
}

export function RhfAdvanced01() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { members: [] },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'members',
  })

  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [rowErrors, setRowErrors] = useState<RowErrors>({})

  function startAdd() {
    append(emptyMember)
    setRowErrors({})
    setEditingIndex(fields.length)
  }

  function commit(index: number) {
    const result = memberSchema.safeParse(form.getValues(`members.${index}`))
    if (!result.success) {
      const next: RowErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Member
        if (key && !next[key]) next[key] = issue.message
      }
      setRowErrors(next)
      return
    }
    setRowErrors({})
    setEditingIndex(null)
  }

  function edit(index: number) {
    setRowErrors({})
    setEditingIndex(index)
  }

  function duplicate(index: number) {
    append({ ...form.getValues(`members.${index}`) })
    setRowErrors({})
    setEditingIndex(null)
  }

  function deleteRow(index: number) {
    remove(index)
    setRowErrors({})
    setEditingIndex(null)
  }

  function onSubmit(data: FormValues) {
    if (editingIndex !== null) {
      toast.error('Finish the open teammate before sending.')
      return
    }
    toast.success('Invites sent', {
      description: `${data.members.length} teammate(s)`,
    })
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Invite your team</CardTitle>
        <CardDescription>
          Fill in a teammate, confirm it, then manage each one in place.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <CardContent className="flex flex-col gap-3">
          {fields.length === 0 ? (
            <Empty className="border">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <UsersIcon />
                </EmptyMedia>
                <EmptyTitle>No teammates yet</EmptyTitle>
                <EmptyDescription>
                  Invite people by email and assign each one a role.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={startAdd}
                >
                  <UserPlusIcon className="size-4" />
                  Add teammate
                </Button>
              </EmptyContent>
            </Empty>
          ) : (
            <>
              {fields.map((field, index) => {
                if (editingIndex === index) {
                  return (
                    <div
                      key={field.id}
                      className="bg-muted/30 flex flex-col gap-4 rounded-lg border p-4"
                    >
                      <FieldGroup className="gap-4">
                        <Field data-invalid={!!rowErrors.name}>
                          <FieldLabel htmlFor={`rhf-advanced-01-name-${index}`}>
                            Name
                          </FieldLabel>
                          <Input
                            id={`rhf-advanced-01-name-${index}`}
                            placeholder="Ada Lovelace"
                            aria-invalid={!!rowErrors.name}
                            {...form.register(`members.${index}.name`)}
                          />
                          {rowErrors.name && (
                            <FieldError
                              errors={[{ message: rowErrors.name }]}
                            />
                          )}
                        </Field>
                        <Field data-invalid={!!rowErrors.email}>
                          <FieldLabel
                            htmlFor={`rhf-advanced-01-email-${index}`}
                          >
                            Email
                          </FieldLabel>
                          <Input
                            id={`rhf-advanced-01-email-${index}`}
                            type="email"
                            placeholder="ada@example.com"
                            aria-invalid={!!rowErrors.email}
                            {...form.register(`members.${index}.email`)}
                          />
                          {rowErrors.email && (
                            <FieldError
                              errors={[{ message: rowErrors.email }]}
                            />
                          )}
                        </Field>
                        <Field data-invalid={!!rowErrors.role}>
                          <FieldLabel htmlFor={`rhf-advanced-01-role-${index}`}>
                            Role
                          </FieldLabel>
                          <Select
                            value={form.watch(`members.${index}.role`)}
                            onValueChange={(value) =>
                              form.setValue(`members.${index}.role`, value, {
                                shouldDirty: true,
                              })
                            }
                          >
                            <SelectTrigger
                              id={`rhf-advanced-01-role-${index}`}
                              className="w-full"
                              aria-invalid={!!rowErrors.role}
                            >
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Workspace role</SelectLabel>
                                {ROLES.map((role) => (
                                  <SelectItem
                                    key={role.value}
                                    value={role.value}
                                  >
                                    {role.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          {rowErrors.role && (
                            <FieldError
                              errors={[{ message: rowErrors.role }]}
                            />
                          )}
                        </Field>
                      </FieldGroup>
                      <div className="flex items-center justify-between">
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteRow(index)}
                        >
                          <Trash2Icon className="size-4" />
                          Remove
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => commit(index)}
                        >
                          <CheckIcon className="size-4" />
                          Done
                        </Button>
                      </div>
                    </div>
                  )
                }

                const member = form.getValues(`members.${index}`)
                return (
                  <div
                    key={field.id}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    <div className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                      {initials(member.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium">
                          {member.name}
                        </span>
                        <Badge variant="secondary">
                          {roleLabel(member.role)}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground truncate text-sm">
                        {member.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Edit teammate"
                        onClick={() => edit(index)}
                        title="Edit teammate"
                      >
                        <PencilIcon className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Duplicate teammate"
                        onClick={() => duplicate(index)}
                        title="Duplicate teammate"
                      >
                        <CopyIcon className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Delete teammate"
                        onClick={() => deleteRow(index)}
                        title="Delete teammate"
                      >
                        <Trash2Icon className="size-4" />
                      </Button>
                    </div>
                  </div>
                )
              })}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full"
                onClick={startAdd}
              >
                <UserPlusIcon className="size-4" />
                Add another teammate
              </Button>
            </>
          )}
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            type="submit"
            size="sm"
            disabled={fields.length === 0 || editingIndex !== null}
          >
            Send invites
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
