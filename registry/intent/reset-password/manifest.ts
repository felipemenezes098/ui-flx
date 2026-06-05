import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { ResetPasswordConcept } from './concept'
import { EmailLinkDecision } from './email-link'
import { OtpCodeDecision } from './otp-code'
import { SecurityQuestionsDecision } from './security-questions'

export const manifest: IntentManifest = {
  slug: 'reset-password',
  name: 'Reset Password',
  problem:
    'Get a locked-out user back into their account safely, proving ownership without leaking whether the account exists.',
  domain: 'auth',
  concept: ResetPasswordConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'email-link',
      name: 'Email Link',
      best: 'The default for almost every product. Email a signed, expiring reset link so the inbox itself proves ownership and no secret is typed.',
      tags: ['Email', 'Standard', 'Low-friction'],
      caveat:
        'Depends on email deliverability and inbox access; a slow or filtered email blocks recovery entirely.',
      patterns: [],
      recommended: true,
      demo: EmailLinkDecision,
    },
    {
      slug: 'otp-code',
      name: 'OTP Code',
      best: 'Mobile-first or high-trust flows. A short numeric code (email or SMS) verifies on the same device with no link to open or tab to switch.',
      tags: ['Passwordless', 'OTP', 'Mobile'],
      caveat:
        'Short codes need rate-limiting and short expiry to resist brute force; SMS adds cost and SIM-swap risk.',
      patterns: [],
      demo: OtpCodeDecision,
    },
    {
      slug: 'security-questions',
      name: 'Security Questions',
      best: 'A legacy fallback for environments without reliable email/SMS, or as a secondary factor layered on another method.',
      tags: ['Knowledge-based', 'Fallback', 'Legacy'],
      caveat:
        'Weakest option. Answers are often guessable or public; never use it as the only recovery path.',
      patterns: [],
      demo: SecurityQuestionsDecision,
    },
  ],
}
