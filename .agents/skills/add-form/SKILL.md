---
name: add-form
description: >-
  Full workflow for adding a new form pattern to ui-flx. Covers file structure,
  registry/forms/<library>/<category>/catalog.ts registration, minimal
  registry.json entry, the React Hook Form and TanStack Form idioms, sync and
  build commands. Triggers: "add form", "new form", "criar form", "novo form",
  "add-form", or any request to create a new Flexnative form pattern under
  registry/forms.
---

# Add a new form to ui-flx

Forms are small, copy-paste shadcn-style examples (one `.tsx` file) demonstrating
validated forms. They live under **`registry/forms/`**, separate from
`registry/patterns/`, because forms have a two-level structure: **library → category**.

Metadata lives in **`registry/forms/<library>/<category>/catalog.ts`** — that is the
single source of truth for `name` and `description`. The sync script copies them into
the category's `registry.json` as `title` and `description`.

`src/lib/forms/catalog.ts` is a thin aggregator — **do not edit it directly**.

---

## Libraries and categories

Two libraries, each with the same four categories (ordered simple → advanced):

| Library           | Slug prefix | Categories                          |
| ----------------- | ----------- | ----------------------------------- |
| `react-hook-form` | `rhf`       | `fields`, `rules`, `recipes`, `advanced` |
| `tanstack-form`   | `tsf`       | `fields`, `rules`, `recipes`, `advanced` |

| Category   | What goes here                                                        |
| ---------- | --------------------------------------------------------------------- |
| `fields`   | Binding input primitives — input, select, switch, checkbox, textarea  |
| `rules`    | Validation logic — format checks, strength rules, cross-field, async  |
| `recipes`  | Ready-to-use real-world forms — contact, login, profile, search       |
| `advanced` | Composed forms — dynamic field arrays, nested data, multi-group state |

---

## What to read before writing — branch here

### Adding a form to an EXISTING library + category (most common)

Read **only** these two files — nothing else:

```
registry/forms/<library>/<category>/catalog.ts       ← existing items + last slug number
registry/forms/<library>/<category>/registry.json    ← existing entries + confirm path format
```

Also read one sibling `.tsx` in the same category for the house style. Do NOT read
`src/lib/forms/catalog.ts`, the aggregator `registry.json` files, or other categories.

### Adding a NEW category to a library (rare)

See the "New category" section below — touches the library `catalog.ts` and the
include chain.

---

## File structure to create

```
registry/forms/<library>/<category>/<slug>.tsx
```

- **`<library>`** — `react-hook-form` or `tanstack-form`.
- **`<category>`** — `fields`, `rules`, `recipes`, or `advanced`.
- **`<slug>`** — `{prefix}-{category}-{NN}` with sequential 2-digit number per category
  (e.g. `rhf-fields-02` after `rhf-fields-01`). Check `catalog.ts` for the last number.
- **Component name** — PascalCase from slug: `rhf-fields-02` → `export function RhfFields02()`.

No `manifest.ts`, no `-example.tsx`, no editor folder.

---

## 1. Create `registry/forms/<library>/<category>/<slug>.tsx`

- Always `'use client'` — forms use hooks (`useForm`, etc.).
- Export a **named** function matching PascalCase slug (required for dynamic import fallback).
- Import UI from `@/components/ui/*`. Use the `Field` family for layout + errors:
  `Field`, `FieldGroup`, `FieldLabel`, `FieldError`, `FieldDescription`, `FieldContent`.
- Validate with **Zod**. Notify with `toast` from `sonner`.
- Match sibling layout classes (e.g. `className="flex w-full max-w-sm flex-col gap-4"`).
- **No `radio-group` primitive exists** — use `select`, `switch`, or `checkbox` instead.

### React Hook Form idiom

`zodResolver` + `register` for native inputs; `Controller` for `Select`/`Switch`/`Checkbox`.

