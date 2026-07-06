# Wave 5 — Slot / `render` primitives: badge, button, button-group, breadcrumb, item, sidebar

Read `00-overview.md` first. These components are built on the Radix `Slot` primitive (`import { Slot } from 'radix-ui'`) rather than a stateful primitive. Base UI's equivalent is the built-in `render` prop / `useRender` — the regenerated shadcn Base versions of these components expose a `render` prop instead of `asChild`. This wave carries the remaining `asChild` sites that weren't tied to an overlay.

## Components (ui/)
`badge`, `button`, `button-group`, `breadcrumb`, `item`, `sidebar`

Also re-check any other ui file still importing `Slot` from `radix-ui`:
```bash
grep -rln "Slot } from 'radix-ui'\|Slot } from \"radix-ui\"" src/components/ui/
```
(At migration start these were: badge, breadcrumb, button, button-group, item, sidebar. Confirm none were already handled.)

```bash
npx shadcn@latest add badge button button-group breadcrumb item sidebar --overwrite --diff   # review first — these are often customized
npx shadcn@latest add badge button button-group breadcrumb item sidebar --overwrite
npx prettier --write src/components/ui/{badge,button,button-group,breadcrumb,item,sidebar}.tsx
```

**Caution:** `button.tsx` and `sidebar.tsx` are commonly customized (extra variants, sizes). Review the `--diff` carefully and preserve local variants (e.g. custom `size`/`variant` in the CVA config, `sidebar` widths/behaviors). `sidebar.tsx` had ~16 `asChild` internally.

## Consumer breaks to expect

### 1. asChild → render on Button and friends
Remaining `asChild` after waves 3–4 (counts across `src/` + `registry/`):
- `<Button asChild>` ~5 — usually wrapping `<a>` or `<Link>`. Convert: `<Button render={<a href="..." />} nativeButton={false}>Label</Button>` (a non-button target ⇒ `nativeButton={false}`). If wrapping Next `<Link>`, same idea: `render={<Link href="..." />} nativeButton={false}`.
- `<BreadcrumbLink asChild>` ~2 → `render={<Link .../>}`.
- `<Item asChild>` ~1, `<Badge asChild>` ~1 → `render={<... />}`.
- `SidebarMenuButton asChild` (inside sidebar consumers) → `render`.

Sweep the WHOLE repo one last time — after this wave, no `asChild` should remain:
```bash
grep -rn 'asChild' src/ registry/
```
Every remaining occurrence must become `render`. This grep returning nothing (outside comments/strings) is the wave's exit condition.

### 2. `data-slot` / state classes
These Slot-based components mostly don't carry state attributes, but Button/Item may use `data-*` for icon slots (`data-icon="inline-start"`). Those are shadcn conventions, not Radix — leave them. Only rename Radix `data-[state=*]` if present.

### 3. Direct `Slot` usage in registry
Grep `registry/` for `Slot` imported from `radix-ui`. If a pattern uses `Slot` directly, replace with Base's approach (element `render` prop or `useRender`) — mirror the regenerated ui component. Check `.agents/skills/shadcn/rules/base-vs-radix.md` and `npx shadcn@latest docs button`.

## Behavior changes to flag
- Polymorphic `render` merges props/refs differently than Radix `Slot`. Verify links styled as buttons still navigate and look right, and that `nativeButton={false}` was added wherever the rendered element is not a `<button>` (otherwise you get invalid nested-button / a11y issues).

## Done when
`grep -rn 'asChild' src/ registry/` returns nothing (code), `npx tsc --noEmit` = 0 errors, `pnpm build` completes. Write `.migration/wave-5.md`, commit.
