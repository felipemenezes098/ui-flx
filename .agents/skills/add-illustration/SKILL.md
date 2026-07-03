---
name: add-illustration
description: >-
  Full workflow for adding a new UI illustration to ui-flx. Illustrations are
  elegant compositions across a fidelity spectrum — abstract shapes, conceptual
  mockups, or real UI built from shadcn primitives (Card/Button/Badge/Avatar),
  text, and images with a fade — for marketing blocks and empty states. The only
  hard no is a lone icon/glyph. Motion is optional polish, never mandatory. Covers
  category axis (style, not subject), grid span sizing,
  the design/taste bar, file structure, registry/illustrations/<category>/catalog.ts
  registration, registry.json entry, and sync/build commands. Triggers: "add
  illustration", "new illustration", "criar illustration", "nova ilustração",
  "add-illustration", or any request to create a new Flexnative illustration under
  registry/illustrations.
---

# Add a new illustration to ui-flx

Illustrations are **elegant UI elements** for marketing blocks, hero sections,
and empty/idle states. They follow the **pattern model** (one inline `.tsx`, no
props, no manifest, no editor, no sanity) — same wiring as patterns and sketches.

**They live on a fidelity spectrum — pick what the idea needs.** There's no single
right register:

- **Abstract / artistic** — layered surfaces, soft geometric compositions, gradient
  shapes. Fine and welcome.
- **Conceptual** — realistic layout with placeholder content (gray bars for text,
  `bg-card` surfaces). A mockup fragment.
- **Real UI** — actual shadcn primitives (`Card`, `Button`, `Badge`, `Avatar`),
  real text, real numbers, a real image. A crop from a believable product screen.

Most pieces mix registers (a real `Card` with a placeholder chart, an image with a
real caption). Choose per illustration; don't force everything into one mode.

**The one thing they are NOT: a lone icon.** A single lucide-style glyph or one
stroked symbol floating on its own is an icon, not an illustration — even an
abstract piece should be a *composition* (layers, depth, more than one element),
not a symbol. If it reads as one glyph, add depth or start over.

Materials to build from: shadcn primitives from `@/components/ui/*`, layered
`bg-card` surfaces with borders/shadows, gray content bars (`bg-foreground/10`,
`bg-foreground/15`), real typographic accents (a big `tabular-nums` number, a
`+12%` trend chip), lucide icons, small SVG charts, and — when it fits — a real
image with a fade (see "Images" below).

**Motion is optional.** Do not animate by default. Most illustrations are static
and that is correct. Add motion only when it earns its place, and only ever
*subtle* (see "If you animate" below). A clean static element beats a busy
animated one.

**The whole point is taste.** Before writing one, read
[make-interfaces-feel-better](../make-interfaces-feel-better/SKILL.md) — the
design and motion rules below are distilled from it and its reference files. When
in doubt, defer to that skill.

Metadata lives in **`registry/illustrations/<category>/catalog.ts`** — the single
source of truth for `name`, `description`, and **`span`**. `registry:sync` copies
`name`/`description` into the category's `registry.json` as `title`/`description`.

`src/lib/illustrations/illustrations-catalog.ts` is a thin aggregator — **do not
edit it directly** unless adding a new category.

The `/illustrations` page shows **everything flat, in one grid** — no per-category
grouping. Category is purely an organization/namespace device, never shown to the
user as a taxonomy.

---

## The category axis — read this first

Category = **illustration STYLE / format, never subject.**

- **Style** (right): `spot` (small decorative), `scene`/`hero` (large layered),
  `mascot`, `isometric`, `3d`, … Each axis is coarse and naturally holds many
  items over time.
- **Subject** (wrong): `box`, `search`, `calendar`, `auth`, `commerce` — that is
  the *item*, not the category. Fragmenting by subject is what produces the
  "some categories only have 1-2 items" problem.

**Rules:**

- **No generic/`misc` bucket.** Singletons land there, the bucket grows, then you
  want to reclassify → slug churn. `illustration-misc-03` also carries zero
  meaning.
- **A singleton category is fine** — it's cheap (folder + `catalog.ts` +
  `registry.json` + one `include` line). A meaningful singleton `scene` that
  grows later (no rename) beats dumping into `misc`.
- **Category is baked into public identity** (slug `illustration-<category>-NN`,
  registry `name`, install URL, component target path). Reclassifying later =
  rename = breaks published install URLs. Pick the stable axis (style) so you
  rarely need to move anything.
- If items "go together by theme" (auth, dashboard, commerce), that's a subject —
  wrong axis. That's what tags/filters are for, not categories.

