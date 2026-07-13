'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import {
  SelectGroup,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const REASONS = [
  { value: 'cost', label: 'Too expensive' },
  { value: 'missing', label: 'Missing features' },
  { value: 'switching', label: 'Switching to another tool' },
  { value: 'other', label: 'Something else' },
]

const CONSEQUENCES = [
  'All projects and files are permanently removed',
  'Your team loses access immediately',
  'Active subscriptions are cancelled',
]

export function DeleteAccount2() {
  const [step, setStep] = useState(0)
  const [reason, setReason] = useState('')
  const [confirm, setConfirm] = useState('')

  const canNext =
    (step === 0 && reason !== '') ||
    step === 1 ||
    (step === 2 && confirm.trim() === 'delete my account')

  return (
    <Card>
      <CardHeader>
        <Progress value={((step + 1) / 3) * 100} className="mb-3 h-1.5" />
        <CardTitle>
          {step === 0 && 'Why are you leaving?'}
          {step === 1 && 'What happens next'}
          {step === 2 && 'Confirm deletion'}
        </CardTitle>
        <CardDescription>Step {step + 1} of 3</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {step === 0 && (
          <div className="flex flex-col gap-2">
            <Label className="text-xs">Reason</Label>
            <Select
              value={reason}
              onValueChange={(value) => setReason(value ?? '')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {REASONS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        {step === 1 && (
          <ul className="flex flex-col gap-3">
            {CONSEQUENCES.map((line) => (
              <li key={line} className="flex items-start gap-2 text-sm">
                <Check className="text-destructive mt-0.5 size-4 shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="ms-confirm" className="text-xs">
              Type "delete my account" to confirm
            </Label>
            <Input
              id="ms-confirm"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="delete my account"
              autoComplete="off"
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
          {step < 2 ? (
            <Button
              size="sm"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext}
            >
              Continue
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button variant="destructive" size="sm" disabled={!canNext}>
              Delete account
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
