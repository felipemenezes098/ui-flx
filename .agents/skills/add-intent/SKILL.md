---
name: add-intent
description: >-
  Full workflow for adding a new UI intent to ui-flx. Covers file structure,
  decision demo files, manifest.ts, intent-catalog.ts registration, and
  registry.json entries. Triggers: "add intent", "new intent", "criar intent",
  "novo intent", or any request to create a new Flexnative intent.
---

# Add a new intent to ui-flx

An **intent** is an interface problem with multiple decisions — each decision is a concrete UI pattern that solves the problem in a different context. Intents live under `registry/intents/` and are browsable at `/intents/<slug>`.

## Mental model

```
Intent = the problem ("Show Team Members")
  └── Decision = a concrete solution ("Avatar Group", "Compact List", …)
        └── Demo component = live preview of that solution
```

Each decision has **one demo file** + **one registry.json entry**. The registry entry is what the install command references (`npx shadcn@latest add @flx/<intent-slug>-<n>`).

### Decision slug convention (IMPORTANT)

A decision's `slug` is a **sequential number** (`'1'`, `'2'`, `'3'`, …) matching its
position in the manifest `decisions` array, NOT a descriptive kebab string. This
keeps install names short and readable: `share-access-1`, `sign-in-3`.

Consequences that follow everywhere:

- **Demo file** is `<intent-slug>-<n>.tsx` (`share-access-1.tsx`,
  `share-access-2.tsx`, …), NOT `<n>.tsx` and NOT `<descriptive>.tsx`.
- **Registry entry `name`** is `<intent-slug>-<n>` (`share-access-1`) — matches
  the file base name.
- **Named export** is the **PascalCase of the file name**: `share-access-1.tsx`
  exports `ShareAccess1`, `sign-in-3.tsx` exports `SignIn3`. Component name ==
  file name, always. The decision's human label lives only in `name`.

---

## Before you build — does this intent earn its place?

An intent is **not** a single pattern with a coat of paint. It is a recurring,
high-value interface problem where a designer/engineer genuinely has to _choose
between approaches_. Only create one when all of these hold:

- **Real, common problem.** It shows up constantly across products (sign in,
  select a plan, confirm a destructive action, schedule a meeting). If it's
  niche or one-off, it's a **pattern**, not an intent — use the `add-pattern` skill.
- **Multiple legitimate solutions with distinct trade-offs.** There must be a
  real fork: social-first vs email+password vs magic-link, each winning in a
  different context. If there's only one sensible way to do it → pattern.
- **The trade-offs are worth teaching.** The value of an intent is the
  _decision_, captured as a ready-to-paste prompt that an AI/user adapts to
  their own context. Weak or invented trade-offs make a weak intent.

If you can't articulate a strong `best` (when to reach for it) **and** a strong
`caveat` (what it costs you) for _each_ decision, the intent isn't ready.

### How many decisions?

**Target three or more. Two is a hard floor, not a goal.** The number of
decisions equals the number of trade-offs worth teaching: derive it from the
problem, never from habit. The canonical fork is usually a triad (sign-in goes
social / email-password / magic-link; reset-password goes email-link / OTP /
security-questions).

Before settling on a count, **enumerate every legitimate solution and its
trade-off**, then keep each one that wins in a genuinely different context:

- Default to three. Four or more is fine when each adds a real, distinct context.
- Drop to two ONLY when a third honest fork genuinely does not exist. That is
  the rare exception, never the starting point.
- Don't pad with near-duplicates, and don't collapse two real forks into one.
- One decision means no choice. That is a pattern, not an intent.

Litmus: if you have only two decisions, name the third way someone solves this
and when it wins. If you can write a strong `best` + `caveat` for it, it belongs.

### Elaborate decisions are welcome

Decisions are **encouraged to be rich and realistic**: multi-step flows,
stateful toggles, faceted layouts, comparison tables. A convincing, production-
grade demo is more useful than a toy. Reach for `'use client'` + `useState` when
the decision's value _is_ the interaction. Keep it self-contained (hardcoded
sample data, no props), but don't dumb it down.

### Writing the copy (`problem`, `best`, `caveat`)

This text is the whole point of an intent. It feeds the AI prompt, so make it
objective and concrete.

