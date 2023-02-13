/**
 * You can, but you don't have to create a file-level JSDoc.
 * Sometimes it is useful to explain related things, for example
 * we can use this section to present some non-visual defaults:
 *
 * Defaults:
 * - line width: 130 characters
 * - indentation: 2 spaces
 * - file needs to end with an empty line
 * - max callback depth: 2
 * - max cyclomatic code complexity: 4
 * - max lines per function: 32
 * - max consecutive empty lines: 1
 */

// Imports need to go on top, sorted and cleaned up.
import { ESLint } from 'eslint'

// This is here to show how to define top level functions.
// Use the "function" keyword instead of lambdas.
// It signifies that it is a top-level function,
// possibly a utility of some kind. It just reads better
// and we call them functions. Let them be functions, please.
function topLevelFunction() {
  console.log('Hello, world!')
}

// Everything that is declared should be used.
// If for whatever reason the new change made something else
// not being used then remove it.
topLevelFunction()

/**
 * Lint the code.
 * This function is so long to show you what the longest function looks like.
 *
 * @param {string} code code to lint
 * @returns {Promise<ESLint.LintResult[]>} linting results
 */
async function lint(code) {
  // Single-line objects can grow up to 130th column.
  // Then the linter will say enough is enough and error out
  const baseOptions = { cache: false }

  // If you have more fields to fill switch to multi-line
  const eslint = new ESLint({
    ...baseOptions,
    // Brackets of empty arrays close to each other to signify it is empty
    rulePaths: [],
    // Indexation always close to the value. It signifies it is exactly that and nothing else
    [Symbol('new')]: 'abc',
    // Use short-hand notation whenever possible. It just rocks!
    callMe() {
      // Use single quotes or backticks, but if you need to escape...
      console.log('Ding ding!', "Don't cry for me Argentina")
    },
  })

  // For the love of god please do prefer async/await!
  const result = await eslint.lintText(code)

  // You don't need an empty lines between declarations, but if you want to signify something,
  // like use async/await above ^^^, then by all means - do an empty line, show what's important
  const a = 1
  const b = 2
  const c = 3
  console.log(a, b, c)

  // There should be an empty line before "return" statement to see easier what's returned.
  return result
}

const results = await lint('const x = 1')
console.log(results)

// Of course if "return" is the single thing in your function an empty line would make no sense.
function identity(x) {
  return x
  // There should be no empty lines after the return
}

console.log('identity(5)', identity(5))

/**
 * That's how 'for' loops are done.
 *
 * This is how the most complex function looks like
 */
function forLoops() {
  console.log('for loops')

  // There should be an empty line before a for loop to see better where that thing starts.
  for (let i = 0; i < 5; i++) console.log(i)

  // A for loop may be single-line or dual-line if just one statement is executed as part of it.
  for (let i = 0; i < 5; i++) {
    console.log('5')
  }

  // If you have some declarations that pertain to the loop you can glue them to the top,
  // but you don't have to. Do whatever makes sense at any given spot.
  // Use curly braces when you need them, not because they are available.
  const msg = '6'
  for (let i = 0; i < 5; i++) {
    console.log(i)
    console.log(msg)
  }
}

forLoops()

/**
 * That's how 'while' loops are done.
 *
 * This is how the most complex function looks like
 */
function whileLoops() {
  console.log('while loops')

  // There should be an empty line before a while loop to see better where that thing starts.
  while (Math.random() > 0.5) console.log('while loop')

  // A while loop may be single-line or dual-line if just one statement is executed as part of it.
  while (Math.random() > 0.5) {
    console.log('while loop')
  }

  // If you have some declarations that pertain to the loop you can glue them to the top,
  // but you don't have to. Do whatever makes sense at any given spot.
  // Use curly braces when you need them, not because they are available. Do whatever makes sense.
  let i = 0
  while (Math.random() > 0.5) {
    // But you'll have to explain yourself at least with a comment.
    console.log('while loop', i++)
  }
}

whileLoops()

/**
 * This class is here to show you how a properly constructed class looks like
 */
class Person {
  // Fields go first, at the top.

  // Use private fields if you don't want to wear your jewels out
  // Don't leave out unused things. You made a mess => you clean it up.
  // Define fields at the top. It's easier to read if you know what to expect to see.
  #age

  // Public fields and private fields don't have to be separated - unless you want to signify
  // something about that field and maybe even put in a comment? Like I was doing it above
  // explaining that you really should use async/await whenever possible.
  firstName
  lastName

