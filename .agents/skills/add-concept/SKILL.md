---
name: add-concept
description: >-
  Full workflow for adding a new UI concept to ui-flx. Concepts are full,
  composed application screens (dashboard, chat, kanban…) built from shadcn
  primitives — copy-paste, inline-code, no props. Covers file structure,
  registry/concepts/<category>/catalog.ts registration, registry.json entry,
  and sync/build commands. Triggers: "add concept", "new concept", "criar
  concept", "novo concept", "add-concept", or any request to create a new
  Flexnative concept under registry/concepts.
---

# Add a new concept to ui-flx

Concepts are **full, composed application screens** (a whole dashboard, a chat
UI, a kanban board) assembled from shadcn/ui primitives. They sit **between
patterns and blocks**: richer than a single-primitive pattern, but copy-paste
and **prop-less** like a pattern (not a block — no props, no editor, no Sanity,
no manifest).

They follow the **pattern model**, not the block model:

- One `.tsx` file per concept, **inline code with real content/values**.
- **No props**, no `manifest.ts`, no `-example.tsx`, no `editor/`, no `sanity/`.
- Use **real shadcn primitives** (`Card`, `Avatar`, `Button`, `Badge`, `Item`,
  `ScrollArea`, …) wherever they fit — that is the point of a concept.
- **Must be responsive** — hide secondary panels on small screens
  (`hidden md:flex`), collapse grids (`grid-cols-2 lg:grid-cols-4`), etc.

Metadata lives in **`registry/concepts/<category>/catalog.ts`** — the single
source of truth for `name` and `description`. `registry:sync` copies them into
the category's `registry.json` as `title` and `description`.

`src/lib/concepts/concepts-catalog.ts` is a thin aggregator — **do not edit it
directly** unless adding a new category.

---

## What to read before writing — branch here

### Adding a concept to an EXISTING category (most common)

Read **only** these two files — nothing else:

```
registry/concepts/<category>/catalog.ts       ← existing items + last slug number
registry/concepts/<category>/registry.json    ← existing entries + path format
```

### Adding a NEW category

Also read:

```
registry/concepts/registry.json               ← to add the new include entry
src/lib/concepts/concepts-catalog.ts          ← to import + register the category
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
  colliding with concepts — see [add-sketch].

---

## File structure to create

```
registry/concepts/<category>/<slug>.tsx
```

That is the only component file. No manifest, example, editor, or sanity.

---

## 1. Create `registry/concepts/<category>/<slug>.tsx`

- Default: **server component** (no `'use client'` unless it needs hooks).
- Export a **named** PascalCase function matching the slug.
- Import primitives from `@/components/ui/*` and `cn` from `@/lib/utils`.
- **No comments** in the code.
- Real content/values are correct here — a concept is a realistic screen.
- **Responsive**: collapse/hide panels on small viewports.

> Do **not** use the shadcn `Sidebar` component inside a concept — it is
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

Preview loads via the page's `conceptRegistry` →
`import(\`registry/concepts/${category}/${slug}\`)`. The catalog entry must
exist before the preview works.

---

## 2. Register in `registry/concepts/<category>/catalog.ts`

Add an item to the `items` array (order = display order in the gallery).

```ts
{
  slug: 'dashboard-02',
  name: 'Short Human Title',        // → registry.json `title` after sync
  description: 'One-line summary.',  // → registry.json `description` after sync
  span: 'full',                      // optional — full-width card (dashboards)
  isNew: true,                       // optional — badge
}
```

**Always set `name` and `description` here.** Never maintain them in
`registry.json` by hand.

---

## 3. Add entry to `registry/concepts/<category>/registry.json`

`files[].path` is **relative to the category directory** — just the filename.
List the shadcn primitives the concept imports in `registryDependencies`, and
`lucide-react` in `dependencies` if used.

```json
{
  "name": "dashboard-02",
  "type": "registry:block",
  "registryDependencies": ["avatar", "badge", "button", "card", "item"],
  "dependencies": ["lucide-react"],
  "files": [
    {
      "path": "dashboard-02.tsx",
      "type": "registry:component",
      "target": "components/flx/concepts/dashboard/dashboard-02.tsx"
    }
  ]
}
```

| Field                  | Rule                                                          |
| ---------------------- | ------------------------------------------------------------ |
| `name`                 | Same as catalog `slug`                                        |
| `type`                 | Always `"registry:block"`                                     |
| `registryDependencies` | shadcn primitives imported (`card`, `avatar`, `button`, …)    |
| `dependencies`         | npm packages (usually `["lucide-react"]`)                     |
| `files[0].path`        | **Just `<slug>.tsx`** — relative to the category directory    |
| `files[0].target`      | `components/flx/concepts/<category>/<slug>.tsx`               |

**Do NOT add `title` or `description`** — `registry:sync` writes them from the
catalog.

---

## 4. Run sync, validate, and build

```bash
npm run registry:sync       # catalog name/description → registry.json title/description
npm run registry:validate   # fails if catalog and registry metadata diverge
npm run registry:build      # regenerates public/r/<slug>.json
```

---

## Adding a new category (rare)

1. **Create `registry/concepts/<new-category>/catalog.ts`**:

```ts
import type { ConceptCategory } from '@/lib/concepts/concept-types'

export const kanbanCategory: ConceptCategory = {
  slug: 'kanban',
  name: 'Kanban',
  description: 'Board layouts with draggable columns.',
  hasNew: true,
  grid: { columns: 1 },
  items: [],
}
```

2. **Create `registry/concepts/<new-category>/registry.json`** — empty items:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "flx-concepts-kanban",
  "homepage": "https://ui.flexnative.com",
  "items": []
}
```

3. **Add include** in `registry/concepts/registry.json`:

```json
"include": ["./dashboard/registry.json", "./chat/registry.json", "./kanban/registry.json"]
```

4. **Import + register** in `src/lib/concepts/concepts-catalog.ts`:

```ts
import { kanbanCategory } from 'registry/concepts/kanban/catalog'
// add to the conceptCategories array
```

The `/concepts` page (`src/app/(main)/concepts/`) and global search pick up the
new category automatically from `conceptCategories`.

---

## Checklist

- [ ] `registry/concepts/<category>/<slug>.tsx` — named PascalCase export, no props, no comments, responsive, shadcn primitives
- [ ] `registry/concepts/<category>/catalog.ts` — `slug`, `name`, `description` in `items`
- [ ] `registry/concepts/<category>/registry.json` — entry with relative `path`, `registryDependencies`, `dependencies`
- [ ] `npm run registry:sync`
- [ ] `npm run registry:validate` — passes
- [ ] `npm run registry:build` — `public/r/<slug>.json` exists

---

## Key rules

- **Concept = full screen, real content, no props.** Pattern model, not block.
- **Catalog owns** display name/description; never duplicate in `registry.json`.
- **No** `manifest.ts` / `-example.tsx` / `editor/` / `sanity/`.
- **Use shadcn primitives** where possible; never the `Sidebar` component inside
  a preview card.
- **Responsive is required.**
- Slug ↔ file name must match exactly; registry `name` must be globally unique.
- A sketch (low-fidelity wireframe twin) is a **separate registry** — see
  [add-sketch]. A sketch mirrors a concept's layout with `sketch-<concept-slug>`.