```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
})

type FormValues = z.infer<typeof formSchema>

export function RhfFields02() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '' },
  })

  function onSubmit(data: FormValues) {
    toast.success('Submitted', { description: data.name })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <Field data-invalid={!!form.formState.errors.name}>
          <FieldLabel htmlFor="rhf-fields-02-name">Name</FieldLabel>
          <Input
            id="rhf-fields-02-name"
            aria-invalid={!!form.formState.errors.name}
            {...form.register('name')}
          />
          {form.formState.errors.name && (
            <FieldError errors={[form.formState.errors.name]} />
          )}
        </Field>
      </FieldGroup>
      <Button type="submit" size="sm">
        Submit
      </Button>
    </form>
  )
}
```

- Non-native controls (`Select`, `Switch`, `Checkbox`) → wrap in `Controller` and bind
  `value`/`checked` + `onValueChange`/`onCheckedChange` to `field`.
- Cross-field rules (`rules`) → `z.object({...}).refine(fn, { message, path: ['field'] })`.
- Dynamic arrays (`advanced`) → `useFieldArray({ control, name })` + `register('items.${i}.x')`.

### TanStack Form idiom

`useForm` with `validators: { onSubmit: schema }`; per-field via `form.Field` render prop.

```tsx
'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
})

export function TsfFields02() {
  const form = useForm({
    defaultValues: { name: '' },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      toast.success('Submitted', { description: value.name })
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex w-full max-w-sm flex-col gap-4"
    >
      <FieldGroup>
        <form.Field name="name">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  aria-invalid={isInvalid}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
      </FieldGroup>
      <Button type="submit" size="sm">
        Submit
      </Button>
    </form>
  )
}
```

- `Select`/`Switch` → bind `value`/`checked` + `onValueChange`/`onCheckedChange` to
  `field.handleChange`. For `Checkbox`, coerce: `onCheckedChange={(c) => field.handleChange(c === true)}`.
- Dynamic arrays (`advanced`) → `<form.Field name="items" mode="array">`, then
  `field.state.value.map((_, i) => <form.Field name={`items[${i}].x`}>…)` with
  `field.pushValue({...})` / `field.removeValue(i)`.

Preview loads via `src/lib/forms/forms-registry.ts` →
`import(\`registry/forms/${library}/${category}/${slug}\`)`. The catalog entry must exist
before the preview works.

---

## 2. Register in `registry/forms/<library>/<category>/catalog.ts`

Add an item to the category's `items` array (order = display order in the gallery).

```ts
{
  slug: 'rhf-fields-02',
  name: 'Short Human Title',        // → registry.json `title` after sync
  description: 'One-line summary.', // → registry.json `description` after sync
  isNew: true, // optional — badge in UI
}
```

**Always set `name` and `description` here.** Do not maintain the same text manually in
`registry.json`. The category's `grid: { columns }` already controls layout — leave it.

---

## 3. Add minimal entry to `registry/forms/<library>/<category>/registry.json`

Each category has its own (leaf) `registry.json`. Add the entry to its `items` — **not**
to any aggregator or the root registry.

`files[].path` is **relative to the category directory** — just the filename:

```json
{
  "name": "rhf-fields-02",
  "type": "registry:block",
  "registryDependencies": ["field", "select", "switch", "checkbox", "button"],
  "dependencies": ["react-hook-form", "@hookform/resolvers", "zod", "sonner"],
  "files": [
    {
      "path": "rhf-fields-02.tsx",
      "type": "registry:component",
      "target": "components/flx/forms/react-hook-form/rhf-fields-02.tsx"
    }
  ]
}
```

| Field                  | Rule                                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| `name`                 | Same as catalog `slug`                                                      |
| `type`                 | Always `"registry:block"`                                                  |
| `registryDependencies` | shadcn/ui primitives used (`field`, `input`, `select`, `button`, …)        |
| `dependencies`         | npm packages — see below                                                   |
| `files[0].path`        | **Just `<slug>.tsx`** — relative to the category directory                 |
| `files[0].target`      | `components/flx/forms/<library>/<slug>.tsx` — absolute install path        |

**`dependencies` by library** (add `"lucide-react"` if the form uses icons):

- `react-hook-form` → `["react-hook-form", "@hookform/resolvers", "zod", "sonner"]`
- `tanstack-form` → `["@tanstack/react-form", "zod", "sonner"]`