Rule of thumb: **category = how it's *drawn*, not what it *depicts*.**

---

## What to read before writing — branch here

### Adding an illustration to an EXISTING category (most common)

Read **only** these two:

```
registry/illustrations/<category>/catalog.ts       ← existing items + last number + span values
registry/illustrations/<category>/registry.json    ← existing entries + path/deps format
```

Also glance at 1-2 sibling `.tsx` files in the same category to match visual
language (shared surface colors, stroke weights, motion feel).

### Adding a NEW category

Also read:

```
registry/illustrations/registry.json               ← to add the new include entry
src/lib/illustrations/illustrations-catalog.ts      ← to import + register the category
src/lib/illustrations/illustration-types.ts         ← IllustrationCategory / IllustrationItem shape
```

---

## Slug & naming

- **`<category>`** — the style axis: `spot`, `scene`, … (matches a
  `illustrationCategories[].slug`).
- **`<slug>`** — **`{category}-{NN}`** with a sequential, zero-padded number
  (`spot-05` after `spot-04`). **No `illustration-` prefix** — the category folder
  already namespaces it; a double prefix (`illustration-spot-05`) is wrong. Check
  `catalog.ts` for the last used number.
- **Component name** — PascalCase from slug: `spot-05` → `export function Spot05()`.
- Keep category slugs distinct enough that `{category}-NN` never collides with a
  pattern/composition of the same name — the published `public/r/<slug>.json`
  namespace is flat.

---

## File structure to create

```
registry/illustrations/<category>/<slug>.tsx
```

Only the component file. No manifest, example, editor, or sanity.

---

## 1. Create `registry/illustrations/<category>/<slug>.tsx`

- **Static (the default)** → server component (no `'use client'`), no npm deps.
- **Animated (only if it earns it)** → `'use client'` + `motion/react`, and list
  `motion` in the registry `dependencies` (step 3).
- Export a **named** PascalCase function matching the slug (required for the
  dynamic-import fallback in `illustration-registry.ts`).
- The root is a wrapper `div` that centers the element in the grid card — a fixed
  height around `h-40` and a width that matches the artwork (`w-48`, `w-64`, …) or
  `w-full` for full-bleed compositions. The grid card supplies padding.
- **Use shadcn primitives freely.** Import `Card`, `Button`, `Badge`, `Avatar`,
  etc. from `@/components/ui/*` and list them in `registryDependencies` (step 3).
  Real UI is encouraged — it reads as a genuine product crop. `lucide-react` icons
  are fine and do **not** need a `dependencies` entry (assumed present).
- Use **theme tokens**, never hard-coded colors: `bg-card`, `bg-muted`,
  `bg-foreground/10`, `border`, `shadow-sm`, `text-primary`/`fill-primary`. A small
  semantic color (e.g. an `emerald-500` trend chip) is fine when it reads as real
  UI. Keeps it working in light/dark and inside any marketing block.
- **No comments** in the code.

### The design bar (taste)

- **Compose, don't symbolize.** Whatever the register — abstract, conceptual, or
  real UI — it must be a composition with more than one element, not a lone glyph.
- **Layer for depth.** A second card peeking behind the first, a fanned stack,
  soft `shadow-sm` lift. Prefer shadows/tonal layers over hard borders.
- **Concentric radii.** Outer radius = inner radius + padding (see
  make-interfaces-feel-better → surfaces).
- **Real content sells it.** A big `tabular-nums` number, a `+12%` chip, a real
  caption over an image — reads as product UI far more than gray bars alone. Reach
  for real text/primitives when the idea is a UI element; keep placeholder bars for
  more abstract or conceptual pieces.
- **Restraint over complexity.** A calm, confident piece beats a busy one. If it's
  getting complex, cut.
- **Responsive is required — test narrow.** The card width changes a lot (full
  width on mobile, ~half at `md`, wider on desktop). The piece must reflow and
  **never overflow horizontally** at any width. Give text flex children `min-w-0`
  + `truncate`, let tight rows `flex-wrap`, cap fixed widths with `max-w-full`,
  mark fixed side elements `shrink-0`, and use `sm:` overrides for anything that's
  too tight on small screens (e.g. an overhanging badge that must tuck inside).
  A multi-column inner grid (`grid-cols-3`) is the classic break point — verify it
  fits when the card is at its narrowest (`md`, span-2 ≈ 330px).

### If you animate (optional — default to NO motion)

Motion is **not required** and most illustrations are better without it. Reach
for it only for a single, purposeful moment — almost always a **one-shot
entrance** as the piece appears. When you do, these are non-negotiable:

- **NO perpetual loops.** A floating up-and-down bob, a breathing scale, a pulsing
  ring, anything on `repeat: Infinity` — this reads **dated and gimmicky**. Do not
  use it. If a thing must feel "live", a static accent (a dot, a badge) says it
  better than motion. This is the most common way these go wrong.
- **One-shot entrance only.** A restrained `opacity 0→1` (optionally with
  `filter: blur(6px)→0`) as it mounts, `ease-out` (`[0.22, 1, 0.36, 1]`), ~0.4–0.6s.
  That's the whole budget. It settles once and never moves again.
- **Avoid translate/movement.** Prefer opacity/blur that don't shift layout. A
  `y`/`x` translate on entrance risks the piece **overflowing its grid card into
  the neighbor above/below** (see the sizing rule below) — and movement is exactly
  the dated feel to avoid. If you must move, keep it to a few px and verify it
  doesn't overflow.
- **GPU-only properties** — `opacity`, `filter: blur`, and (sparingly) `transform`.
  Never width/height/margin/padding/color.
- **`bounce` must always be `0`** if you use a spring. Never start from `scale(0)`.
- **`prefers-reduced-motion` is required** — `useReducedMotion()` → `initial: false`,
  static state.
- **Never `transition: all`.** `will-change` only on `transform`/`opacity`/
  `filter`, and only if you see first-frame stutter. Keep blur under 20px.

### Fit the grid card — no overflow

The `/illustrations` grid card centers the piece in a fixed-height cell — **~280px
for `size: 'md'`, ~384px for `size: 'lg'`** (see step 2). If the illustration is
taller than its cell, it overflows **both top and bottom** and visibly bleeds into
the row above.

- Keep the composition comfortably inside the cell — roughly **≤ 230px for `md`,
  ≤ 330px for `lg`** (the card has padding, and the hover toolbar sits at the
  bottom). Leave the bottom ~48px clear so the Code/CLI/Prompt buttons don't
  overlap the art.
- Pick `size: 'lg'` for large scenes instead of cramming them into `md`. If it
  still doesn't fit, shrink internal paddings/heights — never rely on the card to
  clip it.
- Don't use a translate that pushes content outside the card bounds.

### Example — real UI element (server component, shadcn primitives)

A metrics card built from a shadcn `Card` + `Badge` + real text, with a second
card peeking behind it. `registryDependencies: ["card", "badge"]`.

```tsx
import { TrendingUp } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const spark = ['h-3', 'h-5', 'h-4', 'h-6', 'h-4', 'h-7', 'h-5']

export function Spot05() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center">
      <Card className="absolute top-1 right-8 h-28 w-44 rotate-6 gap-0 p-0 opacity-60 shadow-sm" />
      <Card className="relative w-56 gap-0 p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-xs font-medium">Revenue</span>
          <Badge
            variant="secondary"
            className="gap-1 text-emerald-600 dark:text-emerald-400"
          >
            <TrendingUp className="size-3" />
            12%
          </Badge>
        </div>
        <div className="mt-2 text-2xl font-semibold tracking-tight tabular-nums">
          $48,262
        </div>
        <div className="mt-3 flex items-end gap-1">
          {spark.map((h, i) => (
            <div key={i} className={`bg-primary/60 w-1.5 rounded-full ${h}`} />
          ))}
        </div>
      </Card>
    </div>
  )
}
```

For a more **abstract or conceptual** piece, swap the real text for gray bars
(`bg-foreground/10 h-2 w-16 rounded-full`) and plain `bg-card` divs — same layered
composition, lower fidelity. Both are valid; pick per idea.

### Example — image with a fade (client, subtle motion)

Use a real image (Unsplash) behind a gradient fade with a caption. This is the
one case where a subtle entrance earns its place. Always add the image outline
(`outline-black/10 dark:outline-white/10`) per make-interfaces-feel-better.

```tsx
'use client'

import { motion, useReducedMotion } from 'motion/react'

export function Spot06() {
  const reduce = useReducedMotion()

  return (
    <div className="relative h-40 w-48 overflow-hidden rounded-2xl border shadow-sm">
      <motion.img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=480&q=80"
        alt=""
        className="h-full w-full object-cover outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
        style={{ willChange: 'transform, opacity' }}
        initial={reduce ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-3">
        <div className="h-2 w-24 rounded-full bg-white/85" />
        <div className="h-2 w-16 rounded-full bg-white/50" />
      </div>
    </div>
  )
}
```

Preview loads via `src/lib/illustrations/illustration-registry.ts` →
`import(\`registry/illustrations/${category}/${slug}\`)`. The catalog entry must
exist before the preview resolves.

