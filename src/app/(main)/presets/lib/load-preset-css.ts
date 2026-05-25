import { join } from 'node:path'

import type { PresetId } from '@/lib/presets-config'
import { extractCodeFromFilePath } from '@/lib/code'
import { presets } from '@/lib/presets-config'

export type PresetCssMap = Record<PresetId, string>

export function loadPresetCss(): PresetCssMap {
  const out: Partial<PresetCssMap> = {}
  for (const p of presets) {
    out[p.id] = extractCodeFromFilePath(join(process.cwd(), p.cssPath))
  }
  return out as PresetCssMap
}
