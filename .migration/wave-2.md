# Wave 2 — compound primitives

Date: 2026-07-06
Strategy: `shadcn add <comp> --overwrite`, prettier, then fix all consumers, `pnpm build` (typecheck) green.
Verdict: green. Consumer fan-out was large (registry/ patterns + intents + forms), all fixed.

## Changed — ui/ primitives

accordion, collapsible, tabs, toggle, toggle-group, switch, checkbox, slider → Base UI.
Notable: accordion Content→Panel + `--accordion-panel-height`; slider Track/Range→Control/Track/Indicator; toggle-group default spacing 0→2.

## Changed — consumers (API differences)

- **Accordion** (15 pattern files accordion-01..07,09..16): dropped `type="single"`, dropped `collapsible`, `type="multiple"`→`multiple`, string `defaultValue`→array. accordion-14 controlled multiple kept.
- **Accordion primitive-direct** accordion-06, accordion-07: import `radix-ui`→`@base-ui/react/accordion`; accordion-07 also `.Content`→`.Panel`, `--radix-accordion-content-height`→`--accordion-panel-height` + `data-starting/ending-style:h-0`.
- **ToggleGroup** (rhf-fields-06, tsf-fields-06, settings-4, select-a-plan-3, comment-thread-2, popover-13): `type="single"` dropped, `type="multiple"`→`multiple`. Value is always an array in Base — controlled single wrapped `value={x ? [x] : []}`, unwrapped `onValueChange={(v) => v[0] && setX(v[0])}` (guard preserves old no-deselect behavior).
- **Slider** (rhf-fields-04, tsf-fields-04, select-a-plan-4): `onValueChange` param is `number | readonly number[]` in Base; added `(v as number[])[0]` cast.
- **Checkbox** (checkbox-06,07,10, table-07,18,20): Base has no `checked="indeterminate"`. Split into `checked={bool}` + `indeterminate={bool}` prop.
- **Collapsible** (collapsible-01, src/components/core/code/code-collapsible.tsx): `asChild`→`render={<X/>}`; `forceMount`→`keepMounted`; `data-[state=open|closed]`→`data-open|data-closed`.
- **Switch primitive-direct** switch-07: import `radix-ui`→`@base-ui/react/switch` (data-checked/unchecked classes already Base-compatible).

## Left alone

- `--radix-popover-trigger-width` / `--radix-dropdown-menu-trigger-width` CSS vars in forms/command/dropdown patterns → Wave 3 (those components not migrated yet).
- String literals containing "radix" (badge-13, command-04, collapsible-01 repo list) — demo content, not code.
- `registry.json` manifests still list `radix-ui` as a dep → regenerate at final via registry:build/sync.

## Behavior changes (flagged, verify visually)

- **Collapsible animation**: `animate-collapsible-up/down` keyframes (tw-animate-css) key off `--radix-collapsible-content-height`, but Base sets `--collapsible-panel-height`. Height animation may jump instead of sliding. May need a CSS var alias or updated keyframe. No type error; visual only.
- **Accordion animation**: same family — Base uses `--accordion-panel-height`; the migrated ui file already accounts for it with `data-starting/ending-style:h-0`, so should be fine, but confirm.
- **ToggleGroup single**: deselect now guarded to no-op (matches old behavior).

## Verify by hand

- Open collapsible-01 and code-collapsible in the app — does it slide open/closed smoothly or jump?
- Accordion patterns: expand/collapse animation smooth; default-open item correct.
- Checkbox select-all header: none / some / all → unchecked / dash / checked.
- ToggleGroup (theme switcher settings-4, view toggles): single-select active state holds, can't deselect to empty.
- Slider form fields: drag updates value.
