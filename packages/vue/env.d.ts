declare namespace jest {
  interface Matchers {
    async toPassRules(message: string = ''): CustomMatcherResult
  }
}
