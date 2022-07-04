/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// This code is used to solve an issue with range inputs
// https://github.com/cypress-io/cypress/issues/1570
Cypress.Commands.add('controlledInputChange', (input: string, value: number) => {
  if (Object && Object.getOwnPropertyDescriptor && window) {
    const nativeInputValueSetter = (Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ) || {}).set;
    
    const changeInputValue = inputToChange => (newValue: number) => {
      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(inputToChange[0], newValue);
        // @ts-ignore - we have to ignore this as it is an external code to fix the issue with range inputs
        inputToChange[0].dispatchEvent(new Event('change', { value: newValue, bubbles: true }));
      }
    };
  
    cy.get(input).then(input => changeInputValue(input)(value));
  }
})
