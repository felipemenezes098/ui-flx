import fs from 'fs'
import path from 'path'

export function readRawFile(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), 'src', filePath)
    return fs.readFileSync(fullPath, 'utf8')
  } catch {
    return '// Code not found'
  }
}
