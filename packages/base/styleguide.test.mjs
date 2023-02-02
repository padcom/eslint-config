import { readFile } from 'fs/promises'

it('will validate styleguide', async () => {
  const content = await readFile('./styleguide.js')
  const code = content.toString()
  expect(code).toPassRules()
})
