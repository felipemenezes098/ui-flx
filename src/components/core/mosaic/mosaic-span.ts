export type MosaicSpan = 1 | 2 | 3 | 4

export const mosaicSpanClass: Record<MosaicSpan, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
}
