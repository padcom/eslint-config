import { readFile } from 'fs/promises'

it('will validate styleguide', async () => {
  const content = await readFile('./styleguide.ts')
  const code = content.toString()

  expect(code).toPassRules()
})
