/**
 * Capture block preview screenshots into public/images/blocks/.
 *
 * Light → manifest.image.light (white page background)
 * Dark  → manifest.image.dark ({slug}-dark.png)
 *
 * Setup (once per machine, or after Playwright updates):
 *   pnpm playwright:install
 *
 * Usage:
 *   pnpm dev   (port 3002)
 *   pnpm blocks:capture-screenshots
 *   pnpm dlx tsx scripts/capture-block-screenshots.ts --slug=hero-01
 *   pnpm dlx tsx scripts/capture-block-screenshots.ts --missing-only
 */

import fs from 'node:fs'
import path from 'node:path'

import { chromium, type Browser } from 'playwright'

import { blocks, getBlockBySlug } from '../src/lib/blocks/block-catalog'

const ROOT = process.cwd()
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3002'
const slugFilter = process.argv
  .find((arg) => arg.startsWith('--slug='))
  ?.split('=')[1]
const missingOnly = process.argv.includes('--missing-only')
const DEFAULT_CAPTURE_HEIGHT = 600

function publicImagePath(urlPath: string) {
  return path.join(ROOT, 'public', urlPath.replace(/^\//, ''))
}

function imageExists(urlPath: string) {
  return fs.existsSync(publicImagePath(urlPath))
}

async function captureBlock(
  browser: Browser,
  category: string,
  slug: string,
  theme: 'light' | 'dark',
  outputPath: string,
) {
  const manifest = getBlockBySlug(slug)
  const captureViewportOnly = manifest?.meta?.captureViewportOnly ?? false
  const captureHeight = manifest?.meta?.iframeHeight ?? DEFAULT_CAPTURE_HEIGHT

  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: theme,
  })

  await context.addInitScript((mode: 'light' | 'dark') => {
    window.localStorage.setItem('theme', mode)
  }, theme)

  const page = await context.newPage()

  try {
    await page.goto(`${BASE_URL}/preview/blocks/${category}/${slug}`, {
      waitUntil: 'load',
      timeout: 120_000,
    })

    await page.waitForFunction(
      (expected: 'light' | 'dark') => {
        const isDark = document.documentElement.classList.contains('dark')
        const stored = window.localStorage.getItem('theme')
        return stored === expected && (expected === 'dark' ? isDark : !isDark)
      },
      theme,
      { timeout: 15_000 },
    )

    const captureStyles = [
      '*, *::before, *::after { animation-duration: 0s !important; animation-delay: 0s !important; transition-duration: 0s !important; }',
      '#next-logo, nextjs-portal, [data-nextjs-dev-tools-button] { display: none !important; }',
      theme === 'light'
        ? 'html, body { background-color: #ffffff !important; }'
        : '',
      captureViewportOnly
        ? `[data-block-preview] { max-height: ${captureHeight}px !important; overflow: hidden !important; }`
        : '',
    ]
      .filter(Boolean)
      .join('\n')

    await page.addStyleTag({ content: captureStyles })

    const container = page.locator('[data-block-preview]').first()
    await container.waitFor({ state: 'visible', timeout: 30_000 })
    await page.waitForTimeout(500)

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    await container.screenshot({ path: outputPath, type: 'png' })
  } finally {
    await context.close()
  }
}

async function main() {
  const browser = await chromium.launch()

  let count = 0

  for (const category of blocks) {
    for (const block of category.blocks) {
      if (slugFilter && block.slug !== slugFilter) continue

      const lightPath = publicImagePath(block.image.light)
      const darkPath = publicImagePath(block.image.dark)
      const needsLight = !missingOnly || !imageExists(block.image.light)
      const needsDark = !missingOnly || !imageExists(block.image.dark)

      if (missingOnly && !needsLight && !needsDark) {
        console.log(`[skip]  ${category.slug}/${block.slug} (images exist)`)
        continue
      }

      try {
        if (needsLight) {
          console.log(`[light] ${category.slug}/${block.slug}`)
          await captureBlock(
            browser,
            category.slug,
            block.slug,
            'light',
            lightPath,
          )
          console.log(`  saved ${block.image.light}`)
        }

        if (needsDark) {
          console.log(`[dark]  ${category.slug}/${block.slug}`)
          await captureBlock(
            browser,
            category.slug,
            block.slug,
            'dark',
            darkPath,
          )
          console.log(`  saved ${block.image.dark}`)
        }

        count++
      } catch (error) {
        console.error(`  failed ${category.slug}/${block.slug}:`, error)
      }
    }
  }

  await browser.close()
  console.log(`Done. ${count} block(s) captured.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
