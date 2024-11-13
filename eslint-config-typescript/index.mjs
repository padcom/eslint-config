import javascript from '@padcom/eslint-config-javascript'
import ts from 'typescript-eslint'
import { typescript } from './lib/typescript.mjs'

export default {
  typescript,
  'flat/browser': [
    ...javascript['flat/browser'],
    ...ts.configs.recommended,
    ...typescript,
  ],
  'flat/node': [
    ...javascript['flat/node'],
    ...ts.configs.recommended,
    ...typescript,
  ],
}
