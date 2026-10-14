import { ogColors } from './og-colors'

const tones = {
  strong: ogColors.foreground,
  soft: ogColors.muted,
}

export function OgBar({
  width,
  height = 7,
  tone = 'soft',
}: Readonly<{
  width: number
  height?: number
  tone?: keyof typeof tones
}>) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: height / 2,
        background: tones[tone],
      }}
    />
  )
}
