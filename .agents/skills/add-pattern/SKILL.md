---
name: add-pattern
description: >-
  Full workflow for adding a new UI pattern to ui-flx. Covers file structure,
  registry/patterns/<category>/catalog.ts registration, minimal registry.json entry, sync and
  build commands. Triggers: "add pattern", "new pattern", "criar pattern",
  "novo pattern", "add-pattern", or any request to create a new Flexnative
  pattern under registry/patterns.
---

# Add a new pattern to ui-flx

Patterns are small, copy-paste shadcn-style examples (one `.tsx` file). Metadata lives in **`registry/patterns/<category>/catalog.ts`** — that is the single source of truth for `name` and `description`. The sync script copies them into the category's `registry.json` as `title` and `description`.

`src/lib/patterns/patterns-catalog.ts` is a thin aggregator — **do not edit it directly**.

---

## What to read before writing — branch here

### Adding a pattern to an EXISTING category (most common)

Read **only** these two files — nothing else:

```
registry/patterns/<category>/catalog.ts       ← to see existing items + last slug number
registry/patterns/<category>/registry.json    ← to see existing entries + confirm path format
```

Do NOT read `registry/patterns/registry.json`, `src/lib/patterns/patterns-catalog.ts`,
or any other category's files.

### Adding a NEW category

Read these files:

```
registry/patterns/registry.json              ← to add the new include entry
src/lib/patterns/patterns-catalog.ts         ← to add the new category import
```

Then follow the "New category" section below.

---

## Categories

| Category slug | Example slugs      |
| ------------- | ------------------ |
| `avatar`      | `avatar-01` …      |
| `badge`       | `badge-01` …       |
| `banner`      | `banner-01` …      |
| `accordion`   | `accordion-01` …   |
| `card`        | `card-01` …        |
| `select`      | `select-01` …      |
| `checkbox`    | `checkbox-01` …    |
| `switch`      | `switch-01` …      |
| `table`       | `table-01` …       |
| `dialog`      | `dialog-01` …      |
| `dropdown`    | `dropdown-01` …    |
| `input`       | `input-01` …       |
| `button`      | `button-01` …      |
| `item`        | `item-01` …        |
| `tabs`        | `tabs-01` …        |
| `popover`     | `popover-01` …     |
| `tooltip`     | `tooltip-01` …     |
| `breadcrumb`  | `breadcrumb-01` …  |
| `pagination`  | `pagination-01` …  |
| `collapsible` | `collapsible-01` … |
| `command`     | `command-01` …     |
| `skeleton`    | `skeleton-01` …    |
| `empty`       | `empty-01` …       |

---

## File structure to create

```
registry/patterns/<category>/<slug>.tsx
```

- **`<category>`** — must match a `patternCategories[].slug` (e.g. `select`).
- **`<slug>`** — `{category}-{NN}` with sequential number (e.g. `select-08` after `select-07`). Check `catalog.ts` for the last used number.
- **Component name** — PascalCase from slug: `select-08` → `export function Select08()`.

No `manifest.ts`, no `-example.tsx`, no editor folder.

---

## 1. Create `registry/patterns/<category>/<slug>.tsx`

- Default: server component (no `'use client'`).
- Add `'use client'` only when the pattern needs hooks, state, or browser-only APIs.
- Export a **named** function matching PascalCase slug (required for dynamic import fallback).
- Import UI from `@/components/ui/*`.
- Match sibling patterns for layout classes (e.g. `className="w-full max-w-56"` on triggers).

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select08() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-56">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
        <SelectItem value="b">Option B</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

Preview loads via `src/lib/patterns/pattern-registry.ts` → `import(\`registry/patterns/${category}/${slug}\`)`. Catalog entry must exist before the preview works.

---

## 2. Register in `registry/patterns/<category>/catalog.ts`

Add an item to the `items` array (order = display order in the gallery).

```ts
{
  slug: 'select-08',
  name: 'Short Human Title',       // → registry.json `title` after sync
  description: 'One-line summary.', // → registry.json `description` after sync
  isNew: true, // optional — badge in UI
}
```

**Always set `name` and `description` here.** Do not maintain the same text manually in `registry.json`.

