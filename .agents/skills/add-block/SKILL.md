---
name: add-block
description: >-
  Full workflow for adding a new UI block to ui-flx. Covers file structure,
  manifest.ts, block-catalog.ts registration, registry.json entry, editor
  fields pattern, image light/dark, and validation commands. Triggers: "add
  block", "new block", "criar bloco", "novo bloco", "add a new section",
  or any request to create a new Flexnative block.
---

# Add a new block to ui-flx

## Design constitution — read first

Blocks are the public face of the library. Before writing UI, hold the bar set by
the two constitution skills — they govern **how anything visual is built here**:

- [make-interfaces-feel-better](../make-interfaces-feel-better/SKILL.md) — concentric
  radii, optical alignment, shadows over borders, split/staggered enter animations,
  subtle exits, `tabular-nums`, `text-wrap: balance`, image outlines
  (`outline-black/10 dark:outline-white/10`), `scale(0.96)` on press, min 40×40px hit
  areas, never `transition: all`.
- [animations](../animations/SKILL.md) — `ease-out` for enter/exit, `ease-in-out` for
  on-screen movement, `ease` for hover; UI durations under 300ms; animate only
  `transform`/`opacity`/`filter`; `prefers-reduced-motion` on every animated element;
  no perpetual loops in product UI.

When a block choice trades off against these, **the constitution wins.** When in
doubt, read the relevant skill rather than guessing.

Non-negotiables inherited by every block:

- Enter animations are **split + staggered** (per element), exits are subtle. Guard
  all motion behind `prefers-reduced-motion` (`useReducedMotion()` → static state).
- Only animate `transform` / `opacity` / `filter`. Never `transition: all`.
- Headings use `<Balancer>`; dynamic numbers use `tabular-nums`; images carry the
  `outline-black/10 dark:outline-white/10` outline.
- Interactive elements: `active:scale-[0.96]` feedback, ≥ 40×40px hit area,
  concentric radii on nested surfaces (`outer = inner + padding`).
- **Prefer shadcn primitives over hand-rolled markup** whenever one fits. Reach for
  `Card`, `Badge`, `Button`, `Avatar`, `Separator`, … from `@/components/ui/*`
  instead of a styled `div` that reinvents them — a surface with a border + shadow is
  a `Card`, a status pill is a `Badge`. Only drop to a raw element when no primitive
  fits or you need a shape a primitive can't express. List every primitive used in
  `registryDependencies` (step 6).

---

## What to read before writing

Read **only** the category files you need — nothing more:

```
registry/blocks/<category>/catalog.ts         ← to see existing blocks + import pattern
registry/blocks/<category>/registry.json      ← to see existing entries + confirm path format
```

Do NOT read `registry.json` (root), `src/lib/blocks/block-catalog.ts`, or other categories.

If adding a **new category**: also read `registry/blocks/registry.json` and `src/lib/blocks/block-catalog.ts`.

---

## File structure to create

```
registry/blocks/<category>/<slug>/
  <slug>.tsx                  # Main component (server-safe, Readonly<Props>)
  <slug>-example.tsx          # Demo data — exports `values` + `<SlugExample>`
  editor/
    fields.tsx                # 'use client' — interactive prop editor
  manifest.ts                 # Block manifest (single source of truth)
```

Categories: `hero` | `content` | `carousel` | `showcase` | `bento-grids` | `logos` | `testimonials` | `scroll`

---

## 1. Create `<slug>.tsx`

Standard server component. Export a typed `Props` interface and accept `Readonly<Props>`.

### Code ordering — this is what makes a block easy to read and adjust

Follow the **reading order** of `registry/blocks/hero/hero-03/hero-03.tsx`. This is
about **structure, not content** — the payoff is a component anyone can scan top to
bottom and edit safely. Keep this exact order:

1. **Props interface** — typed, exported. Include `variant` (visual size/register)
   and, when it animates, an `animation` union (`'none' | 'subtle' | 'emphasis'`).
