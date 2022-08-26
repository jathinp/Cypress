export class gamespage {

	email_textbox = '#email'
	company_textbox = '#company'

	letstalk() {
		cy.get('.right-menu > .jsx-2819872128').should('have.text', "Let's talk")
		cy.get('.right-menu > .jsx-2819872128').should('have.class', 'jsx-2819872128')
		cy.get('.right-menu > .jsx-2819872128').click()
    }
	enter_fullname(name) { 
		cy.get(':nth-child(1) > .jsx-393733916').clear().type(name).should('have.value', name)
	}
	enter_email(email) {
		cy.get(this.email_textbox).type(email).should('have.value', email)
	}
	enter_company_name(company) {
		cy.get(this.company_textbox).type(company).should('have.value', company)
    }
	enter_description(description) {
		cy.get('#description').type(description).should('have.value', description)
    }
	closeletstalk() {
		cy.get('.contact-poppup > .close').click()
	}
	game_menu_link() {
		cy.get('nav.jsx-3746230925 > ul > :nth-child(3) > .jsx-2449694024').should('be.exist')
	}
	logo_visible() {
		cy.get('.logo-link > .jsx-3746230925').should('be.visible')
    }

}


