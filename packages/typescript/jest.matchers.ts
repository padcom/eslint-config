import { ESLint } from 'eslint'

/**
 * @param {string[]} lines
 * @returns {string[]} lines without empty leading lines
 */
function removeLeadingEmptyLines(lines: string[]) {
  const result = [...lines]
  while (result[0] === '' && result.length > 0) result.shift()

  return result
}

/**
 * @param {string} line
 * @returns {number} number of leading spaces in the given line
 */
function countLeadingSpaces(line: string) {
  for (let i = 0; i < line.length; i++) if (line[i] !== ' ') return i

  return line.length
}

/**
 * Prepare code removing any leading spaces resulting from creating the code
 * inside of a multiline string
 *
 * @param {string} code code to prepare
 * @returns {string} prepared code
 */
function prepare(code: string) {
  const lines = removeLeadingEmptyLines(code.split('\n'))
  const numberOfLeadingSpaces = countLeadingSpaces(lines[0])

  return lines.map(line => line.substring(numberOfLeadingSpaces)).join('\n')
}

/**
 * @param code code to validate
 * @param config path to configuration file
 * @returns linting results
 */
function lint(code: string, config = './index.js') {
  const eslint = new ESLint({
    overrideConfigFile: config,
    overrideConfig: {
      env: {
        node: true,
      },
      rules: {
        // Configure here any test overrides to the main configuration
        'eol-last': 'off',
      },
    },
  })

  return eslint.lintText(prepare(code))
}

/**
 * @param results linting results
 * @returns ids of given rules
 */
function extractRuleIds(results: ESLint.LintResult[]) {
  return results
    .map(file => file.messages)
    .flat()
    .filter(x => x)
    .map(message => message.ruleId)
}

expect.extend({
  /**
   * @param code code to validate
   * @param message optional custom message
   */
  async toPassRules(code: string, message: string) {
    const result = await lint(code)
    const brokenRules = extractRuleIds(result)

    return {
      pass: brokenRules.length === 0,
      message: () => message
        ? message
        : `Expected to pass all rules but got ${brokenRules.length} violation(s) (${brokenRules.join(', ')})`,
    }
  },
})
