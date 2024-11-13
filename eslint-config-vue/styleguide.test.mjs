import { ESLint } from 'eslint'
import { it, expect } from 'vitest'

it('will validate styleguide', async () => {
  const eslint = new ESLint()
  const actual = await eslint.lintFiles(['./Styleguide.vue'])

  expect(actual.length).toBe(1)
  expect(actual.at(0).errorCount, JSON.stringify(actual.at(0).messages, null, 2)).toBe(0)
  expect(actual.at(0).warningCount, JSON.stringify(actual.at(0).messages, null, 2)).toBe(0)
})