2. **`variantStyles` lookup map** — a `const … as const` object keyed by variant,
   each holding the className strings for that variant (`container`, `title`,
   `spacing`, …). **This replaces every `if/else` about sizing.**
3. **Animation variants** — declare `motion` `Variants` / transition objects as
   module-level consts (`emphasisMedia`, `subtleEnter`, …). Never inline them in JSX.
4. **Component body**:
   a. Resolve the variant once: `const vs = variantStyles[variant]`.
   b. Build **named element constants** (`titleElement`, `descriptionElement`,
      `ctasElement`, `mediaElement`) *before* the return. Guard each with `&&`.
   c. `return` is a **clean composition** of those constants — the JSX reads like
      an outline, not a wall of nested logic.

### Rules that keep it scannable

- **No `if/else` / no nested ternaries** for layout. Use a `variantStyles` map for
  branches and `cond && <El />` for presence. One flat level of decisions.
- **Lift, name, then compose.** Extract each region into a `const …Element` so the
  `return` is short and the variants (`none` / `subtle` / `emphasis`) reuse the same
  pieces instead of duplicating markup.
- **`cn()` for every conditional class**; merge `vs.*` strings into it.
- Keep the file's shape identical across animation modes — same elements, different
  wrappers. That symmetry is why hero-03 is easy to tweak.

```tsx
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export interface MyBlockProps {
  title: string
  description?: string
  variant?: 'standard' | 'compact' | 'prominent'
}

const variantStyles = {
  standard: { container: 'gap-10', title: 'text-3xl md:text-4xl', spacing: 'space-y-6' },
  compact: { container: 'gap-6', title: 'text-2xl md:text-3xl', spacing: 'space-y-4' },
  prominent: { container: 'gap-12', title: 'text-4xl md:text-5xl', spacing: 'space-y-8' },
} as const

export function MyBlock({
  title,
  description,
  variant = 'standard',
}: Readonly<MyBlockProps>) {
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1 className={cn('tracking-tight', vs.title)}>
      <Balancer>{title}</Balancer>
    </h1>
  )

  const descriptionElement = description && (
    <p className="text-muted-foreground">
      <Balancer>{description}</Balancer>
    </p>
  )

  return (
    <section className={cn('flex flex-col', vs.container, vs.spacing)}>
      {titleElement}
      {descriptionElement}
    </section>
  )
}
```

For an **animated** block, add the `animation` prop, declare `Variants` as module
consts, and branch the `return` per mode reusing the same element constants — exactly
as `hero-03.tsx` does. All motion stays `prefers-reduced-motion`-safe and on
`transform`/`opacity`/`filter` only (see the design constitution above).

---

## 2. Create `<slug>-example.tsx`

Export `values` (typed as the Props) + a named example component.

```tsx
import { MyBlock, type MyBlockProps } from './my-block'

export const values = {
  title: 'Example title',
  description: 'Example description.',
} satisfies MyBlockProps

export function MyBlockExample() {
  return <MyBlock {...values} />
}
```

---

## 3. Create `editor/fields.tsx`

- `'use client'`
- Import defaults from the **local example file** (`../slug-example`) — never from a global defaults file
- Accept `props?: Props` + `onUpdate?: (props: Props) => void`
- Use internal state only when `externalProps` is absent (uncontrolled fallback)

```tsx
'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { values as defaults } from '../my-block-example'
import type { MyBlockProps } from '../my-block'

interface MyBlockEditorFieldsProps {
  props?: MyBlockProps
  onUpdate?: (props: MyBlockProps) => void
}

export function MyBlockEditorFields({
  props: externalProps,
  onUpdate,
}: MyBlockEditorFieldsProps = {}) {
  const [internalProps, setInternalProps] =
    React.useState<MyBlockProps>(defaults)
  const props = externalProps ?? internalProps

  const updateField = (field: keyof MyBlockProps, value: unknown) => {
    const newProps = { ...props, [field]: value }
    if (onUpdate) onUpdate(newProps)
    else setInternalProps(newProps)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Title</Label>
        <Input
          value={props.title}
          onChange={(e) => updateField('title', e.target.value)}
        />
      </div>
    </div>
  )
}
```

