# Wave 3 — overlays & positioning

Date: 2026-07-06
Strategy: `shadcn add <comp> --overwrite`, prettier, fix all consumers (asChild→render + Select API + width var), `tsc --noEmit` clean, `pnpm build`.
Verdict: green. tsc 0 errors. Consumer fan-out was the biggest so far (121 initial type errors across ~90 files); all resolved. Post-commit follow-up: fixed a runtime-only Base rule (DropdownMenuLabel must be inside a DropdownMenuGroup) that tsc did not catch — see below.

## Changed — ui/ primitives

tooltip, popover, scroll-area, select, dropdown-menu → Base UI.

Notable structural changes in the regenerated wrappers:
- **tooltip**: `Content` → `Positioner` + `Popup`; `TooltipProvider` prop `delayDuration` → `delay`; new `side/sideOffset/align/alignOffset` props on `TooltipContent`; origin var `--radix-tooltip-content-transform-origin` → `--transform-origin`.
- **popover**: `Content` → `Positioner` + `Popup`; **`PopoverAnchor` removed** (no consumers); `PopoverTitle`/`PopoverDescription` now render Base `Title`/`Description`; origin var → `--transform-origin`.
- **scroll-area**: `ScrollAreaScrollbar`/`ScrollAreaThumb` → `Scrollbar`/`Thumb`.
- **select**: `Content` → `Positioner` + `Popup` + `List`; `Label` → `GroupLabel`; `ScrollUpButton`/`ScrollDownButton` → `ScrollUpArrow`/`ScrollDownArrow`; `position="item-aligned"/"popper"` → `alignItemWithTrigger` boolean; width var `--radix-select-trigger-width` → `--anchor-width`; max-height `--radix-select-content-available-height` → `--available-height`. **`SelectValue` still accepts `placeholder`** (Base forwards it), so placeholder consumers did NOT need changes.
- **dropdown-menu**: built on Base `Menu`; `Content` → `Positioner` + `Popup`; width var → `--anchor-width`; sub-trigger open state uses `data-popup-open`/`data-open`.

## Changed — consumers (API differences)

### asChild → render (the bulk)
Every `TooltipTrigger` / `PopoverTrigger` / `DropdownMenuTrigger` (+ sub-triggers) `asChild` converted to Base `render={<child/>}` self-closed form. Files:
- **tooltip patterns**: tooltip-01..10
- **popover patterns**: popover-01..14
- **dropdown patterns**: dropdown-01..08,10..19
- **command patterns** (PopoverTrigger): command-05..15
- **misc registry**: breadcrumb-06,07,09; button-21,27; card-04; avatar-11; item-14,20,21; table-15,20; dialog-22; input-08,09,10; live-presence-1
- **forms**: rhf-fields-08,09; tsf-fields-08,09
- **src/**: illustrations/illustration-item; intents/components/intent-sidebar; patterns/components/pattern-category-nav; core/registry/registry-cli; ui/sidebar

Notes:
- **`nativeButton` only exists on `PopoverTrigger`/`Button`** (which carry `NativeButtonProps`). `TooltipTrigger`/`DropdownMenuTrigger` are generic `render` and reject `nativeButton` — do NOT add it there (avatar-11 render target is `Avatar`, no prop needed).
- All render targets in these files were our `<Button>` / `InputGroupButton` (native buttons) or non-button targets on Tooltip/Dropdown triggers (Avatar, div) — no `nativeButton={false}` was required anywhere.

### Tooltip delay
Base `Tooltip` (Root) has NO `delayDuration`; delay lives on `TooltipProvider` as `delay`.
- tooltip-05, input-08: `<Tooltip delayDuration={N}>` → wrapped in `<TooltipProvider delay={N}>`.
- illustration-item: `<TooltipProvider disableHoverableContent delayDuration={N}>` → `<TooltipProvider delay={N}>` (dropped `disableHoverableContent`; Base equivalent is `disableHoverablePopup` on Root, not needed for the demo).

### Select onValueChange signature
Base `onValueChange` passes `string | null` (Radix passed `string`). Fixed by coalescing:
- string setters: select-06,08,14; input-15; delete-account-2; manage-subscription-3; share-access-1(role+expiry),2(invite+row),3; notifications-3 → `(value) => setX(value ?? '')`.
- tanstack `field.handleChange`: tsf-fields-07; tsf-recipes-01,04; tsf-advanced-01; select-13; dialog-20 → `field.handleChange(value ?? '')`.
- react-hook-form `form.setValue`: rhf-advanced-01 → `value ?? ''`.
- carousel-01 editor fields: `updateItemMedia(index, 'aspect', value ?? '')`.

### Select positioning
- select-15: `<SelectContent position="popper" ...>` → `alignItemWithTrigger={false}`.

### DropdownMenuLabel must be inside a DropdownMenuGroup (runtime, not caught by tsc)
Base `Menu.GroupLabel` (our `DropdownMenuLabel`) throws at render if it has no `Menu.Group` ancestor: *"MenuGroupContext is missing. Menu group parts must be used within `<Menu.Group>` or `<Menu.RadioGroup>`."* Radix allowed a standalone label. shadcn's own Base example wraps the label in a group. Wrapped the bare label in `<DropdownMenuGroup>` (added the import where missing) in: dropdown-01,02,05,06,07,09,11,13,14,15,16; table-15,20; rhf-fields-09; tsf-fields-09. (dropdown-03 already grouped its labels.)
`SelectLabel` has the same Base rule but every Select consumer already wraps it in `SelectGroup`, so no Select changes were needed.

### width var --radix-*-trigger-width → --anchor-width
- command-12,13,14 (`w-(--radix-popover-trigger-width)`)
- dropdown-18,19 (`w-(--radix-dropdown-menu-trigger-width)`)
- rhf-fields-08 (popover), rhf-fields-09 (dropdown), tsf-fields-08 (popover), tsf-fields-09 (dropdown)
All → `w-(--anchor-width)`.

## Left alone
- **data-state classNames**: button-15 self-manages its own `data-state` on a plain `<Button>` (not a migrated primitive) — untouched. accordion-12 uses `data-[state=open]` but accordion is a wave-2 component — out of scope.
- **sidebar.tsx `Slot` from 'radix-ui'**: unrelated primitive (used by `SidebarMenuButton asChild`), not one of the 5 — deferred to a later wave.
- **`public/r/*.json`** generated registry artifacts still contain `--radix-*` width vars and `radix-ui` deps — regenerated at final via registry:build.
- **registry.json manifests** still list `radix-ui` — deferred to final check.

## Behavior changes (flagged, verify visually)
- **Select `alignItemWithTrigger` default true**: the selected item now aligns over the trigger (Base default) instead of Radix popper drop-below. select-15 explicitly set `alignItemWithTrigger={false}`; other selects use the Base default — confirm they read acceptably.
- **Tooltip delay defaults** differ between Radix and Base; grouped tooltips now share a provider `delay`. Confirm hover/focus still opens tooltips.
- **Popover/Dropdown/Command width-matching** relies on `--anchor-width` being in scope on the Popup — confirm popover/dropdown/command widths still match their triggers.

## Verify by hand
- Tooltip patterns (esp. tooltip-05 delays, avatar-11 avatars, live-presence overflow chip): hover/focus shows tooltip.
- Popover-01..14 + command combobox popovers: open on trigger click, width matches trigger where `w-(--anchor-width)` used.
- Dropdown-01..19 + table column menus: open, align, select items.
- Select patterns select-06/08/13/14/15 + form selects: value changes, placeholder shows, select-15 drops below trigger.
- Sidebar collapsed tooltip on menu buttons.
