import type { PresetId } from '@/lib/presets-config'
import { isPresetId, presets } from '@/lib/presets-config'

export const PRESET_STORAGE_KEY = 'presets:config'

export const FALLBACK_PRESET: PresetId = 'flint'

export type PresetNamespace = 'blocks' | 'patterns'

export type PresetStoredConfig = {
  blocks?: { id: PresetId; name: string }
  patterns?: { id: PresetId; name: string }
}

function presetNameFor(id: PresetId): string {
  return presets.find((p) => p.id === id)?.name ?? id
}

function safeRead(): Record<string, unknown> {
  if (typeof globalThis.window === 'undefined') return {}
  try {
    const raw = globalThis.window.localStorage.getItem(PRESET_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    return parsed as Record<string, unknown>
  } catch {
    return {}
  }
}

export function readPresetFromStorage(namespace: PresetNamespace): PresetId | null {
  if (typeof globalThis.window === 'undefined') return null
  const stored = safeRead()

  // New namespaced format
  const ns = stored[namespace]
  if (ns && typeof ns === 'object') {
    const id = (ns as { id?: unknown }).id
    if (typeof id === 'string' && isPresetId(id)) return id
  }

  // Legacy flat format — migrate to blocks namespace only
  if (namespace === 'blocks') {
    const id = (stored as { id?: unknown }).id
    if (typeof id === 'string' && isPresetId(id)) return id
  }

  return null
}

export function writePresetToStorage(namespace: PresetNamespace, id: PresetId): void {
  if (typeof globalThis.window === 'undefined') return
  try {
    const current = safeRead()
    // Strip legacy flat fields if present
    delete current.id
    delete current.name
    current[namespace] = { id, name: presetNameFor(id) }
    globalThis.window.localStorage.setItem(
      PRESET_STORAGE_KEY,
      JSON.stringify(current),
    )
  } catch {
    // quota / private mode
  }
}
