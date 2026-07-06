# Radix → Base UI migration — overview & shared mechanic

Read this first. Waves 3, 4, 5 and the final check all depend on the mechanic and conventions here. Each wave file lists only what is specific to that wave.

## Context

shadcn/ui made Base UI the default in July 2026. This repo is migrating its `src/components/ui/*` primitives from Radix to Base UI, one wave at a time, keeping the build green after every wave. Waves 1 and 2 are already done and committed on branch `migrate/base-ui`.

- **Branch:** `migrate/base-ui` (already checked out). One commit per wave.
- **Config already flipped:** `components.json` `style` is `base-vega` (this makes `npx shadcn@latest info` report `base: "base"`, so all `shadcn add` calls now generate Base UI source). Do not change it back.
- **Both libraries coexist** during migration. Untouched primitives stay on Radix until re-added.
- **Base UI is installed:** `@base-ui/react@^1.5.0`. Imports look like `@base-ui/react/<component>`.

## Per-component mechanic (repeat for every component in a wave)

1. **Preview the regenerated source** before overwriting, to spot local customizations:
   ```bash
   npx shadcn@latest add <comp> --overwrite --diff
   ```
   If the local file has custom variants / classes / props (e.g. a `size` variant), make sure they survive — the CLI's diff is merge-aware but verify. If a component is built directly on a Radix primitive in a *registry* file (not the ui wrapper), it must be hand-migrated (see "direct primitive imports" below).

2. **Apply the overwrite:**
   ```bash
   npx shadcn@latest add <comp1> <comp2> ... --overwrite
   ```

3. **Format** — the CLI emits double-quotes + semicolons; the repo is **no-semi, single-quote** (Prettier). Always run:
   ```bash
   npx prettier --write src/components/ui/<comp>.tsx <any touched files>
   ```

4. **Fix consumers** — Base changes component *APIs*, so block/app/registry code that used the Radix API breaks. See "consumer sweep" below. This is the bulk of the work.

5. **Verify** — run the full build (the user wants the build run each wave so impact is visible):
   ```bash
   pnpm build
   ```
   `pnpm build` compiles then type-checks **both `src/` and `registry/`**. It stops at the FIRST type error, so also run `npx tsc --noEmit` to see ALL errors at once when iterating:
   ```bash
   npx tsc --noEmit 2>&1 | grep "error TS"
   ```
   Fix until `tsc` is 0 errors and `pnpm build` completes (prints the route tree, no "Failed to type check").

6. **Write a report** at `.migration/wave-<n>.md` (see format below).

7. **Commit** the wave:
   ```
   refactor(ui): migrate wave <n> <group> to base-ui

   <components>. <one-line consumer summary>. Full build + tsc clean.

   Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
   ```

## Consumer sweep — how to find every break

Do NOT trust a `src/`-only grep. The block library lives under **`registry/`** (patterns, intents, forms, blocks) and it IS type-checked by the build. Always sweep both `src/` and `registry/`.

For each component in the wave:
```bash
grep -rln '<ComponentName' src/ registry/
```
Then let `npx tsc --noEmit` enumerate the actual type errors — that is the authoritative break list. Fix, re-run, repeat.

Also grep for **direct primitive imports** in registry files (some patterns build custom UIs straight on the primitive):
```bash
grep -rn "from 'radix-ui'\|from '@radix-ui" src/ registry/
```
Each of these must switch its import to `@base-ui/react/<comp>` and adapt the primitive API by hand.

## The big mechanical rule: `asChild` → `render`

Radix composition prop `asChild` does not exist in Base. Base uses a `render` prop that takes an element.

```tsx
// Radix
<PopoverTrigger asChild>
  <Button variant="outline">Open</Button>
</PopoverTrigger>

// Base
<PopoverTrigger render={<Button variant="outline">Open</Button>} />
```