**Do NOT add `title` or `description`** — `pnpm run registry:sync` writes them from the catalog.

---

## 4. Run sync, validate, and build

```bash
pnpm run registry:sync
pnpm run registry:validate
pnpm run registry:build
```

| Command             | Purpose                                                                        |
| ------------------- | ------------------------------------------------------------------------------ |
| `registry:sync`     | Copies catalog `name` → `title`, `description` → `description` in the leaf json |
| `registry:validate` | Fails if catalog and registry metadata diverge                                 |
| `registry:build`    | Regenerates `public/r/<slug>.json` for the Code dialog / `shadcn add`          |

If `registry:validate` reports `MISSING in registry`, add the skeleton entry from step 3
and run sync again.

---

## Adding a new category to a library (rare)

1. **Create `registry/forms/<library>/<new-category>/catalog.ts`** — export a `PatternCategory`:

```ts
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const rhfMyNewCategory: PatternCategory = {
  slug: 'my-new',
  name: 'My New',
  description: 'One-line description of the category.',
  preview: () => null,
  grid: { columns: 2 },
  items: [],
}
```

2. **Create `registry/forms/<library>/<new-category>/registry.json`** — empty items:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "flx-forms-<library>-my-new",
  "homepage": "https://ui.flexnative.com",
  "items": []
}
```

3. **Add the category** to the library's `FormLibrary` in
   `registry/forms/<library>/catalog.ts` (import it, push into `categories`).

4. **Add include** in `registry/forms/<library>/registry.json`:

```json
"include": ["./my-new/registry.json"]
```

The root chain (`registry.json` → `registry/forms/registry.json` → library →
category) is already wired; no other includes change.

### Adding a new library (very rare)

Mirror an existing library directory: a `catalog.ts` exporting a `FormLibrary`, a library
aggregator `registry.json` (with `include`), and the four category folders. Then import
the library in `src/lib/forms/catalog.ts` (`formsLibraries` array), add it to `FormsTabs`
(`src/app/(main)/forms/forms-tabs.tsx`), create the route page
`src/app/(main)/forms/<library>/page.tsx` rendering `<FormsGallery librarySlug="…" />`,
and add the aggregator to `registry/forms/registry.json` includes.

---

## Checklist

- [ ] `registry/forms/<library>/<category>/<slug>.tsx` — `'use client'`, named PascalCase export
- [ ] `registry/forms/<library>/<category>/catalog.ts` — `slug`, `name`, `description` added to `items`
- [ ] `registry/forms/<library>/<category>/registry.json` — entry with `path: "<slug>.tsx"` (relative)
- [ ] `pnpm run registry:sync`
- [ ] `pnpm run registry:validate` — passes
- [ ] `pnpm run registry:build` — `public/r/<slug>.json` exists

---

## Key rules

- **Catalog first** — the category `catalog.ts` owns display name + description; never
  duplicate them in `registry.json`.
- **Leaf registry only** — add the item to the category's own `registry.json`, never to an
  aggregator (`registry/forms/registry.json`, library `registry.json`) or the root.
- **Slug ↔ file name ↔ component** — `rhf-fields-02.tsx`, catalog `slug: 'rhf-fields-02'`,
  and `export function RhfFields02()` must all match.
- **Path is relative** — `files[0].path` is just `<slug>.tsx`; `target` is the full
  `components/flx/forms/<library>/<slug>.tsx`.
- **Always client** — forms need hooks, so every form file starts with `'use client'`.
- **No radio-group** — that primitive is not installed; use select/switch/checkbox.
- **Validate with Zod, toast with sonner** — keep both libraries consistent on submit.

---

## Verify in the app

- Gallery: `/forms/<library>` (e.g. `/forms/react-hook-form`) — use the category filter
  pills (`All` shows every form in a 3-column grid; a category shows its own grid).
- Install snippet: the Code dialog uses `public/r/<slug>.json` after `registry:build`.
- CLI: `pnpm dlx shadcn@latest add @flx/<slug>`.
