# Final check — after waves 3, 4, 5

Read `00-overview.md` first. This closes out the migration: prove no Radix remains, remove the dependencies, regenerate registry manifests, and do a full verification pass.

## 1. Confirm all primitives migrated

No ui primitive should import Radix (the only pre-migration Base file was `combobox`):
```bash
grep -rln "from 'radix-ui'\|from \"radix-ui\"\|from '@radix-ui\|from \"@radix-ui" src/ registry/
```
Expected: **nothing**. If anything remains, it wasn't migrated — go back to the relevant wave.

No `asChild` anywhere in code:
```bash
grep -rn 'asChild' src/ registry/
```
Expected: nothing (ignore matches inside string literals / comments / demo data — e.g. a docs snippet).

No leftover Radix CSS vars / state classes:
```bash
grep -rn 'radix-.*-trigger-width\|radix-.*-content-height\|data-\[state=' src/ registry/
```
Expected: none tied to migrated components. (`data-[state=` may legitimately appear for non-Base things — inspect each.)

## 2. Remove Radix dependencies from package.json

Currently `package.json` lists `radix-ui` and many `@radix-ui/react-*` packages. Once step 1 is clean, remove them:
```bash
pnpm remove radix-ui \
  @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-label \
  @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-select \
  @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-switch \
  @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group \
  @radix-ui/react-tooltip
```
Verify the exact list against the current `package.json` `dependencies` first (some may have been added/removed). Keep `@base-ui/react`. Then reinstall and rebuild:
```bash
pnpm install
pnpm build
```
A green build with Radix removed is the real proof the migration is complete.

## 3. Regenerate registry manifests

Several `registry/**/registry.json` and generated JSON under `public/r/` still list `radix-ui` as a block dependency (e.g. `registry/patterns/accordion/registry.json`, `registry/patterns/switch/registry.json`). Regenerate them so published blocks pull Base UI, not Radix:
```bash
pnpm registry:build      # pnpm dlx shadcn@latest build
pnpm registry:sync       # pnpm dlx tsx scripts/sync-registry.ts  (if this is the source of truth)
pnpm registry:validate   # pnpm dlx tsx scripts/sync-registry.ts --check
```
Check what the sync script does first (`scripts/sync-registry.ts`) — the dependency lists may be derived from imports (so they auto-fix once imports are Base) or hand-maintained (so they need editing). After regenerating:
```bash
grep -rln 'radix-ui\|@radix-ui' registry/**/registry.json public/r/ 2>/dev/null
```
Expected: nothing (or only intentional demo-content strings like the `collapsible-01` repo list `['@radix-ui/primitives', ...]`, which is display text, not a dependency).

## 4. Full verification

- `pnpm build` — clean, prints route tree, no type errors.
- `npx tsc --noEmit` — 0 errors.
- `pnpm dev` and click through the previously-flagged behavior changes across all waves:
  - Wave 2: accordion expand/collapse + icons; collapsible icons flip (fixed) and no animation; checkbox select-all indeterminate dash; toggle-group single-select can't deselect to empty; slider drag.
  - Wave 3: tooltips appear on hover/focus; select opens, placeholder shows, selection works, dropdown width matches trigger; dropdown menus open/position correctly.
  - Wave 4: dialog + sheet open/close, focus trap, scroll lock, correct sheet side, smooth animation.
  - Wave 5: links-styled-as-buttons navigate and look right; breadcrumb links work.
- Read each `.migration/wave-*.md` "Verify by hand" checklist and tick them off.

## 5. Wrap up

- Final commit: `chore(ui): remove radix deps and regenerate registry after base-ui migration`.
- The branch `migrate/base-ui` now holds one commit per wave + this cleanup. Open a PR (or hand back to the user) summarizing: 26 primitives migrated, consumer counts, behavior-change flags, and the per-wave `.migration/` reports.
- Rollback story if needed: each wave is its own commit; revert a single commit to undo one wave.

## Known landmines recap (don't relearn these)
- `components.json` is already on `base-vega`; `shadcn add` generates Base. Don't revert.
- Build type-checks `registry/` too — always sweep `registry/`, not just `src/`.
- Base component **Root** elements often emit no state attr; only Trigger/Panel do. Move `group` classes onto the element that carries the attr.
- `pnpm build` stops at the first type error — use `npx tsc --noEmit` to see all at once.
- CLI emits double-quote/semicolon; always `npx prettier --write` touched files (repo is no-semi/single-quote).
- Base positioner width var is `--anchor-width` (replaces `--radix-*-trigger-width`).
