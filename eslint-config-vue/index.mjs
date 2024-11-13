import javascript from '@padcom/eslint-config-javascript'
import typescript from '@padcom/eslint-config-typescript'
import { vue } from './lib/vue.mjs'

export default {
  'flat/browser': [
    ...javascript['flat/browser'],
    ...vue,
    ...typescript.typescript,
  ],
}
