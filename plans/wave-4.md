# Wave 4 — dialog & sheet

Read `00-overview.md` first. `sheet` is built on the Dialog primitive, so migrate both together.

## Components (ui/)
`dialog`, `sheet`

```bash
npx shadcn@latest add dialog sheet --overwrite --diff   # review first
npx shadcn@latest add dialog sheet --overwrite
npx prettier --write src/components/ui/{dialog,sheet}.tsx
```

Note: `src/components/ui/sheet.tsx` imports the Dialog primitive (`Dialog as SheetPrimitive`). After overwrite, confirm it imports from `@base-ui/react/dialog` and that Sheet's side/slide variants and overlay are intact.

## Consumer breaks to expect

### 1. asChild → render (main work) — see overview for the rule
Counts across `src/` + `registry/`:
- `<DialogTrigger asChild>` ~34
- `<DialogClose asChild>` ~24
- `<SheetTrigger asChild>` / `<SheetClose asChild>` (few — 2 sheet files)

Sweep: `grep -rln 'DialogTrigger\|DialogClose\|SheetTrigger\|SheetClose\|<Dialog\|<Sheet' src/ registry/`. `<Dialog` appears in ~36 files, `<Sheet` in 2. Convert every `asChild` to `render={<...>}`. `DialogClose` frequently wraps a `<Button>` — `<DialogClose render={<Button variant="outline">Cancel</Button>} />`. Watch non-button render targets → `nativeButton={false}`.

### 2. Required Title for accessibility
shadcn rule: Dialog/Sheet must contain a `DialogTitle`/`SheetTitle` (use `className="sr-only"` if visually hidden). The overwrite shouldn't remove existing titles, but if any consumer relied on Radix-specific title behavior, verify it still renders. Don't add titles that weren't there unless a build/a11y check demands it — flag instead.

### 3. State-attr renames in classNames
Grep dialog/sheet consumers for `data-[state=open]` / `data-[state=closed]` (overlay/content enter-exit animations) → `data-open` / `data-closed`. Confirm against `node_modules/@base-ui/react/dialog/**/*DataAttributes.d.ts`. The regenerated ui files show the canonical Base classes — mirror them. Base dialog also uses `data-starting-style` / `data-ending-style` for enter/exit; the regenerated ui file handles this, but custom-animated consumers may need updating.

### 4. Controlled open state
Radix `open` / `onOpenChange` → Base Dialog uses `open` / `onOpenChange` (same names). Should be compatible; verify onOpenChange signature type-checks.

### 5. Direct primitive imports
Grep `registry/` for `from 'radix-ui'` / `@radix-ui/react-dialog` after migrating; hand-migrate any pattern that builds a dialog directly on the primitive.

## Behavior changes to flag (verify visually)
- Dialog/Sheet open/close animation (Base uses `data-starting-style`/`data-ending-style` + transitions rather than Radix `data-state` keyframes) — confirm smooth open/close and no flash.
- Focus trap / scroll lock defaults — confirm focus moves into the dialog and body scroll locks.
- Sheet slide-in from the correct side.

## Done when
`npx tsc --noEmit` = 0 errors, `pnpm build` completes, no radix imports for dialog/sheet remain. Write `.migration/wave-4.md`, commit.
