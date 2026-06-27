---
name: add-sketch
description: >-
  Full workflow for adding a new UI sketch to ui-flx. Sketches are low-fidelity,
  content-free wireframes of full screens (dashboard, chat, …) — gray bars, no
  real values, no shadcn primitives, plain divs. A sketch mirrors a concept's
  layout. Covers file structure, registry/sketches/<category>/catalog.ts
  registration, registry.json entry, and sync/build commands. Triggers: "add
  sketch", "new sketch", "criar sketch", "novo sketch", "add-sketch", or any
  request to create a new Flexnative sketch under registry/sketches.
---

# Add a new sketch to ui-flx

Sketches are **low-fidelity wireframes of full screens** — the blueprint twin of
a [add-concept]. Same archetype and layout as the concept, but **content-free**:
gray bars instead of text/values, plain `div`s instead of shadcn primitives.

They follow the **pattern model** (one inline `.tsx`, no props, no manifest, no
editor, no sanity) — same as concepts, with these differences:

| | Concept | Sketch |
| --- | --- | --- |
| Fidelity | high — real text/values | **low — gray bars, no values** |
| Components | shadcn primitives | **plain `div`s only** |
| Registry | `registry/concepts/` | `registry/sketches/` |
| Slug | `dashboard-01` | **`sketch-dashboard-01`** |

**Pairing rule (1:1):** a sketch mirrors exactly one concept. Its slug is
`sketch-` + the concept slug (`dashboard-01` → `sketch-dashboard-01`), and its
layout matches that concept's layout. Not every concept needs a sketch, but a
sketch always derives from a concept.

**Why the `sketch-` prefix is mandatory:** the registry `name` namespace is
**flat/global** (`public/r/<name>.json`, `@flx/<name>`). Concepts already own
`dashboard-01` / `chat-01`. Without the prefix the build collides (one
`dashboard-01.json` overwrites the other). slug = file name = registry `name`,
and `registry:sync` ties them — so the prefix lives in all three.

Metadata lives in **`registry/sketches/<category>/catalog.ts`** — the single
source of truth for `name` and `description`. `registry:sync` copies them into
`registry.json`.

`src/lib/sketches/sketches-catalog.ts` is a thin aggregator — **do not edit it
directly** unless adding a new category.

---

## What to read before writing — branch here

### Adding a sketch to an EXISTING category (most common)

Read **only** these two — plus the concept you are mirroring, for its layout:

```
registry/sketches/<category>/catalog.ts            ← existing items + last number
registry/sketches/<category>/registry.json         ← existing entries + path format
registry/concepts/<category>/<concept-slug>.tsx    ← layout to wireframe (reference)
```

### Adding a NEW category

Also read:

```
registry/sketches/registry.json                    ← to add the new include entry
src/lib/sketches/sketches-catalog.ts               ← to import + register the category
```

---

## Slug & naming

- **`<category>`** — archetype: `dashboard`, `chat`, … (matches the concept's
  category).
- **`<slug>`** — **`sketch-{concept-slug}`** (e.g. `sketch-dashboard-01`).
- **Component name** — PascalCase from slug: `sketch-dashboard-01` → `export
  function SketchDashboard01()`.

---

## File structure to create

```
registry/sketches/<category>/<slug>.tsx
```

Only the component file. No manifest, example, editor, or sanity.

---

## 1. Create `registry/sketches/<category>/<slug>.tsx`

- **Server component** (no `'use client'` — sketches are static).
- Export a **named** PascalCase function matching the slug.
- **No imports of shadcn primitives**, no `lucide-react`, no `cn` unless truly
  needed. Plain `div`s only.
- **No real text or values** — represent everything with gray bars:
  `bg-foreground/10`, `bg-foreground/15`, `bg-muted`, rounded shapes.
- **No comments** in the code.
- **Mirror the concept's layout** (same regions, same responsive behavior:
  `hidden md:flex` sidebars, `grid-cols-2 lg:grid-cols-4`, etc.).