- **No em dashes or en dashes (`—` / `–`) anywhere.** Use a period, comma, or
  colon. This applies to manifest copy and to any text rendered in a demo.
- **`problem`** states the interface problem in one sentence. No solution in it.
- **`best`** says when to reach for this decision and why it wins there. One or
  two complete sentences, concrete context, no hype.
- **`caveat`** names the real cost or limit. Every decision has one. If you
  can't write an honest caveat, the decision isn't pulling its weight.
- Fewer words that land beat padding. Don't repeat the decision name in its own
  `best`/`caveat`.

---

## File structure to create

```
registry/intents/<domain>/<intent-slug>/
  manifest.ts                 # Single source of truth for the intent
  concept.tsx                 # Wireframe preview for /intents gallery cards
  <intent-slug>-1.tsx         # One file per decision — the demo component (slug + order)
  <intent-slug>-2.tsx
  …
```

No `editor/`, no `example.tsx`, no `index.ts`. Demos are self-contained components.

**Existing domains:** `auth` | `billing` | `account` | `collaboration`

Adding to an existing domain is the common case. Only create a new domain if no existing one fits.

---

## 1. Create decision demo files

One file per decision, named `<intent-slug>-<n>.tsx` by order
(`share-access-1.tsx`, `share-access-2.tsx`, …). Each exports a **named
function whose name is the PascalCase of the file name** (`share-access-1.tsx` →
`ShareAccess1`). Component name == file name.

```tsx
// registry/intents/<domain>/<intent-slug>/<intent-slug>-1.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function IntentSlug1() {
  // Realistic, self-contained demo. Hardcoded sample data, no props.
  // Wrap in the shadcn <Card> (size="sm" for compact auth/form cards).
  return (
    <Card size="sm" className="w-full">
      <CardHeader>
        <CardTitle>…</CardTitle>
      </CardHeader>
      <CardContent>{/* … */}</CardContent>
    </Card>
  )
}
```

Rules:

- **Wrap the demo in the shadcn `<Card>`** (and `CardHeader`/`CardContent`/`CardFooter`). Never hand-roll a `bg-card rounded-xl border` div when a real component exists. Same rule for every primitive: reach for the installed component first.
- **No `'use client'`** unless the demo needs interactivity (hooks, state, browser events).
- Import only from `@/components/ui/*`, never from `@/components/flx/*`.
- Sample data hardcoded inline. No props, no context.
- The component must work standalone at any viewport width.
- **Root width lives in the manifest, not the demo.** Put `w-full` on the root `<Card>` (or wrapper). Do **not** add `max-w-*`, `min-w-*`, or viewport breakpoints (`xl:max-w-*`) on the demo root — `DecisionPreview` (`src/app/(main)/intents/components/decision-preview.tsx`) owns max-width on the intent page, alternatives grid, and home showcase. Users who install the block add their own page-level `max-w` when needed.
- **Avatars need a real image.** Set `AvatarImage src` (Unsplash face crop) and give `AvatarFallback` a solid background; transparent overlapping fallbacks look broken.

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

Lightweight wireframe for the `/intents` gallery card — same idea as `src/lib/pattern-concepts.tsx`. No interactivity, no `'use client'`, fills `h-full w-full`.

