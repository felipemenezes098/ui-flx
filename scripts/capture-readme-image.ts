import path from 'node:path'

import { chromium } from 'playwright'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3002'
const block =
  process.argv.find((arg) => arg.startsWith('--block='))?.split('=')[1] ??
  'hero/hero-01'
const OUT_DIR = path.join(process.cwd(), 'public/images/docs')
const WIDTH = 1600
const HEIGHT = 772
const THEMES = ['light', 'dark'] as const

const styles = `
  :root {
    --bg: #ffffff; --panel: #f4f4f5; --frame-border: rgba(0,0,0,.08); --bar: #fafafa;
    --dot: #d4d4d8; --pill: #f0f0f1; --pill-text: #71717a; --text: #18181b; --muted: #71717a;
    --phone: #18181b; --shadow: 0 1px 2px rgba(0,0,0,.04), 0 12px 32px -8px rgba(0,0,0,.12);
  }
  html.dark {
    --bg: #09090b; --panel: #141416; --frame-border: rgba(255,255,255,.1); --bar: #18181b;
    --dot: #3f3f46; --pill: #232326; --pill-text: #a1a1aa; --text: #fafafa; --muted: #a1a1aa;
    --phone: #2a2a2e; --shadow: 0 1px 2px rgba(0,0,0,.4), 0 12px 32px -8px rgba(0,0,0,.6);
  }
  * { box-sizing: border-box; margin: 0; }
  body { width: 1600px; height: 772px; background: var(--bg); font-family: -apple-system, "SF Pro Text", Inter, system-ui, sans-serif; padding: 28px; }
  .row { display: flex; gap: 16px; height: 100%; }
  .col { display: flex; flex-direction: column; gap: 14px; }
  .col.wide { flex: 1.62; } .col.narrow { flex: 1; }
  .panel { flex: 1; background: var(--panel); border-radius: 24px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .caption { font-size: 14px; color: var(--muted); padding-left: 4px; }
  .caption b { color: var(--text); font-weight: 600; }
  .browser { width: 840px; border-radius: 14px; overflow: hidden; border: 1px solid var(--frame-border); box-shadow: var(--shadow); background: var(--bg); }
  .bar { height: 36px; background: var(--bar); border-bottom: 1px solid var(--frame-border); display: flex; align-items: center; padding: 0 14px; position: relative; }
  .dots { display: flex; gap: 7px; } .dots i { width: 10px; height: 10px; border-radius: 50%; background: var(--dot); display: block; }
  .url { position: absolute; left: 50%; transform: translateX(-50%); background: var(--pill); color: var(--pill-text); font-size: 12px; padding: 4px 40px; border-radius: 6px; }
  .viewport { position: relative; overflow: hidden; }
  .viewport iframe { position: absolute; top: 0; left: 0; border: 0; transform-origin: 0 0; background: var(--bg); }
  .desktop { width: 840px; height: 472px; }
  .desktop iframe { width: 1280px; height: 720px; transform: scale(0.65625); }
  .phone { width: 252px; height: 520px; border-radius: 46px; background: var(--phone); padding: 9px; box-shadow: var(--shadow); position: relative; }
  .screen { width: 234px; height: 502px; border-radius: 38px; overflow: hidden; position: relative; background: var(--bg); }
  .screen iframe { width: 390px; height: 837px; transform: scale(0.6); }
  .island { position: absolute; top: 18px; left: 50%; transform: translateX(-50%); width: 74px; height: 22px; border-radius: 12px; background: #000; z-index: 2; }
`

function buildHtml(src: string) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>${styles}</style>
</head>
<body>
  <div class="row">
    <div class="col wide">
      <div class="panel">
        <div class="browser">
          <div class="bar"><div class="dots"><i></i><i></i><i></i></div><div class="url">ui.flexnative.com</div></div>
          <div class="viewport desktop"><iframe src="${src}"></iframe></div>
        </div>
      </div>
      <p class="caption"><b>Blocks</b> · Landing page sections for shadcn/ui</p>
    </div>
    <div class="col narrow">
      <div class="panel">
        <div class="phone"><div class="island"></div><div class="screen viewport"><iframe src="${src}"></iframe></div></div>
      </div>
      <p class="caption"><b>Mobile</b> · Responsive by default</p>
    </div>
  </div>
</body>
</html>`
}

async function main() {
  const src = `${BASE_URL}/preview/blocks/${block}`
  const browser = await chromium.launch()

  for (const theme of THEMES) {
    const context = await browser.newContext({
      viewport: { width: WIDTH, height: HEIGHT },
      deviceScaleFactor: 2,
      colorScheme: theme,
    })
    await context.addInitScript((mode: string) => {
      try {
        window.localStorage.setItem('theme', mode)
      } catch {}
    }, theme)

    const page = await context.newPage()
    await page.setContent(buildHtml(src), { waitUntil: 'load' })
    if (theme === 'dark') {
      await page.evaluate(() => document.documentElement.classList.add('dark'))
    }

    const frames = page
      .frames()
      .filter((frame) => frame.url().includes('/preview/'))
    for (const frame of frames) {
      await frame.waitForLoadState('load')
      await frame.addStyleTag({
        content:
          '#next-logo, nextjs-portal, [data-nextjs-dev-tools-button] { display: none !important; }',
      })
    }
    await page.waitForTimeout(3000)

    const file = path.join(OUT_DIR, `readme-${theme}.png`)
    await page.screenshot({
      path: file,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
    })
    console.log(`Saved ${path.relative(process.cwd(), file)}`)
    await context.close()
  }

  await browser.close()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
