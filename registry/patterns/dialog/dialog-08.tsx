import { REGEXP_ONLY_DIGITS } from 'input-otp'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'

export function Dialog08() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Verify email</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle>Check your email</DialogTitle>
          <DialogDescription>
            We sent a 6-digit code to{' '}
            <span className="text-foreground font-medium">j•••@example.com</span>
          </DialogDescription>
        </DialogHeader>
        <Field className="items-center gap-4">
          <FieldLabel htmlFor="dialog-08-otp" className="sr-only">
            Verification code
          </FieldLabel>
          <InputOTP
            id="dialog-08-otp"
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            containerClassName="justify-center"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription className="text-center">
            <button
              type="button"
              className="text-foreground underline underline-offset-4 hover:no-underline"
            >
              Resend code
            </button>
            <span className="text-muted-foreground"> · expires in 10 min</span>
          </FieldDescription>
        </Field>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Verify</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
