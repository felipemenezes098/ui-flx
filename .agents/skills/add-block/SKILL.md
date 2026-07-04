---
name: add-block
description: >-
  Full workflow for adding a new UI block to ui-flx: file structure, manifest,
  catalog + registry.json registration, MDX docs, validation, and screenshot
  capture. Triggers: "add block", "new block", "criar bloco", "novo bloco",
  "add a new section", or any request to create a new Flexnative block.
---

# Add a new block to ui-flx

## The pipeline — do every step, in order

Do NOT stop early. Every step below is required; the two most-skipped are **6 (MDX)**
and **8 (screenshots)** — they are not optional.

1. **Read** the category's `catalog.ts` + `registry.json` (nothing else).
2. **Create files** — `<slug>.tsx`, `<slug>-example.tsx`, `editor/fields.tsx`, `manifest.ts` (+ any illustration/subcomponent).
3. **Register** in `registry/blocks/<category>/catalog.ts`.
4. **Add entry** to `registry/blocks/<category>/registry.json`.
5. **Create MDX** at `src/app/content/blocks/<category>/<slug>.mdx`.
6. **Validate + sync + build** (`registry:validate` → `registry:sync` → `registry:validate` → `registry:build`).
7. **Capture screenshots** (`image.light` + `image.dark` PNGs). REQUIRED.
8. **Report** the illustration decision.

Categories: `hero` | `content` | `carousel` | `showcase` | `bento-grids` | `logos` | `testimonials` | `scroll`

---

## Non-negotiables (the constitution)

These govern all visual work here. On conflict, they win — read
[make-interfaces-feel-better](../make-interfaces-feel-better/SKILL.md) +
[animations](../animations/SKILL.md) when unsure.

- **Motion**: enter = split + staggered per element; exit subtle. Only animate
  `transform`/`opacity`/`filter`, never `transition: all`. Guard every animation with
  `useReducedMotion()`. `ease-out` enter/exit, durations < 300ms, no perpetual loops.
- **Typography**: headings use `<Balancer>`; dynamic numbers use `tabular-nums`.
- **Surfaces**: images carry `outline-black/10 dark:outline-white/10`; nested radii are
  concentric (`outer = inner + padding`); prefer `shadow-sm` over hard borders.
- **Interaction**: `active:scale-[0.96]`, ≥ 40×40px hit area.
- **Primitives over markup**: reach for `Card`/`Badge`/`Button`/`Avatar`/`Separator` from
  `@/components/ui/*` instead of re-inventing them with a styled `div`. List every one used
  in `registryDependencies`.
