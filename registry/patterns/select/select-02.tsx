'use client'

import { useState } from 'react'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Select02() {
  const [value, setValue] = useState<string>('')

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="timezone">Timezone</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger id="timezone" className="w-56">
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Americas</SelectLabel>
            <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
            <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
            <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
            <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="utc+0">London (UTC+0)</SelectItem>
            <SelectItem value="utc+1">Paris (UTC+1)</SelectItem>
            <SelectItem value="utc+2">Kyiv (UTC+2)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
