'use client'

import { useState } from 'react'
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const STEPS = ['Profile', 'Workspace', 'Invite']

export function SteppedWizardDecision() {
  const [step, setStep] = useState(0)
  const last = STEPS.length - 1

  return (
    <div className="bg-card w-full max-w-sm rounded-xl border p-6 shadow-sm">
      <div className="flex items-center">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <span
                className={cn(
                  'flex size-7 items-center justify-center rounded-full border text-xs font-medium',
                  i < step && 'bg-primary border-primary text-primary-foreground',
                  i === step && 'border-primary text-primary',
                  i > step && 'border-muted-foreground/30 text-muted-foreground',
                )}
              >
                {i < step ? <CheckIcon className="size-3.5" /> : i + 1}
              </span>
              <span
                className={cn(
                  'text-[10px]',
                  i === step ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            </div>
            {i < last && (
              <span
                className={cn(
                  'mx-1 mb-4 h-px flex-1',
                  i < step ? 'bg-primary' : 'bg-border',
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 min-h-36">
        {step === 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground text-xs">
              Tell us who you are so we can personalize your workspace.
            </p>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ob-name" className="text-xs">
                Full name
              </Label>
              <Input id="ob-name" placeholder="Ada Lovelace" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ob-role" className="text-xs">
                Role
              </Label>
              <Input id="ob-role" placeholder="Product designer" />
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground text-xs">
              Name your workspace — you can rename it any time.
            </p>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ob-ws" className="text-xs">
                Workspace name
              </Label>
              <Input id="ob-ws" placeholder="Acme Inc." />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ob-url" className="text-xs">
                URL
              </Label>
              <Input id="ob-url" placeholder="acme.app/co" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground text-xs">
              Invite teammates to get started together.
            </p>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ob-emails" className="text-xs">
                Emails
              </Label>
              <Input id="ob-emails" placeholder="sam@acme.com, lee@acme.com" />
            </div>
            <p className="text-muted-foreground text-[10px]">
              You can skip this and invite people later.
            </p>
          </div>
        )}
      </div>

      <div className="mt-5 flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          <ChevronLeftIcon />
          Back
        </Button>
        <Button
          className="flex-1"
          onClick={() => setStep((s) => Math.min(last, s + 1))}
        >
          {step === last ? 'Finish setup' : 'Continue'}
          {step !== last && <ChevronRightIcon />}
        </Button>
      </div>
    </div>
  )
}
