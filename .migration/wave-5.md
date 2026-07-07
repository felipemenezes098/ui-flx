# Wave 5 — Slot / `render` primitives: badge, button, button-group, breadcrumb, item, sidebar

Date: 2026-07-06
Strategy: hand-migrate the six `Slot`-based ui primitives off `radix-ui` to Base UI's built-in composition, then convert every remaining `asChild` consumer to `render`.
Verdict: ✅ `grep asChild src/ registry/` = 0 (code), `tsc --noEmit` = 0 errors, `pnpm build` completes. No `asChild` remains anywhere in the codebase.

## Changed — ui/ primitives

All six were built on `import { Slot } from 'radix-ui'` (`const Comp = asChild ? Slot.Root : '<tag>'`). Base has no `Slot`; the regenerated shadcn Base sources use the built-in `render` prop instead. To preserve local customizations (custom CVA variants/sizes, lucide icons) the files were hand-migrated rather than `--overwrite`-regenerated.

- **`button.tsx`** — now built on `Button as ButtonPrimitive from '@base-ui/react/button'` (has built-in `render` + `nativeButton`). Dropped the `asChild`/`Slot.Root` mechanic; props type is `ButtonPrimitive.Props & VariantProps<…>`. **Local CVA kept verbatim** (custom `xs`/`icon-xs`/`icon-sm`/`icon-lg` sizes, scale/transform animation, `active:…:scale-[0.97]`). Kept `data-variant`/`data-size` attributes — the CVA targets `data-[variant=link]` on itself.
- **`badge.tsx`**, **`item.tsx`**, **`button-group.tsx` (`ButtonGroupText`)**, **`breadcrumb.tsx` (`BreadcrumbLink`)** — migrated to the `useRender` + `mergeProps` pattern (`@base-ui/react/use-render`, `@base-ui/react/merge-props`). `data-slot`/`data-variant`/`data-size` are emitted via useRender's `state` (state keys → `data-*` automatically). Local CVA / lucide icon imports preserved.
- **`sidebar.tsx`** — 5 internal `Slot.Root` sites migrated to `useRender`: `SidebarGroupLabel`, `SidebarGroupAction`, `SidebarMenuButton`, `SidebarMenuAction`, `SidebarMenuSubButton`. `data-sidebar`/`data-size`/`data-active` moved into useRender `state` (as `sidebar`/`size`/`active`) — the strict `mergeProps` props type rejects arbitrary `data-*` keys, so they must go through `state`. `SidebarMenuButton` still wraps its element in `Tooltip` + `TooltipTrigger render={button}` (already migrated in wave 3).

## ⚠️ Correction (post-wave): links must use `buttonVariants`, NOT `Button render={<a/>}`

The first pass migrated `Button asChild <a/Link>` → `<Button render={<a/>} nativeButton={false}>`. **That is the anti-pattern the shadcn Base docs explicitly warn against** — Base `ButtonPrimitive` always applies `role="button"`, which overrides the semantic link role on `<a>`. Correct pattern for a link-styled-as-button:

```tsx
<Link href="…" className={buttonVariants({ variant, size, className })}>Label</Link>
```

All link-as-button sites were re-converted to `buttonVariants` on a plain `<a>`/`<Link>`:
- `page.tsx` (×3), `blocks-preview`, `composition-spotlight` (×2), `explore-button`, `github-button`, `illustrations-preview`, `intent-list`, `pattern-teaser`, `intent-sidebar` (the `Button` one), `preview-editor`, `navbar-desktop` (×3), `navbar-mobile` (×3), `preview-actions` (×2), `mdx-components` (×2).
- registry: `blocks/shared/cta.tsx`, `patterns/button/button-09.tsx`, `data/docs/…/cta.txt`.
- `ui/pagination.tsx` — `PaginationLink` now applies `buttonVariants` to its `<a>` (matches the pre-Base pattern; drops the `Button` dependency).

