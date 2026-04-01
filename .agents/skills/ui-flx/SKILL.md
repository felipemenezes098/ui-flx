---
name: ui-flx
description: >-
  Flx UI blocks—copy-paste React sections on shadcn/ui + Tailwind, installed with npx shadcn@latest add @flx/<name>.
  Use for Flx blocks under components/flx/blocks, the @flx registry, public/r JSON, *-example.tsx prop shapes,
  Cta and image props. Triggers: @flx, ui.flexnative.com/r, grid-two-columns, primary-item-grid, hero blocks, etc.
---

# Flx UI blocks

Flx blocks are **source you own**. Install with the **shadcn CLI** and the **`@flx`** registry—there is no separate Flx CLI.

```bash
# 1) Put @flx in components.json (see Flx docs), then:
npx shadcn@latest add @flx/grid-two-columns
npx shadcn@latest add @flx/cta
```

## Example requests (what users say)

Good prompts the assistant should handle with Flx conventions:

- “Add **GridTwoColumns** with title *Hello*, description, image **https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800**, alt *City at dusk*.”
- “Use **`@flx/cta`** with label *Get started*, link `/signup`, variant `default`.”
- “My button disappeared—fix the **Cta**.” → Check **`ctaEnabled: true`**; if `false` or missing, the component renders **nothing**.
- “Install **primary-item-grid** and wire the hero image.” → Open **`primary-item-grid-example.tsx`** and copy the **`primary`** / **`items`** shape; images use **`{ url, title }`** (`title` is used for **alt**).

## Minimal code examples

**`GridTwoColumns`** — image is **`src` + `alt`** (not `url`/`title`):

```tsx
import { GridTwoColumns } from '@/components/flx/blocks/content/grid-two-columns/grid-two-columns'

export function Section() {
  return (
    <GridTwoColumns
      title="Ship faster"
      description="Composable blocks you can edit in your repo."
      image={{
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop',
        alt: 'Open road at sunset',
      }}
      cta={{
        ctaEnabled: true,
        text: 'Browse blocks',
        link: '/docs/get-started/blocks',
        variant: 'default',
        size: 'sm',
      }}
    />
  )
}
```

**`Cta` alone** — must pass a single **`cta`** object; **`ctaEnabled`** gates visibility:

```tsx
import { Cta } from '@/components/flx/blocks/shared/cta/cta'

<Cta
  cta={{
    ctaEnabled: true,
    text: 'Read the docs',
    link: 'https://ui.flexnative.com/docs',
    variant: 'outline',
    size: 'default',
  }}
/>
```

**Blocks that use `media: { url, title }`** (e.g. **PrimaryItemGrid**) — match the **`*-example.tsx`** file after install; do not reuse **`GridTwoColumns`**’s `src`/`alt` shape for those.

## After `shadcn add`

1. Open **`*-example.tsx`** if the registry added one—use it as the **prop cheat sheet**.
2. Read **`public/r/<block>.json`** in this repo (or the registry URL) for **`registryDependencies`** (e.g. `@flx/cta`, `button`) and **`dependencies`** (e.g. `react-wrap-balancer`).
3. Import paths use the project’s **aliases** (`@/` etc.) from **`components.json`**—never assume paths from another repo.

## Do / don’t

- **Do** use exported **types** from the block file when typing page data.
- **Do** keep **`title` / `alt` / `url`** straight—each block documents its own image shape.
- **Don’t** swap **`Cta`** for a raw **`Button`** unless you are deliberately not using the shared contract.
- **Don’t** invent props; copy from **example** + **exported component** types.

## Where things live

| What | Where |
|------|--------|
| Blocks | `src/components/flx/blocks/<category>/<name>/` |
| Registry JSON | `public/r/<name>.json` |
| Prop examples | `*-example.tsx` next to the block |

Optional: if the project uses **Sanity**, some blocks include **`sanity/sanity-component.txt`** for Studio snippets—that is **not** required for plain React usage.

## Learn more

- [skills.sh](https://skills.sh) — Agent skills
- [shadcn CLI](https://ui.shadcn.com/docs/cli)
- Flx: [Introduction](https://ui.flexnative.com/docs/get-started/introduction) and block pages under `/docs`
