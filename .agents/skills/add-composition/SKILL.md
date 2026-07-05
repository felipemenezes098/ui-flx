---
name: add-composition
description: >-
  Full workflow for adding a new UI composition to ui-flx. Compositions are full,
  composed application screens (dashboard, chat, kanban…) built from shadcn
  primitives — copy-paste, inline-code, no props. Covers file structure,
  registry/compositions/<category>/catalog.ts registration, registry.json entry,
  and sync/build commands. Triggers: "add composition", "new composition", "criar
  composition", "novo composition", "add-composition", or any request to create a new
  Flexnative composition under registry/compositions.
---

# Add a new composition to ui-flx

Compositions are **full, composed application screens** (a whole dashboard, a chat
UI, a kanban board) assembled from shadcn/ui primitives. They sit **between
patterns and blocks**: richer than a single-primitive pattern, but copy-paste
and **prop-less** like a pattern (not a block — no props, no editor, no Sanity,
no manifest).

They follow the **pattern model**, not the block model:

- One `.tsx` file per composition, **inline code with real content/values**.
- **No props**, no `manifest.ts`, no `-example.tsx`, no `editor/`, no `sanity/`.
- Use **real shadcn primitives** (`Card`, `Avatar`, `Button`, `Badge`, `Item`,
  `ScrollArea`, …) wherever they fit — that is the point of a composition.
- **Must be responsive** — hide secondary panels on small screens
  (`hidden md:flex`), collapse grids (`grid-cols-2 lg:grid-cols-4`), etc.

Metadata lives in **`registry/compositions/<category>/catalog.ts`** — the single
source of truth for `name`, `description`, and `meta`. `registry:sync` copies
them into the category's `registry.json`: `name`/`description` become
`title`/`description`, and `meta` (`iframeHeight`, `containerClassName`) is
mirrored verbatim.

`src/lib/compositions/compositions-catalog.ts` is a thin aggregator — **do not edit it
directly** unless adding a new category.

---

## What to read before writing — branch here

### Adding a composition to an EXISTING category (most common)

Read **only** these two files — nothing else:

```
registry/compositions/<category>/catalog.ts       ← existing items + last slug number
registry/compositions/<category>/registry.json    ← existing entries + path format
```

### Adding a NEW category

Also read:

```
registry/compositions/registry.json               ← to add the new include entry
src/lib/compositions/compositions-catalog.ts          ← to import + register the category
```

Then follow the "New category" section below.

---

## Slug & naming

- **`<category>`** — archetype: `dashboard`, `chat`, … (a `SketchCategory`-style
  slug; see existing categories).
- **`<slug>`** — `{category}-{NN}` sequential (e.g. `dashboard-02` after
  `dashboard-01`). Check `catalog.ts` for the last number.
- **Component name** — PascalCase from slug: `dashboard-02` → `export function
  Dashboard02()`.
- The registry `name` namespace is **flat/global** across ALL registries
  (`public/r/<name>.json`, `@flx/<name>`). `dashboard-01` is unique because the
  category prefixes it. Sketches deliberately use a `sketch-` prefix to avoid
  colliding with compositions — see [add-sketch].

---

## File structure to create

```
registry/compositions/<category>/<slug>.tsx
```

That is the only component file. No manifest, example, editor, or sanity.

---

## 1. Create `registry/compositions/<category>/<slug>.tsx`

- Default: **server component** (no `'use client'` unless it needs hooks).
- Export a **named** PascalCase function matching the slug.
- Import primitives from `@/components/ui/*` and `cn` from `@/lib/utils`.
- **No comments** in the code.
- Real content/values are correct here — a composition is a realistic screen.
- **Responsive**: collapse/hide panels on small viewports.

> Do **not** use the shadcn `Sidebar` component inside a composition — it is
> `fixed inset-y-0 h-svh` and needs `SidebarProvider`; it escapes the preview
> card. Build a sidebar with an `aside` + `Button` nav instead.

```tsx
import { Home } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function Dashboard02() {
  return (
    <Card className="w-full gap-0 py-0">
      <aside className="hidden w-48 shrink-0 border-r p-3 md:flex">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Home />
          Overview
        </Button>
      </aside>
      <CardContent className={cn('flex-1 p-4 sm:p-5')}>{/* … */}</CardContent>
    </Card>
  )
}
```

Preview loads via the page's `compositionRegistry` →
`import(\`registry/compositions/${category}/${slug}\`)`. The catalog entry must
exist before the preview works.

The gallery renders each composition in a **Preview / Code / Prompt** viewer
(`CompositionViewTabs`). The **Prompt** tab is generated automatically by
`buildCompositionPrompt` (`compositions-utils.ts`) from the registry item + code
files — no manual step. The **Code** tab needs `registry:build` to have run so
`public/r/<slug>.json` exists.

---

## 2. Register in `registry/compositions/<category>/catalog.ts`

Add an item to the `items` array (order = display order in the gallery).

```ts
{
  slug: 'dashboard-02',
  name: 'Short Human Title',         // → registry.json `title` after sync
  description: 'One-line summary.',   // → registry.json `description` after sync
  isNew: true,                        // optional — badge
  meta: {                             // optional — see "Preview meta" below
    iframeHeight: 800,
  },
}
```

**Always set `name` and `description` here.** Never maintain them in
`registry.json` by hand.

