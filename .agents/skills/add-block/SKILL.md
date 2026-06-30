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

```tsx
import Balancer from 'react-wrap-balancer'
import { cn } from '@/lib/utils'

export interface MyBlockProps {
  title: string
  description?: string
}

export function MyBlock({ title, description }: Readonly<MyBlockProps>) {
  return (
    <section className="...">
      <Balancer>{title}</Balancer>
      {description && <p>{description}</p>}
    </section>
  )
}
```

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

- [ ] `<slug>.tsx` — component with `Readonly<Props>`
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

## Key rules

- **Never** import from `@/lib/block-defaults` or `@/lib/block-registry` — both were deleted. The only sources are the block's own files and `@/lib/blocks/block-catalog`.
- **Never** import `registry.json` directly in app code — use `@/lib/blocks/block-catalog` for runtime data.
- `image.light` and `image.dark` are **both required** in every manifest. `registry:validate` will fail if either is empty.
- The `defaults` field in the manifest must point to the same `values` object exported by `<slug>-example.tsx`.