---

## 4. Create `manifest.ts`

This is the **single source of truth** for all block metadata consumed by the app.

```ts
import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { MyBlock } from './my-block'
import { MyBlockEditorFields } from './editor/fields'
import { MyBlockExample, values } from './my-block-example'

export const manifest: BlockManifest = {
  slug: 'my-block',
  name: 'My Block',
  description: 'Short description of what the block does.',
  category: 'content', // must match an existing category slug
  image: {
    light: '/images/blocks/content/myBlock.png',
    dark: '/images/blocks/content/myBlock.png',
  },
  meta: {
    iframeHeight: 600, // optional — height in px for the preview iframe
    // containerClassName: '...' // optional — only for carousel/logo-style blocks
    // componentClassName: '...' // optional — rare
  },
  hasNew: true, // optional — shows badge in sidebar
  component: MyBlock,
  editorFields: MyBlockEditorFields,
  example: MyBlockExample,
  defaults: values,
  // variations: { 'variant-name': MyBlockVariantComponent }, // optional
}
```

### `image.light` / `image.dark`

Both are **required**. Preview screenshots:

```bash
pnpm run playwright:install   # once per machine (keep script — new machine / Playwright update)
pnpm run dev
pnpm run blocks:capture-screenshots
pnpm dlx tsx scripts/capture-block-screenshots.ts --slug=hero-01
pnpm dlx tsx scripts/capture-block-screenshots.ts --missing-only
```

- Light: `public/images/blocks/<category>/<slug>.png`
- Dark: `public/images/blocks/<category>/<slug>-dark.png`

Scroll/interactive blocks that should not capture full scroll height: set `meta.captureViewportOnly: true` (uses `iframeHeight`).

```ts
image: {
  light: '/images/blocks/content/my-block.png',
  dark: '/images/blocks/content/my-block-dark.png',
},
```

---

## 5. Register in `registry/blocks/<category>/catalog.ts`

Add **two things** in the category's catalog file — the import and the array entry:

```ts
// Import at the top:
import { manifest as myBlockManifest } from './my-block/manifest'

// Add to the blocks array in display order:
blocks: [
  // ...existing,
  myBlockManifest,   // ← add here
],
```

`src/lib/blocks/block-catalog.ts` is a thin aggregator — do not edit it directly.

Position within the `blocks` array = display order within the category.

---

## 6. Add entry to `registry/blocks/<category>/registry.json`

Each category has its own `registry.json`. Add the entry there — **not** in the root `registry.json`.

`files[].path` is **relative to `registry/blocks/<category>/`** — use only the slug-relative path:

```json
{
  "name": "my-block",
  "type": "registry:block",
  "registryDependencies": ["@flx/cta"],
  "dependencies": ["react-wrap-balancer"],
  "files": [
    {
      "path": "my-block/my-block.tsx",
      "type": "registry:component",
      "target": "components/flx/blocks/content/my-block/my-block.tsx"
    },
    {
      "path": "my-block/my-block-example.tsx",
      "type": "registry:component",
      "target": "components/flx/blocks/content/my-block/my-block-example.tsx"
    }
  ]
}
```

| Field            | Rule                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `files[].path`   | **Relative to the category directory** — `<slug>/<file>`, no `registry/blocks/<category>/` prefix |
| `files[].target` | Absolute install path — `components/flx/blocks/<category>/<slug>/<file>`                          |

**Do NOT write `title`, `description`, or `meta.iframeHeight`** — the sync script fills them from the manifest.

Add `meta.containerClassName` manually only when the preview needs a special container (e.g. carousels: `"max-w-full overflow-hidden px-0"`).

---

## 7. Run validation and sync

```bash
# 1. Validate manifests are consistent and image.light/dark are set
pnpm run registry:validate

# 2. Sync title/description/iframeHeight from manifest → registry.json
pnpm run registry:sync

# 3. Validate again to confirm everything is clean
pnpm run registry:validate

# 4. Regenerate public/r/*.json for the file tree in the block editor
pnpm run registry:build
```

