---
name: add-intent
description: >-
  Full workflow for adding a new UI intent to ui-flx. Covers file structure,
  decision demo files, manifest.ts, intent-catalog.ts registration, and
  registry.json entries. Triggers: "add intent", "new intent", "criar intent",
  "novo intent", or any request to create a new Flexnative intent.
---

# Add a new intent to ui-flx

An **intent** is an interface problem with multiple decisions — each decision is a concrete UI pattern that solves the problem in a different context. Intents live under `registry/intent/` and are browsable at `/ai/<slug>`.

## Mental model

```
Intent = the problem ("Show Team Members")
  └── Decision = a concrete solution ("Avatar Group", "Compact List", …)
        └── Demo component = live preview of that solution
```

Each decision has **one demo file** + **one registry.json entry**. The registry entry is what the install command references (`npx shadcn@latest add @flx/<intent-slug>-<decision-slug>`).

---

## Before you build — does this intent earn its place?

An intent is **not** a single pattern with a coat of paint. It is a recurring,
high-value interface problem where a designer/engineer genuinely has to *choose
between approaches*. Only create one when all of these hold:

- **Real, common problem.** It shows up constantly across products (sign in,
  select a plan, confirm a destructive action, schedule a meeting). If it's
  niche or one-off, it's a **pattern**, not an intent — use the `add-pattern` skill.
- **Multiple legitimate solutions with distinct trade-offs.** There must be a
  real fork: social-first vs email+password vs magic-link, each winning in a
  different context. If there's only one sensible way to do it → pattern.
- **The trade-offs are worth teaching.** The value of an intent is the
  *decision*, captured as a ready-to-paste prompt that an AI/user adapts to
  their own context. Weak or invented trade-offs make a weak intent.

If you can't articulate a strong `best` (when to reach for it) **and** a strong
`caveat` (what it costs you) for *each* decision, the intent isn't ready.

### How many decisions?

**Not fixed at two.** The number of decisions = the number of trade-offs worth
teaching. Two is the minimum; three is common; four+ is fine when each adds a
genuinely different context. Don't pad with near-duplicates, and don't collapse
two real forks into one. One decision = no choice = it's a pattern, not an intent.

### Elaborate decisions are welcome

Decisions are **encouraged to be rich and realistic** — multi-step flows,
stateful toggles, faceted layouts, comparison tables. A convincing, production-
grade demo is more useful than a toy. Reach for `'use client'` + `useState` when
the decision's value *is* the interaction. Keep it self-contained (hardcoded
sample data, no props), but don't dumb it down.

---

## File structure to create

```
registry/intent/<intent-slug>/
  manifest.ts          # Single source of truth for the intent
  concept.tsx          # Wireframe preview for /ai gallery cards
  <decision-slug>.tsx  # One file per decision — the demo component
  <decision-slug>.tsx
  …
```

No `editor/`, no `example.tsx`, no `index.ts`. Demos are self-contained components.

---

## 1. Create decision demo files

One file per decision. Each exports a **named function** — PascalCase from slug, suffixed `Decision`.

```tsx
// registry/intent/<intent-slug>/<decision-slug>.tsx
import {} from /* shadcn/ui components */ '@/components/ui/...'

export function MyDecisionNameDecision() {
  return (
    // Realistic, self-contained demo
    // Use hardcoded sample data — no props
    // Use bg-card, max-w-xs, rounded-xl, border, p-5, shadow-sm as wrapper
    <div className="bg-card w-full max-w-xs rounded-xl border p-5 shadow-sm">
      {/* … */}
    </div>
  )
}
```

Rules:

- **No `'use client'`** unless the demo needs interactivity (hooks, state, browser events)
- Import only from `@/components/ui/*` — never from `@/components/flx/*`
- Sample data hardcoded inline — no props, no context
- The component must work standalone at any viewport width

### Always prefer shadcn primitives — install what's missing

Build decisions out of shadcn/ui components, not hand-rolled markup. Before
writing custom `div`s, **check what's already in the project and what shadcn
offers** (see the `shadcn` skill):

1. List installed primitives: `src/components/ui/` (or `npx shadcn@latest info`).
2. If a primitive you need isn't there, check the shadcn registry and add it:
   `npx shadcn@latest add <component>` (e.g. `table`, `checkbox`, `calendar`).
   Don't reinvent a component the registry already provides.
