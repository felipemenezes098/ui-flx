'use client'

import { CreditCard } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

function ApplePayMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="currentColor">
      <path d="M16.36 12.6c-.02-1.9 1.56-2.82 1.63-2.86-.89-1.3-2.27-1.48-2.76-1.5-1.18-.12-2.3.69-2.9.69-.6 0-1.52-.67-2.5-.65-1.29.02-2.48.75-3.14 1.9-1.34 2.32-.34 5.76.96 7.64.64.92 1.4 1.96 2.4 1.92.96-.04 1.32-.62 2.48-.62 1.16 0 1.48.62 2.5.6 1.03-.02 1.69-.94 2.32-1.87.73-1.07 1.03-2.1 1.05-2.16-.02-.01-2.01-.78-2.03-3.06zM14.6 6.7c.53-.64.89-1.53.79-2.42-.76.03-1.69.51-2.24 1.15-.49.56-.92 1.46-.8 2.32.85.07 1.71-.43 2.25-1.05z" />
    </svg>
  )
}

function GooglePayMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M21.6 12.2c0-.64-.06-1.25-.16-1.84H12v3.49h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.74 2.98-4.3 2.98-7.17z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.58-4.12H3.07v2.58A10 10 0 0 0 12 22z"
      />
      <path
        fill="#FBBC04"
        d="M6.42 13.91a6 6 0 0 1 0-3.82V7.51H3.07a10 10 0 0 0 0 8.98l3.35-2.58z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.78.5 3.82 1.5l2.85-2.85C16.95 2.99 14.7 2 12 2A10 10 0 0 0 3.07 7.51l3.35 2.58C7.2 7.72 9.4 5.96 12 5.96z"
      />
    </svg>
  )
}

export function Payment3() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button className="w-full bg-black text-white hover:bg-black/90">
          <ApplePayMark />
          Pay
        </Button>
        <Button variant="outline" className="w-full bg-white hover:bg-white/90">
          <GooglePayMark />
          Pay
        </Button>

        <div className="flex items-center gap-3 py-1">
          <Separator className="flex-1" />
          <span className="text-muted-foreground text-xs">
            or pay with card
          </span>
          <Separator className="flex-1" />
        </div>

        <Button variant="secondary" className="w-full">
          <CreditCard className="size-4" />
          Enter card details
        </Button>
      </CardContent>
    </Card>
  )
}
