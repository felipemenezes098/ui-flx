async function writeText(text: string | Promise<string>) {
  if (typeof text === 'string') {
    await navigator.clipboard.writeText(text)
    return
  }

  if (typeof ClipboardItem !== 'undefined') {
    const blob = text.then((value) => new Blob([value], { type: 'text/plain' }))
    await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })])
    return
  }

  await navigator.clipboard.writeText(await text)
}

export async function copyToClipboard(
  text: string | Promise<string>,
): Promise<{ success: boolean; error?: string }> {
  try {
    await writeText(text)
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to copy to clipboard' }
  }
}
