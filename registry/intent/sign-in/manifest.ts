import type { IntentManifest } from '@/lib/intent-manifest-types'

import { SignInConcept } from './concept'
import { EmailPasswordDecision } from './email-password'
import { MagicLinkDecision } from './magic-link'
import { SocialFirstDecision } from './social-first'

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
      best: 'Consumer and prosumer apps where most users already have a Google, Apple, or GitHub account — fewest steps to get in.',
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
      best: 'The universal fallback — works for everyone, no provider dependency, and is expected for business and enterprise accounts.',
      tags: ['Classic', 'Universal'],
      caveat:
        'Weakest option on its own — pair with 2FA, and budget for password resets and credential-stuffing defenses.',
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
  ],
}
