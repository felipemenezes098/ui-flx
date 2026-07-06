# Wave 1 — leaf primitives

Date: 2026-07-06
Strategy: `shadcn add <comp> --overwrite` on `style: base-vega`, prettier, tsc.
Verdict: clean. No consumer-side API changes needed.

## Changed

- `components.json` — `style: radix-vega` → `base-vega` (flips CLI `base` to `base` for all subsequent adds).
- `src/components/ui/separator.tsx` — `radix-ui` → `@base-ui/react/separator`. `SeparatorPrimitive.Root` → `SeparatorPrimitive`. Dropped `decorative` prop (Base has no equivalent; nothing passed it).
- `src/components/ui/label.tsx` — dropped Radix entirely; Base label is a plain `<label>` element.
- `src/components/ui/progress.tsx` — restructured. Base splits into `Progress` / `ProgressTrack` / `ProgressIndicator`. Old single-node `translateX` transform replaced by Base's internal track/indicator.
- `src/components/ui/avatar.tsx` — `@base-ui/react/avatar`. Custom `size` variant (`default|sm|lg`) preserved.
- `src/components/ui/toggle.tsx` — `@base-ui/react/toggle`. `TogglePrimitive.Root` → `TogglePrimitive`. CVA variants preserved.

## Left alone

- All block/app consumers — none pass `decorative`, none consume `Progress` (the `Progress` grep hits were motion's `scrollYProgress`).

## Behavior changes

- **Progress** structure changed (track/indicator split). No current consumers, so no visible impact — but any future custom indicator styling must target `data-slot="progress-indicator"` on the new sub-component.

## Verify by hand

- Render a Separator (horizontal + vertical) — line still shows.
- Render an Avatar with sm/lg size — sizing intact.
- Toggle pressed/unpressed state visually correct.