```tsx
// registry/intents/<intent-slug>/concept.tsx
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
// registry/intents/<domain>/<intent-slug>/manifest.ts
import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { MyIntentNameConcept } from './concept'
import { IntentSlug1 } from './<intent-slug>-1'
import { IntentSlug2 } from './<intent-slug>-2'

export const manifest: IntentManifest = {
  slug: '<intent-slug>', // kebab-case, unique across all intents
  name: '<Intent Name>', // human-readable
  problem: '<One sentence describing the UI problem this intent solves.>',
  // No domain field — domain is assigned in intent-catalog.ts
  concept: MyIntentNameConcept,
  grid: { columns: 2 }, // columns for the ALTERNATIVES grid only — see "Grid sizing" below
  decisions: [
    {
      slug: '1', // sequential number by array position; demo lives in <intent-slug>-1.tsx
      name: '<Decision A Name>',
      best: '<When to use this decision — complete sentence.>',
      tags: ['Tag1', 'Tag2'], // 2–4 short tags
      caveat: '<The main trade-off or limitation — complete sentence.>',
      // patterns: optional — slugs from src/lib/patterns/patterns-catalog.ts used to enrich the AI prompt.
      // Search registry/patterns/ for existing patterns that match this decision.
      // If none found, omit or use [].
      patterns: ['pattern-slug-01'],
      recommended: true, // mark exactly ONE decision as recommended
      demo: IntentSlug1,
    },
    {
      slug: '2', // next number; demo lives in <intent-slug>-2.tsx
      name: '<Decision B Name>',
      best: '<When to use this decision.>',
      tags: ['Tag1', 'Tag2'],
      caveat: '<Trade-off.>',
      patterns: [], // empty if no matching pattern found
      // styles optional — see "Grid sizing" and "Preview sizing" below:
      // styles: { span: 'full' }                        → hero: hide tabs, actions in header; alternatives: col-span full
      // styles: { previewSize: 'md' }                  → compact card in preview shells
      // styles: { span: 'full', previewSize: 'full' }   → wide demo (sidebar layout, pricing table)
      // styles: { className: 'lg:h-160' }              → override default lg:h-120 hero height
      demo: IntentSlug2,
    },
  ],
}
```

Exactly **one** decision must have `recommended: true` — it becomes the hero.

### Grid sizing (`grid.columns` + `styles.span`)

These two settings work together. Get them wrong and the alternatives grid looks
lopsided. The key fact most people miss:

> **The recommended decision is the hero — it renders ABOVE the grid, outside it.
> `grid.columns` describes only the REMAINING decisions (the alternatives).**

