/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      controlledInputChange(input: string, value: number): Chainable<void>
    }
  }
}

export {};
