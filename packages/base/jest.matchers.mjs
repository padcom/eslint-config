import { ESLint } from 'eslint'

/**
 * @param {string[]} lines
 * @returns {string[]} lines without empty leading lines
 */
function removeLeadingEmptyLines(lines) {
  const result = [...lines]
  while (result[0] === '' && result.length > 0) result.shift()

  return result
}

/**
 * @param {string} line
 * @returns {number} number of leading spaces in the given line
 */
function countLeadingSpaces(line) {
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
function prepare(code) {
  const lines = removeLeadingEmptyLines(code.split('\n'))
  const numberOfLeadingSpaces = countLeadingSpaces(lines[0])

  return lines.map(line => line.substring(numberOfLeadingSpaces)).join('\n')
}

/**
 * @param {string} code code to validate
 * @param {string} config path to configuration file
 * @returns {Promise<ESLint.LintResult[]>} linting results
 */
function lint(code, config = './index.js') {
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
 * @param {ESLint.LintResult[]} results
 * @returns {string[]} ids of given rules
 */
function extractRuleIds(results) {
  return results
    .map(file => file.messages)
    .flat()
    .filter(x => x)
    .map(message => message.ruleId)
}

global.expect.extend({
  /**
   * @param {string} code code to validate
   * @param {string} message optional custom message
   */
  async toPassRules(code, message) {
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