### Preview meta (optional)

`CompositionMeta` controls how the composition renders in its preview iframe:

| Field                | Effect                                                                       |
| -------------------- | --------------------------------------------------------------------------- |
| `iframeHeight`       | Preview iframe height in px on the `/compositions` gallery. Falls back to `480` if unset. Set it (~700–900 for dashboards) when the default crops the screen. |
| `containerClassName` | Extra classes on the full-bleed wrapper `<div data-composition-preview>` around the composition in the preview route. Use for framing the whole screen; compositions have no props, so there is no `componentClassName`. |

Both flow through `registry:sync` into `registry.json` — **never hand-edit them
there.** `iframeHeight` is consumed at `compositions-gallery.tsx`
(`catalogItem.meta?.iframeHeight ?? PREVIEW_HEIGHT`) →
`CompositionViewTabs` → `PreviewTabs.Preview height`.

---

## 3. Add entry to `registry/compositions/<category>/registry.json`

`files[].path` is **relative to the category directory** — just the filename.

**Declare every direct dependency the `.tsx` imports** — walk the import list:

- Each `@/components/ui/<x>` import → its shadcn name in `registryDependencies`
  (`chart`, `avatar`, `card`, …). `@/lib/utils` (`cn`) is base shadcn — do **not**
  list it.
- Each **npm package** import → `dependencies`. Not only `lucide-react`: e.g. a
  `recharts` import (via `@/components/ui/chart` needing `<BarChart>`) means
  `recharts` belongs in `dependencies` too.

A missing entry is silent — the block installs but the consumer is left without
the primitive/package. It also shows up in the generated **Prompt** tab's Stack
section, so an incomplete list produces a misleading prompt.

```json
{
  "name": "dashboard-02",
  "type": "registry:block",
  "registryDependencies": ["avatar", "badge", "button", "card", "chart", "item"],
  "dependencies": ["lucide-react", "recharts"],
  "files": [
    {
      "path": "dashboard-02.tsx",
      "type": "registry:component",
      "target": "components/flx/compositions/dashboard/dashboard-02.tsx"
    }
  ]
}
```

| Field                  | Rule                                                          |
| ---------------------- | ------------------------------------------------------------ |
| `name`                 | Same as catalog `slug`                                        |
| `type`                 | Always `"registry:block"`                                     |
| `registryDependencies` | **every** `@/components/ui/*` imported (`card`, `chart`, `avatar`, …) |
| `dependencies`         | **every** npm package imported (`lucide-react`, `recharts`, …) |
| `files[0].path`        | **Just `<slug>.tsx`** — relative to the category directory    |
| `files[0].target`      | `components/flx/compositions/<category>/<slug>.tsx`               |

**Do NOT add `title`, `description`, or `meta`** — `registry:sync` writes them
from the catalog.

---

## 4. Run sync, validate, and build

```bash
pnpm run registry:sync       # catalog name/description → registry.json title/description
pnpm run registry:validate   # fails if catalog and registry metadata diverge
pnpm run registry:build      # regenerates public/r/<slug>.json
```

---

## Adding a new category (rare)

1. **Create `registry/compositions/<new-category>/catalog.ts`**:

```ts
import type { CompositionCategory } from '@/lib/compositions/composition-types'

export const kanbanCategory: CompositionCategory = {
  slug: 'kanban',
  name: 'Kanban',
  description: 'Board layouts with draggable columns.',
  hasNew: true,
  items: [],
}
```

2. **Create `registry/compositions/<new-category>/registry.json`** — empty items:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "flx-compositions-kanban",
  "homepage": "https://ui.flexnative.com",
  "items": []
}
```

3. **Add include** in `registry/compositions/registry.json`:

```json
"include": ["./dashboard/registry.json", "./chat/registry.json", "./kanban/registry.json"]
```

4. **Import + register** in `src/lib/compositions/compositions-catalog.ts`:

```ts
import { kanbanCategory } from 'registry/compositions/kanban/catalog'
// add to the compositionCategories array
```

The `/compositions` page (`src/app/(main)/compositions/`) and global search pick up the
new category automatically from `compositionCategories`.

---

## Checklist

- [ ] `registry/compositions/<category>/<slug>.tsx` — named PascalCase export, no props, no comments, responsive, shadcn primitives
- [ ] `registry/compositions/<category>/catalog.ts` — `slug`, `name`, `description` in `items` (+ optional `meta.iframeHeight` / `meta.containerClassName`)
- [ ] `registry/compositions/<category>/registry.json` — entry with relative `path`, `registryDependencies`, `dependencies`
- [ ] `pnpm run registry:sync`
- [ ] `pnpm run registry:validate` — passes
- [ ] `pnpm run registry:build` — `public/r/<slug>.json` exists

---

## Key rules

- **Composition = full screen, real content, no props.** Pattern model, not block.
- **Catalog owns** display name/description; never duplicate in `registry.json`.
- **No** `manifest.ts` / `-example.tsx` / `editor/` / `sanity/`.
- **Use shadcn primitives** where possible; never the `Sidebar` component inside
  a preview card.
- **Responsive is required.**
- Slug ↔ file name must match exactly; registry `name` must be globally unique.
- A sketch (low-fidelity wireframe twin) is a **separate registry** — see
  [add-sketch]. A sketch mirrors a composition's layout with `sketch-<composition-slug>`.
