import { globals } from './lib/globals.mjs'
import { javascript } from './lib/javascript.mjs'
import { jsdocs } from './lib/jsdocs.mjs'
import { promises } from './lib/promises.mjs'
import { tests } from './lib/tests.mjs'

export default {
  globals,
  javascript,
  jsdocs,
  promises,
  tests,
  'flat/browser': [
    ...javascript,
    ...tests,
    ...promises,
    ...jsdocs,
    ...globals['globals/browser'],
  ],
  'flat/node': [
    ...javascript,
    ...tests,
    ...promises,
    ...jsdocs,
    ...globals['globals/node'],
  ],
}
