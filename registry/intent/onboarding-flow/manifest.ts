import type { IntentManifest } from '@/lib/intent-manifest-types'

import { OnboardingFlowConcept } from './concept'
import { IntroSlidesDecision } from './intro-slides'
import { ProductTourDecision } from './product-tour'
import { SetupChecklistDecision } from './setup-checklist'
import { SteppedWizardDecision } from './stepped-wizard'

export const manifest: IntentManifest = {
  slug: 'onboarding-flow',
  name: 'Welcome Flow',
  problem:
    'Get a brand-new user from sign-up to their first moment of value, choosing how much you guide them versus let them explore.',
  domain: 'onboarding',
  concept: OnboardingFlowConcept,
  grid: { columns: 3 },
  decisions: [
    {
      slug: 'intro-slides',
      name: 'Intro Slides',
      best: 'When the first goal is to set the tone and communicate value, not collect data — a few clean, image-led slides welcome the user and frame what the product does before any setup.',
      tags: ['Welcome', 'Visual', 'Low-friction'],
      caveat:
        'Purely informational — it tells rather than does, so users skip it fast and it must lead into a real setup step to be worth more than a splash screen.',
      patterns: [],
      recommended: true,
      demo: IntroSlidesDecision,
    },
    {
      slug: 'stepped-wizard',
      name: 'Stepped Wizard',
      best: 'When setup has required, ordered steps that must finish before the product is usable — a linear wizard guarantees you collect everything and only shows one decision at a time.',
      tags: ['Linear', 'Multi-step', 'Guided'],
      caveat:
        'Blocks the user from the product until done; too many steps cause drop-off, and it suits required setup far better than optional polish.',
      patterns: [],
      demo: SteppedWizardDecision,
    },
    {
      slug: 'setup-checklist',
      name: 'Setup Checklist',
      best: 'When the steps are valuable but optional and the user should reach the product immediately — a persistent, self-paced checklist nudges progress without blocking.',
      tags: ['Self-paced', 'Optional', 'Persistent'],
      caveat:
        'Easy to ignore and leave half-finished; with no forced order it cannot guarantee critical setup actually gets done.',
      patterns: [],
      demo: SetupChecklistDecision,
    },
    {
      slug: 'product-tour',
      name: 'Product Tour',
      best: 'When the interface itself is the thing to learn — in-context coachmarks point at real controls so the user discovers the UI by using it, not by filling forms.',
      tags: ['In-context', 'Coachmarks', 'Discovery'],
      caveat:
        'Interrupts and is often dismissed reflexively; it teaches where things are but collects no data and ages badly when the UI changes.',
      patterns: [],
      demo: ProductTourDecision,
    },
  ],
}
