import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { SignInConcept } from './concept'
import { EmailPasswordDecision } from './email-password'
import { MagicLinkDecision } from './magic-link'
import { PasskeyDecision } from './passkey'
import { PhoneOtpDecision } from './phone-otp'
import { SocialFirstDecision } from './social-first'
import { SplitScreenDecision } from './split-screen'

export const manifest: IntentManifest = {
  slug: 'sign-in',
  name: 'Sign In',
  problem:
    'Let a returning user authenticate with the least friction your security and audience allow.',
  domain: 'auth',
  concept: SignInConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: 'social-first',
      name: 'Social First',
      best: 'Consumer and prosumer apps where most users already have a Google, Apple, or GitHub account. Fewest steps to get in.',
      tags: ['OAuth', 'Low-friction', 'SSO'],
      caveat:
        'Leans on third-party providers and raises privacy/consent questions; always keep an email fallback.',
      patterns: [],
      recommended: true,
      demo: SocialFirstDecision,
    },
    {
      slug: 'email-password',
      name: 'Email & Password',
      best: 'The universal fallback. Works for everyone, no provider dependency, and expected for business and enterprise accounts.',
      tags: ['Classic', 'Universal'],
      caveat:
        'Weakest option on its own. Pair with 2FA, and budget for password resets and credential-stuffing defenses.',
      patterns: [],
      demo: EmailPasswordDecision,
    },
    {
      slug: 'magic-link',
      name: 'Magic Link',
      best: 'Low-frequency logins where you want zero passwords and the email itself proves ownership of the account.',
      tags: ['Passwordless', 'Email'],
      caveat:
        'Adds an inbox round-trip and depends on email deliverability; frustrating for users who log in often.',
      patterns: [],
      demo: MagicLinkDecision,
    },
    {
      slug: 'passkey',
      name: 'Passkey',
      best: 'Modern, device-first audiences. Passkeys (Face ID, Touch ID, security keys) are the fastest sign-in there is and the only phishing-resistant one.',
      tags: ['Passwordless', 'WebAuthn', 'Biometric'],
      caveat:
        'Needs a device with biometrics or a synced passkey; keep a password or email fallback for older devices.',
      patterns: [],
      demo: PasskeyDecision,
    },
    {
      slug: 'phone-otp',
      name: 'Phone & OTP',
      best: 'Mobile-first and consumer apps, especially in markets where users trust a phone number over email and expect to verify by SMS code.',
      tags: ['Phone', 'OTP', 'Mobile'],
      caveat:
        'SMS costs money, can be delayed, and is exposed to SIM-swap; rate-limit codes and keep expiry short.',
      patterns: [],
      demo: PhoneOtpDecision,
    },
    {
      slug: 'split-screen',
      name: 'Split Screen',
      best: 'Marketing-led SaaS where the sign-in page doubles as a brand surface. Flank the form with social proof to lift conversion.',
      tags: ['Branded', 'Conversion', 'Marketing'],
      caveat:
        'The brand panel needs real copy and art to earn its space, and collapses to a plain form on mobile.',
      patterns: [],
      styles: { span: 'full' },
      demo: SplitScreenDecision,
    },
  ],
}
