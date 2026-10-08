---
name: add-block
description: >-
  Full workflow for adding a new UI block to ui-flx: inline component file,
  manifest, catalog + registry.json registration, and validation. The block
  page and install docs are generated from the catalog. Screenshot capture is
  never run by the agent — only suggested as a command at the end.
  Triggers: "add block", "new block", "criar bloco", "novo bloco",
  "add a new section", or any request to create a new Flexnative block.
---

# Add a new block to ui-flx

A block is **inline**, the way shadcn/ui ships its own blocks: the component takes no props
and its content (copy, images, link targets) is written straight into the JSX. There is no
editor, no example file and no variation. The page at `/blocks/<category>/<slug>` and the
install docs are generated from the catalog and the registry entry — there is no MDX to write.

## The pipeline — do every step, in order

Do NOT stop early. Every step below is required except **6 (screenshots)**, which is
never run by the agent.

1. **Read** the category's `catalog.ts` + `registry.json` (nothing else).
2. **Create files** — `<slug>.tsx`, `manifest.ts` (+ any auxiliary file, prefixed with the slug).
3. **Register** in `registry/blocks/<category>/catalog.ts`.
4. **Add entry** to `registry/blocks/<category>/registry.json`.
5. **Validate + sync + build** (`registry:sync` → `registry:validate` → `registry:build`).
6. **Do NOT capture screenshots.** Never run `playwright:install`, `dev`, or
   `blocks:capture-screenshots` yourself. `image.light`/`image.dark` stay pointed at
   WebP files that don't exist yet — that's expected and fine to leave as-is.
7. **Report** the illustration decision, and as the last line of your final message
   suggest the exact screenshot command for the user to run themselves, e.g.:
   `pnpm run blocks:capture-screenshots --slug=<slug>`.

Categories rendered in the gallery: `hero` | `content` | `feature` | `cta` | `bento-grids` |
`testimonials` | `carousel` | `logos` | `scroll`. A new category needs a `catalog.ts` +
`registry.json` + an entry in `registry/blocks/registry.json` `include` and in
`src/lib/blocks/block-catalog.ts` `categories`, a concept in `src/lib/blocks/block-concepts.tsx`,
and a cover image — ask before creating one.

---

## Non-negotiables (the constitution)

These govern all visual work here. On conflict, they win — read
[make-interfaces-feel-better](../make-interfaces-feel-better/SKILL.md) when unsure.

- **No motion.** No entrance animation, no stagger, no `motion` import. Motion only exists
  where it *is* the block (a carousel, scroll-driven media, a logo marquee) and even then
  prefer CSS (`transition-*`, `IntersectionObserver`) over a library. Only animate
  `transform`/`opacity`/`filter`, never `transition: all`.
- **Typography**: headings use `<Balancer>`; dynamic numbers use `tabular-nums`. A hero uses
  `h1`, every other section title uses `h2`.
- **Surfaces**: images carry `outline-black/10 dark:outline-white/10`; nested radii are
  concentric (`outer = inner + padding`); prefer `shadow-sm` over hard borders.
- **Interaction**: `active:scale-[0.96]`, ≥ 40×40px hit area.
- **Primitives over markup**: reach for `Card`/`Badge`/`Button`/`Avatar`/`Separator` from
  `@/components/ui/*` instead of re-inventing them with a styled `div`.
- **Fades = Tailwind `mask-*`**: any image/component dissolving into the background uses
  composable `mask-radial-*` / `mask-*-from/to` on a wrapper (holding image + overlay) —
  never inline `style={{maskImage}}`, `[mask-image:…]`, or `bg-gradient-*` as the primary
  fade. Reference: `hero-01.tsx`.
- **Never** import `registry.json` in app code — use `@/lib/blocks/block-catalog`.

---

## Step 1 — Read

```
registry/blocks/<category>/catalog.ts       ← existing blocks + import pattern
registry/blocks/<category>/registry.json    ← existing entries + path format
```

Do NOT read root `registry.json`, `src/lib/blocks/block-catalog.ts`, or other categories.

---

## Step 2 — Create the files

Everything lives in `registry/blocks/<category>/<slug>/`.

### `<slug>.tsx` — inline, no props

Server-safe unless it needs state or handlers (then `'use client'`). Take
`registry/blocks/hero/hero-02/hero-02.tsx` and `registry/blocks/cta/cta-01/cta-01.tsx` as
the reference for shape and density.

- `export function MyBlock()` — **no props**. Text, `src`, `alt` and link targets are written
  in the JSX.
