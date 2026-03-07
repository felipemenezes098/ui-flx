import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filePath = searchParams.get('path')

  if (!filePath) {
    return NextResponse.json({ error: 'Path is required' }, { status: 400 })
  }

  try {
    const srcPath = path.join(process.cwd(), 'src')
    const fullPath = path.join(process.cwd(), filePath)

    if (!fullPath.startsWith(srcPath)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
    }

    const code = fs.readFileSync(fullPath, 'utf-8')
    return NextResponse.json({ code, path: filePath })
  } catch (error) {
    console.error('Error reading file:', error)
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 })
  }
}