  // Constructor comes right after fields
  // Please, do separate fields from constructor
  constructor(age, firstName, lastName) {
    // Pass everything you need for the class to work via parameters.
    // I mean it! No `this.service = new SomeCoolService()` here.
    // If you have hard dependencies for this class you pass them to constructor.
    // This way you can't create an instance of that class without passing
    // those arguments.
    // If you have dependencies that are optional then make them just as fields
    // and leave them initialized there if sensible defaults can be provided.
    // And yes, that includes dependencies such as services, but please be smart about it.
    // That creates a very hard dependency between classes and we don't want that.
    this.#age = age
    this.firstName = firstName
    this.lastName = lastName
  }

  // It is preferable that the getter and setters are next in line, before methods

  // People usually do mind talking about their age, especially in their 30' and 40'. IDK why...
  // But we can use it to illustrate ternary operators :)
  get age() {
    // Use multiline with question mark on top of colon
    return this.#age > 40
      ? this.#age - 10
      // Use single line if it helps understand what you did here
      : this.#age > 30 ? this.#age - 5 : this.#age
  }

  // If a property is readable and writeable then the getter comes first, then the setter.
  // Always in that order

  /**
   * Do document return values, please
   *
   * @returns {string}
   */
  get name() {
    return `${this.firstName || ''} ${this.lastName || ''}`.trim()
  }

  /**
   * Please do document parameters!
   *
   * @param {string} value and do tell everyone what those parameters mean
   */
  set name(value) {
    // When throwing use instances of Error. And the force will be with you, always.
    throw new Error(`You can't change your name to ${value}!`)
  }

  // If you want someone to call you show them, be public
  run() {
    this.#takeANap()
    throw new Error('Too old for that')
  }

  // Then the methods

  // If you don'w want someone to disturb you while you're working hard
  // don't give them the means to do it.
  #takeANap() {
    console.log('grrr...')
  }

  // That's how you get wiser :) You have a lot of those.
  happyBirthday() {
    // Use shorthand notation for things like incrementation
    this.#age++
  }
}

// Always, when you create an object, do something with it.
// Print it, call it, get something from it. It's a waste
// of resources to create things and then to abandon them.
// Makes the garbage collector work harder. Give him a break.
console.log(new Person())

/**
 * This is here to show you how do deal with arrow functions/lambdas
 */
async function arrowsCallbacks() {
  console.log('arrows - callbacks')

  // Always use space around arrow. Always.
  // Always cleanup any unnecessary spaces. Always.
  await Promise.resolve(1).then(x => x)

  // You can use single-line callbacks. Just mind the return value with voids!
  await Promise.resolve(1).then(x => { console.log(x) })
  // If you don't need parents around argument list then don't use them.
  await Promise.resolve(1).then(x => x)
  // But if you do please do :)
  await Promise.resolve([1, 2]).then(([x, y]) => x + y)

  // You can use multi-line callbacks. Just remember that if you don't consume
  // the result in any way then don't return it, even by-default.
  // But if you do want a callback to span multiple lines either use something
  // that will start in the first line or use curly braces.
  await Promise.resolve(1).then(x => {
    console.log(x)
  })

  await Promise.resolve({ times: x => ({ shift: y => x * y }) }).then(x => x
    .times(2)
    // If you do that you will need to put the closing parent in the same line
    .shift(1))
}

arrowsCallbacks()

/**
 * This is here to show constant lambda expressions
 */
function arrowConstants() {
  console.log('arrows - constants')

  const f1 = () => 'a'
  f1()
}

arrowConstants()

/**
 * This is here to show you conditions (if-statements)
 * The "complexity" rule is disabled here because what follows is a string of if-statements
 */
// eslint-disable-next-line complexity
function conditions() {
  console.log('Conditions')

  const a = Math.random(), b = Math.random()
  const isTrue = a !== b

  // You can, if you want, write english-sounding sentences in JavaScript
  // Those are usually read better and are easier to understand
  if (isTrue) console.log('condition is true')

  // You can even include the "else" part and it still kinda reads like English
  if (isTrue) console.log('condition is true'); else console.log('a !== b')

  // If that helps understand the code better you can put the "else" in the next line too
  if (isTrue) console.log('condition is true')
  else console.log('a !== b')

  // If that helps express whatever the statement should read
  // you can put everything in separate lines
  if (isTrue) {
    console.log('condition is true')
  } else {
    console.log('a !== b')
  }
}

conditions()

function conditions2() {
  console.log('Conditions - part 2')

  let a = 1
  let b = 2

  if (a > b) return

  a = 2
  b = 1

  if (b > a) return
  if (a !== b) return

  console.log(a, b)
}

conditions2()
