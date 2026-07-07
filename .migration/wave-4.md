# Wave 4 — dialog & sheet

Date: 2026-07-06
Strategy: `shadcn add dialog sheet --overwrite`, restore button.tsx (wave 5), prettier, fix all consumers (asChild→render), `tsc --noEmit` clean, `pnpm build`.
Verdict: green. tsc 0 errors, full build completes. 60 initial type errors across 34 files, all resolved.

## Changed — ui/ primitives

dialog, sheet → Base UI (`@base-ui/react/dialog`; sheet is built on the same Dialog primitive).

Structural changes in the regenerated wrappers:
- **`Overlay` → `Backdrop`** (`DialogPrimitive.Backdrop` / `SheetPrimitive.Backdrop`).
- **`Content` → `Popup`** (`DialogPrimitive.Popup` / `SheetPrimitive.Popup`).
- Props typed via Base namespaces (`DialogPrimitive.Root.Props`, `.Trigger.Props`, `.Popup.Props`, `.Backdrop.Props`, `.Title.Props`, `.Description.Props`).
- Built-in close buttons in `DialogContent`/`SheetContent`/`DialogFooter` now use `render={<Button .../>}` instead of `asChild`.
- Local customizations preserved: `showCloseButton` prop, `size="icon-sm"` close button, `ring-1 ring-foreground/10`, Sheet `side` variants + `data-[side=*]` slide classes.
- **Animation model changed**: Base uses `data-starting-style` / `data-ending-style` + transitions. The regenerated Sheet overlay+content use `transition-opacity ... data-ending-style:opacity-0 data-starting-style:opacity-0` and per-side `data-[side=*]:data-ending/starting-style:translate-*`. Dialog overlay/content kept the `data-open:animate-in / data-closed:animate-out` (+ `zoom-in/out`) form the CLI emitted.

## Changed — consumers (API differences)

### asChild → render (the bulk — 56 conversions across 32 files)
Every `DialogTrigger` / `DialogClose` `asChild` → Base `render={<child/>}` self-closed form (no `SheetTrigger`/`SheetClose asChild` existed in any consumer). Files:
- **dialog patterns**: dialog-01..06, 08..22 (dialog-07 has none; dialog-21 = 4 conversions incl. nested dialog; dialog-22 trigger renders a `DropdownMenuItem`)
- **command patterns**: command-02, command-03
- **card / empty / dropdown**: card-07, empty-05, dropdown-17 (close only — Dialog is `open`-controlled)
- **forms**: rhf-advanced-02-line-item-dialog, tsf-advanced-02-line-item-dialog
- **intents**: delete-account-1, settings-4
- **src/**: illustration-item, decision-code-dialog, pattern-actions, preset-get-dialog

Notes:
- **No `nativeButton={false}` needed anywhere.** Almost all render targets were our `<Button>` (native button). dialog-22's non-button target (`DropdownMenuItem`) type-checks without it.
- **illustration-item**: `DialogTrigger asChild` was nested inside a `TooltipTrigger render={...}` → became `TooltipTrigger render={<DialogTrigger render={<Button/>} />}`.
- **preset-get-dialog**: `<DialogTrigger asChild>{trigger}</DialogTrigger>` where `trigger: React.ReactNode` → `<DialogTrigger render={trigger as React.ReactElement} />` (Base `render` wants an element, not arbitrary node).

### command.tsx (ui wrapper — CommandDialog builds on Dialog)
- `onCloseAutoFocus={(e) => e.preventDefault()}` (Radix-only) → **`finalFocus={false}`** (Base Popup prop; `false` disables refocusing the trigger on close — the closest equivalent).
- `children` type: `React.ComponentProps<typeof Dialog>` now includes Base's render-function children (`ReactNode | PayloadChildRenderFunction`), which is not a valid JSX child. Narrowed to `Omit<..., 'children'> & { children?: React.ReactNode }`.

## Left alone
- **button.tsx** — the `shadcn add` overwrote it (dialog/sheet registry dep) but it was `git checkout`-restored to Radix; Button migration is **wave 5**.
- **Direct `radix-ui` imports** remaining: breadcrumb.tsx, button-group.tsx, button.tsx, sidebar.tsx (`Slot`) — not dialog-based, other waves.
- **No `data-[state=open/closed]` or `--radix-*` vars** in any dialog/sheet consumer className — nothing to rename.
- `public/r/*.json` + registry.json manifests still reference radix — deferred to final check.

## Behavior changes (flagged, verify visually)
- **Open/close animation**: Base transition/`data-starting-style`/`data-ending-style` instead of Radix `data-state` keyframes. Confirm smooth open/close, no flash, correct Sheet slide-in per side.
- **Command palette final focus**: `finalFocus={false}` means focus is NOT returned to the trigger on close (matches old `onCloseAutoFocus preventDefault`). Confirm no focus jump when the palette closes.
- **Focus trap / scroll lock**: Base defaults — confirm focus enters the dialog and body scroll locks.

## Verify by hand
- dialog-01..22: trigger opens, Cancel/Close closes, nested dialog (dialog-21) stacks, dialog-22 dropdown item opens dialog.
- command-02/03 command dialogs: open, no focus jump on close.
- Sheets (sidebar mobile, any Sheet consumer): slide in from correct side, close button works.
- delete-account-1, settings-4, rhf/tsf line-item dialogs, card-07, empty-05: triggers/closes work.
