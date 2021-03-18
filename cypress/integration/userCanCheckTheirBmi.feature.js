// userCanCheckTheirBmi.feature.js

describe('User can check their BMI', () => {
    it('user can enter weght and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('57')
        cy.get('#height').type('167')
        cy.get('#Calculate').click()
    })
})