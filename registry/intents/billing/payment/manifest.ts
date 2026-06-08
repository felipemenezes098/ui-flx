import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { Payment1 } from './payment-1'
import { PaymentConcept } from './concept'
import { Payment3 } from './payment-3'
import { Payment2 } from './payment-2'

export const manifest: IntentManifest = {
  slug: 'payment',
  name: 'Payment',
  problem:
    'Collect or update a customer payment method so a charge can be taken.',
  concept: PaymentConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Card Form',
      best: 'The default for taking a card the first time. A direct form with number, expiry, and CVC keeps the flow on your page and works for any card brand or region.',
      tags: ['Form', 'Card entry', 'First time'],
      caveat:
        'Typing full card details is the highest-friction option and puts compliance on you, so pair it with a trusted processor and clear security cues.',
      patterns: [],
      recommended: true,
      styles: { previewSize: 'sm' },
      demo: Payment1,
    },
    {
      slug: '2',
      name: 'Saved Methods',
      best: 'Returning customers who already have a card on file. A list of saved methods lets them pick a default, add another, or remove one without re-entering anything.',
      tags: ['Wallet', 'Returning', 'Manage'],
      caveat:
        'It only helps once a method exists, so it always needs an add-card path behind it and never stands alone for a first payment.',
      patterns: [],
      styles: { previewSize: 'sm' },
      demo: Payment2,
    },
    {
      slug: '3',
      name: 'Express Wallets',
      best: 'Mobile and one-tap checkout where speed wins. Apple Pay and Google Pay authorize with biometrics and skip manual entry, lifting conversion on supported devices.',
      tags: ['Wallet', 'One tap', 'Mobile'],
      caveat:
        'Availability depends on device, browser, and region, so a card fallback is mandatory and the buttons must follow each platform brand rules.',
      patterns: [],
      styles: { previewSize: 'sm' },
      demo: Payment3,
    },
  ],
}
