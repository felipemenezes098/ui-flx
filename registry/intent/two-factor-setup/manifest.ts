import type { IntentManifest } from '@/lib/intent-manifest-types'

import { AuthenticatorAppDecision } from './authenticator-app'
import { BackupCodesDecision } from './backup-codes'
import { TwoFactorSetupConcept } from './concept'
import { PasskeyDecision } from './passkey'
import { SmsCodeDecision } from './sms-code'

export const manifest: IntentManifest = {
  slug: 'two-factor-setup',
  name: 'Two-Factor Setup',
  problem:
    'Add a second authentication factor to an account, balancing the security it buys against the friction it adds.',
  domain: 'auth',
  concept: TwoFactorSetupConcept,
  grid: { columns: 3 },
  decisions: [
    {
      slug: 'authenticator-app',
      name: 'Authenticator App',
      best: 'The default recommendation for most accounts — TOTP via an authenticator app is free, offline, and far stronger than SMS.',
      tags: ['TOTP', 'Standard', 'Offline'],
      caveat:
        'Requires the user to install an app and rescan if they switch phones; pair it with backup codes for recovery.',
      patterns: [],
      recommended: true,
      demo: AuthenticatorAppDecision,
    },
    {
      slug: 'sms-code',
      name: 'SMS Code',
      best: 'A low-barrier option for mainstream audiences who won’t install an app — every phone can receive a text, so adoption is high.',
      tags: ['SMS', 'Low-friction'],
      caveat:
        'Weakest factor — vulnerable to SIM-swap and interception, depends on carrier delivery, and costs money to send.',
      patterns: [],
      demo: SmsCodeDecision,
    },
    {
      slug: 'passkey',
      name: 'Passkey',
      best: 'The strongest, lowest-friction option on modern devices — biometric or hardware-backed, phishing-resistant, and nothing to type.',
      tags: ['WebAuthn', 'Phishing-resistant', 'Biometric'],
      caveat:
        'Needs a device with biometrics or a security key and cross-device sync; still unfamiliar to many users.',
      patterns: [],
      demo: PasskeyDecision,
    },
    {
      slug: 'backup-codes',
      name: 'Backup Codes',
      best: 'A recovery fallback to offer alongside any primary factor — single-use codes get a locked-out user back in without support.',
      tags: ['Recovery', 'Fallback', 'Single-use'],
      caveat:
        'Not a primary factor — only as safe as where the user stores them, and useless once all codes are spent.',
      patterns: [],
      demo: BackupCodesDecision,
    },
  ],
}
