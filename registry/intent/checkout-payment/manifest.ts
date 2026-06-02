import type { IntentManifest } from '@/lib/intent-manifest-types'

import { CheckoutPaymentConcept } from './concept'
import { ExpressWalletDecision } from './express-wallet'
import { MultiStepDecision } from './multi-step'
import { SinglePageDecision } from './single-page'

export const manifest: IntentManifest = {
  slug: 'checkout-payment',
  name: 'Checkout & Payment',
  problem:
    'Collect payment and complete a purchase, trading off speed against the amount of information the order needs.',
  domain: 'billing',
  concept: CheckoutPaymentConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'single-page',
      name: 'Single Page',
      best: 'Simple carts with few fields — keep contact, payment, and order summary on one screen so the buyer can pay in the fewest possible clicks.',
      tags: ['Low-friction', 'One screen', 'Conversion'],
      caveat:
        'Gets cramped and overwhelming once you need shipping options, taxes, and validation across many fields.',
      patterns: [],
      recommended: true,
      styles: { span: 'full' },
      demo: SinglePageDecision,
    },
    {
      slug: 'multi-step',
      name: 'Multi-Step Wizard',
      best: 'Complex orders (physical goods, shipping choices, review) where breaking the flow into Shipping → Payment → Review reduces errors and cognitive load.',
      tags: ['Guided', 'Stepper', 'Complex orders'],
      caveat:
        'More clicks and more places to abandon; each extra step measurably costs conversion.',
      patterns: [],
      demo: MultiStepDecision,
    },
    {
      slug: 'express-wallet',
      name: 'Express Wallet',
      best: 'The fast path for returning or mobile buyers — Apple Pay, Google Pay, and PayPal pull shipping and card from the wallet for a one-tap purchase.',
      tags: ['One-tap', 'Mobile', 'Wallet'],
      caveat:
        'Depends on device/provider support and still needs a card fallback; offer it alongside a standard form, not instead of one.',
      patterns: [],
      demo: ExpressWalletDecision,
    },
  ],
}
