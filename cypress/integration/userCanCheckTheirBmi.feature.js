// userCanCheckTheirBmi.feature.js

describe('User can check their BMI', () => {
    it('user can enter weght and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('57')
        cy.get('#height').type('167')
        cy.get('#Calculate').click()
    })
    it('displays a BMI value of 20.4', () => {
        cy.get('#results').should('contain', '20.4')        
    })
    it('displays a message that you are Healthy', () => {
        cy.get('#results').should('contain', 'Healthy')        
    })
})