### Images

- Use real **Unsplash** URLs (`https://images.unsplash.com/photo-…?w=480&q=80`).
  Keep `w`/`q` modest — these are small cards.
- Always add the outline: `outline-1 -outline-offset-1 outline-black/10
  dark:outline-white/10`. Never a tinted neutral.
- A gradient fade (`bg-gradient-to-t from-black/60 …`) over the image sells the
  "element" feel and gives room for a caption.

---

## 2. Register in `registry/illustrations/<category>/catalog.ts`

Add an item to the `items` array (order = display order in the grid).

```ts
{
  slug: 'spot-05',
  name: 'Short Human Title',       // → registry.json `title` after sync
  description: 'One-line summary.', // → registry.json `description` after sync
  span: 2,                          // optional — grid columns, see below (default 1)
  size: 'lg',                       // optional — card height 'md' | 'lg' (default 'md')
  isNew: true,                      // optional — badge in UI
}
```

**Always set `name` and `description` here.** Do not maintain that text manually
in `registry.json`. `span` and `size` are catalog-only (UI display) — they are
not synced to `registry.json` and don't affect the installed component.

### `size` — card height (`md` | `lg`)

`md` (default, ~280px) fits spots and small elements. Use **`lg`** (~384px) for
large, layered illustrations (scenes) — they need the extra vertical room so the
artwork isn't cramped and the hover toolbar (Code / CLI / Prompt buttons, pinned
to the bottom) has clearance. Don't force a big scene into `md`; bump the size
instead of shrinking the art to nothing.

The grid **equalizes row height** — a `lg` item stretches every other card in its
row to match (they center their content in the taller cell). So a `lg` makes its
whole row taller; place it in a row where the neighbors won't look too empty, or
give that row other substantial pieces.

### Choosing `span` (1–4) — this matters

The grid is 4 columns (`md:grid-cols-4`). `span` widens the card. Span is a
**composition decision**, not just a size readout:

| span | Use for |
| ---- | ------- |
| `1`  | Default. Small, self-contained spots. |
| `2`  | Wider or horizontally-composed pieces; also a small-but-striking piece you want to give room to breathe. |
| `3`  | Rich scenes with real horizontal content. |
| `4`  | Full-width hero moments — use rarely, for a genuine showpiece. |

Guidance:

- **Match the artwork's aspect + weight.** A wide layered scene needs 2-3; a tiny
  centered spot wants 1.
- **Visual interest can outrank size.** A small but eye-catching illustration can
  justify a larger span to draw the eye — it doesn't have to be big to earn room.
- **Rhythm across the whole grid.** The gallery is flat, so spans interleave. Vary
  them so the grid breathes (a `2` next to two `1`s reads well); don't stack many
  wide cards in a row. Glance at the current grid before committing.
- **Mind wrapping — add up the row.** A span that doesn't fit the columns left in
  the current row drops to the next row and leaves a gap. Sum the spans in reading
  order across all items (categories render in order): each group of 4 columns
  should fill cleanly. A `span: 3` after a row already holding a `2` wraps and
  strands 2 empty columns — `span: 2` there fills the row instead.
- Default to `1` and only widen with a reason.

---

## 3. Add entry to `registry/illustrations/<category>/registry.json`

`files[].path` is **relative to the category directory** — just the filename.

```json
{
  "name": "spot-05",
  "type": "registry:block",
  "registryDependencies": [],
  "dependencies": [],
  "files": [
    {
      "path": "spot-05.tsx",
      "type": "registry:component",
      "target": "components/flx/illustrations/spot/spot-05.tsx"
    }
  ]
}
```

| Field                  | Rule                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `name`                 | Same as catalog `slug`                                                   |
| `type`                 | Always `"registry:block"`                                                |
| `registryDependencies` | shadcn/ui primitives used — e.g. `["card", "badge"]`, `["card", "avatar"]`, `["card", "button"]`. `[]` if none. |
| `dependencies`         | npm packages — **`["motion"]` if animated**, else `[]`. `lucide-react` is NOT listed (assumed present). |
| `files[0].path`        | **Just `<slug>.tsx`** — relative to the category directory               |
| `files[0].target`      | `components/flx/illustrations/<category>/<slug>.tsx`                      |

**Do NOT add `title` or `description`** — `registry:sync` writes them from the
catalog.

---

## 4. Run sync, validate, and build

```bash
pnpm run registry:sync
pnpm run registry:validate
pnpm run registry:build
```