So the count that matters for the grid is `decisions.length - 1` (everything that
isn't the hero). Pick `columns` so those alternatives tile into **full rows** with
no orphan hanging on the last row.

**`styles.span: 'full'` means "this decision is big / needs room."** Use it when
the demo is wide or tall (pricing tables, comparison grids, dashboards,
multi-step flows). Usually pair with `previewSize: 'full'` so the preview shell
matches — see "Preview sizing". Effects:

- In the **hero**: hides the side tabs, moves actions into the header, full width.
- In the **alternatives grid**: that decision consumes an **entire row** by itself.

Because a `span: 'full'` alternative eats a whole row, it changes the math — the
_other_ alternatives must still tile evenly into the columns you set.

Worked examples (`A` = alternatives = non-hero decisions):

| Total decisions | A (non-hero) | spans among A | `grid.columns` | Why                                                                      |
| --------------- | ------------ | ------------- | -------------- | ------------------------------------------------------------------------ |
| 2               | 1            | none          | omit (or 1)    | one alternative, no grid needed                                          |
| 3               | 2            | none          | **2**          | 2 alternatives fill one clean row of 2                                   |
| 3               | 2            | both `full`   | **1**          | each full span owns a row → 1 column keeps them aligned                  |
| 4               | 3            | none          | **3**          | 3 alternatives = one row of 3                                            |
| 5               | 4            | none          | **2**          | 4 tile into 2 rows of 2                                                  |
| 5               | 4            | one `full`    | **2** (or 1)   | full span takes its own row; remaining **3** must still close — see note |

**The "must close" rule:** a `span: 'full'` alternative sits on its own row, so
subtract it and check that the _rest_ divide evenly into `columns`. If removing
the spans leaves an awkward remainder (e.g. 3 non-span alternatives in a
2-column grid → a lonely orphan), either drop to `columns: 1`, add/merge a
decision, or promote another to `full` so every row is balanced. Never leave a
single orphan card dangling under a full-width row.

Rule of thumb: **omit `grid` entirely when there's only one alternative.**

### Preview sizing (`styles.previewSize`)

Preview width is **not** set on the demo component. The display layer wraps every
decision in `DecisionPreview` (intent hero, alternatives grid, home showcase) and
reads `styles.previewSize` from the manifest. Keep the choice **in sync with how
big the demo actually is** — if the manifest says `lg` but the UI is a tiny
dialog card, the preview looks lost; if it says `sm` but the demo is a sidebar
layout, content gets crushed on mobile.

**Sizes** (`DecisionPreviewSize` in `intent-manifest-types.ts`):

| `previewSize` | max width | reach for when |
| ------------- | --------- | -------------- |
| `sm`          | `max-w-sm` (~24rem) | Single compact surface: preferences dialog, OTP card, small confirm panel |
| `md`          | `max-w-xl` (~36rem) | Medium forms and lists: inline-edit rows, notification toggles, comment thread |
| `lg`          | `max-w-3xl` (~48rem) | Default when omitted in **hero** / desktop showcase. Tabbed settings, multi-field forms |
| `full`        | no cap | Wide layouts: sidebar + content, pricing comparison, data tables, dashboards |
| `none`        | no cap | Same as `full`; escape hatch when you explicitly want no preview cap |

**Defaults when `previewSize` is omitted** (you usually set it explicitly anyway):

- **Hero** (`intent-hero.tsx`): `lg`, or `full` when `span: 'full'`
- **Alternatives grid** (`decision-alternatives.tsx`): `md`
- **Home showcase mobile**: `md`; desktop: same as hero

**How to pick — match the component, not a habit:**

- Demo is a **small, self-contained card** (one column, few fields, dialog-sized) → `sm` or `md`
- Demo is a **standard form / settings panel** (tabs, grouped fields, readable but not sprawling) → `md` or `lg`
- Demo is **visually large** (persistent nav + main area, 2+ columns, table, plan cards side by side) → `lg` or `full`; pair with `span: 'full'` when it also needs a full grid row or hero without side tabs

`previewSize` and `span` are independent but often move together: wide demos usually need both `previewSize: 'full'` and `span: 'full'`. A compact dialog might be `previewSize: 'sm'` with no `span`.

**Do not** put `max-w-*` on the demo root to "fix" preview — set `previewSize` in the manifest instead.

---

## 4. Register in `src/lib/intents/intent-catalog.ts`

Add **two things** — the import and the entry in the correct domain's `intents` array:

```ts
// At the top imports:
import { manifest as myIntentManifest } from 'registry/intents/<domain>/<intent-slug>/manifest'

// In intentDomains, find the matching domain and add to its intents array.
// If the domain doesn't exist yet, add a new domain object (and create its registry.json):
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

Position within the `intents` array = display order on `/intents`.

---

## 5. Add entries to `registry/intents/<domain>/registry.json`

Each domain has its own `registry.json`. Add entries there — **not** in `registry/intents/registry.json` (that's just an aggregator with `include` only).

One entry **per decision**. The `name` must follow the pattern `<intent-slug>-<n>` (n = the decision's numeric slug), e.g. `share-access-1`.

**The sync script (`npm run registry:sync`) auto-corrects `title`, `description`, and `files` from the manifest — but will NOT create missing entries.** You must add each entry manually. Only `registryDependencies` and `dependencies` are yours to maintain permanently.

```json
{
  "name": "<intent-slug>-<n>",
  "type": "registry:block",
  "registryDependencies": ["button", "avatar"],
  "dependencies": ["lucide-react"],
  "files": []
}
```

Minimal entry: `name`, `type`, `registryDependencies`, `dependencies`. Leave `title`, `description`, and `files` empty or omit — `npm run registry:sync` will fill them (with paths relative to the domain directory: `<intent-slug>/<intent-slug>-<n>.tsx`).

### Adding a new domain (very rare)

1. Create `registry/intents/<new-domain>/registry.json` with `items: []`
2. Add `"./‌<new-domain>/registry.json"` to the `include` array in `registry/intents/registry.json`

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

- **Three or more decisions** by default; two only when no honest third fork exists.
- **No em/en dashes (`—` / `–`)** in `problem`, `best`, `caveat`, or demo text. Use a period, comma, or colon.
- **Demos use real shadcn components** (`<Card>`, etc.), not hand-rolled `bg-card` lookalikes.
- `domain` is **not** a field in the manifest — it is assigned by placing the intent under `registry/intents/<domain>/` and registering it in `intent-catalog.ts`
- Registry entry `name` must be exactly `<intent-slug>-<n>` (numeric decision slug) — this is how `intent-view.ts` resolves the code files and how the sync script finds the entry. Entry lives in `registry/intents/<domain>/registry.json`.
- `patterns` is optional — only include slugs that exist in `src/lib/patterns/patterns-catalog.ts`; leave `[]` or omit if none apply
- Exactly **one** decision gets `recommended: true`
- `grid.columns` counts only the **non-hero** decisions (the hero renders above the grid). Size it from `decisions.length - 1` and keep `span: 'full'` spans from leaving an orphan card — see "Grid sizing". Omit if only one alternative.
- `styles` on a decision is optional — set `span` / `previewSize` / `className` when defaults don't fit; demo root stays `w-full` only (no `max-w-*`)
- `previewSize` must reflect the demo's real visual footprint (`sm`/`md` for compact, `lg`/`full` for large) — see "Preview sizing"
- `registryDependencies` and `dependencies` in `registry.json` are **never touched by sync** — maintain them manually

---

## Token-efficient workflow (do it in this order)

This skill touches the same handful of files every time. Minimize round-trips:

1. **Read the wiring once, in parallel.** Before writing anything, batch-read
   `src/lib/intents/intent-catalog.ts`, one existing `manifest.ts`, one existing demo,
   `registry/intents/<domain>/registry.json` (to see the entry format + add your entries),
   and (only if unsure about layout) `intent-hero.tsx` /
   `decision-alternatives.tsx`. Don't re-read them per decision. The
   architecture is stable — trust it.
2. **`ls src/components/ui/` once** to know which primitives exist. Install any
   missing ones up front (see the shadcn step) so you don't discover gaps mid-write.
3. **Write all decision files + concept + manifest, then register.** Group the
   edits; don't interleave reads between every Write.
4. **Sizing — decide up front, avoid rework** (full rules in "Grid sizing" + "Preview sizing"):
   - Compact demos (login card, OTP, preferences dialog) → `styles: { previewSize: 'sm' }` or `'md'`; demo root `w-full` only.
   - Standard forms / tabbed settings → `previewSize: 'lg'` on the hero decision (or omit; hero defaults to `lg`).
   - Wide demos (sidebar layout, pricing tables, dashboards) → `styles: { span: 'full', previewSize: 'full' }` — big in preview and full row in alternatives; hero hides side tabs.
   - Set `grid.columns` from the **non-hero** count (`decisions.length - 1`), then
     verify any `full` spans still leave the remaining alternatives tiling into
     clean rows. Omit `grid` when there's only one alternative.
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

- [ ] Intent earns its place: common problem, **3+ decisions** with real, distinct trade-offs (strong `best` + `caveat` each)
- [ ] Copy is dash-free: no `—`/`–` in `problem`, `best`, `caveat`, or demo text
- [ ] Demos wrap in real shadcn `<Card>` (and use installed primitives), not hand-rolled `bg-card` divs
- [ ] Needed shadcn primitives confirmed installed (or added via `npx shadcn@latest add`)
- [ ] `registry/intents/<domain>/<intent-slug>/` folder created
- [ ] One `<intent-slug>-<n>.tsx` per decision (`share-access-1.tsx`, …): named export is the PascalCase of the file name (`ShareAccess1`); elaborate/stateful is fine
- [ ] `concept.tsx`: wireframe for the `/intents` gallery card, referenced as `concept` in the manifest
- [ ] `manifest.ts`: all required fields; exactly one `recommended: true`; 3+ decisions unless no honest third fork exists
- [ ] `grid.columns` sized from the non-hero count; any `span: 'full'` leaves no orphan card (see "Grid sizing")
- [ ] Each decision has `previewSize` aligned with demo size (`sm`/`md` compact, `lg`/`full` large); demo root is `w-full` without `max-w-*` (see "Preview sizing")
- [ ] `src/lib/intents/intent-catalog.ts` — manifest imported + `fromManifest()` entry in the correct domain
- [ ] `registry/intents/<domain>/registry.json` — one entry per decision with `name`, `type`, `registryDependencies`, `dependencies`
- [ ] `npm run registry:sync` — fills `title`, `description`, `files` from manifest
- [ ] `npm run registry:validate` — passes with no MISSING or OUT OF SYNC errors
- [ ] `npm run registry:build` — regenerates `public/r/*.json`