- A repeated list is a `const items = [...]` at the top of the file, rendered with `.map`.
- **CTAs** are the shadcn `Button` (Base UI, so it takes `render`, not `asChild`):

  ```tsx
  <Button className="w-fit rounded-full px-4" nativeButton={false} render={<a href="#" />}>
    Start free
  </Button>
  ```

  Secondary: `variant="outline"` or `variant="link"`. On a dark image:
  `variant="secondary"` + `className="border-transparent bg-white text-zinc-900 hover:bg-zinc-100"`.
- **Icons** come straight from `lucide-react`.
- **Images**: Unsplash URLs without `ixlib`/`ixid`, e.g. `?q=80&w=1170&auto=format&fit=crop`.
  Alts are generic: `alt="Alt"`, or `alt="Alt 1"`, `alt="Alt 2"` when there are several.
  Decorative images use `alt=""` with `aria-hidden`.
- **Imports from other registry folders** use the install alias, never `../../..`:
  `import { Spot01 } from '@/components/flx/illustrations/spot/spot-01'`.
- **Auxiliary files** (a mock dashboard, a collage) are a second file prefixed with the slug
  (`hero-02-dashboard.tsx` exporting `Hero02Dashboard`). They are imported as `./hero-02-dashboard`.

```tsx
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

export function Cta01() {
  return (
    <div className="bg-muted/50 flex min-h-120 items-center justify-center rounded-xl p-5">
      <div className="flex flex-col items-center space-y-4 self-center">
        <div className="space-y-2">
          <h2 className="text-center text-2xl font-bold md:max-w-200">
            <Balancer balance={0.5}>Simple & Elegant</Balancer>
          </h2>
          <p className="text-muted-foreground text-center md:max-w-200">
            <Balancer balance={0.5}>
              Display content in a minimal and visually appealing way.
            </Balancer>
          </p>
        </div>
        <Button className="w-fit rounded-full px-4" nativeButton={false} render={<a href="#" />}>
          Click here
        </Button>
      </div>
    </div>
  )
}
```

### `manifest.ts` — single source of truth

`image.light` + `image.dark` are **both required** (`registry:validate` fails if empty). Paths:
`public/images/blocks/<category>/<slug>.webp` (light) and `<slug>-dark.webp` (dark).

```ts
import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { MyBlock } from './my-block'

export const manifest: BlockManifest = {
  slug: 'my-block',
  name: 'My Block',
  description: 'Short description of what the block does.',
  category: 'content', // must match an existing category slug
  preset: 'sienna', // 'sienna' | 'vellum' — see below
  image: {
    light: '/images/blocks/content/my-block.webp',
    dark: '/images/blocks/content/my-block-dark.webp',
  },
  meta: { iframeHeight: 600 }, // + captureViewportOnly: true for scroll/interactive blocks
  hasNew: true, // optional badge
  component: MyBlock,
}
```

The `name` and `description` become the page title, the meta description and the registry
`title`/`description`. Write them as plain copy: no mention of animation, editing or variants.

### Choosing the `preset`

Required — `tsc` fails without it. It does two things at once:

- **Gallery filter** — the block only shows under that preset's chip on `/blocks`
- **Screenshot palette** — the preview wraps the block in `PresetScope`, so step 6 captures
  it under those tokens

Blocks are preset-agnostic by construction (semantic tokens only, never a hard-coded color),
so this is a **showcase decision, not a constraint**: the same block works under any preset.
Pick the one the design was composed for.

| | |
|---|---|
| `sienna` | Cream paper, burnt-earth ink, generous radius. Editorial and warm — serif headlines, watercolor or painterly art. |
| `vellum` | The app shell: near-neutral surfaces, warm charcoal primary. Product-y and understated — dashboards, logo walls, dense UI. |

Never invent a preset id — it must already exist in `src/lib/presets/presets-config.ts` with
a matching `registry/presets/styles/<id>.css` and an entry in `registry/presets/registry.json`.
Creating a preset is out of scope for this skill; ask before doing it.

### Inline illustration (hero / feature / empty-state / CTA blocks)

When the layout has visual space, prefer a purpose-built illustration over a stock photo.
Build it **inside the block's folder** as an auxiliary file (not under
`registry/illustrations/`) but to the [add-illustration](../add-illustration/SKILL.md) bar:
compose don't symbolize, layer for depth, theme tokens (light + dark).

- **Hard-code its content** — it simulates a real screen.
- **Wire the file into `registry.json`** — add it as a `files[]` entry (step 4) and add any
  shadcn primitives it uses to `registryDependencies`.
- **Report the decision** in step 7.

Palette to reach for (only when it fits): real Unsplash crops (image outline), layered
`Card`/`Badge`/`Avatar` fragments, small SVG sparklines, a big `tabular-nums` metric,
`mask-*` edge fades, a faint background grid/glow (`opacity-[0.04]`–`10`, `pointer-events-none`),
a card peeking behind another.

---

## Step 3 — Register in `catalog.ts`

Two edits in `registry/blocks/<category>/catalog.ts`. Array position = display order.

