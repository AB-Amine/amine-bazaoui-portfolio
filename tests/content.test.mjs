import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'

const source = readFileSync('src/data/portfolio.ts', 'utf8')

test('portfolio identity contains a professional contact and verified profiles', () => {
  assert.match(source, /name: 'Amine Bazaoui'/)
  assert.match(source, /email: '[^\s@]+@[^\s@]+\.[^\s@]+'/)
  assert.match(source, /github: 'https:\/\/github\.com\/AB-Amine'/)
  assert.match(source, /linkedin: 'https:\/\/linkedin\.com\/in\/amine-bazaoui'/)
})

test('featured projects have unique case-study slugs and no placeholder links', () => {
  const projects = [...source.matchAll(/slug: '([^']+)', title: '([^']+)'/g)]
  assert.equal(projects.length, 5)
  assert.equal(new Set(projects.map(([, slug]) => slug)).size, projects.length)
  assert.deepEqual(projects.map(([, , title]) => title), ['Khadija AI', 'Real-Time Analytics Platform', 'MediGest', 'Zakat Tracker', 'Atlas Ascenseurs'])
  assert.doesNotMatch(source, /href=["']#["']|TODO|placeholder/i)
  const githubLinks = [...source.matchAll(/github: '(https:[^']+)'/g)]
  assert.ok(githubLinks.length >= 2)
  for (const [, link] of githubLinks) assert.equal(new URL(link).hostname, 'github.com')
})

test('a private CV is not published in the production output', () => {
  assert.match(source, /resume: null as string \| null/)
  assert.equal(existsSync('dist/cv.pdf'), false)
  assert.equal(existsSync('dist/CV_Amine_Bazaoui (1).pdf'), false)
})