- **Fades = Tailwind `mask-*`**: any image/component dissolving into the background uses
  composable `mask-radial-*` / `mask-*-from/to` on a wrapper (holding image + overlay) —
  never inline `style={{maskImage}}`, `[mask-image:…]`, or `bg-gradient-*` as the primary
  fade. Read [the docs](https://tailwindcss.com/docs/mask-image). Reference: `hero-01.tsx`.
- **Never** import from `@/lib/block-defaults` or `@/lib/block-registry` (deleted) or
  import `registry.json` in app code — use `@/lib/blocks/block-catalog`.

---

## Step 1 — Read

```
registry/blocks/<category>/catalog.ts       ← existing blocks + import pattern
registry/blocks/<category>/registry.json    ← existing entries + path format
```

Do NOT read root `registry.json`, `src/lib/blocks/block-catalog.ts`, or other categories.
**New category?** Also read `registry/blocks/registry.json` + `src/lib/blocks/block-catalog.ts`.

---

## Step 2 — Create the files

### `<slug>.tsx` — code ordering is the point

Server-safe, `Readonly<Props>`. Follow the reading order of
`registry/blocks/hero/hero-03/hero-03.tsx` exactly — this is about **structure, not content**:

1. **Props interface** — typed, exported. Include `variant`; add an `animation` union when it animates.
2. **`variantStyles` map** — `const … as const` keyed by variant, holding className strings. Replaces all sizing `if/else`.
3. **Motion `Variants`** — module-level consts, never inlined in JSX.
4. **Body** — resolve `const vs = variantStyles[variant]`, build **named element constants**
   (`titleElement`, `mediaElement`, …) guarded with `&&`, then `return` a clean composition.

No `if/else` / nested ternaries for layout — branch with the map, gate with `cond && <El />`.

```tsx
import Balancer from 'react-wrap-balancer'
import { cn } from '@/lib/utils'

export interface MyBlockProps {
  title: string
  description?: string
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: { title: 'text-3xl md:text-4xl', spacing: 'space-y-6' },
  compact: { title: 'text-2xl md:text-3xl', spacing: 'space-y-4' },
} as const

export function MyBlock({ title, description, variant = 'standard' }: Readonly<MyBlockProps>) {
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1 className={cn('tracking-tight', vs.title)}><Balancer>{title}</Balancer></h1>
  )
  const descriptionElement = description && (
    <p className="text-muted-foreground"><Balancer>{description}</Balancer></p>
  )

  return (
    <section className={cn('flex flex-col', vs.spacing)}>
      {titleElement}
      {descriptionElement}
    </section>
  )
}
```

For animated blocks: add the `animation` prop, declare `Variants` as module consts, and
branch the `return` per mode reusing the same element constants — like `hero-03.tsx`.

### `<slug>-example.tsx`

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

### `editor/fields.tsx`

`'use client'`. Import defaults from `../<slug>-example` (**never** a global file). Accept
`props?` + `onUpdate?`; use internal state only when `props` is absent.

```tsx
'use client'
import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { values as defaults } from '../my-block-example'
import type { MyBlockProps } from '../my-block'

export function MyBlockEditorFields({
  props: externalProps,
  onUpdate,
}: { props?: MyBlockProps; onUpdate?: (p: MyBlockProps) => void } = {}) {
  const [internal, setInternal] = React.useState<MyBlockProps>(defaults)
  const props = externalProps ?? internal

  const updateField = (field: keyof MyBlockProps, value: unknown) => {
    const next = { ...props, [field]: value }
    onUpdate ? onUpdate(next) : setInternal(next)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Title</Label>
        <Input value={props.title} onChange={(e) => updateField('title', e.target.value)} />
      </div>
    </div>
  )
}
```

### `manifest.ts` — single source of truth

`image.light` + `image.dark` are **both required** (`registry:validate` fails if empty). Paths:
`public/images/blocks/<category>/<slug>.png` (light) and `<slug>-dark.png` (dark).

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
    light: '/images/blocks/content/my-block.png',
    dark: '/images/blocks/content/my-block-dark.png',
  },
  meta: { iframeHeight: 600 }, // + captureViewportOnly: true for scroll/interactive blocks
  hasNew: true, // optional badge
  component: MyBlock,
  editorFields: MyBlockEditorFields,
  example: MyBlockExample,
  defaults: values, // must be the same `values` object from the example file
}
```

### Inline illustration (hero / feature / empty-state / CTA blocks)

When the layout has visual space, prefer a purpose-built illustration over a stock photo.
Build it **inside the block's files** (not under `registry/illustrations/`) but to the
[add-illustration](../add-illustration/SKILL.md) bar: compose don't symbolize, layer for
depth, theme tokens (light + dark), motion optional (one-shot, reduced-motion-safe).

- **Hard-code its content** — it simulates a real screen; do NOT wire it to props/editor fields.
- **Wire the file into `registry.json`** — add it as a `files[]` entry with its own `target`
  (step 4) and add any shadcn primitives it uses to `registryDependencies`.
- **Report the decision** in step 8.

Palette to reach for (only when it fits): real Unsplash crops (`?w=800&q=80` + image outline),
layered `Card`/`Badge`/`Avatar` fragments, small SVG sparklines, a big `tabular-nums` metric,
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

`src/lib/blocks/block-catalog.ts` is a thin aggregator — never edit it.

---

## Step 4 — Add entry to `registry/blocks/<category>/registry.json`

Per-category file (not root). `files[].path` is **relative to the category dir** (`<slug>/<file>`);
`files[].target` is the absolute install path. Add a `files[]` entry for **every** `.tsx` the
block ships (main, example, illustrations, subcomponents). Do **NOT** write `title`,
`description`, or `meta.iframeHeight` — `registry:sync` fills them from the manifest.

```json
{
  "name": "my-block",
  "type": "registry:block",
  "registryDependencies": ["button", "card"],
  "dependencies": ["react-wrap-balancer", "motion"],
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

Add `meta.containerClassName` manually only for special previews (carousels: `"max-w-full overflow-hidden px-0"`).

---

## Step 5 — Create the docs MDX

`src/app/content/blocks/<category>/<slug>.mdx` — auto-discovered by path, no registration.
Copy the shape of `src/app/content/blocks/hero/hero-01.mdx`. `metadata` (title + description +
openGraph copies) **matches the manifest**. Add a `<Step>` + `collapsible` `<CodeBlockFromFile>`
for **every** extra file in `files[]`.

```mdx
export const metadata = {
  title: 'My Block',
  description: 'Same one-line description as the manifest.',
  openGraph: { title: 'My Block', description: 'Same one-line description as the manifest.', type: 'article' },
}

<BlockView category="<category>" slug="<slug>" />

## Implementation

<CodeTabs>
<TabsList>
  <TabsTrigger value="cli">Command</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlockCommand command="shadcn@latest add @flx/<slug>" />

## Usage

<CodeBlockFromFile filePath="registry/blocks/<category>/<slug>/<slug>-example.tsx" title="<slug>-example.tsx" />

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install dependencies</Step>

<CodeBlockCommand command="react-wrap-balancer" isPackage />
<CodeBlockCommand command="motion" isPackage />

<Step>Add the illustration (optional)</Step>

One line describing the inline illustration and that it can be swapped/removed.

<CodeBlockFromFile filePath="registry/blocks/<category>/<slug>/<extra-file>.tsx" title="<extra-file>.tsx" collapsible />

<Step>Copy the component</Step>

<CodeBlockFromFile filePath="registry/blocks/<category>/<slug>/<slug>.tsx" title="<slug>.tsx" collapsible />

<Step>Use the component</Step>

<CodeBlockFromFile filePath="registry/blocks/<category>/<slug>/<slug>-example.tsx" />

</Steps>

</TabsContent>
</CodeTabs>
```

---

## Step 6 — Validate, sync, build

Run in order. Pre-sync validate failing on the new block is expected (title/description not
synced yet) — continue.

```bash
pnpm run registry:sync       # fills title/description/iframeHeight from manifest
pnpm run registry:validate   # must PASS
pnpm run registry:build      # regenerates public/r/*.json
```

`registry:validate` prints exactly which field is out of sync or missing.

---

## Step 7 — Capture screenshots (REQUIRED)

The manifest points at `image.light`/`image.dark` PNGs that do **not exist until you capture
them**. Do not skip this — the block card renders broken without them.

```bash
pnpm run playwright:install   # once per machine
pnpm run dev                  # in a separate terminal — capture needs it running
pnpm dlx tsx scripts/capture-block-screenshots.ts --slug=<slug>
```

Confirm both PNGs now exist under `public/images/blocks/<category>/`. Batch options:
`pnpm run blocks:capture-screenshots` (all) or `... --missing-only`.

---

## Step 8 — Report the illustration decision

State whether you built an inline illustration and why — e.g. *"Inline dashboard illustration
in `dashboard-demo.tsx` (layered cards, static), following add-illustration rules"* — or why you
chose a photo / none. Never silently drop it.

---

## Checklist

- [ ] `<slug>.tsx` — `Readonly<Props>`; hero-03 ordering (props → `variantStyles` → motion consts → named element constants → clean `return`); no `if/else`/ternaries for layout
- [ ] Constitution held — staggered enter / subtle exit, `prefers-reduced-motion`, only `transform`/`opacity`/`filter`, `<Balancer>`, `tabular-nums`, image outlines, `active:scale-[0.96]`, concentric radii, `mask-*` for fades, shadcn primitives
- [ ] `<slug>-example.tsx` — exports `values` + named example
- [ ] `editor/fields.tsx` — defaults from `../<slug>-example`
- [ ] `manifest.ts` — all fields incl. `image.light` + `image.dark`; `defaults` === example `values`
- [ ] `catalog.ts` — import + array entry
- [ ] `registry.json` — entry with `files[]` for every `.tsx`, `registryDependencies`, `dependencies`
- [ ] `<slug>.mdx` — metadata matches manifest; Command + Manual tabs; a `<Step>` per extra file
- [ ] `registry:sync` → `registry:validate` PASSES → `registry:build`
- [ ] Screenshots captured — both PNGs exist under `public/images/blocks/<category>/`
- [ ] Illustration decision reported

---

## Variations (optional)

Named visual variants rendered as standalone examples:

1. Create `examples/<slug>-<variant>.tsx` (self-contained).
2. Add to `manifest.ts`: `variations: { 'variant-name': MyBlockVariant }`.

They appear at `/preview/<category>/<slug>/<variant>`.