---

## 3. Add minimal entry to `registry/patterns/<category>/registry.json`

Each category has its own `registry.json`. Add the entry there — **not** in the root `registry.json`.

`files[].path` is **relative to `registry/patterns/<category>/`** — just the filename:

```json
{
  "name": "select-08",
  "type": "registry:block",
  "registryDependencies": ["select"],
  "dependencies": [],
  "files": [
    {
      "path": "select-08.tsx",
      "type": "registry:component",
      "target": "components/flx/patterns/select/select-08.tsx"
    }
  ]
}
```

| Field                  | Rule                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `name`                 | Same as catalog `slug`                                                  |
| `type`                 | Always `"registry:block"` for patterns                                  |
| `registryDependencies` | shadcn/ui primitives used (`select`, `dialog`, `button`, …)             |
| `dependencies`         | npm packages if any (usually `[]`)                                      |
| `files[0].path`        | **Just `<slug>.tsx`** — relative to the category directory              |
| `files[0].target`      | `components/flx/patterns/<category>/<slug>.tsx` — absolute install path |

**Do NOT add `title` or `description`** — `pnpm run registry:sync` writes them from the catalog.

---

## 4. Run sync, validate, and build

```bash
pnpm run registry:sync
pnpm run registry:validate
pnpm run registry:build
```

| Command             | Purpose                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `registry:sync`     | Copies catalog `name` → `title`, `description` → `description` in the category registry.json |
| `registry:validate` | Fails if catalog and registry metadata diverge or block manifests lack images                |
| `registry:build`    | Regenerates `public/r/<slug>.json` for Code dialog / `shadcn add`                            |

If `registry:validate` reports `MISSING in registry`, add the skeleton entry from step 3 and run sync again.

---

## Adding a new category (rare)

1. **Create `registry/patterns/<new-category>/catalog.ts`** — export a `PatternCategory`:

```ts
import { MyNewConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const myNewCategory: PatternCategory = {
  slug: 'my-new',
  name: 'My New',
  description: 'One-line description of the category.',
  preview: MyNewConcept,
  items: [],
}
```

2. **Create `registry/patterns/<new-category>/registry.json`** — empty items:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "flx-patterns-my-new",
  "homepage": "https://ui.flexnative.com",
  "items": []
}
```

3. **Add concept** to `src/lib/patterns/pattern-concepts.tsx` (the wireframe preview component).

4. **Add include** in `registry/patterns/registry.json`:

```json
"include": [
  "./my-new/registry.json"
]
```

5. **Import and add** to `src/lib/patterns/patterns-catalog.ts`:

```ts
import { myNewCategory } from 'registry/patterns/my-new/catalog'
// add to patternCategories array
```

---

## Checklist

- [ ] `registry/patterns/<category>/<slug>.tsx` — named export `PascalCase` component
- [ ] `registry/patterns/<category>/catalog.ts` — `slug`, `name`, `description` added to `items`
- [ ] `registry/patterns/<category>/registry.json` — entry with `path: "<slug>.tsx"` (relative, no directory prefix)
- [ ] `pnpm run registry:sync`
- [ ] `pnpm run registry:validate` — passes
- [ ] `pnpm run registry:build` — `public/r/<slug>.json` exists

---

## Key rules

- **Catalog first** — `registry/patterns/<category>/catalog.ts` owns display name and description; never duplicate them in `registry.json`.
- **No manifest per pattern** — unlike blocks, patterns do not use `manifest.ts`.
- **Slug ↔ file name** — `select-08.tsx` and catalog `slug: 'select-08'` must match exactly.
- **Path is relative** — `files[0].path` in the category registry.json is just `<slug>.tsx`, not a full path.
- **`registryDependencies`** — list only primitives the pattern imports; check similar patterns in the same category.
- **Client boundary** — prefer server components; use `'use client'` only when required.

---

## Verify in the app

- Gallery: `/patterns/<category>` (e.g. `/patterns/select`)
- Install snippet: Code dialog uses `public/r/<slug>.json` after `registry:build`
- CLI: `pnpm dlx shadcn@latest add @flx/<slug>`