| Command             | Purpose                                                                     |
| ------------------- | --------------------------------------------------------------------------- |
| `registry:sync`     | Copies catalog `name`/`description` into the category `registry.json`       |
| `registry:validate` | Fails if catalog and registry metadata diverge (run to confirm)             |
| `registry:build`    | Regenerates `public/r/<slug>.json` for the Code dialog / `shadcn add`       |

If `registry:validate` reports `MISSING in registry`, add the skeleton entry from
step 3 and run sync again.

---

## Adding a new category (rare)

1. **Create `registry/illustrations/<new-category>/catalog.ts`**:

```ts
import type { IllustrationCategory } from '@/lib/illustrations/illustration-types'

export const sceneCategory: IllustrationCategory = {
  slug: 'scene',
  name: 'Scene',
  description: 'Large layered illustrations for hero and marketing sections.',
  hasNew: true,
  items: [],
}
```

2. **Create `registry/illustrations/<new-category>/registry.json`** — empty items:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "flx-illustrations-scene",
  "homepage": "https://ui.flexnative.com",
  "items": []
}
```

3. **Add include** in `registry/illustrations/registry.json`:

```json
"include": ["./spot/registry.json", "./scene/registry.json"]
```

4. **Import + register** in `src/lib/illustrations/illustrations-catalog.ts`
   (`illustrationCategories` array):

```ts
import { sceneCategory } from 'registry/illustrations/scene/catalog'
// add to illustrationCategories array
export const illustrationCategories = [spotCategory, sceneCategory]
```

The `/illustrations` page and global search pick up the new category
automatically.

---

## Checklist

- [ ] Category is a **style/format** axis, not a subject; no `misc` bucket
- [ ] Slug is `<category>-NN` (sequential, **no `illustration-` prefix**); component is named PascalCase export (`Spot05`)
- [ ] It's a **composition**, not a lone glyph — abstract, conceptual, or real UI, but layered/multi-element; theme tokens only; no comments
- [ ] Fidelity chosen per idea — shadcn primitives + real text where it's a UI element; gray bars for abstract/conceptual
- [ ] Static by default; if animated, **one-shot entrance only** (opacity/blur, ease-out) — **no `repeat: Infinity` loops** — `'use client'` + `motion/react`, `prefers-reduced-motion` handled, no `transition: all`
- [ ] Composition fits the grid card (≤ ~230px tall); no translate pushing it outside bounds / into neighbors
- [ ] Any image uses Unsplash + the `outline-black/10 dark:outline-white/10` outline
- [ ] **Responsive** — reflows and never overflows horizontally at any card width (test narrow: `min-w-0`/`truncate`, `flex-wrap`, `max-w-full`, `shrink-0`, `sm:` overrides)
- [ ] `catalog.ts` — `slug`, `name`, `description`, and a considered `span`
- [ ] `registry.json` — `registryDependencies` lists shadcn primitives used; `dependencies: ["motion"]` only if animated (never `lucide-react`)
- [ ] `pnpm run registry:sync`
- [ ] `pnpm run registry:validate` — passes
- [ ] `pnpm run registry:build` — `public/r/<slug>.json` exists

---

## Key rules

- **Taste first.** These land in marketing blocks — read
  [make-interfaces-feel-better](../make-interfaces-feel-better/SKILL.md) and hold
  that bar. Elegant, restrained, real.
- **Fidelity is a spectrum — abstract, conceptual, or real UI.** Use shadcn
  primitives and real text freely when it's a UI element; use gray bars for
  abstract/conceptual pieces. The only hard no is a **lone icon/glyph** — always a
  layered composition, never a single symbol.
- **Motion is optional — default to none.** Static is usually correct. If you
  animate, only a **one-shot entrance** (opacity/blur, ease-out). **No perpetual
  loops** — floating bobs, breathing scales, pulsing rings read dated; never use
  them. Reduced-motion-safe.
- **Fit the card.** Keep the composition within its `size` height so it doesn't
  overflow the grid card into neighbors; don't rely on translate that pushes
  outside bounds.
- **Responsive, always.** Must reflow and never overflow horizontally at any card
  width. `min-w-0`/`truncate` on text, `flex-wrap` tight rows, `max-w-full` on
  fixed widths, `shrink-0` on fixed side elements, `sm:` for what's too tight small.
- **Slug is `<category>-NN`.** No `illustration-` prefix — the folder namespaces
  it; a double prefix is wrong.
- **Category = style, baked into identity.** Never subject; reclassifying breaks
  published URLs.
- **`span` is a composition + attention decision**, not just size — vary it for
  grid rhythm.
- **Catalog owns** name/description/span; never duplicate them in `registry.json`.
- No `manifest.ts` / `-example.tsx` / `editor/` / `sanity/`.