3. Only fall back to plain markup when the registry genuinely has nothing
   (e.g. brand SVGs for Google/Apple — lucide has no brand marks; inline the
   SVG and leave `dependencies: []`).

When you do install a new primitive, its entry in `registry.json`
`registryDependencies` is the slug shadcn uses (`table`, `switch`, …).

---

## 2. Create `concept.tsx`

Lightweight wireframe for the `/ai` gallery card — same idea as `src/lib/pattern-concepts.tsx`. No interactivity, no `'use client'`, fills `h-full w-full`.

```tsx
// registry/intent/<intent-slug>/concept.tsx
export function MyIntentNameConcept() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      {/* skeleton shapes with bg-foreground/10, bg-card, borders, etc. */}
    </div>
  )
}
```

---

## 3. Create `manifest.ts`

```ts
// registry/intent/<intent-slug>/manifest.ts
import type { IntentManifest } from '@/lib/intent-manifest-types'

import { MyIntentNameConcept } from './concept'
import { MyDecisionADecision } from './<decision-a-slug>'
import { MyDecisionBDecision } from './<decision-b-slug>'

export const manifest: IntentManifest = {
  slug: '<intent-slug>', // kebab-case, unique across all intents
  name: '<Intent Name>', // human-readable
  problem: '<One sentence describing the UI problem this intent solves.>',
  domain: '<domain-slug>', // must match an existing domain slug in intent-catalog.ts
  concept: MyIntentNameConcept,
  grid: { columns: 2 }, // optional — columns for DecisionAlternatives (2 | 3 | 4), defaults to 2
  decisions: [
    {
      slug: '<decision-a-slug>',
      name: '<Decision A Name>',
      best: '<When to use this decision — complete sentence.>',
      tags: ['Tag1', 'Tag2'], // 2–4 short tags
      caveat: '<The main trade-off or limitation — complete sentence.>',
      // patterns: optional — slugs from src/lib/patterns-catalog.ts used to enrich the AI prompt.
      // Search registry/patterns/ for existing patterns that match this decision.
      // If none found, omit or use [].
      patterns: ['pattern-slug-01'],
      recommended: true, // mark exactly ONE decision as recommended
      demo: MyDecisionADecision,
    },
    {
      slug: '<decision-b-slug>',
      name: '<Decision B Name>',
      best: '<When to use this decision.>',
      tags: ['Tag1', 'Tag2'],
      caveat: '<Trade-off.>',
      patterns: [], // empty if no matching pattern found
      // styles optional — only when default hero layout doesn't fit:
      // styles: { span: 'full' }           → hero: hide tabs, actions in header; alternatives: col-span full
      // styles: { className: 'lg:h-160' }  → override default lg:h-120 hero height
      // styles: { span: 'full', className: 'lg:h-160' } → both
      demo: MyDecisionBDecision,
    },
  ],
}
```

Exactly **one** decision must have `recommended: true` — it becomes the hero.

---

## 4. Register in `src/lib/intent-catalog.ts`

Add **two things** — the import and the entry in the correct domain's `intents` array:

```ts
// At the top imports:
import { manifest as myIntentManifest } from 'registry/intent/<intent-slug>/manifest'

// In intentDomains, find the matching domain and add to its intents array.
// If the domain doesn't exist yet, add a new domain object:
export const intentDomains: IntentDomain[] = [
  {
    slug: '<domain-slug>',
    name: '<Domain Name>',
    intents: [
      // …existing,
      fromManifest(myIntentManifest), // ← add here
    ],
  },
]
```

Position within the `intents` array = display order on `/ai`.

---

## 5. Add entries to `registry.json`

One entry **per decision**. The `name` must follow the pattern `<intent-slug>-<decision-slug>`.

**The sync script (`npm run registry:sync`) auto-corrects `title`, `description`, and `files` from the manifest — but will NOT create missing entries.** You must add each entry manually. Only `registryDependencies` and `dependencies` are yours to maintain permanently.

```json
{
  "name": "<intent-slug>-<decision-slug>",
  "type": "registry:block",
  "registryDependencies": ["button", "avatar"],
  "dependencies": ["lucide-react"],
  "files": []
}
```

