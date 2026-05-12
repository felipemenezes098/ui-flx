import type { PresetId } from 'registry/presets/presets-config'
import { isPresetId, presets } from 'registry/presets/presets-config'

export const PRESET_STORAGE_KEY = 'presets:config'

export const FALLBACK_PRESET: PresetId = 'flint'

export type PresetStoredConfig = {
  id: PresetId
  name: string
}

function presetNameFor(id: PresetId): string {
  return presets.find((p) => p.id === id)?.name ?? id
}

export function readPresetFromStorage(): PresetId | null {
  if (typeof globalThis.window === 'undefined') return null
  try {
    const raw = globalThis.window.localStorage.getItem(PRESET_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object') return null
    const id = (parsed as { id?: unknown }).id
    if (typeof id !== 'string' || !isPresetId(id)) return null
    return id
  } catch {
    return null
  }
}

export function writePresetToStorage(id: PresetId): void {
  if (typeof globalThis.window === 'undefined') return
  try {
    const payload: PresetStoredConfig = { id, name: presetNameFor(id) }
    globalThis.window.localStorage.setItem(
      PRESET_STORAGE_KEY,
      JSON.stringify(payload),
    )
  } catch {
    // quota / private mode
  }
}