Rules:
- Move the single child element into `render={...}` and self-close the trigger/close. The child keeps its own children/props.
- Applies to every trigger/close: `DialogTrigger`, `DialogClose`, `SheetTrigger`, `SheetClose`, `AlertDialogTrigger`, `DropdownMenuTrigger`, `PopoverTrigger`, `TooltipTrigger`, `CollapsibleTrigger`, `NavigationMenuLink`, `BreadcrumbLink`, `SidebarMenuButton`, `Badge`, `Item`.
- **`asChild` is tied to the component being migrated** — migrate the trigger's `asChild` in the SAME wave as its parent component. Occurrence counts (both `src/` + `registry/`): DropdownMenuTrigger ~35, DialogTrigger ~34, PopoverTrigger ~32, TooltipTrigger ~28, DialogClose ~24, plus Button/BreadcrumbLink/Item/Badge (~9) for wave 5.
- **Non-button render target:** if the element passed to `render` is not a native button (`<a>`, `<span>`, `InputGroupAddon`, etc.), add `nativeButton={false}`:
  ```tsx
  <Button render={<a href="/docs" />} nativeButton={false}>Read the docs</Button>
  <PopoverTrigger render={<InputGroupAddon />} nativeButton={false}>Pick date</PopoverTrigger>
  ```

## The other mechanical rule: data-attribute / CSS-var renames in consumer classNames

Radix state attributes and CSS vars were renamed in Base. When a consumer's `className` targets a migrated component's state, rename it:

| Radix (className) | Base (className) |
|---|---|
| `data-[state=open]` | `data-open` |
| `data-[state=closed]` | `data-closed` |
| `data-[state=checked]` / `data-state=checked` | `data-checked` |
| `data-[state=unchecked]` | `data-unchecked` |
| `group-data-[state=open]` | depends on the element that carries the attr (see per-component notes) |
| `--radix-popover-trigger-width` | `--anchor-width` |
| `--radix-dropdown-menu-trigger-width` | `--anchor-width` |
| `--radix-select-trigger-width` | `--anchor-width` |
| `--radix-*-content-height` (accordion/collapsible) | `--accordion-panel-height` / `--collapsible-panel-height` |

Prefer Tailwind's canonical shorthand form the LSP suggests (e.g. `group-data-panel-open:` over `group-data-[panel-open]:`).

**Important nuance learned in wave 2 (Collapsible):** Base component *Root* elements often emit NO state attribute — only the Trigger and Panel do. Verify which element carries the attribute by reading the installed types:
```bash
cat node_modules/@base-ui/react/<comp>/**/*DataAttributes.d.ts
```
If a `group-data-*` class relied on a `group` on the Root, move the `group` class onto the element that actually carries the attribute (usually the Trigger).

## Reference: Base API knowledge

The shadcn skill installed the authoritative diff doc — read it:
`.agents/skills/shadcn/rules/base-vs-radix.md`

It covers asChild/render, Select (items prop, placeholder, positioning, multiple, object values), ToggleGroup, Slider, Accordion. Also run `npx shadcn@latest docs <comp>` and fetch the URLs for any component you're unsure about.

Component-specific API diffs already discovered are documented in the per-wave files and in `.migration/wave-1.md` / `.migration/wave-2.md`.

## Report format (`.migration/wave-<n>.md`)

```markdown
# Wave <n> — <group>
Date, strategy, one-line verdict.
## Changed — ui/ primitives
## Changed — consumers (API differences)   <!-- every file + what changed -->
## Left alone   <!-- related-looking files intentionally untouched -->
## Behavior changes   <!-- compiles fine, acts differently — flag, don't silently patch -->
## Verify by hand   <!-- short click-through checklist -->
```

## Prettier config (must match)
Semi: false, single quotes, trailing commas, Tailwind plugin. Run prettier on every file you touch.

## What is explicitly deferred to the final check
- Removing `@radix-ui/*` and `radix-ui` from `package.json`.
- Regenerating `registry.json` manifests (they still list `radix-ui` as a dependency).
- See `final-check.md`.