Minimal entry: `name`, `type`, `registryDependencies`, `dependencies`. Leave `title`, `description`, and `files` empty or omit — `npm run registry:sync` will fill them correctly from the manifest.

---

## 6. Run sync and validate

```bash
# Sync title, description, files for all intent decisions from their manifests
npm run registry:sync

# Validate — exits 1 if any entry is missing or out of sync
npm run registry:validate

# Regenerate public/r/*.json (install command code files)
npm run registry:build
```

If `registry:validate` prints `MISSING in registry.json: "<name>" (intent decision)` → the entry in step 4 is absent or the `name` is wrong.

---

## Key rules

- `domain` in the manifest **must match** a slug in `intentDomains` in `intent-catalog.ts`
- Registry entry `name` must be exactly `<intent-slug>-<decision-slug>` — this is how `intent-view.ts` resolves the code files and how the sync script finds the entry
- `patterns` is optional — only include slugs that exist in `src/lib/patterns-catalog.ts`; leave `[]` or omit if none apply
- Exactly **one** decision gets `recommended: true`
- `grid.columns` controls `DecisionAlternatives` layout — omit if only one alternative (no grid needed)
- `styles` on a decision is optional — only set when the default hero (`lg:h-120` + tabs) doesn't fit
- `registryDependencies` and `dependencies` in `registry.json` are **never touched by sync** — maintain them manually

---

## Token-efficient workflow (do it in this order)

This skill touches the same handful of files every time. Minimize round-trips:

1. **Read the wiring once, in parallel.** Before writing anything, batch-read
   `src/lib/intent-catalog.ts`, one existing `manifest.ts`, one existing demo,
   and (only if unsure about layout) `intent-hero.tsx` /
   `decision-alternatives.tsx`. Don't re-read them per decision. The
   architecture is stable — trust it.
2. **`ls src/components/ui/` once** to know which primitives exist. Install any
   missing ones up front (see the shadcn step) so you don't discover gaps mid-write.
3. **Write all decision files + concept + manifest, then register.** Group the
   edits; don't interleave reads between every Write.
4. **Sizing — decide up front, avoid rework:**
   - Narrow card demos (`max-w-xs`, e.g. a login card) → default hero, no `styles`.
   - Wide demos (pricing cards, comparison tables, dashboards) → `styles: { span: 'full' }`
     on that decision. `span: 'full'` makes the hero hide the side tabs and gives
     full width; in the alternatives grid it spans all columns.
5. **registry.json:** insert new entries next to sibling intent entries. You only
   author `name`, `type`, `registryDependencies`, `dependencies`, `files: []`.
   `registryDependencies`/`dependencies` are **yours forever**; sync fills the rest.
   Inline-SVG-only demos → `dependencies: []`; lucide icons → `["lucide-react"]`.
6. **One chained command** at the end — don't run them in three separate calls:
   ```bash
   npm run registry:sync && npm run registry:validate && npm run registry:build
   ```
7. **Don't re-read files you just wrote** to "verify" — Write/Edit already
   confirmed success, and `registry:validate` is the real check.

---

## Checklist

- [ ] Intent earns its place — common problem, ≥2 decisions with real, distinct trade-offs (strong `best` + `caveat` each)
- [ ] Needed shadcn primitives confirmed installed (or added via `npx shadcn@latest add`)
- [ ] `registry/intent/<intent-slug>/` folder created
- [ ] One `<decision-slug>.tsx` per decision — named export `<PascalCase>Decision()`; elaborate/stateful is fine
- [ ] `concept.tsx` — wireframe for the `/ai` gallery card, referenced as `concept` in the manifest
- [ ] `manifest.ts` — all required fields; exactly one `recommended: true`; decision count = trade-offs worth teaching
- [ ] `src/lib/intent-catalog.ts` — manifest imported + `fromManifest()` entry in the correct domain
- [ ] `registry.json` — one entry per decision with `name`, `type`, `registryDependencies`, `dependencies`
- [ ] `npm run registry:sync` — fills `title`, `description`, `files` from manifest
- [ ] `npm run registry:validate` — passes with no MISSING or OUT OF SYNC errors
- [ ] `npm run registry:build` — regenerates `public/r/*.json`
