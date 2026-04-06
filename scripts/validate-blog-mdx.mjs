#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import process from 'process'

const repoRoot = process.cwd()
const publicRoot = path.join(repoRoot, 'public')
const requiredFields = ['title', 'date', 'tags', 'draft', 'summary']

function isMdxFile(filePath) {
  return filePath.toLowerCase().endsWith('.mdx')
}

function walk(targetPath) {
  const stat = fs.statSync(targetPath)
  if (stat.isFile()) {
    return isMdxFile(targetPath) ? [targetPath] : []
  }

  if (!stat.isDirectory()) return []

  const entries = fs.readdirSync(targetPath)
  const files = []
  for (const entry of entries) {
    files.push(...walk(path.join(targetPath, entry)))
  }
  return files
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/m)
  if (!match) return null
  const raw = match[1]
  const fields = new Map()
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf(':')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    const value = trimmed.slice(idx + 1).trim()
    fields.set(key, value)
  }
  return fields
}

function extractImageSources(text) {
  const sources = new Set()

  for (const match of text.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi)) {
    sources.add(match[1])
  }

  for (const match of text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    const src = match[1].split(/\s+/)[0]
    sources.add(src)
  }

  return [...sources]
}

function report(issue, filePath, details) {
  console.error(`${issue}: ${path.relative(repoRoot, filePath)}`)
  if (details) {
    for (const detail of details) {
      console.error(`  - ${detail}`)
    }
  }
}

const inputArgs = process.argv.slice(2)
const targets = inputArgs.length ? inputArgs : [path.join(repoRoot, 'data', 'blog')]
const files = targets.flatMap((target) => walk(path.resolve(repoRoot, target)))

let hasError = false
let checked = 0

for (const filePath of files) {
  checked += 1
  const text = fs.readFileSync(filePath, 'utf8')
  const frontmatter = parseFrontmatter(text)

  if (!frontmatter) {
    hasError = true
    report('Missing frontmatter', filePath)
    continue
  }

  const missing = requiredFields.filter((field) => !frontmatter.has(field))
  if (missing.length) {
    hasError = true
    report('Missing required frontmatter field(s)', filePath, missing.map((field) => field))
  }

  const dateValue = frontmatter.get('date')
  if (dateValue && !/^\s*['"]?\d{4}-\d{1,2}-\d{1,2}['"]?\s*$/.test(dateValue)) {
    console.warn(`Date format note: ${path.relative(repoRoot, filePath)} -> ${dateValue}`)
  }

  const sources = extractImageSources(text)
  const broken = []
  for (const src of sources) {
    if (/^https?:\/\//i.test(src)) continue
    if (!src.startsWith('/static/')) continue
    const abs = path.join(publicRoot, src.replace(/^\//, ''))
    if (!fs.existsSync(abs)) broken.push(src)
  }

  if (broken.length) {
    hasError = true
    report('Missing image file(s)', filePath, broken)
  }
}

if (checked === 0) {
  console.error('No MDX files found.')
  process.exit(1)
}

if (hasError) {
  process.exit(1)
}

console.log(`Validated ${checked} MDX file(s) successfully.`)
