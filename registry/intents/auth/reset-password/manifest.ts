import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { ResetPasswordConcept } from './concept'
import { ResetPassword1 } from './reset-password-1'
import { ResetPassword2 } from './reset-password-2'
import { ResetPassword3 } from './reset-password-3'

export const manifest: IntentManifest = {
  slug: 'reset-password',
  name: 'Reset Password',
  problem:
    'Get a locked-out user back into their account safely, proving ownership without leaking whether the account exists.',
  concept: ResetPasswordConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Email Link',
      best: 'The default for almost every product. Email a signed, expiring reset link so the inbox itself proves ownership and no secret is typed.',
      tags: ['Email', 'Standard', 'Low-friction'],
      caveat:
        'Depends on email deliverability and inbox access; a slow or filtered email blocks recovery entirely.',
      patterns: [],
      recommended: true,
      demo: ResetPassword1,
    },
    {
      slug: '2',
      name: 'OTP Code',
      best: 'Mobile-first or high-trust flows. A short numeric code (email or SMS) verifies on the same device with no link to open or tab to switch.',
      tags: ['Passwordless', 'OTP', 'Mobile'],
      caveat:
        'Short codes need rate-limiting and short expiry to resist brute force; SMS adds cost and SIM-swap risk.',
      patterns: [],
      demo: ResetPassword2,
    },
    {
      slug: '3',
      name: 'Security Questions',
      best: 'A legacy fallback for environments without reliable email/SMS, or as a secondary factor layered on another method.',
      tags: ['Knowledge-based', 'Fallback', 'Legacy'],
      caveat:
        'Weakest option. Answers are often guessable or public; never use it as the only recovery path.',
      patterns: [],
      demo: ResetPassword3,
    },
  ],
}
