'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const permissions = [
  { id: 'read', label: 'Read' },
  { id: 'write', label: 'Write' },
  { id: 'delete', label: 'Delete' },
]

export function Checkbox06() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    read: true,
    write: false,
    delete: false,
  })

  const values = Object.values(checked)
  const allChecked = values.every(Boolean)
  const someChecked = values.some(Boolean)

  const toggleAll = (next: boolean) =>
    setChecked({ read: next, write: next, delete: next })

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3 border-b pb-3">
        <Checkbox
          id="checkbox-06-all"
          checked={allChecked ? true : someChecked ? 'indeterminate' : false}
          onCheckedChange={(value) => toggleAll(value === true)}
        />
        <Label htmlFor="checkbox-06-all" className="font-medium">
          Select all permissions
        </Label>
      </div>
      <div className="flex flex-col gap-3 pl-6">
        {permissions.map((permission) => (
          <div key={permission.id} className="flex items-center gap-3">
            <Checkbox
              id={`checkbox-06-${permission.id}`}
              checked={checked[permission.id]}
              onCheckedChange={(value) =>
                setChecked((prev) => ({
                  ...prev,
                  [permission.id]: value === true,
                }))
              }
            />
            <Label htmlFor={`checkbox-06-${permission.id}`}>
              {permission.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}
