export type PresetId = 'loom' | 'axis' | 'flint' | 'mist'

export type PresetConfig = {
  id: PresetId
  name: string
  tagline: string
  description: string
  traits: ReadonlyArray<string>
  cssPath: string
}

const cssPathFor = (id: PresetId) => `registry/presets/styles/${id}.css`

export const presets: ReadonlyArray<PresetConfig> = [
  {
    id: 'flint',
    name: 'Flint',
    tagline: 'Neutral. Grounded. Product default.',
    description:
      'The Flexnative shell as shipped: near-neutral surfaces, warm charcoal primary (~40° hue, low chroma), soft gray chrome and the same radius and shadows as the app theme.',
    traits: [
      'Warm-neutral grays',
      'Charcoal primary',
      'Low chroma',
      'Matches :root / .dark',
    ],
    cssPath: cssPathFor('flint'),
  },
  {
    id: 'loom',
    name: 'Loom',
    tagline: 'Warm. Woven. Organic.',
    description:
      'A warm, hand-stitched atmosphere. Sand neutrals, terra accent, generous radius and soft warm shadows give every surface a textile quality.',
    traits: [
      'Warm neutrals',
      'Soft shadows',
      'Generous radius',
      'Subtle tracking',
    ],
    cssPath: cssPathFor('loom'),
  },
  {
    id: 'axis',
    name: 'Axis',
    tagline: 'Precise. Engineered. Sharp.',
    description:
      'An editorial, instrument-grade atmosphere. Cool slate neutrals, tight radius and crisp low-blur shadows draw attention to alignment and structure.',
    traits: ['Cool slate', 'Crisp shadows', 'Tight radius', 'Strong tracking'],
    cssPath: cssPathFor('axis'),
  },

  {
    id: 'mist',
    name: 'Mist',
    tagline: 'Airy. Calm. Low density.',
    description:
      'A quiet, low-energy atmosphere. Pale cool palette, oversized radius and barely-there shadows give content room to breathe.',
    traits: [
      'Pale palette',
      'Minimal shadow',
      'Oversized radius',
      'Open tracking',
    ],
    cssPath: cssPathFor('mist'),
  },
]

export const presetIds = presets.map((p) => p.id)

export function isPresetId(id: string | undefined | null): id is PresetId {
  return Boolean(id && (presetIds as readonly string[]).includes(id))
}
