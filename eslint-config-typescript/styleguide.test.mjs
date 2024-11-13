import { it, expect } from 'vitest'
import { ESLint } from 'eslint'

it('will validate styleguide', async () => {
  const eslint = new ESLint()
  const actual = await eslint.lintFiles(['./styleguide.ts'])

  expect(actual.length).toBe(1)
  expect(actual.at(0).errorCount, JSON.stringify(actual.at(0).messages, null, 2)).toBe(0)
  expect(actual.at(0).warningCount, JSON.stringify(actual.at(0).messages, null, 2)).toBe(0)
})
