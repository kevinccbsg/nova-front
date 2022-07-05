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

// This code is used to solve an issue with range inputs
// https://github.com/cypress-io/cypress/issues/1570
Cypress.Commands.add('controlledInputChange', (input: string, value: number) => {
  if (Object && Object.getOwnPropertyDescriptor && window) {
    const nativeInputValueSetter = (Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ) || {}).set;

    const changeInputValue = inputToChange => (newValue: number) => {
      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(inputToChange[0], newValue);
        // we have to ignore this as it is an external codeto fix the issue with range inputs
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputToChange[0].dispatchEvent(new Event('change', { value: newValue, bubbles: true }));
      }
    };

    cy.get(input).then(inputElem => changeInputValue(inputElem)(value));
  }
});
