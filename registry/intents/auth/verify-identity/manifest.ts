import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { VerifyIdentity4 } from './verify-identity-4'
import { VerifyIdentityConcept } from './concept'
import { VerifyIdentity2 } from './verify-identity-2'
import { VerifyIdentity1 } from './verify-identity-1'
import { VerifyIdentity3 } from './verify-identity-3'

export const manifest: IntentManifest = {
  slug: 'verify-identity',
  name: 'Verify Identity',
  problem:
    'Re-confirm the person behind an already-signed-in session before a sensitive action, without forcing a full sign-out.',
  concept: VerifyIdentityConcept,
  grid: { columns: 3 },
  decisions: [
    {
      slug: '1',
      name: 'Password Re-auth',
      best: 'The lightweight default for step-up. Re-prompt the current password before money moves, settings change, or data is exported. No new channel, no new hardware.',
      tags: ['Step-up', 'Lightweight', 'Re-auth'],
      caveat:
        'Only as strong as the password itself, so it adds little for accounts already protected by one; useless for passwordless users.',
      patterns: [],
      recommended: true,
      demo: VerifyIdentity1,
    },
    {
      slug: '2',
      name: 'OTP Challenge',
      best: 'When you need a second factor on demand. A one-time code by email, SMS, or authenticator proves access to a channel the attacker likely lacks.',
      tags: ['OTP', 'Second factor', 'Code'],
      caveat:
        'Adds a round-trip and depends on delivery; SMS in particular is exposed to SIM-swap, so prefer authenticator codes for high-value actions.',
      patterns: [],
      demo: VerifyIdentity2,
    },
    {
      slug: '3',
      name: 'Push Approval',
      best: 'Users who already have your mobile app. A push to a trusted device turns verification into a single tap, with device and location shown for context.',
      tags: ['Push', 'Mobile', 'One-tap'],
      caveat:
        'Requires an enrolled device and a notification backend, and blind "approve" fatigue can be socially engineered; show what is being approved.',
      patterns: [],
      demo: VerifyIdentity3,
    },
    {
      slug: '4',
      name: 'Biometric',
      best: 'Modern, device-first audiences. Re-confirm with Face ID, Touch ID, or a passkey — the fastest step-up and the only phishing-resistant one.',
      tags: ['WebAuthn', 'Biometric', 'Passwordless'],
      caveat:
        'Needs a device with biometrics or a synced passkey; always keep a code-based fallback for unsupported or borrowed devices.',
      patterns: [],
      demo: VerifyIdentity4,
    },
  ],
}