If `registry:validate` fails, it will print exactly which field is out of sync or missing.

---

## Checklist

- [ ] `<slug>.tsx` — component with `Readonly<Props>`; code ordering follows hero-03 (props → `variantStyles` map → motion consts → named element constants → clean `return`); no `if/else` / nested ternaries for layout
- [ ] Design constitution held — split/staggered enter, subtle exit, `prefers-reduced-motion`, only `transform`/`opacity`/`filter`, no `transition: all`, `<Balancer>` on headings, `tabular-nums`, image outlines, `active:scale-[0.96]`, concentric radii
- [ ] Fades use Tailwind `mask-*` utilities ([mask-image docs](https://tailwindcss.com/docs/mask-image)) — mask on wrapper (image + overlay), not inline `maskImage` / gradient hacks
- [ ] shadcn primitives preferred over hand-rolled markup (`Card`/`Badge`/`Button`/…); all used ones listed in `registryDependencies`
- [ ] Inline illustration considered — built to the add-illustration bar if used, and the decision reported
- [ ] `<slug>-example.tsx` — exports `values` + named example component
- [ ] `editor/fields.tsx` — imports defaults from `../<slug>-example`, not from any global file
- [ ] `manifest.ts` — all fields filled including `image.light` and `image.dark`
- [ ] `registry/blocks/<category>/catalog.ts` — manifest import + entry added to the `blocks` array
- [ ] `registry/blocks/<category>/registry.json` — entry with `name`, `type`, `files` (relative paths), `registryDependencies`, `dependencies`
- [ ] `pnpm run registry:validate` — passes
- [ ] `pnpm run registry:sync` — runs without errors
- [ ] `pnpm run registry:validate` — passes again (confirm sync was clean)
- [ ] `pnpm run registry:build` — regenerates `public/r/*.json`

---

## Variations (optional)

If the block has named visual variants (different prop combinations rendered as standalone examples):

1. Create `examples/<slug>-<variant-name>.tsx` — a self-contained component
2. Add to `manifest.ts`:
   ```ts
   variations: {
     'variant-name': MyBlockVariantName,
   }
   ```

Variations appear as separate preview routes: `/preview/<category>/<slug>/variant-name`

---

## Consider an inline illustration

Some blocks (hero, feature, empty/idle state, CTA with visual) are far stronger with
a purpose-built **illustration** than with a stock photo or a bare heading. When the
layout has visual space to fill, decide whether an illustration earns its place.

**This is inline — not a registry entry.** You do **not** create anything under
`registry/illustrations/`. You build the illustration *inside the block's own files*
(its `.tsx`, or a small local subcomponent) as part of the block. Nothing here
touches the illustration catalog, `registry:sync`, or slugs.

Even though it lives in the block, **build it to the illustration bar.** Read
[add-illustration](../add-illustration/SKILL.md) and apply its taste rules:

- **Compose, don't symbolize** — a layered composition (abstract, conceptual, or real
  UI from shadcn primitives + real text), never a lone icon/glyph.
- **Layer for depth** — a card peeking behind another, soft `shadow-sm`, concentric
  radii; theme tokens only (`bg-card`, `bg-foreground/10`), works in light + dark.
- **Motion optional, default none** — if it animates, a single one-shot entrance
  (opacity/blur, `ease-out`), no perpetual loops, `prefers-reduced-motion`-safe.
- **Responsive** — reflows and never overflows at any width.
- Any image uses the `outline-black/10 dark:outline-white/10` outline.

### Visual palette — ideas to reach for

Not a checklist — a vocabulary. Pull from these when a block or its illustration
needs to feel real, and only when it fits. Restraint over cramming everything in.

- **Real Unsplash images** — `https://images.unsplash.com/photo-…?w=800&q=80`,
  modest `w`/`q`, always the `outline-black/10 dark:outline-white/10` outline.
- **Illustration-style components** — layered `Card`/`Badge`/`Avatar` crops, small
  SVG charts/sparklines, a big `tabular-nums` metric — a believable product fragment
  instead of a stock photo.
- **Gradient fade (caption / tint)** — `bg-gradient-to-t from-black/60 via-black/10 to-transparent`
  over an image to seat a caption. For **melting media into the block edge** (soft
  oval wash, edge dissolve), use Tailwind `mask-*` instead — see
  [Fades with Tailwind `mask-*`](#fades-with-tailwind-mask-utilities) below.
- **Discreet background vectors** — a faint grid, dot pattern, soft radial glow, or
  a large low-opacity blob behind content (`opacity-[0.04]`–`opacity-10`, theme
  tokens, `pointer-events-none`, `-z-10`). **Only when it earns it** — most blocks
  want a clean background. Never let it compete with content.
- **Vercel-style borders** — crisp hairline `border` on `bg-card` with a soft
  `shadow-sm` and concentric radii; occasionally a subtle top highlight
  (`ring-1 ring-white/10` in dark) for the "premium panel" look. Use sparingly, not
  on every surface.
- **Depth by layering** — a second card peeking behind the first, a fanned stack, a
  floating chip — per make-interfaces-feel-better (shadows over hard borders).

All of these stay on theme tokens (light + dark) and inside the constitution — GPU
properties only if animated, `prefers-reduced-motion`-safe, no `transition: all`.

### Don't turn the illustration into props

An illustration inside a block is **decoration to simulate a real screen** — not a
configurable surface. Do **not** create a pile of props/editor fields to feed it.
Hard-code its content inline. The editor fields stay focused on the block's real
content (title, description, CTAs); the illustration just sits there looking real.
This keeps the block simple and doesn't limit what the illustration can be.

**What matters is the registry wiring.** When a block ships an illustration file,
make sure `registry/blocks/<category>/registry.json` **includes that file** as a
`files[]` entry with its own `target`, so it installs alongside the block:

```json
"files": [
  {
    "path": "my-block/my-block.tsx",
    "type": "registry:component",
    "target": "components/flx/blocks/hero/my-block/my-block.tsx"
  },
  {
    "path": "my-block/illustration.tsx",
    "type": "registry:component",
    "target": "components/flx/blocks/hero/my-block/illustration.tsx"
  }
]
```

If the illustration uses shadcn primitives, add them to `registryDependencies`
(`["card", "badge"]`, …). No extra defaults, no extra editor fields.

**Report the decision.** At the end of the block, state explicitly whether you built
an inline illustration and why — e.g. *"Added an inline illustration in `my-block.tsx`
(layered metric cards, static) instead of a placeholder image, following the
add-illustration taste rules."* If you chose not to, say so and why (photo fits the
content better, no visual space, etc.). Never silently drop the option.

---

## Fades with Tailwind `mask-*` utilities

Fade is one of the highest-leverage ways to give a block life — a background wash,
a photo that melts into the page, an illustration that dissolves at the edges. **Whenever
you need a fade on an image or component, consult the Tailwind docs first:**

**https://tailwindcss.com/docs/mask-image**

This project runs **Tailwind CSS v4.1+**, which ships composable `mask-*` utilities.
Use them — do **not** reach for inline `style={{ maskImage }}`, arbitrary
`[mask-image:…]` classes, or `bg-gradient-to-*` overlays as the primary fade mechanism.

### When to use

- Soft background image washes (hero blobs, ambient color)
- Melting media / illustrations into the block background
- Edge dissolve on a crop — radial oval, linear top/bottom fade, or both combined

### Rules

1. **Read the docs before coding.** Utilities compose (`mask-radial-from-*`,
   `mask-radial-to-*`, `mask-radial-at-*`, `mask-t-from-*`, `mask-b-from-*`, …).
   Stacked classes merge into a single mask via `mask-composite: intersect` (Tailwind default).
2. **Apply the mask on a wrapper** that holds **both** the image and any overlay
   (e.g. `bg-background/30`). The fade must affect image + tint together.
3. **Prefer `mask-radial-*` for oval/spotlight shapes** and `mask-*-from/to` for
   directional edge fades. Combine them when one alone isn't enough.
4. **Give radial masks room to breathe.** Use a wide/tall wrapper
   (`inset-x-0 w-full aspect-square lg:aspect-[9/4]`) and let the mask define the
   visible oval — don't clip with a small fixed `height`; that produces hard straight
   edges instead of curves.
5. **Avoid `-z-10` behind `bg-background`** on the same stacking context — the wash
   disappears behind the section fill. Use `isolate` on the section + `z-0` on the
   mask wrapper, `z-10` on content.
6. **Hand-roll CSS only when no utility fits** — the docs cover radial, linear,
   conic, combined, and responsive (`md:mask-radial-*`) variants.

### Composing masks — pattern

Linear + radial is the common hero wash. Tailwind intersects them automatically:

```tsx
const backgroundElement = (
  <div
    aria-hidden
    className={cn(
      'pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto w-full',
      'mask-t-from-60% mask-t-to-90%',
      'mask-b-from-75% mask-b-to-85%',
      'mask-radial-[70%_70%] mask-radial-from-60% mask-radial-to-90% mask-radial-at-top',
      'md:mask-radial-[70%_90%]',
      'opacity-50 dark:opacity-10',
    )}
  >
    <img src={WASH_IMAGE} alt="" className="absolute inset-0 size-full object-cover object-top" />
    <div className="bg-background/30 dark:bg-background/45 absolute inset-0" />
  </div>
)
```

| Utility family | Role |
| --- | --- |
| `mask-radial-[W_H]` | Ellipse size — wider = horizontal oval |
| `mask-radial-at-top` / `mask-radial-at-[50%_32%]` | Radial center — avoid `at-top` alone if top edge looks flat |
| `mask-radial-from-*` / `mask-radial-to-*` | Radial fade stops |
| `mask-t-from-*` / `mask-b-from-*` | Linear fade on one edge — composes with radial |
| `mask-circle` | Force circle instead of default ellipse |

### Reference implementation

`registry/blocks/hero/hero-01/hero-01.tsx` — composed radial + linear mask on a
full-width background wash. Start there when building similar fades.

---

## Key rules

- **Constitution first.** [make-interfaces-feel-better](../make-interfaces-feel-better/SKILL.md) + [animations](../animations/SKILL.md) govern all UI here — when a choice conflicts with them, the constitution wins.
- **Fades = Tailwind `mask-*`.** Any time an image or component needs to dissolve into the background, read [Tailwind mask-image](https://tailwindcss.com/docs/mask-image) and use composable `mask-radial-*` / `mask-*-from/to` utilities on a wrapper — see [Fades with Tailwind `mask-*`](#fades-with-tailwind-mask-utilities). Reference: `hero-01.tsx`.
- **Prefer shadcn primitives.** Use `Card`/`Badge`/`Button`/`Avatar`/… from `@/components/ui/*` instead of hand-rolling a `div` that reinvents them; drop to raw elements only when no primitive fits. Always list them in `registryDependencies`.
- **Code ordering = hero-03.** Props interface → `variantStyles` map → motion consts → named `…Element` constants → clean composed `return`. No `if/else` or nested ternaries for layout; branch with a lookup map, gate with `cond && <El />`. Structure, not content, is what makes a block easy to read and adjust.
- **Consider an inline illustration** for hero/feature/empty-state blocks — built *inside the block* to the add-illustration bar, never as its own illustration-registry entry. Don't wire it to props/editor fields (hard-code the content to simulate a real screen); the one requirement is that its file is included as a `files[].target` in the block's `registry.json`. Report the decision at the end.
- **Never** import from `@/lib/block-defaults` or `@/lib/block-registry` — both were deleted. The only sources are the block's own files and `@/lib/blocks/block-catalog`.
- **Never** import `registry.json` directly in app code — use `@/lib/blocks/block-catalog` for runtime data.
- `image.light` and `image.dark` are **both required** in every manifest. `registry:validate` will fail if either is empty.
- The `defaults` field in the manifest must point to the same `values` object exported by `<slug>-example.tsx`.