`render` is reserved for **real button triggers only** (e.g. `PopoverTrigger render={<Button/>}`, `TooltipTrigger render={button}`, `InputGroupButton render={<ComboboxTrigger/>}` where the target renders a native button). `nativeButton={false}` is no longer used anywhere in code.

`useRender`-based components (`Badge`, `Item`, `BreadcrumbLink`, `SidebarMenuButton`) do NOT force `role="button"` — their `render={<a/>}` is fine and stays.

### Original asChild → render sweep (Badge/Item/BreadcrumbLink kept as render)
Rule: move the single child element into `render={<… />}`, its children become the component's children.

src/:
- `mdx-components.tsx` — 2× `Button` → `render={<Link/>}`.
- `app/(main)/(home)/page.tsx` — 3× `Button` link "View all".
- `app/(main)/(home)/components/{blocks-preview,composition-spotlight (×2),explore-button,github-button,illustrations-preview,pattern-teaser}.tsx` and `intent-showcase/intent-list.tsx` — `Button` → `render={<Link/>}`.
- `app/(main)/intents/components/intent-sidebar.tsx` — `Button` + `SidebarMenuButton` (`render={<Link/>}`, no nativeButton on the latter).
- `app/(main)/intents/components/{decision-code-dialog,intent-hero}.tsx`, `app/(main)/illustrations/illustration-item.tsx`, `components/core/patterns/pattern-actions.tsx`, `components/core/preview/code-panel.tsx` — `Badge` "file tab" → `render={<button/>}`.
- `app/block-editor/components/preview-editor.tsx` — `Button` back link.
- `components/core/navbar/{navbar-desktop (×3),navbar-mobile (×3)}.tsx` — `Button` → `render={<Link/>}`.
- `components/core/preview/preview-actions.tsx` — 2× `Button` link.
- `components/ui/pagination.tsx` — internal `Button asChild <a>` → `render={<a {...props}/>} nativeButton={false}`.
- `components/ui/combobox.tsx` — `InputGroupButton asChild <ComboboxTrigger/>` → `render={<ComboboxTrigger/>}` (Combobox trigger renders a native button, so no `nativeButton={false}`).
- `data/docs/sanity/ui/shared/cta.txt` — doc code sample kept in sync with the component.

registry/:
- `blocks/shared/cta.tsx` — `Button` → `render={<a/>} nativeButton={false}`.
- `patterns/badge/badge-07.tsx` — `Badge render={<a/>}`.
- `patterns/breadcrumb/breadcrumb-08.tsx` — 2× `BreadcrumbLink render={<a/>}`.
- `patterns/button/button-09.tsx` — `Button render={<a/>} nativeButton={false}`.
- `patterns/item/item-10.tsx` — `Item render={<a/>}`.
- `patterns/badge/{catalog.ts,registry.json}` — prose descriptions reworded "asChild" → "render prop".

## Left alone
- `public/r/*.json` — built registry output; regeneration (`pnpm registry:build`) is deferred to the final check per `00-overview.md`.
- Docs/plans/skill files that mention "asChild" in prose (`.migration/*`, `plans/*`, `.agents/skills/shadcn/*`).

## Behavior changes
- Base `render` merges props/refs differently than Radix `Slot`. Links/anchors styled as buttons compile and should navigate + look identical; verify visually.
- Sidebar `data-active` now emitted as `data-active=""` (present) / omitted (absent) via useRender state rather than `data-active="true"`/`"false"`. The CVA targets `data-active:` (attribute-presence), so styling is equivalent.

## Verify by hand
- Home page "View all" links (blocks/illustrations/intents/compositions/patterns) navigate and keep link/outline button styling.
- Navbar (desktop + mobile) logo/social buttons navigate; icon sizing intact.
- Code file-tab chips (`Badge render={<button>}`) toggle the active file and show the active style.
- Pagination prev/next/numbered links navigate and highlight active page.
- Sidebar (intents) menu items highlight the active route; group labels/actions render.
- Breadcrumb links (breadcrumb-08) open in new tab.
