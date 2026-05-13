'use client'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Inputs01() {
  const [value, setValue] = useState('')
  const hasError = value.length > 0 && value.length < 3

  return (
    <div className="flex w-64 flex-col gap-1.5">
      <Label htmlFor="name" className={hasError ? 'text-destructive' : ''}>
        Full name
      </Label>
      <Input
        id="name"
        placeholder="John Doe"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-invalid={hasError}
        className={
          hasError ? 'border-destructive focus-visible:ring-destructive' : ''
        }
      />
      {hasError && (
        <p className="text-destructive text-xs">
          Name must be at least 3 characters.
        </p>
      )}
    </div>
  )
}
