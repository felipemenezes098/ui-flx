'use client'

import { SpeedInsights as VercelSpeedInsights } from '@vercel/speed-insights/next'

export function SpeedInsights() {
  return <VercelSpeedInsights sampleRate={0.2} />
}
