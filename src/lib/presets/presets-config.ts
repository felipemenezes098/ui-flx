export type PresetId = 'vellum' | 'sienna'

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
    id: 'vellum',
    name: 'Vellum',
    tagline: 'Neutral. Grounded. Product default.',
    description:
      'The Flexnative shell as shipped: near-neutral surfaces, a warm charcoal primary, soft gray chrome and the same radius and shadows as the app itself.',
    traits: [
      'Warm-neutral grays',
      'Charcoal primary',
      'Low chroma',
      'Matches the app shell',
    ],
    cssPath: cssPathFor('vellum'),
  },
  {
    id: 'sienna',
    name: 'Sienna',
    tagline: 'Editorial. Warm. Crafted.',
    description:
      'Cream paper and burnt-earth ink. Warm off-white surfaces, a deep brown primary, soft warm-tinted shadows and a generous radius, built for editorial serif headlines and watercolor art.',
    traits: [
      'Cream paper surfaces',
      'Burnt-earth primary',
      'Warm-tinted shadows',
      'Generous radius',
    ],
    cssPath: cssPathFor('sienna'),
  },
]

export const presetIds = presets.map((p) => p.id)

export function isPresetId(id: string | undefined | null): id is PresetId {
  return Boolean(id && (presetIds as readonly string[]).includes(id))
}
