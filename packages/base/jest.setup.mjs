/**
 * Defines a test case for correct code formatting
 *
 * @param {string} name name of the rule to validate
 * @param {jest.ProvidesCallback} code code to examine
 */
function correct(name, code) {
  it(`[correct] ${name}`, code)
}

correct.skip = function(name, code) {
  it.skip(`[correct] ${name}`, code)
}

/**
 * Defines a test case for incorrect code formatting
 *
 * @param {string} name name of the rule to validate
 * @param {Function} code code to examine
 */
function incorrect(name, code) {
  it(`[incorrect] ${name}`, code)
}

incorrect.skip = function(name, code) {
  it.skip(`[correct] ${name}`, code)
}

// Installation of global functions
global.correct = correct
global.incorrect = incorrect