```tsx
export function SketchDashboard01() {
  return (
    <div className="bg-card w-full overflow-hidden rounded-xl border shadow-sm">
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <div className="bg-foreground/15 size-6 rounded-md" />
        <div className="bg-foreground/15 h-2 w-20 rounded-full" />
      </div>
      <div className="grid grid-cols-2 gap-3 p-4 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-2 rounded-lg border p-3">
            <div className="bg-foreground/10 h-2 w-12 rounded-full" />
            <div className="bg-foreground/20 h-3.5 w-16 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
```

Preview loads via the page's `sketchRegistry` →
`import(\`registry/sketches/${category}/${slug}\`)`.

---

## 2. Register in `registry/sketches/<category>/catalog.ts`

```ts
{
  slug: 'sketch-dashboard-02',
  name: 'Short Human Title',         // mirror the concept's name
  description: 'Wireframe: …',        // one-line summary
  span: 'full',                       // optional — full-width card
  isNew: true,                        // optional — badge
}
```

**Always set `name` and `description` here.**

---

## 3. Add entry to `registry/sketches/<category>/registry.json`

`files[].path` is **relative to the category directory**. Sketches have **no**
shadcn or npm dependencies (plain divs), so both arrays are empty.

```json
{
  "name": "sketch-dashboard-02",
  "type": "registry:block",
  "registryDependencies": [],
  "dependencies": [],
  "files": [
    {
      "path": "sketch-dashboard-02.tsx",
      "type": "registry:component",
      "target": "components/flx/sketches/dashboard/sketch-dashboard-02.tsx"
    }
  ]
}
```

| Field             | Rule                                                       |
| ----------------- | ---------------------------------------------------------- |
| `name`            | Same as catalog `slug` (`sketch-<concept-slug>`)           |
| `type`            | Always `"registry:block"`                                  |
| `files[0].path`   | **Just `<slug>.tsx`** — relative to the category directory |
| `files[0].target` | `components/flx/sketches/<category>/<slug>.tsx`            |

**Do NOT add `title` or `description`** — `registry:sync` writes them.

---

## 4. Run sync, validate, and build

```bash
npm run registry:sync
npm run registry:validate
npm run registry:build
```

---

## Adding a new category (rare)

1. **Create `registry/sketches/<new-category>/catalog.ts`**:

```ts
import type { SketchCategory } from '@/lib/sketches/sketch-types'

export const kanbanCategory: SketchCategory = {
  slug: 'kanban',
  name: 'Kanban',
  description: 'Low-fidelity wireframes of board layouts.',
  hasNew: true,
  grid: { columns: 1 },
  items: [],
}
```

2. **Create `registry/sketches/<new-category>/registry.json`** — empty items:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "flx-sketches-kanban",
  "homepage": "https://ui.flexnative.com",
  "items": []
}
```

3. **Add include** in `registry/sketches/registry.json`.

4. **Import + register** in `src/lib/sketches/sketches-catalog.ts`
   (`sketchCategories` array).

The `/sketches` page (`src/app/(main)/sketches/`) and global search pick up the
new category automatically.

---

## Checklist

- [ ] Mirrors an existing concept; slug is `sketch-<concept-slug>`
- [ ] `registry/sketches/<category>/<slug>.tsx` — named PascalCase export, plain divs, gray bars, no values, no comments, responsive
- [ ] `registry/sketches/<category>/catalog.ts` — `slug`, `name`, `description` in `items`
- [ ] `registry/sketches/<category>/registry.json` — entry with relative `path`, empty `registryDependencies`/`dependencies`
- [ ] `npm run registry:sync`
- [ ] `npm run registry:validate` — passes
- [ ] `npm run registry:build` — `public/r/<slug>.json` exists

---

## Key rules

- **Sketch = low-fidelity wireframe of a full screen.** Gray bars, no real
  content, plain `div`s — never shadcn primitives.
- **Slug must be `sketch-<concept-slug>`** — the `sketch-` prefix avoids the
  flat-namespace collision with the concept of the same archetype.
- **1:1 pairing** — a sketch mirrors exactly one concept's layout.
- **Catalog owns** display name/description; never duplicate in `registry.json`.
- No `manifest.ts` / `-example.tsx` / `editor/` / `sanity/`.
- **Responsive is required** — mirror the concept's breakpoints.
