export async function copyToClipboard(
  text: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    await navigator.clipboard.writeText(text)
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to copy to clipboard' }
  }
}
