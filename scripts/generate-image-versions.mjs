import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images', 'blocks')
const OUTPUT_PATH = path.join(ROOT, 'src', 'lib', 'blocks', 'image-versions.json')

function listFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return listFiles(fullPath)
    return [fullPath]
  })
}

function hashFile(filePath) {
  return crypto
    .createHash('sha1')
    .update(fs.readFileSync(filePath))
    .digest('hex')
    .slice(0, 8)
}

const versions = Object.fromEntries(
  listFiles(IMAGES_DIR)
    .filter((filePath) => filePath.endsWith('.webp'))
    .map((filePath) => [
      `/${path.relative(PUBLIC_DIR, filePath).split(path.sep).join('/')}`,
      hashFile(filePath),
    ])
    .sort(([a], [b]) => a.localeCompare(b)),
)

fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(versions, null, 2)}\n`)
console.log(`Wrote ${Object.keys(versions).length} image versions.`)
