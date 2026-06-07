import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { TwoFactorSetup1 } from './two-factor-setup-1'
import { TwoFactorSetup4 } from './two-factor-setup-4'
import { TwoFactorSetupConcept } from './concept'
import { TwoFactorSetup3 } from './two-factor-setup-3'
import { TwoFactorSetup2 } from './two-factor-setup-2'

export const manifest: IntentManifest = {
  slug: 'two-factor-setup',
  name: 'Two-Factor Setup',
  problem:
    'Add a second authentication factor to an account, balancing the security it buys against the friction it adds.',
  concept: TwoFactorSetupConcept,
  grid: { columns: 3 },
  decisions: [
    {
      slug: '1',
      name: 'Authenticator App',
      best: 'The default recommendation for most accounts. TOTP via an authenticator app is free, offline, and far stronger than SMS.',
      tags: ['TOTP', 'Standard', 'Offline'],
      caveat:
        'Requires the user to install an app and rescan if they switch phones; pair it with backup codes for recovery.',
      patterns: [],
      recommended: true,
      demo: TwoFactorSetup1,
    },
    {
      slug: '2',
      name: 'SMS Code',
      best: 'A low-barrier option for mainstream audiences who won’t install an app. Every phone can receive a text, so adoption is high.',
      tags: ['SMS', 'Low-friction'],
      caveat:
        'Weakest factor. Vulnerable to SIM-swap and interception, depends on carrier delivery, and costs money to send.',
      patterns: [],
      demo: TwoFactorSetup2,
    },
    {
      slug: '3',
      name: 'Passkey',
      best: 'The strongest, lowest-friction option on modern devices. Biometric or hardware-backed, phishing-resistant, and nothing to type.',
      tags: ['WebAuthn', 'Phishing-resistant', 'Biometric'],
      caveat:
        'Needs a device with biometrics or a security key and cross-device sync; still unfamiliar to many users.',
      patterns: [],
      demo: TwoFactorSetup3,
    },
    {
      slug: '4',
      name: 'Backup Codes',
      best: 'A recovery fallback to offer alongside any primary factor. Single-use codes get a locked-out user back in without support.',
      tags: ['Recovery', 'Fallback', 'Single-use'],
      caveat:
        'Not a primary factor. Only as safe as where the user stores them, and useless once all codes are spent.',
      patterns: [],
      demo: TwoFactorSetup4,
    },
  ],
}
