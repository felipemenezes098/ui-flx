---
name: add-pattern
description: >-
  Full workflow for adding a new UI pattern to ui-flx. Covers file structure,
  patterns-catalog.ts registration, minimal registry.json entry, sync and
  build commands. Triggers: "add pattern", "new pattern", "criar pattern",
  "novo pattern", "add-pattern", or any request to create a new Flexnative
  pattern under registry/patterns.
---

# Add a new pattern to ui-flx

Patterns are small, copy-paste shadcn-style examples (one `.tsx` file). Metadata lives in **`src/lib/patterns-catalog.ts`** — that is the single source of truth for `name` and `description`. The sync script copies them into `registry.json` as `title` and `description`.

## Categories

| Category slug | Example slugs | Typical `registryDependencies` |
|---------------|---------------|----------------------------------|
| `select` | `select-01` … `select-07` | `["select"]` (+ `label` only if the pattern uses it) |
| `dialog` | `dialog-01` … | `["dialog", "button"]` |
| `inputs` | `inputs-01` … | varies (`input`, `label`, …) |
| `accordion` | `accordion-01` … | `["accordion"]` |

Add a new category in `patterns-catalog.ts` only when needed (rare). Most patterns fit an existing category folder.

---

## File structure to create

```
registry/patterns/<category>/<slug>.tsx
```

- **`<category>`** — must match a `patternCategories[].slug` (e.g. `select`).
- **`<slug>`** — `{category}-{NN}` with zero-padded or sequential number used in that category (e.g. `select-08` after `select-07`).
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

Preview loads via `pattern-registry.tsx` → `import(\`registry/patterns/${category}/${slug}\`)`. Catalog entry must exist before the preview works.

---

## 2. Register in `src/lib/patterns-catalog.ts`

Add an item to the correct category’s `items` array (order = display order in the gallery).

```ts
{
  slug: 'select-08',
  name: 'Short Human Title',       // → registry.json `title` after sync
  description: 'One-line summary.', // → registry.json `description` after sync
  isNew: true, // optional — badge in UI
}
```

**Always set `name` and `description` here.** Do not maintain the same text manually in `registry.json`.

`allPatterns` is derived automatically — do not edit it by hand.

---

## 3. Add minimal entry to `registry.json`

Insert in `items` (group with sibling patterns is fine). **Required fields only:**

```json
{
  "name": "select-08",
  "type": "registry:block",
  "registryDependencies": ["select"],
  "dependencies": [],
  "files": [
    {
      "path": "registry/patterns/select/select-08.tsx",
      "type": "registry:component",
      "target": "components/flx/patterns/select/select-08.tsx"
    }
  ]
}
```

| Field | Rule |
|-------|------|
| `name` | Same as catalog `slug` |
| `type` | Always `"registry:block"` for patterns |
| `registryDependencies` | shadcn/ui primitives used (`select`, `dialog`, `button`, …) |
| `dependencies` | npm packages if any (usually `[]`) |
| `files[0].path` | `registry/patterns/<category>/<slug>.tsx` |
| `files[0].target` | `components/flx/patterns/<category>/<slug>.tsx` |

**Do NOT add `title` or `description`** — `npm run registry:sync` writes them from `patterns-catalog.ts`.

---

## 4. Run sync, validate, and build

Run in order:

```bash
npm run registry:sync
npm run registry:validate
npm run registry:build
```

| Command | Purpose |
|---------|---------|
| `registry:sync` | Copies catalog `name` → `title`, `description` → `description` in `registry.json` |
| `registry:validate` | Fails if catalog and `registry.json` metadata diverge or block manifests lack images |
| `registry:build` | Regenerates `public/r/<slug>.json` for Code dialog / `shadcn add` |

If `registry:validate` reports `MISSING in registry.json`, add the skeleton entry from step 3 and run sync again.

---

## Checklist

- [ ] `registry/patterns/<category>/<slug>.tsx` — named export `PascalCase` component
- [ ] `src/lib/patterns-catalog.ts` — `slug`, `name`, `description` in correct category `items`
- [ ] `registry.json` — `name`, `type`, `registryDependencies`, `dependencies`, `files` only (no title/description)
- [ ] `npm run registry:sync`
- [ ] `npm run registry:validate` — passes
- [ ] `npm run registry:build` — `public/r/<slug>.json` exists

---

## Key rules

- **Catalog first** — `patterns-catalog.ts` owns display name and description; never duplicate them long-term in `registry.json`.
- **No manifest per pattern** — unlike blocks, patterns do not use `registry/blocks/.../manifest.ts`.
- **Slug ↔ file name** — `select-08.tsx` and catalog `slug: 'select-08'` must match exactly.
- **`registryDependencies`** — list only primitives the pattern imports; check similar patterns in the same category.
- **Client boundary** — prefer server components; use `'use client'` only when required (see `select-06`).

---

## Verify in the app

- Gallery: `/patterns/<category>` (e.g. `/patterns/select`)
- Install snippet: Code dialog uses `public/r/<slug>.json` after `registry:build`
- CLI: `npx shadcn@latest add @flx/<slug>` (project code name from site config)