```ts
import { manifest as myBlockManifest } from './my-block/manifest'
// ...
blocks: [/* ...existing, */ myBlockManifest],
```

`src/lib/blocks/block-catalog.ts` is a thin aggregator — never edit it for a new block.

---

## Step 4 — Add entry to `registry/blocks/<category>/registry.json`

Per-category file (not root). `files[].path` is **relative to the category dir** (`<slug>/<file>`);
`files[].target` is the install path and is **flat**: `components/flx/blocks/<category>/<file>.tsx`.
Add a `files[]` entry for **every** `.tsx` the block ships (main + auxiliary). Do **NOT** write
`title`, `description`, or `meta.iframeHeight` — `registry:sync` fills them from the manifest.

`registryDependencies` lists every shadcn primitive imported from `@/components/ui/*`, plus
`@flx/<name>` for another registry item the block imports (e.g. `@flx/spot-01`).
`dependencies` lists every npm package imported (`react-wrap-balancer`, `lucide-react`, …).

```json
{
  "name": "my-block",
  "type": "registry:block",
  "registryDependencies": ["button", "card"],
  "dependencies": ["react-wrap-balancer", "lucide-react"],
  "files": [
    {
      "path": "my-block/my-block.tsx",
      "type": "registry:component",
      "target": "components/flx/blocks/content/my-block.tsx"
    },
    {
      "path": "my-block/my-block-dashboard.tsx",
      "type": "registry:component",
      "target": "components/flx/blocks/content/my-block-dashboard.tsx"
    }
  ]
}
```

Add `meta.containerClassName` manually only for special previews (carousels: `"max-w-full overflow-hidden px-0"`).

---

## Step 5 — Validate, sync, build

Run in order. Pre-sync validate failing on the new block is expected (title/description not
synced yet) — continue.

```bash
pnpm run registry:sync       # fills title/description/iframeHeight from manifest
pnpm run registry:validate   # must PASS
pnpm run registry:build      # regenerates public/r/*.json
```

`registry:validate` prints exactly which field is out of sync or missing. After the build,
`/blocks/<category>/<slug>` and `/preview/blocks/<category>/<slug>` must both answer 200.

---

## Step 6 — Do NOT capture screenshots

The manifest points at `image.light`/`image.dark` WebP files that will **not exist** after
this skill runs — that's expected. Never run `playwright:install`, `dev`, or
`blocks:capture-screenshots` yourself; leave that entirely to the user.

```bash
pnpm run playwright:install                          # once per machine
pnpm run dev                                         # separate terminal — capture needs it
pnpm run blocks:capture-screenshots --slug=<slug>
```

Surface this exact command block in step 7 instead of running it. Other filters the user
may want to know about: `--preset=<id>` (every block on that preset — use after changing a
preset's tokens), `--missing-only`, or no flag for all.

Captures render inside `PresetScope`, so the block sits on its own preset's surface. If a
capture looks like the wrong palette, the `preset` in the manifest is wrong — not the script.

---

## Step 7 — Report the illustration decision + suggest the screenshot command

State whether you built an inline illustration and why — e.g. *"Inline dashboard illustration
in `my-block-dashboard.tsx` (layered cards, static), following add-illustration rules"* — or why
you chose a photo / none. Never silently drop it.

Close your final message with the screenshot command for the user to run themselves
(don't run it for them):

```bash
pnpm run blocks:capture-screenshots --slug=<slug>
```

---

## Checklist

- [ ] `<slug>.tsx` — no props; content inline; repeated items in a top-level `const items`; CTAs are `Button` + `render`; `'use client'` only when needed
- [ ] Constitution held — no motion library or entrance animation, `<Balancer>`, `tabular-nums`, image outlines, `active:scale-[0.96]`, concentric radii, `mask-*` for fades, shadcn primitives, `h2` for non-hero titles
- [ ] Generic alts (`Alt`, `Alt 1`, `Alt 2`…); Unsplash URLs without `ixlib`/`ixid`
- [ ] Cross-folder imports use `@/components/flx/*`, never `../../`
- [ ] Auxiliary files and their components are prefixed with the slug
- [ ] `manifest.ts` — `slug`, `name`, `description`, `category`, `preset`, `image.light` + `image.dark` (`.webp`), `component`; nothing else of the old editor shape
- [ ] `catalog.ts` — import + array entry
- [ ] `registry.json` — entry with a flat `target` for every `.tsx`, `registryDependencies`, `dependencies`
- [ ] `registry:sync` → `registry:validate` PASSES → `registry:build`; both routes answer 200
- [ ] Screenshots NOT captured by the agent — `image.light`/`image.dark` are left pointing at not-yet-existing files
- [ ] Illustration decision reported + screenshot command suggested in the final message
