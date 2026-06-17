'use client'

import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
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

export function TsfAdvanced01() {
  const form = useForm({
    defaultValues: { members: [] as Member[] },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Invites sent', {
        description: `${value.members.length} teammate(s)`,
      })
    },
  })

  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [rowErrors, setRowErrors] = useState<RowErrors>({})

  function commit(index: number) {
    const result = memberSchema.safeParse(form.state.values.members[index])
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

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Invite your team</CardTitle>
        <CardDescription>
          Fill in a teammate, confirm it, then manage each one in place.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (editingIndex !== null) {
            toast.error('Finish the open teammate before sending.')
            return
          }
          form.handleSubmit()
        }}
        className="flex flex-col gap-3"
      >
        <form.Field name="members" mode="array">
          {(membersField) => {
            const members = membersField.state.value

            function startAdd() {
              membersField.pushValue(emptyMember)
              setRowErrors({})
              setEditingIndex(members.length)
            }

            function duplicate(index: number) {
              membersField.pushValue({ ...members[index] })
              setRowErrors({})
              setEditingIndex(null)
            }

            function deleteRow(index: number) {
              membersField.removeValue(index)
              setRowErrors({})
              setEditingIndex(null)
            }

            return (
              <>
                <CardContent className="flex flex-col gap-3">
                  {members.length === 0 ? (
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
                      {members.map((member, index) => {
                        if (editingIndex === index) {
                          return (
                            <div
                              key={index}
                              className="bg-muted/30 flex flex-col gap-4 rounded-lg border p-4"
                            >
                              <FieldGroup className="gap-4">
                                <form.Field name={`members[${index}].name`}>
                                  {(field) => (
                                    <Field data-invalid={!!rowErrors.name}>
                                      <FieldLabel htmlFor={field.name}>
                                        Name
                                      </FieldLabel>
                                      <Input
                                        id={field.name}
                                        name={field.name}
                                        placeholder="Ada Lovelace"
                                        aria-invalid={!!rowErrors.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                          field.handleChange(e.target.value)
                                        }
                                      />
                                      {rowErrors.name && (
                                        <FieldError
                                          errors={[{ message: rowErrors.name }]}
                                        />
                                      )}
                                    </Field>
                                  )}
                                </form.Field>
                                <form.Field name={`members[${index}].email`}>
                                  {(field) => (
                                    <Field data-invalid={!!rowErrors.email}>
                                      <FieldLabel htmlFor={field.name}>
                                        Email
                                      </FieldLabel>
                                      <Input
                                        id={field.name}
                                        name={field.name}
                                        type="email"
                                        placeholder="ada@example.com"
                                        aria-invalid={!!rowErrors.email}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                          field.handleChange(e.target.value)
                                        }
                                      />
                                      {rowErrors.email && (
                                        <FieldError
                                          errors={[{ message: rowErrors.email }]}
                                        />
                                      )}
                                    </Field>
                                  )}
                                </form.Field>
                                <form.Field name={`members[${index}].role`}>
                                  {(field) => (
                                    <Field data-invalid={!!rowErrors.role}>
                                      <FieldLabel htmlFor={field.name}>
                                        Role
                                      </FieldLabel>
                                      <Select
                                        value={field.state.value}
                                        onValueChange={field.handleChange}
                                      >
                                        <SelectTrigger
                                          id={field.name}
                                          className="w-full"
                                          aria-invalid={!!rowErrors.role}
                                        >
                                          <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectGroup>
                                            <SelectLabel>
                                              Workspace role
                                            </SelectLabel>
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
                                  )}
                                </form.Field>
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

                        return (
                          <div
                            key={index}
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
                                title="Edit teammate"
                                onClick={() => {
                                  setRowErrors({})
                                  setEditingIndex(index)
                                }}
                              >
                                <PencilIcon className="size-4" />
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                aria-label="Duplicate teammate"
                                title="Duplicate teammate"
                                onClick={() => duplicate(index)}
                              >
                                <CopyIcon className="size-4" />
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                aria-label="Delete teammate"
                                title="Delete teammate"
                                onClick={() => deleteRow(index)}
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
                    disabled={members.length === 0 || editingIndex !== null}
                  >
                    Send invites
                  </Button>
                </CardFooter>
              </>
            )
          }}
        </form.Field>
      </form>
    </Card>
  )
}
