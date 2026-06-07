import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { SignInConcept } from './concept'
import { SignIn2 } from './sign-in-2'
import { SignIn3 } from './sign-in-3'
import { SignIn4 } from './sign-in-4'
import { SignIn5 } from './sign-in-5'
import { SignIn1 } from './sign-in-1'
import { SignIn6 } from './sign-in-6'

export const manifest: IntentManifest = {
  slug: 'sign-in',
  name: 'Sign In',
  problem:
    'Let a returning user authenticate with the least friction your security and audience allow.',
  concept: SignInConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Social First',
      best: 'Consumer and prosumer apps where most users already have a Google, Apple, or GitHub account. Fewest steps to get in.',
      tags: ['OAuth', 'Low-friction', 'SSO'],
      caveat:
        'Leans on third-party providers and raises privacy/consent questions; always keep an email fallback.',
      patterns: [],
      recommended: true,
      demo: SignIn1,
    },
    {
      slug: '2',
      name: 'Email & Password',
      best: 'The universal fallback. Works for everyone, no provider dependency, and expected for business and enterprise accounts.',
      tags: ['Classic', 'Universal'],
      caveat:
        'Weakest option on its own. Pair with 2FA, and budget for password resets and credential-stuffing defenses.',
      patterns: [],
      demo: SignIn2,
    },
    {
      slug: '3',
      name: 'Magic Link',
      best: 'Low-frequency logins where you want zero passwords and the email itself proves ownership of the account.',
      tags: ['Passwordless', 'Email'],
      caveat:
        'Adds an inbox round-trip and depends on email deliverability; frustrating for users who log in often.',
      patterns: [],
      demo: SignIn3,
    },
    {
      slug: '4',
      name: 'Passkey',
      best: 'Modern, device-first audiences. Passkeys (Face ID, Touch ID, security keys) are the fastest sign-in there is and the only phishing-resistant one.',
      tags: ['Passwordless', 'WebAuthn', 'Biometric'],
      caveat:
        'Needs a device with biometrics or a synced passkey; keep a password or email fallback for older devices.',
      patterns: [],
      demo: SignIn4,
    },
    {
      slug: '5',
      name: 'Phone & OTP',
      best: 'Mobile-first and consumer apps, especially in markets where users trust a phone number over email and expect to verify by SMS code.',
      tags: ['Phone', 'OTP', 'Mobile'],
      caveat:
        'SMS costs money, can be delayed, and is exposed to SIM-swap; rate-limit codes and keep expiry short.',
      patterns: [],
      demo: SignIn5,
    },
    {
      slug: '6',
      name: 'Split Screen',
      best: 'Marketing-led SaaS where the sign-in page doubles as a brand surface. Flank the form with social proof to lift conversion.',
      tags: ['Branded', 'Conversion', 'Marketing'],
      caveat:
        'The brand panel needs real copy and art to earn its space, and collapses to a plain form on mobile.',
      patterns: [],
      styles: { span: 'full' },
      demo: SignIn6,
    },
  ],
}
